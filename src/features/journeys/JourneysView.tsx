import type { Journey } from '../../types'
import styles from './JourneysView.module.css'

interface JourneysViewProps {
  journeys: Journey[]
  onBeginJourney: (id: string) => void
}

export function JourneysView({ journeys, onBeginJourney }: JourneysViewProps) {
  return (
    <div className={styles.wrap}>
      <p className={styles.intro}>
        Guided journeys spotlight one stop at a time, panning the map and explaining why each stop
        connects to the next. Begin any journey below — you can leave it at any point and explore
        freely.
      </p>
      <div className={styles.grid}>
        {journeys.map((j) => (
          <button
            key={j.id}
            type="button"
            className={styles.card}
            onClick={() => onBeginJourney(j.id)}
          >
            <span className={styles.stopCount}>{j.stops.length} stops</span>
            <h3 className={styles.cardTitle}>{j.title}</h3>
            <p className={styles.cardSummary}>{j.summary}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
