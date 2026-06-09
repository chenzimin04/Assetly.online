import { NextRequest, NextResponse } from "next/server";
import { validateDownloadToken } from "@/lib/downloads";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }

  try {
    const result = await validateDownloadToken(token);
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Validation failed." },
      { status: 500 }
    );
  }
}
