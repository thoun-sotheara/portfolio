"use client";

/**
 * CinematicBackground
 *
 * A full-page wrapper that applies three layered atmospheric effects:
 *
 * 1. Film Grain  — SVG feTurbulence noise subtly animated, sits over everything
 *                  at mix-blend-mode: overlay. Ultra-low opacity (0.028) keeps
 *                  it tactile without muddying the palette.
 *
 * 2. Drifting Gradients — Two large radial blobs of accent color that slowly
 *                  drift in opposite directions via CSS keyframes. They define
 *                  the atmospheric "light source" of the page.
 *
 * 3. Vignette    — A radial gradient that pulls the edges of the viewport into
 *                  near-black, framing the content cinematically.
 */

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

// ─── Noise overlay using SVG feTurbulence ──────────────────────────────────────
function NoiseOverlay() {
  const svgId = "portfolio-noise-filter";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[120] h-[110%] w-[110%] -top-[5%] -left-[5%] animate-grain"
      style={{ opacity: 0.028, mixBlendMode: "overlay" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="h-full w-full"
      >
        <defs>
          <filter id={svgId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68 0.72"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="greyNoise"
            />
            <feBlend in="SourceGraphic" in2="greyNoise" mode="overlay" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter={`url(#${svgId})`}
          fill="white"
        />
      </svg>
    </div>
  );
}

// ─── Slowly drifting atmospheric gradient blobs ────────────────────────────────
function DriftingAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Primary blob — upper-left, violet */}
      <div
        className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] animate-drift-slow rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,110,224,0.12) 0%, rgba(124,110,224,0.04) 45%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Secondary blob — lower-right, deeper indigo */}
      <div
        className="absolute -bottom-[25%] -right-[15%] h-[80vh] w-[80vh] animate-drift-reverse rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(91,79,207,0.10) 0%, rgba(91,79,207,0.03) 50%, transparent 72%)",
          willChange: "transform",
        }}
      />

      {/* Tertiary micro-glow — center, very subtle warm tint */}
      <div
        className="absolute top-[40%] left-[45%] h-[40vh] w-[40vh] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168,158,240,0.05) 0%, transparent 65%)",
          animation: "drift 32s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
    </div>
  );
}

// ─── Cinema-style vignette ──────────────────────────────────────────────────────
function Vignette() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10"
      style={{
        background:
          "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.82) 100%)",
      }}
    />
  );
}

// ─── Horizontal scanline ────────────────────────────────────────────────────────
// Ultra-subtle horizontal line rhythm. Purely cosmetic depth texture.
function Scanlines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[115]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.012) 3px, rgba(0,0,0,0.012) 4px)",
        backgroundSize: "100% 4px",
      }}
    />
  );
}

// ─── Public component ──────────────────────────────────────────────────────────
interface CinematicBackgroundProps {
  children: React.ReactNode;
}

export function CinematicBackground({ children }: CinematicBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Atmosphere layers (z: 0 → 10) */}
      <DriftingAtmosphere />
      <Vignette />

      {/* Texture layers (z: 115 → 120) */}
      <Scanlines />
      <NoiseOverlay />

      {/* Page content (z: 20) */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
