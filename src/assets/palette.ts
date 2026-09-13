/**
 * Dark forest green colour system. Exported as TypeScript constants so
 * non-CSS consumers (MapLibre style specs, Chart.js datasets, etc.) can
 * reference the same palette without duplicating hex literals.
 *
 * Keep this file in sync with `src/assets/tailwind.css`.
 */

/** Neutral palette - Dark forest green theme */
export const WHITE = '#e8f0e8'
export const LIGHTER = '#d4e4d4'
export const LIGHT = '#8aab8a'
export const GREY = '#4a6a4a'
export const DARK = '#1a2e1a'
export const DARKER = '#0f1f0f'
export const DARKEST = '#0a170a'

/** Accent - Forest green */
export const ACCENT = '#4a9c6d'
export const FOREST_GREEN = '#2d5a3d'

/** Delta / comparison signals */
export const DELTA_POSITIVE = '#6bc98a'
export const DELTA_NEGATIVE = '#c75c5c'
export const DELTA_NEUTRAL = LIGHTER

/** Gradient-ramp identity colours */
export const DEEP_BLUE = '#1a4a3a'
export const AURORA = '#8bc9a5'
export const EARTH = '#5d4a2a'
export const FOREST = '#4a9c6d'
export const EMBER = '#c75c5c'
export const EMERALD = '#6bc98a'
export const AMETHYST = '#6a7c9c'
export const SUNSET = '#c98a5c'
export const SOLAR = '#c9c96b'
export const ICE = '#b8d4c8'

/**
 * Domain-specific extensions for semantic uses.
 */
/** Proxemic "personal" zone (Hall 1966) - amber caution. */
export const PROXEMIC_PERSONAL = '#c9a84a'
/** Proxemic "intimate" zone (Hall 1966) - muted red. */
export const PROXEMIC_INTIMATE = '#9c4a4a'
