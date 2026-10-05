import { useCallback, useEffect, useState } from 'react'

export interface NotebookItem {
  entryId: string
  note: string
  savedAt: string
}

const STORAGE_KEY = 'atlas-notebook'

function read(): NotebookItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as NotebookItem[]) : []
  } catch {
    return []
  }
}

function write(items: NotebookItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // ignore (private browsing / storage blocked)
  }
}

export function useNotebook() {
  const [items, setItems] = useState<NotebookItem[]>(() => read())

  useEffect(() => {
    write(items)
  }, [items])

  const isSaved = useCallback(
    (entryId: string) => items.some((i) => i.entryId === entryId),
    [items],
  )

  const toggleSave = useCallback((entryId: string) => {
    setItems((prev) =>
      prev.some((i) => i.entryId === entryId)
        ? prev.filter((i) => i.entryId !== entryId)
        : [...prev, { entryId, note: '', savedAt: new Date().toISOString() }],
    )
  }, [])

  const updateNote = useCallback((entryId: string, note: string) => {
    setItems((prev) => prev.map((i) => (i.entryId === entryId ? { ...i, note } : i)))
  }, [])

  const remove = useCallback((entryId: string) => {
    setItems((prev) => prev.filter((i) => i.entryId !== entryId))
  }, [])

  const clearAll = useCallback(() => setItems([]), [])

  return { items, isSaved, toggleSave, updateNote, remove, clearAll }
}
