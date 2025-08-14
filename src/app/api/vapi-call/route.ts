import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const VAPI_CONFIG = {
  VAPI_PHONE_NUMBER_ID: "8f8082ed-1755-4963-b6c9-4d31c8f185a1",
  BEARER_TOKEN: "6ab31e16-4903-4d00-946e-f013c731be2b",
  API_URL: "https://api.vapi.ai/call",
} as const;

const validWorkflowIds = new Set([
  "4ae56811-4307-464b-87a8-77826799ce67", // customerService
  "e9c705ec-dc69-400d-bba0-a5e336960d4c", // leadQualification
  "d16d5f14-2edd-4cff-afd8-72193da970f3", // appointmentBooking
]);

function isE164(usNumber: string): boolean {
  return /^\+1\d{10}$/.test(usNumber);
}

export async function POST(request: NextRequest) {
  try {
    const { workflowId, phoneNumber } = (await request.json()) as {
      workflowId?: string;
      phoneNumber?: string;
    };

    if (!workflowId || !phoneNumber) {
      return NextResponse.json(
        { error: "Missing required fields: workflowId and phoneNumber" },
        { status: 400 }
      );
    }

    if (!validWorkflowIds.has(workflowId)) {
      return NextResponse.json({ error: "Invalid workflowId" }, { status: 400 });
    }

    if (!isE164(phoneNumber)) {
      return NextResponse.json(
        { error: "Invalid phone number format. Must be +1XXXXXXXXXX" },
        { status: 400 }
      );
    }

    if (!VAPI_CONFIG.BEARER_TOKEN) {
      return NextResponse.json(
        { error: "Server misconfiguration: VAPI_API_KEY is not set" },
        { status: 500 }
      );
    }

    const payload = {
      workflowId,
      customer: { number: phoneNumber },
      phoneNumberId: VAPI_CONFIG.VAPI_PHONE_NUMBER_ID,
    };

    const response = await fetch(VAPI_CONFIG.API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${VAPI_CONFIG.BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to initiate call. Please try again." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, callId: responseData.id, message: "Call initiated successfully" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


