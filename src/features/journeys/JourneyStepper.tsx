import type { Entry, Journey } from '../../types'
import styles from './JourneyStepper.module.css'

interface JourneyStepperProps {
  journey: Journey
  stopIndex: number
  entry: Entry | undefined
  onPrev: () => void
  onNext: () => void
  onExit: () => void
}

export function JourneyStepper({
  journey,
  stopIndex,
  entry,
  onPrev,
  onNext,
  onExit,
}: JourneyStepperProps) {
  const stop = journey.stops[stopIndex]
  return (
    <div className={styles.bar} role="group" aria-label="Guided journey controls">
      <div className={styles.info}>
        <p className={styles.journeyTitle}>{journey.title}</p>
        <h3 className={styles.stopTitle}>{entry?.title ?? 'Loading…'}</h3>
        <p className={styles.caption}>{stop?.caption}</p>
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.btn}
          onClick={onPrev}
          disabled={stopIndex === 0}
          aria-label="Previous stop"
        >
          ← Prev
        </button>
        <span style={{ fontSize: '0.78rem', color: 'var(--color-ink-faint)' }}>
          {stopIndex + 1} / {journey.stops.length}
        </span>
        <button
          type="button"
          className={styles.btn}
          onClick={onNext}
          disabled={stopIndex >= journey.stops.length - 1}
          aria-label="Next stop"
        >
          Next →
        </button>
        <button type="button" className={styles.exitBtn} onClick={onExit}>
          Exit journey
        </button>
      </div>
    </div>
  )
}
