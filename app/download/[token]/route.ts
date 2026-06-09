import { NextRequest, NextResponse } from "next/server";
import { issueSignedFileUrl, markDownloadConsumed, validateDownloadToken } from "@/lib/downloads";

export async function GET(request: NextRequest, { params }: { params: { token: string } }) {
  try {
    const result = await validateDownloadToken(params.token);

    if (!result.ok) {
      return new NextResponse(
        `Download unavailable: ${result.reason}. Please contact ${process.env.SUPPORT_EMAIL || "support@example.com"}.`,
        { status: 400 }
      );
    }

    const signedUrl = await issueSignedFileUrl(result.orderId);
    await markDownloadConsumed(
      result.linkId,
      request.headers.get("x-forwarded-for"),
      request.headers.get("user-agent")
    );

    return NextResponse.redirect(signedUrl);
  } catch (error) {
    return new NextResponse(error instanceof Error ? error.message : "Download failed.", { status: 500 });
  }
}
