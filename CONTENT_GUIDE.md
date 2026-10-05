# Content Guide

This project's core intellectual commitment is that the history of science is not a
tidy march of heroic discoveries, and that philosophy of science is not a separate
subject bolted on afterward. Every contributor — human or AI — adding or editing content
should read this before writing.

## What this atlas is trying to avoid

### Hero-only histories

Don't write an entry as if one person, working alone, simply saw the truth that eluded
everyone else. Real discovery is usually collective, incremental, dependent on
instruments and institutions, and often contested or co-discovered. Where a "lone
genius" myth exists (Watt and the kettle, Darwin working in total isolation), name it
explicitly in `commonMyth` and correct it in `historicalComplication`.

### Eurocentric assumptions

Don't write as though "real" science starts in Greece, pauses in a "Dark Age," and
resumes in the European Renaissance. Islamic, Chinese, Indian, and other traditions
aren't "precursors" to European science — they're their own traditions, some of which
directly fed into what became labelled "Western" science, and some of which developed in
parallel for entirely independent reasons. Use `independent-development` relationships
honestly rather than implying one-directional influence where none is documented.

### Treating knowledge transfer as one-directional

"Transmission" and "diffusion" models imply knowledge moves one way, outward from a
center. Real exchanges (the Baghdad translation movement, Jesuit–Qing astronomy) were
usually two-directional: each side evaluated, modified, and sometimes rejected what the
other offered. Prefer relationship types like `translated`, `collaborated`, or
`extracted` over a blanket `influenced` when the real dynamic was more specific — and
say so in the entry's `historicalComplication`.

### Fabricated quotations

**Never invent a quotation.** If you are not confident a quotation is genuine and
correctly sourced, paraphrase instead, or omit it. The same applies to invented
citations — if you can't verify a source, mark the entry `contentStatus: 'sourceNeeded'`
and leave `sources` empty rather than writing something that *looks* like a real
citation.

### Unsupported claims of influence

**Do not add a `Relationship` just because two entries share a period, place, or
topic.** "They were contemporaries working on similar problems" is not evidence of
influence. Every relationship's `summary` should be a claim you could defend with a
citation if asked. If you're not sure, either don't add the edge, or set
`confidence: 'speculative'` and say explicitly in `summary` that the connection is
suggestive rather than documented.

### Presentism

Don't judge historical figures or theories purely by whether they got the "right"
answer by today's standards. Aristotle's physics was empirically grounded and internally
coherent by the standards of his own era; judging it only against Newtonian mechanics
misses why it was taken seriously for two thousand years. Ask what problem the theory
was actually trying to solve, and by what standard it succeeded or failed *at the time*.

### Treating replaced theories as obviously irrational

Phlogiston, caloric, the luminiferous ether, Ptolemaic epicycles — these were not stupid
ideas held by stupid people. Use `theoryStatus` and `theoryStatusNote` to say what these
theories got right, what predictive work they did, and what (if anything) survived their
replacement. This is also the central historical material for the atlas's
`pessimistic-meta-induction-laudan` and `scientific-realism-no-miracles` debates — don't
undercut those debates by writing the historical entries as if the question were already
settled.

### Collapsing a large culture into a single viewpoint

"Chinese science," "Islamic science," or "the Church" were never monolithic. Qing
administrators disagreed with each other about calendar reform; Islamic scholars debated
Aristotelian cosmology for centuries; the Catholic Church's relationship to Copernicanism
involved factions, politics, and changing positions over time, not one fixed stance. Use
specific names, dates, and institutions rather than a culture-wide generalization
wherever the sources allow it.

## Writing philosophical lenses

A `philosophicalQuestions` entry should be a genuine open question the historical case
raises — not a rhetorical question with an obvious answer, and not a restatement of the
entry's content. Good test: could a thoughtful person reasonably take either side?

Good: *"Can observation ever be theory-neutral, or does what you see through a telescope
already depend on trusting the instrument and a theory of optics?"*

Bad: *"Wasn't Galileo's telescope a really important invention?"* (not a real question)

Where the lens connects to one of the atlas's `Debate` entries, set `debateId` so the
detail panel can link through — but don't force a connection that isn't a good fit.

## Writing myth vs. complication

Use `commonMyth` for a specific, nameable popular misconception — not a strawman. Use
`historicalComplication` to say what the actual, more complicated history shows instead.
Both are optional; don't invent a myth just to fill the field.

## Sourcing standards

- Prefer secondary sources from working historians of science (not popular-science
  summaries) when available; mark `type: 'secondary'`.
- Primary sources (the original text itself — Newton's *Principia*, Darwin's *Origin*)
  should be marked `type: 'primary'`.
- Include `author`, `title`, and `year` at minimum. Only include a `url`/`doi` if you are
  confident it is correct and stable — a missing link is better than a broken or
  invented one.
- If you genuinely cannot source a claim, set `contentStatus: 'sourceNeeded'` rather than
  reaching for a plausible-sounding but unverified citation.

## Scope for new contributions

The current dataset deliberately prioritises breadth over exhaustiveness — see the
"Future ideas" section of `README.md`. When adding new entries, favour topics that:

1. Have a clear, defensible relationship to at least one existing entry (so the graph
   stays connected rather than accumulating isolated nodes), and
2. Can honestly carry at least one philosophical lens or contribute to an existing
   debate's `historicalCaseIds`.

If a topic doesn't fit either criterion, it may still be worth adding — but consider
whether it needs a new `Debate` or `Journey` alongside it to stay integrated with the
rest of the atlas, rather than sitting alone.
