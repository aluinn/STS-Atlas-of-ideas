import type { EntryKind } from '../types'

interface MarkerIconProps {
  kind: EntryKind
  size?: number
  className?: string
}

/**
 * Small hand-drawn-style glyphs distinguishing entry kinds on the map and
 * in the legend. Pure inline SVG, strokes only, so they read cleanly at
 * marker scale against the parchment background.
 */
export function MarkerIcon({ kind, size = 14, className }: MarkerIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  }

  switch (kind) {
    case 'person':
      return (
        <svg {...common}>
          <circle cx="12" cy="7.5" r="3.4" />
          <path d="M5 20c0-4 3.1-6.5 7-6.5s7 2.5 7 6.5" />
        </svg>
      )
    case 'idea':
      return (
        <svg {...common}>
          <path d="M12 3v2.4M12 18.6V21M4.5 12H3M21 12h-1.5M6.3 6.3 5 5M18.7 6.3 20 5M6.3 17.7 5 19M18.7 17.7 20 19" />
          <circle cx="12" cy="12" r="4.6" />
        </svg>
      )
    case 'discovery':
      return (
        <svg {...common}>
          <path d="M12 3l2 6.2 6.4.2-5.1 4 2 6.1-5.3-3.7-5.3 3.7 2-6.1-5.1-4 6.4-.2z" />
        </svg>
      )
    case 'experiment':
      return (
        <svg {...common}>
          <path d="M9 3h6M10 3v6.2L5.6 18a2 2 0 0 0 1.8 2.9h9.2a2 2 0 0 0 1.8-2.9L14 9.2V3" />
          <path d="M8 15h8" />
        </svg>
      )
    case 'instrument':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.4" />
          <path d="M12 3.6v2M12 18.4v2M3.6 12h2M18.4 12h2" />
          <path d="M12 12l3.6-5" />
        </svg>
      )
    case 'text':
      return (
        <svg {...common}>
          <path d="M6 4h9.4a2.6 2.6 0 0 1 2.6 2.6V20H8.6A2.6 2.6 0 0 1 6 17.4z" />
          <path d="M6 17.4A2.6 2.6 0 0 1 8.6 14.8H18" />
          <path d="M9 8h6M9 11h6" />
        </svg>
      )
    case 'institution':
      return (
        <svg {...common}>
          <path d="M4 10l8-5.5L20 10" />
          <path d="M5 10v9M19 10v9M9 10v9M15 10v9M3.5 19h17" />
        </svg>
      )
    case 'event':
      return (
        <svg {...common}>
          <path d="M12 2.5c2.8 3.7 4.5 6.9 4.5 9.6a4.5 4.5 0 1 1-9 0c0-2.7 1.7-5.9 4.5-9.6z" />
        </svg>
      )
    case 'debate':
      return (
        <svg {...common}>
          <path d="M5 5h10a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5H10l-4 3.5V15H5A2.5 2.5 0 0 1 2.5 12.5v-5A2.5 2.5 0 0 1 5 5z" />
          <path d="M9.5 10.3c0-1 .8-1.6 1.8-1.6s1.7.5 1.7 1.3c0 .8-.6 1-1.2 1.4-.4.3-.5.5-.5 1" />
          <circle cx="11" cy="14.6" r="0.4" fill="currentColor" stroke="none" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6" />
        </svg>
      )
  }
}
