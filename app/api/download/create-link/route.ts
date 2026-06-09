import { NextRequest, NextResponse } from "next/server";
import { createDownloadLink } from "@/lib/downloads";

export async function POST(request: NextRequest) {
  try {
    const adminToken = request.headers.get("x-admin-token");
    if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const { orderId } = (await request.json()) as { orderId?: string };

    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId." }, { status: 400 });
    }

    const link = await createDownloadLink(orderId);
    return NextResponse.json(link);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not create link." },
      { status: 500 }
    );
  }
}
