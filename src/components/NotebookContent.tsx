import type { Entry } from '../types'
import type { NotebookItem } from '../hooks/useNotebook'

interface NotebookContentProps {
  items: NotebookItem[]
  entries: Entry[]
  onUpdateNote: (entryId: string, note: string) => void
  onRemove: (entryId: string) => void
  onClearAll: () => void
  onOpenEntry: (entryId: string) => void
}

export function NotebookContent({
  items,
  entries,
  onUpdateNote,
  onRemove,
  onClearAll,
  onOpenEntry,
}: NotebookContentProps) {
  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-ink-faint)' }}>
        Bookmarks and reflections are stored only in this browser, never uploaded anywhere. Clearing
        your browser data will erase them.
      </p>
      {items.length === 0 ? (
        <p style={{ color: 'var(--color-ink-dim)' }}>
          Nothing saved yet. Open any entry and choose "Save to notebook" to add it here.
        </p>
      ) : (
        <>
          {items.map((item) => {
            const entry = entries.find((e) => e.id === item.entryId)
            if (!entry) return null
            return (
              <div
                key={item.entryId}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => onOpenEntry(entry.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-link)',
                      cursor: 'pointer',
                      font: 'inherit',
                      textAlign: 'left',
                      padding: 0,
                    }}
                  >
                    <strong>{entry.title}</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemove(item.entryId)}
                    aria-label={`Remove ${entry.title} from notebook`}
                    style={{
                      background: 'none',
                      border: '1px solid var(--color-border)',
                      borderRadius: 4,
                      color: 'var(--color-ink-faint)',
                      cursor: 'pointer',
                    }}
                  >
                    Remove
                  </button>
                </div>
                <textarea
                  value={item.note}
                  onChange={(e) => onUpdateNote(item.entryId, e.target.value)}
                  placeholder="Jot a short reflection…"
                  rows={2}
                  style={{
                    width: '100%',
                    marginTop: '0.5rem',
                    background: 'var(--color-bg)',
                    color: 'var(--color-ink)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.4rem',
                    font: 'inherit',
                    fontSize: '0.85rem',
                  }}
                />
              </div>
            )
          })}
          <button
            type="button"
            onClick={onClearAll}
            style={{
              justifySelf: 'start',
              border: '1px solid var(--color-burgundy)',
              background: 'none',
              color: 'var(--color-burgundy-bright)',
              borderRadius: 'var(--radius-sm)',
              padding: '4px 12px',
              cursor: 'pointer',
            }}
          >
            Clear notebook
          </button>
        </>
      )}
    </div>
  )
}
