import { describe, expect, it, beforeEach } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useUrlState, defaultFilters } from '../hooks/useUrlState'

function setUrl(search: string) {
  window.history.replaceState(null, '', `/${search}`)
}

describe('useUrlState', () => {
  beforeEach(() => {
    setUrl('')
  })

  it('defaults to the atlas view with empty filters', () => {
    const { result } = renderHook(() => useUrlState())
    expect(result.current[0].view).toBe('atlas')
    expect(result.current[0].filters).toEqual(defaultFilters)
  })

  it('parses an existing query string on mount', () => {
    setUrl('?view=timeline&entry=newton&q=gravity')
    const { result } = renderHook(() => useUrlState())
    expect(result.current[0].view).toBe('timeline')
    expect(result.current[0].entry).toBe('newton')
    expect(result.current[0].filters.q).toBe('gravity')
  })

  it('updating state writes it back into the URL as query params', () => {
    const { result } = renderHook(() => useUrlState())
    act(() => {
      result.current[1]({ view: 'debates', debate: 'kuhn-paradigms-revolutions' })
    })
    expect(window.location.search).toContain('view=debates')
    expect(window.location.search).toContain('debate=kuhn-paradigms-revolutions')
    expect(result.current[0].view).toBe('debates')
  })

  it('omits default values from the serialized URL to keep links tidy', () => {
    const { result } = renderHook(() => useUrlState())
    act(() => {
      result.current[1]({ view: 'atlas' })
    })
    expect(window.location.search).toBe('')
  })

  it('round-trips filter arrays through the URL', () => {
    const { result } = renderHook(() => useUrlState())
    act(() => {
      result.current[1]({
        filters: { ...defaultFilters, kinds: ['person', 'idea'], onlyPhilosophy: true },
      })
    })
    expect(window.location.search).toContain('kinds=person%2Cidea')
    expect(window.location.search).toContain('philosophy=1')
    expect(result.current[0].filters.kinds).toEqual(['person', 'idea'])
    expect(result.current[0].filters.onlyPhilosophy).toBe(true)
  })
})
