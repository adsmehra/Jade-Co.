import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Inquiry = {
  name: string;
  email: string;
  phone: string;
};

function validateInquiry(value: unknown): Inquiry | null {
  if (!value || typeof value !== "object") return null;

  const data = value as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[+()0-9 .-]{7,25}$/;

  if (name.length < 2 || name.length > 100) return null;
  if (email.length > 254 || !emailPattern.test(email)) return null;
  if (!phonePattern.test(phone)) return null;

  return { name, email, phone };
}

export async function POST(request: NextRequest) {
  const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!endpoint) {
    return NextResponse.json(
      { success: false, error: "Inquiry storage is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Please submit valid form details." },
      { status: 400 }
    );
  }

  const inquiry = validateInquiry(body);
  if (!inquiry) {
    return NextResponse.json(
      { success: false, error: "Please check your name, email, and phone number." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiry),
      cache: "no-store",
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "We couldn't save your inquiry. Please try again shortly." },
        { status: 502 }
      );
    }

    const result: unknown = await response.json().catch(() => null);
    if (!result || typeof result !== "object" || (result as { success?: boolean }).success !== true) {
      return NextResponse.json(
        { success: false, error: "We couldn't confirm the save. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "The inquiry service is temporarily unavailable. Please try again." },
      { status: 502 }
    );
  }
}
