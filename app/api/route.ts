import { sendMail } from "./send-email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  await sendMail(data);
  return NextResponse.json({});
}