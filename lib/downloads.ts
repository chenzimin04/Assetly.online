import crypto from "crypto";
import { absoluteUrl } from "@/lib/utils";
import { getSupabaseAdmin } from "@/lib/supabase";

const DEFAULT_EXPIRY_HOURS = 72;
const DEFAULT_MAX_DOWNLOADS = 3;

export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export function generateRawToken() {
  return crypto.randomBytes(32).toString("hex");
}

export async function createDownloadLink(orderId: string) {
  const supabase = getSupabaseAdmin();
  const token = generateRawToken();
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + DEFAULT_EXPIRY_HOURS * 60 * 60 * 1000).toISOString();

  const { error } = await supabase.from("download_links").insert({
    order_id: orderId,
    token_hash: tokenHash,
    expires_at: expiresAt,
    max_downloads: DEFAULT_MAX_DOWNLOADS
  });

  if (error) {
    throw new Error(`Failed to create download link: ${error.message}`);
  }

  return {
    token,
    url: absoluteUrl(`/download/${token}`),
    expiresAt
  };
}

export async function validateDownloadToken(token: string) {
  const supabase = getSupabaseAdmin();
  const tokenHash = hashToken(token);

  const { data, error } = await supabase
    .from("download_links")
    .select("id, order_id, expires_at, max_downloads, download_count, is_revoked")
    .eq("token_hash", tokenHash)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to validate token: ${error.message}`);
  }

  if (!data) {
    return { ok: false, reason: "invalid" as const };
  }

  if (data.is_revoked) {
    return { ok: false, reason: "revoked" as const };
  }

  if (new Date(data.expires_at).getTime() < Date.now()) {
    return { ok: false, reason: "expired" as const };
  }

  if (data.download_count >= data.max_downloads) {
    return { ok: false, reason: "limit_reached" as const };
  }

  return {
    ok: true as const,
    linkId: data.id,
    orderId: data.order_id
  };
}

export async function issueSignedFileUrl(orderId: string) {
  const supabase = getSupabaseAdmin();

  const { data: orderJoin, error: joinError } = await supabase
    .from("orders")
    .select("products!inner(file_bundle_path)")
    .eq("id", orderId)
    .maybeSingle();

  if (joinError || !orderJoin?.products) {
    throw new Error("Could not resolve product bundle path.");
  }

  const product = Array.isArray(orderJoin.products) ? orderJoin.products[0] : orderJoin.products;
  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "digital-products";
  const { data: signed, error: signedError } = await supabase.storage
    .from(bucket)
    .createSignedUrl(product.file_bundle_path, 120);

  if (signedError || !signed?.signedUrl) {
    throw new Error(`Failed to create signed URL: ${signedError?.message || "unknown error"}`);
  }

  return signed.signedUrl;
}

export async function markDownloadConsumed(linkId: string, ipAddress?: string | null, userAgent?: string | null) {
  const supabase = getSupabaseAdmin();

  const { error: updateError } = await supabase.rpc("increment_download_count", {
    link_id: linkId
  });

  if (updateError) {
    const { data: existing, error: existingError } = await supabase
      .from("download_links")
      .select("download_count")
      .eq("id", linkId)
      .single();

    if (existingError) {
      throw new Error(`Failed to read download count: ${existingError.message}`);
    }

    const { error } = await supabase
      .from("download_links")
      .update({
        download_count: (existing?.download_count || 0) + 1,
        last_downloaded_at: new Date().toISOString()
      })
      .eq("id", linkId);

    if (error) {
      throw new Error(`Failed to update download count: ${error.message}`);
    }
  }

  await supabase.from("download_events").insert({
    download_link_id: linkId,
    ip_address: ipAddress || null,
    user_agent: userAgent || null
  });
}
