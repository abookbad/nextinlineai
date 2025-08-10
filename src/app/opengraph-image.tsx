import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          fontSize: 64,
          color: "#222",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            padding: 48,
            background: "rgba(255,255,255,0.8)",
            boxShadow: "0 10px 30px rgba(0,0,0,.06)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontWeight: 800 }}>Next In Line AI</div>
          <div style={{ fontSize: 28, color: "#444" }}>Never Miss Another Booking</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


