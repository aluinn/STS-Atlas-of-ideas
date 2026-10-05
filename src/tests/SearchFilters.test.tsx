import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchFilters } from '../components/SearchFilters'
import { defaultFilters } from '../hooks/useUrlState'

describe('SearchFilters', () => {
  it('calls onChange with updated query text as the user types', async () => {
    const onChange = vi.fn()
    render(<SearchFilters filters={defaultFilters} onChange={onChange} resultCount={77} />)
    await userEvent.type(screen.getByLabelText(/search entries/i), 'kepler')
    expect(onChange).toHaveBeenCalled()
    const lastCall = onChange.mock.calls.at(-1)![0]
    expect(lastCall.q.endsWith('r')).toBe(true)
  })

  it('toggles a kind chip on and off', async () => {
    const onChange = vi.fn()
    const { rerender } = render(
      <SearchFilters filters={defaultFilters} onChange={onChange} resultCount={77} />,
    )
    await userEvent.click(screen.getByRole('button', { name: 'person' }))
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ kinds: ['person'] }))

    rerender(
      <SearchFilters
        filters={{ ...defaultFilters, kinds: ['person'] }}
        onChange={onChange}
        resultCount={10}
      />,
    )
    await userEvent.click(screen.getByRole('button', { name: 'person' }))
    expect(onChange).toHaveBeenLastCalledWith(expect.objectContaining({ kinds: [] }))
  })

  it('resets all filters when "Reset atlas" is clicked', async () => {
    const onChange = vi.fn()
    const dirtyFilters = { ...defaultFilters, q: 'darwin', kinds: ['person'] }
    render(<SearchFilters filters={dirtyFilters} onChange={onChange} resultCount={1} />)
    await userEvent.click(screen.getByRole('button', { name: /reset atlas/i }))
    expect(onChange).toHaveBeenCalledWith(defaultFilters)
  })

  it('shows the current result count', () => {
    render(<SearchFilters filters={defaultFilters} onChange={vi.fn()} resultCount={42} />)
    expect(screen.getByText(/42 entries match/i)).toBeInTheDocument()
  })
})
