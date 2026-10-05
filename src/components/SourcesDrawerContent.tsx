import type { Entry } from '../types'

interface SourcesDrawerContentProps {
  entries: Entry[]
}

export function SourcesDrawerContent({ entries }: SourcesDrawerContentProps) {
  const needingSources = entries.filter((e) => e.contentStatus === 'sourceNeeded')
  const totalSources = entries.reduce((sum, e) => sum + e.sources.length, 0)

  return (
    <div
      style={{ fontSize: '0.9rem', color: 'var(--color-ink-dim)', display: 'grid', gap: '0.75rem' }}
    >
      <p>
        This atlas currently cites{' '}
        <strong style={{ color: 'var(--color-ink)' }}>{totalSources}</strong> sources across{' '}
        <strong style={{ color: 'var(--color-ink)' }}>{entries.length}</strong> entries. Citations
        are never invented: an entry without a verified source is marked <code>sourceNeeded</code>{' '}
        rather than given a placeholder reference.
      </p>
      {needingSources.length > 0 ? (
        <>
          <h3
            style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              color: 'var(--color-gold-bright)',
            }}
          >
            Entries currently marked as needing sources
          </h3>
          <ul>
            {needingSources.map((e) => (
              <li key={e.id}>{e.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Every current entry lists at least one source.</p>
      )}
      <p style={{ fontSize: '0.78rem', color: 'var(--color-ink-faint)' }}>
        Open any entry on the map, timeline, or in a debate to see its specific sources and further
        reading in its detail panel.
      </p>
    </div>
  )
}
