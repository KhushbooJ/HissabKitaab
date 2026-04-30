const strokeProps = {
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ChevronLeft = ({ size = 16, color = '#7b8197', strokeWidth = 2.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

export const ChevronRight = ({ size = 14, color = '#555', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export const Search = ({ size = 17, color = '#7b8197', strokeWidth = 2.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export const Plus = ({ size = 24, color = 'white', strokeWidth = 2.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export const Home = ({ size = 20, color = '#7b5ea7' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M3 12L12 3l9 9v9h-6v-6H9v6H3z" />
  </svg>
)

export const User = ({ size = 20, color = '#555', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

export const Camera = ({ size = 20, color = '#b89df5', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

export const Download = ({ size = 16, color = '#7dd3b0', strokeWidth = 2.2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export const ArrowRight = ({ size = 20, color = '#3a3e55', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const Clock = ({ size = 16, color = '#7b8197', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

export const Sync = ({ size = 16, color = '#7b8197', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <path d="M1 6l5 5 5-5" />
    <path d="M6 11V3" />
    <path d="M13 18l5 5 5-5" />
    <path d="M18 23v-8" />
  </svg>
)

export const Dollar = ({ size = 16, color = '#7b8197', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} strokeWidth={strokeWidth} {...strokeProps}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)
