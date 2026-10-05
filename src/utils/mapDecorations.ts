/**
 * Purely decorative cartographic texture for the Atlas view — hand-drawn-style
 * forest glyphs scattered at real-world forest regions, in the spirit of
 * antique pen-and-ink atlases.
 *
 * These are NOT historical entries: they carry no dates, sources, or
 * relationships, and are never interactive or included in search/filtering.
 * Coordinates are deliberately approximate (a chain of a few points per
 * region) — accurate enough to read as "the Amazon" or "the Congo Basin" at
 * a glance, not a claim of precise cartographic survey.
 */

export interface DecorationPoint {
  latitude: number
  longitude: number
  /** 0–1, scales the glyph; bigger regions get a slightly larger mark. */
  scale?: number
  /** Degrees, for slight natural variation between repeated glyphs. */
  rotation?: number
}

export const forestRegions: DecorationPoint[] = [
  // Amazon
  { latitude: -4, longitude: -63, scale: 1.3 },
  { latitude: -8, longitude: -55, scale: 1.1 },
  // Congo Basin
  { latitude: -1, longitude: 22, scale: 1.2 },
  { latitude: 1, longitude: 16, scale: 1 },
  // Siberian taiga
  { latitude: 60, longitude: 95, scale: 1.2 },
  { latitude: 58, longitude: 60, scale: 1 },
  // Scandinavian / boreal forest
  { latitude: 63, longitude: 22, scale: 0.9 },
  // Black Forest
  { latitude: 48.1, longitude: 8.2, scale: 0.5 },
  // Pacific Northwest
  { latitude: 47, longitude: -122, scale: 0.8 },
  // Borneo / Southeast Asian rainforest
  { latitude: 0.5, longitude: 114, scale: 1 },
  // Eastern North American forest
  { latitude: 44, longitude: -75, scale: 0.9 },
  // Central European forest belt
  { latitude: 50.5, longitude: 15, scale: 0.7 },
]
