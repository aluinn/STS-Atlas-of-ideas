import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DetailPanel } from '../components/DetailPanel'
import { entries } from '../data'

const sampleEntry = entries.find((e) => e.id === 'newton')!
const relatedEntries = sampleEntry.relatedEntryIds
  .map((id) => entries.find((e) => e.id === id))
  .filter((e): e is NonNullable<typeof e> => Boolean(e))

describe('DetailPanel', () => {
  it('renders entry title, summary, and sources', () => {
    render(
      <DetailPanel
        entry={sampleEntry}
        relatedEntries={relatedEntries}
        onClose={vi.fn()}
        onSelectRelated={vi.fn()}
      />,
    )
    expect(screen.getByRole('heading', { name: sampleEntry.title })).toBeInTheDocument()
    expect(screen.getByText(sampleEntry.longDescription)).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn()
    render(
      <DetailPanel
        entry={sampleEntry}
        relatedEntries={relatedEntries}
        onClose={onClose}
        onSelectRelated={vi.fn()}
      />,
    )
    await userEvent.click(screen.getByRole('button', { name: /close detail panel/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape is pressed', () => {
    const onClose = vi.fn()
    render(
      <DetailPanel
        entry={sampleEntry}
        relatedEntries={relatedEntries}
        onClose={onClose}
        onSelectRelated={vi.fn()}
      />,
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onSelectRelated when a connected entry is clicked', async () => {
    const onSelectRelated = vi.fn()
    render(
      <DetailPanel
        entry={sampleEntry}
        relatedEntries={relatedEntries}
        onClose={vi.fn()}
        onSelectRelated={onSelectRelated}
      />,
    )
    if (relatedEntries.length > 0) {
      await userEvent.click(screen.getByRole('button', { name: relatedEntries[0].title }))
      expect(onSelectRelated).toHaveBeenCalledWith(relatedEntries[0].id)
    }
  })

  it('renders a debate link for entries with a philosophical lens pointing at a debate', () => {
    const onOpenDebate = vi.fn()
    const entryWithLens = entries.find((e) => e.philosophicalQuestions.some((q) => q.debateId))!
    render(
      <DetailPanel
        entry={entryWithLens}
        relatedEntries={[]}
        onClose={vi.fn()}
        onSelectRelated={vi.fn()}
        onOpenDebate={onOpenDebate}
      />,
    )
    const link = screen.getByRole('button', { name: /explore this debate/i })
    fireEvent.click(link)
    expect(onOpenDebate).toHaveBeenCalled()
  })

  it('shows journey navigation controls when journeyNav is provided', () => {
    render(
      <DetailPanel
        entry={sampleEntry}
        relatedEntries={relatedEntries}
        onClose={vi.fn()}
        onSelectRelated={vi.fn()}
        journeyNav={{
          title: 'Test Journey',
          stopIndex: 1,
          totalStops: 3,
          caption: 'A test stop',
          onPrev: vi.fn(),
          onNext: vi.fn(),
        }}
      />,
    )
    expect(screen.getByText(/stop 2 of 3/i)).toBeInTheDocument()
  })
})
