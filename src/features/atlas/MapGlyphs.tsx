import styles from './AtlasView.module.css'

/**
 * Static SVG `<defs>` shared by the whole chart: a hand-wobble filter
 * applied to the coastline so it reads as pen-drawn rather than
 * computer-smooth, and a gentle wave pattern for open sea. Rendered once;
 * cheap, since filters/patterns are not re-evaluated per zoom frame.
 */
export function MapDefs() {
  return (
    <defs>
      <filter id="inkWobble" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.014 0.028"
          numOctaves="2"
          seed="7"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="3.2"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <pattern
        id="seaWaves"
        width="34"
        height="14"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(0)"
      >
        <path
          d="M0,8 Q8.5,2 17,8 T34,8"
          fill="none"
          stroke="var(--chart-ink)"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <path
          d="M0,13 Q8.5,8 17,13 T34,13"
          fill="none"
          stroke="var(--chart-ink)"
          strokeWidth="0.4"
          opacity="0.35"
        />
      </pattern>
      <pattern
        id="landHatch"
        width="7"
        height="7"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="7"
          stroke="var(--chart-ink)"
          strokeWidth="0.5"
          opacity="0.14"
        />
      </pattern>
    </defs>
  )
}

interface GlyphProps {
  x: number
  y: number
  scale?: number
  rotation?: number
}

interface PeakSpec {
  dx: number
  h: number
  w: number
  muted?: boolean
}

/** One triangular peak: a lit flank, a shadowed flank, and a snow cap — the
 * standard two-tone silhouette that reads unambiguously as "mountain". */
function Peak({ dx, h, w, muted }: PeakSpec) {
  const apexY = -h
  const capH = h * 0.32
  const capW = w * 0.22
  return (
    <g opacity={muted ? 0.55 : 1}>
      <path
        d={`M${dx - w / 2},0 L${dx},${apexY} L${dx},0 Z`}
        fill="var(--chart-mountain-light)"
        stroke="var(--chart-ink)"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <path
        d={`M${dx},0 L${dx},${apexY} L${dx + w / 2},0 Z`}
        fill="var(--chart-mountain-shadow)"
        stroke="var(--chart-ink)"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <path
        d={`M${dx - capW},${apexY + capH} L${dx},${apexY} L${dx + capW},${apexY + capH} L${dx + capW * 0.45},${apexY + capH * 0.8} L${dx},${apexY + capH * 1.35} L${dx - capW * 0.45},${apexY + capH * 0.8} Z`}
        fill="var(--chart-mountain-snow)"
        stroke="var(--chart-ink)"
        strokeWidth="0.4"
        strokeLinejoin="round"
      />
    </g>
  )
}

/** A small range of overlapping peaks — a muted, smaller peak glimpsed
 * behind two larger ones in front, each with a lit/shadowed flank and a
 * snow cap, in the manner of a classic cartographic mountain symbol. */
export function MountainGlyph({ x, y, scale = 1, rotation = 0 }: GlyphProps) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotation}) scale(${scale})`}>
      <Peak dx={-7} h={9.5} w={11} muted />
      <Peak dx={2.5} h={15} w={14} />
      <Peak dx={11.5} h={11} w={12} />
    </g>
  )
}

/** A small cluster of scalloped canopy bumps, standing in for a forest. */
export function ForestGlyph({ x, y, scale = 1, rotation = 0 }: GlyphProps) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotation}) scale(${scale})`}>
      <path
        className={styles.forestGlyphOutline}
        d="M-11,3 C-12,-2 -8,-6 -3,-6 C-2,-9 4,-9 6,-6 C11,-6 13,-1 10,2 C13,5 10,10 5,9 C3,12 -4,12 -6,9 C-11,10 -13,6 -11,3 Z"
      />
      <g className={styles.forestGlyph}>
        <circle cx="-6" cy="2" r="4.6" />
        <circle cx="0" cy="-2" r="5.4" />
        <circle cx="6.5" cy="2" r="4.8" />
        <circle cx="0" cy="4.5" r="4.9" />
      </g>
    </g>
  )
}

/** A small static compass rose anchoring one corner of the chart. */
export function CompassRose({ size = 72 }: { size?: number }) {
  const ticks = Array.from({ length: 16 }, (_, i) => i)
  return (
    <svg
      className={styles.compassRose}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden
    >
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.8" />
      {ticks.map((i) => {
        const angle = (i / 16) * Math.PI * 2 - Math.PI / 2
        const long = i % 4 === 0
        const r1 = long ? 30 : 36
        return (
          <line
            key={i}
            x1={50 + Math.cos(angle) * r1}
            y1={50 + Math.sin(angle) * r1}
            x2={50 + Math.cos(angle) * 42}
            y2={50 + Math.sin(angle) * 42}
            stroke="currentColor"
            strokeWidth={long ? 0.9 : 0.45}
          />
        )
      })}
      <path d="M50,10 L55,50 L50,90 L45,50 Z" fill="currentColor" opacity="0.8" />
      <path d="M10,50 L50,46 L90,50 L50,54 Z" fill="currentColor" opacity="0.55" />
      <text
        x="50"
        y="7"
        textAnchor="middle"
        fontSize="8"
        fill="currentColor"
        fontFamily="var(--font-display)"
      >
        N
      </text>
    </svg>
  )
}
