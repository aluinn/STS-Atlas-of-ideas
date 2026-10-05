import styles from './Intro.module.css'

interface IntroProps {
  onEnter: () => void
  reducedMotion: boolean
}

export function Intro({ onEnter, reducedMotion }: IntroProps) {
  return (
    <div className={styles.screen}>
      <div className={styles.backdrop} aria-hidden />
      <svg
        className={`${styles.compass} ${reducedMotion ? '' : styles.compassSpin}`}
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.3" />
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i / 32) * Math.PI * 2
          const long = i % 8 === 0
          const r1 = long ? 30 : 36
          return (
            <line
              key={i}
              x1={50 + Math.cos(angle) * r1}
              y1={50 + Math.sin(angle) * r1}
              x2={50 + Math.cos(angle) * 46}
              y2={50 + Math.sin(angle) * 46}
              stroke="currentColor"
              strokeWidth={long ? 0.5 : 0.25}
            />
          )
        })}
        <path d="M50 8 L54 50 L50 92 L46 50 Z" fill="currentColor" opacity="0.7" />
        <path d="M8 50 L50 46 L92 50 L50 54 Z" fill="currentColor" opacity="0.5" />
      </svg>

      <div className={styles.content}>
        <p className={styles.eyebrow}>An Interactive Atlas</p>
        <h1 className={styles.title}>STS Interactive Map</h1>
        <p className={styles.tagline}>"Knowledge has never travelled in a straight line."</p>
        <p className={styles.body}>
          Scientific knowledge has moved through translation, argument, observation, trade, empire,
          craft, experiment, exclusion, and collaboration — carried by people, instruments,
          institutions, and ideas across centuries and continents. This atlas maps that movement,
          and asks what philosophy of science can teach us about how to read it.
        </p>
        <button type="button" className={styles.enterBtn} onClick={onEnter} autoFocus>
          Enter the Atlas
        </button>
        <p className={styles.skipNote}>You won't see this introduction again on this device.</p>
      </div>
    </div>
  )
}
