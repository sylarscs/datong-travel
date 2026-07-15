import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, source = "website" } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Log subscription (replace with Resend or database in production)
    console.log(`[SUBSCRIBE] ${email} — source: ${source}`);

    // In production, you'd:
    // 1. Store email in database (Vercel KV, Supabase, etc.)
    // 2. Send welcome email via Resend with PDF attachment/links
    // 3. Add to mailing list

    return NextResponse.json({
      success: true,
      message: "Check your inbox for the checklist!",
    });
  } catch (error) {
    console.error("[SUBSCRIBE ERROR]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
