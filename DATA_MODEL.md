# Data Model

All types live in [`src/types/index.ts`](./src/types/index.ts). This document explains
the *why* behind the shape of the model; read the source file for the exact field list.

## Design goals

1. **Rendering code should never need to know where content comes from.** Everything
   flows through a single `DataBundle` (`{ entries, relationships, debates, journeys }`).
   Swapping the local TypeScript files for a CMS or database later should only mean
   changing `src/data/index.ts`.
2. **Geography is optional, plural, and sometimes deliberately absent.** An idea doesn't
   always have one true location.
3. **Dates are numeric and comparable**, with BCE as negative years, but also carry a
   human-facing `dateDisplay` string and an `approximateDate` flag, because the
   underlying claim is often genuinely uncertain.
4. **Nothing is "just true."** Claims carry `confidence`; sourcing carries
   `contentStatus`; theories carry a `theoryStatus` lifecycle instead of a binary
   true/false.

## `Entry`

The atomic unit plotted on the map, timeline, and inside journeys. `kind` drives marker
iconography (see `src/components/MarkerIcon.tsx`): `person`, `idea`, `discovery`,
`experiment`, `instrument`, `text`, `institution`, `event`, `debate`.

Key fields beyond the obvious (`title`, `summary`, `longDescription`):

- **Dates**: `startYear`/`endYear` (numbers, BCE negative), `dateDisplay` (e.g. `"c.
  1800–100 BCE"`), `approximateDate` (boolean).
- **Geography**: `latitude`/`longitude` (optional — a single primary point, when one
  point is meaningful), `places: PlaceRef[]` (a richer list — origin, institution,
  publication place, etc., each itself optionally coordinate-free), `transregional`
  (boolean — set `true` rather than forcing a misleading single pin).
- **Cross-references**: `people`, `cultures`, `disciplines`, `themes` (free-text facets
  used by search/filtering), `relatedEntryIds` (explicit links shown in the detail
  panel's "Connected entries" section).
- **Philosophy bridge**: `philosophicalQuestions: PhilosophicalLens[]` — each a short
  prompt, optionally pointing at a `Debate` via `debateId`. This is the field that keeps
  history and philosophy in the same frame; see `CONTENT_GUIDE.md` for when (and when
  not) to add one.
- **Complicating the "great discovery" story**: `commonMyth` / `historicalComplication`
  (a popular simplification and what actually complicates it — optional but encouraged),
  `theoryStatus` / `theoryStatusNote` (for ideas/discoveries that are theories or
  models — see below).
- **Sourcing**: `sources: Source[]`, `confidence`, `contentStatus`.
- **Journeys**: `isJourneyStop` surfaces the entry in Paths-related filtering; actual
  journey membership lives in `Journey.stops`, not on the entry.

### `theoryStatus`

A theory or model's status is a lifecycle, not a binary:

```
proposed → debated → dominant → modified → limited-domain
                                          → superseded
                                          → rejected
         → historically-influential
         → still-contested
```

Use `theoryStatusNote` to say *what survived* — e.g. Newtonian mechanics is
`limited-domain`, not simply "wrong," because it remains highly effective within its
domain even though it was superseded as fundamental physics.

### `confidence` vs. `contentStatus`

These answer different questions:

- `confidence` (`established` | `likely` | `contested` | `speculative`) — how settled is
  the *historical claim itself* (e.g. "Thales said X" is `contested` because almost
  everything about Thales comes from much later authors).
- `contentStatus` (`complete` | `draft` | `sourceNeeded`) — is the *entry's own prose*
  finished and sourced. `sourceNeeded` entries must have an empty `sources` array (this
  is enforced by `validateData.ts`) rather than a placeholder citation.

## `Relationship`

A typed, directional edge between two entries:

```ts
{
  id: string
  sourceId: string
  targetId: string
  type: RelationshipType
  summary: string        // one sentence: why does this connection matter?
  evidence?: string
  confidence: Confidence
  sourceIds?: string[]
}
```

`RelationshipType` is a closed set: `influenced`, `taught`, `translated`,
`corresponded`, `travelled`, `collaborated`, `criticised`, `supported`, `challenged`,
`replaced`, `preserved`, `funded`, `appropriated`, `excluded`, `extracted`,
`institutionalised`, `independently-developed`. The Atlas view renders `replaced` and
`criticised` with a distinct broken/dashed route style, since those represent
overturning rather than ordinary influence.

**A relationship is a claim, not a decoration.** `validateData.ts` only checks that
`sourceId`/`targetId` resolve to real entries — it cannot check that the connection is
*true*. That discipline is enforced editorially: see "Unsupported claims of influence"
in `CONTENT_GUIDE.md`.

## `Debate`

```ts
{
  id, slug, title, question, plainLanguageIntroduction
  positions: DebatePosition[]   // { id, name, statement, thinkers, argumentsFor, objections }
  thinkers: string[]
  historicalCaseIds: string[]   // links back to Entry ids
  contemporaryRelevance: string
  furtherReading: Source[]
  themes: string[]
}
```

Debates are deliberately *not* resolved — each `DebatePosition` carries both
`argumentsFor` and `objections`, and the Debates view never declares a winner.
`historicalCaseIds` is how a debate reaches back into history; an entry reaches forward
into a debate via `philosophicalQuestions[].debateId`. Keep these links two-way where it
makes sense (add the entry to `historicalCaseIds` *and* give the entry a
`philosophicalQuestions` prompt pointing back).

## `Journey`

```ts
{
  id, slug, title, summary, themes: string[]
  stops: { entryId: string; caption: string }[]
}
```

A journey is just an ordered list of entry references with transition captions — all the
actual content lives on the referenced entries. The `JourneyStepper` component drives
map panning (via `AtlasView`'s `focusEntryId`/`focusToken` props) and keeps the
`DetailPanel` in sync with the current stop.

## Validation

`src/utils/validateData.ts` runs structural checks over a `DataBundle`:

- No duplicate entry ids or slugs; no duplicate relationship/debate/journey ids.
- `endYear` (if present) is not before `startYear`.
- Coordinates, if present, are in valid lat/lon range.
- Every entry is either coordinate-free *and* `transregional`/has `places`, or has a
  coordinate (a warning, not an error, if neither holds).
- Every non-`sourceNeeded` entry has at least one source; no `sourceNeeded` entry has
  sources already attached.
- Every relationship's `sourceId`/`targetId` resolve to real entries and are not
  self-loops.
- Every journey has at least one stop, and every stop's `entryId` resolves.
- `relatedEntryIds` and `philosophicalQuestions[].debateId` references are checked as
  warnings (broken links here degrade gracefully in the UI rather than crashing, but
  should still be fixed).

`src/tests/data.test.ts` runs this validator against the real dataset on every test run
and fails the suite on any `error`-level issue.
