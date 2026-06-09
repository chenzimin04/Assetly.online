import { NextRequest, NextResponse } from "next/server";
import { sendDownloadEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const adminToken = request.headers.get("x-admin-token");
    if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json();
    await sendDownloadEmail(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Email send failed." },
      { status: 500 }
    );
  }
}
