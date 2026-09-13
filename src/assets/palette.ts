/**
 * Dark forest green colour system. Exported as TypeScript constants so
 * non-CSS consumers (MapLibre style specs, Chart.js datasets, etc.) can
 * reference the same palette without duplicating hex literals.
 *
 * Keep this file in sync with `src/assets/tailwind.css`.
 */

/** Neutral palette - Deep forest theme (darkened for heat layer contrast) */
export const WHITE = '#b8c8b8'
export const LIGHTER = '#8a9a8a'
export const LIGHT = '#5a6a5a'
export const GREY = '#3a4a3a'
export const DARK = '#0d1a0d'
export const DARKER = '#080f08'
export const DARKEST = '#040804'

/** Accent - Muted forest green */
export const ACCENT = '#3d7a5a'
export const FOREST_GREEN = '#1a3a28'

/** Delta / comparison signals */
export const DELTA_POSITIVE = '#6bc98a'
export const DELTA_NEGATIVE = '#c75c5c'
export const DELTA_NEUTRAL = LIGHTER

/** Gradient-ramp identity colours (slightly muted for dark theme) */
export const DEEP_BLUE = '#0f2a20'
export const AURORA = '#6a9a7a'
export const EARTH = '#4a3a1a'
export const FOREST = '#3d7a5a'
export const EMBER = '#a84a4a'
export const EMERALD = '#5aaa6a'
export const AMETHYST = '#5a6a8a'
export const SUNSET = '#a87a4a'
export const SOLAR = '#a8a84a'
export const ICE = '#8aaa9a'

/**
 * Domain-specific extensions for semantic uses.
 */
/** Proxemic "personal" zone (Hall 1966) - amber caution. */
export const PROXEMIC_PERSONAL = '#c9a84a'
/** Proxemic "intimate" zone (Hall 1966) - muted red. */
export const PROXEMIC_INTIMATE = '#9c4a4a'
