// Core content model for STS Interactive Map.
// All historical and philosophical content is expressed through these types
// so that rendering code never needs to know where the data ultimately comes
// from (local files today; a CMS or database later).

/** Broad category of a plotted entry. Drives marker iconography. */
export type EntryKind =
  | 'person'
  | 'idea'
  | 'discovery'
  | 'experiment'
  | 'instrument'
  | 'text'
  | 'institution'
  | 'event'
  | 'debate'

/** Historical period groupings used by the timeline and as a filter facet. */
export type Period =
  | 'ancient'
  | 'classical'
  | 'medieval-translation'
  | 'renaissance'
  | 'early-modern'
  | 'enlightenment'
  | 'industrial-imperial'
  | 'professional-science'
  | 'war-and-big-science'
  | 'cold-war'
  | 'environmental-contemporary'
  | 'philosophy-of-science'

/** How confident the atlas is in a claim, relationship, or dating. */
export type Confidence = 'established' | 'likely' | 'contested' | 'speculative'

/** Editorial status of an entry's prose/sourcing. */
export type ContentStatus = 'complete' | 'draft' | 'sourceNeeded'

/** The life-cycle status of a theory, model, or idea. */
export type TheoryStatus =
  | 'proposed'
  | 'debated'
  | 'dominant'
  | 'modified'
  | 'limited-domain'
  | 'superseded'
  | 'rejected'
  | 'historically-influential'
  | 'still-contested'

export type RelationshipType =
  | 'influenced'
  | 'taught'
  | 'translated'
  | 'corresponded'
  | 'travelled'
  | 'collaborated'
  | 'criticised'
  | 'supported'
  | 'challenged'
  | 'replaced'
  | 'preserved'
  | 'funded'
  | 'appropriated'
  | 'excluded'
  | 'extracted'
  | 'institutionalised'
  | 'independently-developed'
  | 'commercialised'
  | 'regulated'
  | 'co-produced'
  | 'represented'
  | 'materially-enabled'
  | 'contested'

/** The social/physical scale a concept or case is best read at. Optional —
 * most entries don't need one, but it helps place abstract sociological and
 * policy concepts (which otherwise resist a single map coordinate). */
export type EntryScale = 'body' | 'laboratory' | 'institution' | 'nation' | 'network' | 'globe'

/** A short prompt inviting the visitor to reflect philosophically on an entry. */
export interface PhilosophicalLens {
  prompt: string
  /** Optional link to a fuller debate that elaborates on this question. */
  debateId?: string
}

/** A citation. Never invented — use contentStatus/sourceNeeded if unverified. */
export interface Source {
  author?: string
  title: string
  year?: string
  url?: string
  doi?: string
  type: 'primary' | 'secondary'
  note?: string
}

/** A geographic place a entry can be anchored to. */
export interface PlaceRef {
  name: string
  /** Latitude/longitude may be omitted for transregional or unlocated places. */
  latitude?: number
  longitude?: number
  /** e.g. "institution", "publication", "residence", "event-site" */
  role?: string
  /** Free text noting how anachronistic/contested this location label is. */
  borderNote?: string
}

export interface Entry {
  id: string
  slug: string
  title: string
  subtitle?: string
  kind: EntryKind
  period: Period
  summary: string
  longDescription: string

  /** Numeric years. BCE values are negative (e.g. -1800 for 1800 BCE). */
  startYear: number
  endYear?: number
  /** Human-facing rendering, e.g. "c. 1800 BCE" or "1632–1642". */
  dateDisplay: string
  approximateDate: boolean

  /** Primary coordinate, when a single point is meaningful. */
  latitude?: number
  longitude?: number
  /** Richer set of places this entry touches (institution, publication, etc). */
  places: PlaceRef[]
  /** True when the entry deliberately resists a single geographic pin. */
  transregional: boolean

  people: string[]
  cultures: string[]
  disciplines: string[]
  themes: string[]

  philosophicalQuestions: PhilosophicalLens[]
  historicalSignificance: string
  commonMyth?: string
  historicalComplication?: string

  /** Only for kind === 'idea' | 'discovery' entries that are theories/models. */
  theoryStatus?: TheoryStatus
  theoryStatusNote?: string

  /** The scale a concept operates at — mainly for sociological/policy ideas
   * that resist a single geographic pin (a theory about "networks" isn't
   * really located anywhere; it's located at the network scale). */
  scale?: EntryScale

  image?: string
  imageAlt?: string

  sources: Source[]
  relatedEntryIds: string[]

  confidence: Confidence
  contentStatus: ContentStatus

  /** Surfaces this entry inside the curated Paths view. */
  isJourneyStop?: boolean
}

export interface Relationship {
  id: string
  sourceId: string
  targetId: string
  type: RelationshipType
  summary: string
  evidence?: string
  confidence: Confidence
  sourceIds?: string[]
}

export interface DebatePosition {
  id: string
  name: string
  statement: string
  thinkers: string[]
  argumentsFor: string[]
  objections: string[]
}

export interface Debate {
  id: string
  slug: string
  question: string
  title: string
  plainLanguageIntroduction: string
  positions: DebatePosition[]
  thinkers: string[]
  historicalCaseIds: string[]
  contemporaryRelevance: string
  furtherReading: Source[]
  themes: string[]
}

export interface JourneyStop {
  entryId: string
  caption: string
}

export interface Journey {
  id: string
  slug: string
  title: string
  summary: string
  stops: JourneyStop[]
  themes: string[]
}

export interface DataBundle {
  entries: Entry[]
  relationships: Relationship[]
  debates: Debate[]
  journeys: Journey[]
}
