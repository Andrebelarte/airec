import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Elexio – AI-receptionist för svenska företag";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: "72px",
          border: "16px solid #ffffff",
        }}
      >
        <div style={{ fontSize: 40, letterSpacing: "0.3em", color: "#9ca3af" }}>
          ELEXIO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            <div>AI-receptionist för</div>
            <div>svenska företag</div>
          </div>
          <div style={{ fontSize: 40, color: "#9ca3af" }}>
            Svarar i telefon dygnet runt. Bokar möten. Missar aldrig ett samtal.
          </div>
        </div>
        <div style={{ fontSize: 36, color: "#9ca3af" }}>elexio.se</div>
      </div>
    ),
    { ...size },
  );
}
