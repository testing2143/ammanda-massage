import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(255,252,247,1) 0%, rgba(245,240,232,1) 44%, rgba(224,240,224,1) 100%)",
          position: "relative",
          color: "#2d2d2d",
          padding: "68px"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 16%, rgba(143,188,143,0.28), transparent 24%), radial-gradient(circle at 88% 18%, rgba(201,169,110,0.22), transparent 22%), radial-gradient(circle at 74% 82%, rgba(106,84,66,0.1), transparent 18%)"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "42px",
            padding: "52px",
            border: "1px solid rgba(255,255,255,0.75)",
            background: "rgba(255,255,255,0.62)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 28, textTransform: "uppercase", letterSpacing: "0.28em", color: "#6A5442" }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: "#8FBC8F" }} />
            Amanda Massage
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "760px" }}>
            <div style={{ fontSize: 82, lineHeight: 1.02, fontWeight: 700 }}>
              Rust, warmte en ontspanning in Zoetermeer
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.45, color: "rgba(45,45,45,0.76)" }}>
              Klassieke massage, hot stone massage en zwangerschapsmassage.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
