export function AboutContent() {
  return (
    <div
      style={{ display: 'grid', gap: '1rem', fontSize: '0.92rem', color: 'var(--color-ink-dim)' }}
    >
      <p>
        <strong style={{ color: 'var(--color-ink)' }}>STS Interactive Map</strong> is an
        interpretive, educational project exploring the connected history and philosophy of science.
        It is not a neutral or exhaustive account: every atlas selects, every selection interprets,
        and every interpretation reflects choices its author could have made differently.
      </p>
      <section>
        <h3
          style={{
            color: 'var(--color-oxidised-green-bright)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
          }}
        >
          Selection and interpretation
        </h3>
        <p>
          The entries here were chosen to illustrate how scientific knowledge actually moved —
          through translation, trade, empire, craft, and argument — rather than to catalogue every
          significant discovery. Many important figures, places, and ideas are not yet included; the
          data model is deliberately built so the atlas can keep growing.
        </p>
      </section>
      <section>
        <h3
          style={{
            color: 'var(--color-oxidised-green-bright)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
          }}
        >
          The limits of mapping knowledge geographically
        </h3>
        <p>
          Pinning an idea to a single latitude and longitude always does some violence to how it
          actually circulated. Some entries are deliberately marked "transregional" rather than
          forced onto one point, and many list multiple places — of origin, of institution, of
          publication — rather than a single location.
        </p>
      </section>
      <section>
        <h3
          style={{
            color: 'var(--color-oxidised-green-bright)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
          }}
        >
          Modern borders are not historical borders
        </h3>
        <p>
          The basemap shows modern coastlines for orientation only. Political boundaries across the
          periods this atlas covers shifted constantly; no single "border layer" could honestly
          represent Mesopotamia, the Islamic world, Qing China, or colonial empires all at once.
          Place labels are historical, not a claim about current sovereignty.
        </p>
      </section>
      <section>
        <h3
          style={{
            color: 'var(--color-oxidised-green-bright)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
          }}
        >
          Why translation, labour, empire, and exclusion are not a footnote
        </h3>
        <p>
          Histories of science that focus only on canonical discoveries tend to erase the
          translators, technicians, funders, colonised peoples, and excluded thinkers whose work
          made those discoveries possible — or who paid their cost. This atlas tries to keep that
          labour and those costs visible rather than treating them as background.
        </p>
      </section>
      <section>
        <h3
          style={{
            color: 'var(--color-oxidised-green-bright)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
          }}
        >
          Against a simple story of progress
        </h3>
        <p>
          Science does not move in a single straight line from ignorance to truth. Knowledge has
          been lost and revived, discovered independently in more than one place, built on theories
          later judged false, and shaped by political and economic interests throughout. Theory
          status labels (debated, superseded, limited-domain, still-contested, and so on) are used
          throughout to resist a tidier story than the evidence supports.
        </p>
      </section>
      <section>
        <h3
          style={{
            color: 'var(--color-oxidised-green-bright)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
          }}
        >
          How history and philosophy illuminate each other
        </h3>
        <p>
          Philosophy of science is not a commentary applied after the historical facts are settled —
          it shapes which facts seem to need explaining at all. Every historical entry that can
          plausibly support one links to a philosophical question, and every debate links back to
          historical cases that test or complicate it.
        </p>
      </section>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-ink-faint)' }}>
        Built as a portfolio project. No fabricated quotations or citations appear anywhere in this
        atlas; entries without a verified source are explicitly marked rather than silently assumed.
      </p>
    </div>
  )
}
