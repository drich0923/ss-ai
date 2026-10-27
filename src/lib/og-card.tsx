import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const ogSize = { width: 1200, height: 630 }
export const ogAlt = "Systemized Sales AI — One system for your whole sales team."

export async function renderOgImage() {
  const [logo, display, mono] = await Promise.all([
    readFile(join(process.cwd(), "public/systemized-sales-wordmark.png")),
    readFile(join(process.cwd(), "src/lib/og-fonts/SpaceGrotesk-Medium.ttf")),
    readFile(join(process.cwd(), "src/lib/og-fonts/JetBrainsMono-Regular.ttf")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          color: "#f5f5f3",
          padding: "64px 72px 56px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            backgroundColor: "#9cff4f",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            bottom: -220,
            width: 720,
            height: 720,
            borderRadius: 720,
            background: "radial-gradient(circle, rgba(156,255,79,0.28) 0%, rgba(156,255,79,0) 68%)",
          }}
        />
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 90 * i,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.045)",
            }}
          />
        ))}

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`data:image/png;base64,${logo.toString("base64")}`} width={240} height={80} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk",
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: -3,
              lineHeight: 0.96,
              color: "#f5f5f3",
            }}
          >
            One system
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk",
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: -3,
              lineHeight: 0.96,
              color: "#f5f5f3",
            }}
          >
            for your whole
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk",
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: -3,
              lineHeight: 0.96,
              color: "#f5f5f3",
            }}
          >
            sales team.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontFamily: "JetBrains Mono",
              fontSize: 28,
              letterSpacing: 2,
              color: "#9cff4f",
            }}
          >
            The Sales Team OS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            letterSpacing: 1,
            color: "#78786f",
          }}
        >
          <div style={{ display: "flex" }}>Hire · Ramp · Track · Pay</div>
          <div style={{ display: "flex", color: "#9cff4f" }}>systemizedsales.ai</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Space Grotesk", data: display, weight: 500, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  )
}
