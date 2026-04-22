import { ImageResponse } from "next/og";
import { PORTFOLIO } from "@/lib/portfolio-data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #050505 0%, #161326 58%, #2d235e 100%)",
          color: "white",
          padding: "48px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 20%, rgba(124,110,224,0.28), transparent 28%), radial-gradient(circle at 85% 80%, rgba(168,158,240,0.18), transparent 30%)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "74%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: "rgba(124,110,224,0.16)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700 }}>
                  ST
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 18, opacity: 0.7, textTransform: "uppercase", letterSpacing: 3 }}>Full-Stack Developer</span>
                  <span style={{ fontSize: 24, fontWeight: 600 }}>{PORTFOLIO.name}</span>
                </div>
              </div>
              <div style={{ fontSize: 70, lineHeight: 1.03, fontWeight: 700, letterSpacing: -2.8, maxWidth: 760 }}>
                The problem solver for high-stakes product systems.
              </div>
              <div style={{ fontSize: 26, lineHeight: 1.45, maxWidth: 780, color: "rgba(255,255,255,0.78)" }}>
                {PORTFOLIO.description}
              </div>
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              {[
                `${PORTFOLIO.yearsExperience}+ years`,
                `${PORTFOLIO.projectsCompleted}+ projects`,
                `${PORTFOLIO.liveSaasProducts} live SaaS`,
              ].map((item) => (
                <div key={item} style={{ display: "flex", padding: "14px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 20 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: 210,
              height: 534,
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03))",
              padding: 18,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 14, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.55 }}>Focus</div>
              <div style={{ fontSize: 28, lineHeight: 1.2, fontWeight: 600 }}>SaaS, e-commerce, performance, systems.</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Realtime state orchestration",
                "Critical path performance",
                "Accessible system design",
              ].map((item) => (
                <div key={item} style={{ fontSize: 18, lineHeight: 1.35, color: "rgba(255,255,255,0.84)" }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}