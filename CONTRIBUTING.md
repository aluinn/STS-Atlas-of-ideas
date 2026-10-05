# Contributing

Thanks for considering a contribution to Atlas of Ideas. This is a portfolio project
first and foremost, but it's built to be genuinely extensible — the content model is the
main thing worth protecting.

## Before you start

1. Read [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md) — it covers tone, sourcing, and the
   historiographical pitfalls this project explicitly tries to avoid. This matters more
   than code style.
2. Read [`DATA_MODEL.md`](./DATA_MODEL.md) if you're adding or editing content, or
   `src/types/index.ts` directly for the exact field definitions.
3. Run `npm install` and `npm run dev` to get a local copy running.

## Workflow

1. Make your change (content, component, or both).
2. Run the full check suite before opening a PR:
   ```bash
   npm run typecheck
   npm run lint
   npm run test
   npm run build
   ```
3. If you changed or added content (`src/data/**`), pay attention to
   `src/tests/data.test.ts` — it validates referential integrity (ids, slugs,
   relationship endpoints, sourcing) and will fail loudly on common mistakes.
4. If you changed visual/interactive behaviour, run the app locally (`npm run dev`) and
   check it at both a desktop and a mobile viewport width, in both the dark and light
   themes, with the keyboard alone (Tab/Enter/Escape) as well as a mouse.

## Content contributions

See the "How to add an entry / relationship / guided journey" sections of
[`README.md`](./README.md) for the mechanical steps. The short version:

- New entries go in the relevant period file under `src/data/`.
- New relationships go in `src/data/relationships.ts` — only add one for a documented
  connection, never because two entries share a topic or period.
- New debates go in `src/data/debates.ts`; new journeys in `src/data/journeys.ts`.
- Never invent a quotation or citation. Mark unsourced claims `contentStatus:
  'sourceNeeded'` instead.

## Code contributions

- Keep rendering code decoupled from content: components should consume the typed
  `Entry`/`Relationship`/`Debate`/`Journey` shapes from `src/types`, not assume anything
  about where the data came from.
- Prefer plain CSS Modules and small, focused components over adding a UI framework
  dependency.
- Keep accessibility in mind for anything interactive: focus management, keyboard
  operation, and `aria-label`s are not an afterthought here — see the "Accessibility
  notes" section of `README.md` for the standard already in place.
- Match the existing visual language (see `src/styles/tokens.css` for the design
  tokens) rather than introducing new colours or fonts ad hoc.

## Reporting issues

If you spot a factual error, an unsupported claim, a fabricated-looking citation, or an
accessibility problem, please open an issue describing it specifically — these are
exactly the categories of bug this project cares most about getting right.
