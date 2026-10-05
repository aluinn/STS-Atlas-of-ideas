import type { Debate, Entry } from '../../types'
import styles from './DebatesView.module.css'

interface DebatesViewProps {
  debates: Debate[]
  entries: Entry[]
  selectedDebateId: string | null
  onSelectDebate: (id: string | null) => void
  onJumpToEntry: (id: string) => void
}

export function DebatesView({
  debates,
  entries,
  selectedDebateId,
  onSelectDebate,
  onJumpToEntry,
}: DebatesViewProps) {
  const selected = debates.find((d) => d.id === selectedDebateId) ?? null

  if (!selected) {
    return (
      <div className={styles.wrap}>
        <div className={styles.grid}>
          {debates.map((d) => (
            <button
              key={d.id}
              type="button"
              className={styles.card}
              onClick={() => onSelectDebate(d.id)}
            >
              <h3 className={styles.cardQuestion}>{d.question}</h3>
              <p className={styles.cardIntro}>{d.plainLanguageIntroduction}</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const cases = selected.historicalCaseIds
    .map((id) => entries.find((e) => e.id === id))
    .filter((e): e is Entry => Boolean(e))

  return (
    <div className={styles.wrap}>
      <div className={styles.detail}>
        <button type="button" className={styles.backBtn} onClick={() => onSelectDebate(null)}>
          ← All debates
        </button>
        <h2 className={styles.detailQuestion}>{selected.question}</h2>
        <p className={styles.detailIntro}>{selected.plainLanguageIntroduction}</p>

        <div className={styles.positionsGrid}>
          {selected.positions.map((pos) => (
            <div className={styles.positionCard} key={pos.id}>
              <h3 className={styles.positionName}>{pos.name}</h3>
              <p className={styles.positionStatement}>{pos.statement}</p>
              {pos.thinkers.length > 0 && (
                <p className={styles.thinkers}>Associated with: {pos.thinkers.join(', ')}</p>
              )}
              {pos.argumentsFor.length > 0 && (
                <>
                  <p className={styles.positionListLabel}>Arguments for</p>
                  <ul className={styles.positionList}>
                    {pos.argumentsFor.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </>
              )}
              {pos.objections.length > 0 && (
                <>
                  <p className={styles.positionListLabel}>Objections</p>
                  <ul className={styles.positionList}>
                    {pos.objections.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {cases.length > 0 && (
          <section className={styles.section}>
            <h3 className={styles.sectionHeading}>Historical cases that test this debate</h3>
            <div className={styles.caseList}>
              {cases.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={styles.caseBtn}
                  onClick={() => onJumpToEntry(c.id)}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </section>
        )}

        <section className={styles.section}>
          <h3 className={styles.sectionHeading}>Why this still matters</h3>
          <p>{selected.contemporaryRelevance}</p>
        </section>

        {selected.furtherReading.length > 0 && (
          <section className={styles.section}>
            <h3 className={styles.sectionHeading}>Further reading</h3>
            {selected.furtherReading.map((s, i) => (
              <p key={i} style={{ fontSize: '0.85rem', color: 'var(--color-ink-dim)' }}>
                {s.author ? `${s.author}, ` : ''}
                <em>{s.title}</em>
                {s.year ? `, ${s.year}` : ''}
              </p>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}
