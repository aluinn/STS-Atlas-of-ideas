/**
 * Purely decorative cartographic texture for the Atlas view — hand-drawn-style
 * mountain and forest glyphs scattered at real-world mountain ranges and
 * forest regions, in the spirit of antique pen-and-ink atlases.
 *
 * These are NOT historical entries: they carry no dates, sources, or
 * relationships, and are never interactive or included in search/filtering.
 * Coordinates are deliberately approximate (a chain of a few points per
 * range) — accurate enough to read as "the Alps" or "the Amazon" at a
 * glance, not a claim of precise cartographic survey.
 */

export interface DecorationPoint {
  latitude: number
  longitude: number
  /** 0–1, scales the glyph; bigger ranges/forests get a slightly larger mark. */
  scale?: number
  /** Degrees, for slight natural variation between repeated glyphs. */
  rotation?: number
}

export const mountainRanges: DecorationPoint[] = [
  // Rockies
  { latitude: 52, longitude: -121, rotation: 20 },
  { latitude: 45, longitude: -113, rotation: -10 },
  { latitude: 39, longitude: -106, rotation: 15 },
  // Andes
  { latitude: -8, longitude: -77, rotation: 10 },
  { latitude: -20, longitude: -68, rotation: -5 },
  { latitude: -33, longitude: -70, rotation: 8 },
  { latitude: -45, longitude: -72, rotation: -12 },
  // Alps
  { latitude: 46, longitude: 10, scale: 0.85 },
  { latitude: 45.8, longitude: 7, scale: 0.7, rotation: -15 },
  // Pyrenees
  { latitude: 42.7, longitude: 0.5, scale: 0.6 },
  // Carpathians
  { latitude: 47.5, longitude: 25, scale: 0.75, rotation: 25 },
  // Caucasus
  { latitude: 43, longitude: 44, scale: 0.7 },
  // Urals
  { latitude: 60, longitude: 59, rotation: 90, scale: 0.9 },
  { latitude: 54, longitude: 59, rotation: 90, scale: 0.7 },
  // Himalaya
  { latitude: 28.5, longitude: 84, scale: 1.1 },
  { latitude: 29.5, longitude: 90, scale: 0.9, rotation: 10 },
  // Tian Shan
  { latitude: 42, longitude: 78, scale: 0.8 },
  // Hindu Kush
  { latitude: 35.5, longitude: 71, scale: 0.75 },
  // Zagros
  { latitude: 33, longitude: 47, scale: 0.7, rotation: -20 },
  // Atlas Mountains
  { latitude: 31.5, longitude: -7, scale: 0.75 },
  // Ethiopian Highlands
  { latitude: 9, longitude: 38, scale: 0.7 },
  // Drakensberg
  { latitude: -29, longitude: 29, scale: 0.7, rotation: 30 },
  // Scandinavian Mountains
  { latitude: 62, longitude: 8, rotation: 20, scale: 0.85 },
  { latitude: 68, longitude: 17, rotation: 30, scale: 0.7 },
  // Appalachians
  { latitude: 37, longitude: -82, rotation: 30, scale: 0.7 },
  { latitude: 44, longitude: -71, rotation: 20, scale: 0.6 },
  // Sierra Madre
  { latitude: 20, longitude: -99, rotation: -10, scale: 0.65 },
  // Japanese Alps
  { latitude: 36.3, longitude: 137.7, scale: 0.6 },
  // Southern Alps, New Zealand
  { latitude: -43.5, longitude: 170.5, rotation: 40, scale: 0.7 },
  // Great Dividing Range
  { latitude: -30, longitude: 150, rotation: 15, scale: 0.65 },
]

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
