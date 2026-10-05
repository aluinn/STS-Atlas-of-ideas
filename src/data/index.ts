import type { DataBundle, Entry } from '../types'
import { ancientEntries } from './entries.ancient'
import { medievalEntries } from './entries.medieval'
import { renaissanceEntries } from './entries.renaissance'
import { globalEntries } from './entries.global'
import { modernEntries } from './entries.modern'
import { warAndColdWarEntries } from './entries.warAndColdWar'
import { environmentalAndStudiesEntries } from './entries.environmentalAndStudies'
import { philosophyEntries } from './entries.philosophy'
import { relationships } from './relationships'
import { debates } from './debates'
import { journeys } from './journeys'

export const entries: Entry[] = [
  ...ancientEntries,
  ...medievalEntries,
  ...renaissanceEntries,
  ...globalEntries,
  ...modernEntries,
  ...warAndColdWarEntries,
  ...environmentalAndStudiesEntries,
  ...philosophyEntries,
]

export const dataBundle: DataBundle = {
  entries,
  relationships,
  debates,
  journeys,
}

export { relationships, debates, journeys }
