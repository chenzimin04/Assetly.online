import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }

  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendDownloadEmail(input: {
  to: string;
  productName: string;
  downloadUrl: string;
  expiresAt: string;
}) {
  const resend = getResend();
  const from = process.env.FROM_EMAIL || "Assetly <Chenmingliang34@gmail.com>";
  const supportEmail = process.env.SUPPORT_EMAIL || "Chenmingliang34@gmail.com";

  return resend.emails.send({
    from,
    to: input.to,
    subject: `Your access to ${input.productName}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111111">
        <h1 style="font-size:24px;margin-bottom:12px">Your files are ready</h1>
        <p>Thanks for your purchase. Your secure access link is below.</p>
        <p><a href="${input.downloadUrl}" style="display:inline-block;background:#111111;color:#ffffff;padding:12px 18px;border-radius:6px;text-decoration:none;font-weight:600">Download your files</a></p>
        <p>This link expires on <strong>${new Date(input.expiresAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}</strong> and has limited download attempts.</p>
        <p>If you have any trouble accessing your purchase, contact <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>
      </div>
    `
  });
}
