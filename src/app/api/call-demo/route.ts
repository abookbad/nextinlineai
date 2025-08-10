import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { phone } = (await req.json()) as { phone?: string };
    if (!phone || typeof phone !== "string") {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    // Simple permissive validation: allows +, digits, spaces, dashes, parentheses
    const cleaned = phone.trim();
    const valid = /^[+\d][\d\s\-()]{6,}$/.test(cleaned);
    if (!valid) {
      return NextResponse.json({ error: "Enter a valid phone number" }, { status: 400 });
    }

    // Simulate call initiation (no external integrations by design)
    await new Promise((r) => setTimeout(r, 500));

    return NextResponse.json({ ok: true, message: "Demo call initiated (simulated)." });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


