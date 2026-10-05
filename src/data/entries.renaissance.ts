import type { Entry } from '../types'

export const renaissanceEntries: Entry[] = [
  {
    id: 'leonardo-da-vinci',
    slug: 'leonardo-da-vinci',
    title: 'Leonardo da Vinci',
    subtitle: 'Observation at the meeting point of art and anatomy',
    kind: 'person',
    period: 'renaissance',
    summary:
      'A painter and engineer whose anatomical drawings and mechanical studies show how Renaissance observational skill, developed for art, fed directly into natural inquiry.',
    longDescription:
      "Leonardo's notebooks combine meticulous dissection-based anatomical studies with investigations of fluid flow, flight, and mechanics, almost none of which he published in his lifetime. His work illustrates how the period's new emphasis on direct observation and naturalistic representation — developed in artists' workshops as much as in universities — became a resource for natural philosophy.",
    startYear: 1452,
    endYear: 1519,
    dateDisplay: '1452–1519',
    approximateDate: false,
    latitude: 43.7696,
    longitude: 11.2558,
    places: [{ name: 'Florence', latitude: 43.7696, longitude: 11.2558 }],
    transregional: false,
    people: ['leonardo-da-vinci'],
    cultures: ['Italian'],
    disciplines: ['anatomy', 'engineering', 'art'],
    themes: ['observation', 'craft-and-instruments'],
    philosophicalQuestions: [
      {
        prompt:
          'Is careful naturalistic drawing a form of scientific evidence, or merely an aid to it?',
      },
    ],
    historicalSignificance:
      'Exemplifies the blurred boundary, before "science" existed as a distinct profession, between artisanal skill, artistic training, and natural inquiry.',
    commonMyth:
      'That Leonardo was a lone genius who single-handedly anticipated modern engineering centuries early.',
    historicalComplication:
      "Most of Leonardo's technical insights remained unpublished and had little direct influence on subsequent science; his reputation as a prophetic inventor was built largely by later admirers.",
    sources: [
      {
        author: 'Martin Kemp',
        title: 'Leonardo da Vinci: The Marvellous Works of Nature and Man',
        year: '1981',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['vesalius'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'vesalius',
    slug: 'vesalius',
    title: 'Andreas Vesalius',
    subtitle: 'Dissection against inherited anatomical authority',
    kind: 'person',
    period: 'renaissance',
    summary:
      "Vesalius's De humani corporis fabrica (1543) used first-hand human dissection to correct errors in Galen's anatomy that had gone largely unchallenged for over a millennium.",
    longDescription:
      'Teaching at Padua, Vesalius performed and illustrated dissections himself rather than relying on assistants and inherited texts, finding hundreds of discrepancies with Galenic anatomy, much of which Galen had based on animal rather than human bodies. His insistence that anatomical claims be checked against the body itself, rather than against authoritative text, became a touchstone for later empirical method.',
    startYear: 1514,
    endYear: 1564,
    dateDisplay: '1514–1564',
    approximateDate: false,
    latitude: 45.4064,
    longitude: 11.8768,
    places: [{ name: 'Padua', latitude: 45.4064, longitude: 11.8768, role: 'institution' }],
    transregional: false,
    people: ['vesalius'],
    cultures: ['Flemish', 'Italian'],
    disciplines: ['anatomy', 'medicine'],
    themes: ['observation', 'overturning-authority'],
    philosophicalQuestions: [
      {
        prompt:
          'When direct observation conflicts with a long-trusted authority, how much observational evidence should it take to overturn that authority?',
      },
    ],
    historicalSignificance:
      "Marked a decisive moment in anatomy's shift from textual commentary toward direct, repeatable observation as its evidential base.",
    sources: [
      {
        author: 'Andrew Cunningham',
        title: 'The Anatomical Renaissance',
        year: '1997',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['leonardo-da-vinci', 'galileo'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'copernicus',
    slug: 'copernicus',
    title: 'Nicolaus Copernicus',
    subtitle: 'A Sun-centred alternative to Ptolemy',
    kind: 'person',
    period: 'renaissance',
    summary:
      'Copernicus proposed, in De revolutionibus orbium coelestium (1543), that the Earth and planets orbit the Sun, motivated partly by a conviction that this arrangement was mathematically simpler and more harmonious.',
    longDescription:
      'Copernicus retained much of the older toolkit — circular orbits, epicycles — while relocating the Sun to the centre, which simplified the explanation of retrograde planetary motion and the relative order of the planets. He had no decisive observational proof available to him; his case rested substantially on simplicity, harmony, and mathematical elegance, which raised a question that still occupies philosophers of science.',
    startYear: 1473,
    endYear: 1543,
    dateDisplay: '1473–1543',
    approximateDate: false,
    latitude: 54.3522,
    longitude: 19.67,
    places: [
      { name: 'Frombork', latitude: 54.3522, longitude: 19.67, role: 'residence' },
      { name: 'Kraków', latitude: 50.0647, longitude: 19.945, role: 'education' },
    ],
    transregional: false,
    people: ['copernicus'],
    cultures: ['Polish'],
    disciplines: ['astronomy', 'mathematics'],
    themes: ['cosmology', 'simplicity-and-truth'],
    theoryStatus: 'modified',
    theoryStatusNote:
      "Heliocentrism as Copernicus proposed it (uniform circular orbits) was itself superseded by Kepler's elliptical orbits, though the Sun-centred arrangement survived.",
    philosophicalQuestions: [
      {
        prompt:
          'Are simplicity and mathematical elegance genuine evidence that a theory is true, or just an aesthetic preference?',
        debateId: 'scientific-realism-no-miracles',
      },
    ],
    historicalSignificance:
      "Reopened the question of the Earth's place in the cosmos in a way that eventually forced a reconstruction of physics, not just astronomy.",
    commonMyth: 'That Copernicus proved heliocentrism with decisive new observations.',
    historicalComplication:
      "Copernicus's model was not more accurate than Ptolemy's at the time, and remained a minority, controversial position for roughly a century after publication.",
    sources: [
      { author: 'Owen Gingerich', title: 'The Book Nobody Read', year: '2004', type: 'secondary' },
      {
        author: 'Nicolaus Copernicus',
        title: 'De revolutionibus orbium coelestium',
        year: '1543',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['de-revolutionibus', 'ptolemy', 'tycho-brahe', 'kepler', 'pythagoras'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'de-revolutionibus',
    slug: 'de-revolutionibus',
    title: 'De Revolutionibus Orbium Coelestium',
    subtitle: "Copernicus's heliocentric treatise",
    kind: 'text',
    period: 'renaissance',
    summary:
      "Published in the year of Copernicus's death, this treatise argued mathematically for a heliocentric cosmos, famously left largely unread in detail by many who cited it.",
    longDescription:
      'Historian Owen Gingerich\'s census of surviving copies found that most early owners read only the non-technical preface, skipping the demanding geometric argument — complicating the idea of a single moment of "reception." The book\'s preface, added by Andreas Osiander, also framed the heliocentric arrangement as a convenient mathematical device rather than a literal claim, a hedge Copernicus himself may not have intended.',
    startYear: 1543,
    endYear: 1543,
    dateDisplay: '1543',
    approximateDate: false,
    latitude: 50.0875,
    longitude: 14.4213,
    places: [{ name: 'Nuremberg (printed)', latitude: 49.4521, longitude: 11.0767 }],
    transregional: false,
    people: ['copernicus'],
    cultures: ['Polish', 'European'],
    disciplines: ['astronomy'],
    themes: ['cosmology', 'texts-and-circulation'],
    philosophicalQuestions: [
      {
        prompt:
          "Does it matter, for a theory's truth, whether its author intends it realistically or merely as a useful calculating device?",
      },
    ],
    historicalSignificance:
      'A foundational text of the "Scientific Revolution" whose actual early readership was narrower and more technical than its symbolic importance suggests.',
    sources: [
      { author: 'Owen Gingerich', title: 'The Book Nobody Read', year: '2004', type: 'secondary' },
    ],
    relatedEntryIds: ['copernicus'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'tycho-brahe',
    slug: 'tycho-brahe',
    title: 'Tycho Brahe',
    subtitle: 'The most precise naked-eye observations in history',
    kind: 'person',
    period: 'renaissance',
    summary:
      'A Danish nobleman who built a lavishly funded observatory and amassed the most accurate pre-telescopic astronomical data ever recorded, while rejecting full Copernican heliocentrism.',
    longDescription:
      "At his island observatory of Uraniborg, Tycho directed a staff of assistants using custom-built large-scale instruments to record planetary positions with unprecedented precision. He proposed his own geo-heliocentric compromise model, illustrating that better data does not automatically settle which cosmological interpretation is correct — that work fell to Kepler, who inherited Tycho's observations after his death.",
    startYear: 1546,
    endYear: 1601,
    dateDisplay: '1546–1601',
    approximateDate: false,
    latitude: 55.9,
    longitude: 12.7,
    places: [
      { name: 'Uraniborg, Hven', latitude: 55.9, longitude: 12.7, role: 'observatory' },
      { name: 'Prague', latitude: 50.0755, longitude: 14.4378, role: 'later patronage' },
    ],
    transregional: false,
    people: ['tycho-brahe'],
    cultures: ['Danish'],
    disciplines: ['astronomy'],
    themes: ['instruments-and-method', 'institutions-and-funding'],
    philosophicalQuestions: [
      {
        prompt:
          'Can better observational data alone settle a theoretical dispute, or does interpreting data always require prior theoretical commitments?',
      },
    ],
    historicalSignificance:
      "His meticulously compiled data made Kepler's discovery of elliptical orbits possible, showing how instrument-driven data collection and theoretical insight can be separated across people and decades.",
    sources: [
      {
        author: 'John Robert Christianson',
        title: "On Tycho's Island",
        year: '2000',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['copernicus', 'kepler'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'kepler',
    slug: 'kepler',
    title: 'Johannes Kepler',
    subtitle: 'Elliptical orbits and a search for cosmic harmony',
    kind: 'person',
    period: 'renaissance',
    summary:
      "Using Tycho Brahe's observational data, Kepler discovered that planets move in ellipses, not circles, while remaining motivated throughout by a Pythagorean-inflected search for mathematical harmony in the cosmos.",
    longDescription:
      "Kepler's three laws of planetary motion dramatically improved on Copernicus's circular model, yet Kepler arrived at them while pursuing a mystical project relating planetary orbits to nested geometric solids and musical harmonies, much of which later astronomy discarded. His career is a reminder that productive scientific work and ideas later judged mistaken, or even mystical, were often entangled in the same mind and the same research program.",
    startYear: 1571,
    endYear: 1630,
    dateDisplay: '1571–1630',
    approximateDate: false,
    latitude: 50.0755,
    longitude: 14.4378,
    places: [{ name: 'Prague', latitude: 50.0755, longitude: 14.4378, role: 'institution' }],
    transregional: false,
    people: ['kepler'],
    cultures: ['German'],
    disciplines: ['astronomy', 'mathematics'],
    themes: ['cosmology', 'mathematical-order'],
    theoryStatus: 'modified',
    theoryStatusNote:
      "Kepler's laws remain accurate within Newtonian mechanics and are still taught; his harmonic cosmology was not retained.",
    philosophicalQuestions: [
      {
        prompt:
          "If a scientist's motivating beliefs (cosmic harmony) are later rejected, does that undermine the validity of the discoveries (elliptical orbits) those beliefs helped produce?",
      },
    ],
    historicalSignificance:
      "Kepler's laws were essential building blocks for Newton's unification of celestial and terrestrial mechanics.",
    commonMyth:
      'That Kepler was a purely modern, secular mathematician who happened to also dabble in mysticism.',
    historicalComplication:
      'Kepler saw his harmonic and astrological interests as continuous with, not separate from, his mathematical astronomy.',
    sources: [
      {
        author: 'James Voelkel',
        title: "The Composition of Kepler's Astronomia Nova",
        year: '2001',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['tycho-brahe', 'copernicus', 'newton', 'pythagoras'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'galileo',
    slug: 'galileo',
    title: 'Galileo Galilei',
    subtitle: 'Telescopic observation and a mathematical physics of motion',
    kind: 'person',
    period: 'renaissance',
    summary:
      'Galileo used a telescope to find evidence difficult to reconcile with a purely geocentric cosmos, and developed a mathematical treatment of falling bodies that broke with Aristotelian physics.',
    longDescription:
      "Galileo's telescopic observations of the Moon's terrain, Jupiter's moons, and the phases of Venus undermined Aristotelian claims about the heavens' perfection and offered circumstantial support for Copernicanism. His 1633 trial and condemnation by the Roman Inquisition, after earlier compromise, shows the entanglement of natural philosophy with theological and institutional authority, not a simple story of science versus religion.",
    startYear: 1564,
    endYear: 1642,
    dateDisplay: '1564–1642',
    approximateDate: false,
    latitude: 45.4064,
    longitude: 11.8768,
    places: [
      { name: 'Padua', latitude: 45.4064, longitude: 11.8768, role: 'institution' },
      { name: 'Florence', latitude: 43.7696, longitude: 11.2558, role: 'patronage' },
      { name: 'Rome', latitude: 41.9028, longitude: 12.4964, role: 'trial' },
    ],
    transregional: false,
    people: ['galileo'],
    cultures: ['Italian'],
    disciplines: ['astronomy', 'physics'],
    themes: ['instruments-and-method', 'overturning-authority', 'religion-and-science'],
    philosophicalQuestions: [
      {
        prompt:
          'Can observation ever be theory-neutral, or does what you see through a telescope already depend on trusting the instrument and a theory of optics?',
        debateId: 'induction-problem',
      },
      { prompt: 'When should a new, unfamiliar instrument be trusted over naked-eye tradition?' },
    ],
    historicalSignificance:
      'A central figure in dismantling Aristotelian cosmology and physics and in establishing telescopic observation as scientifically authoritative.',
    commonMyth:
      "That Galileo's trial was a simple, inevitable clash between rational science and irrational religious dogma.",
    historicalComplication:
      "The Church had tolerated Copernicanism as a calculating hypothesis; Galileo's conflict involved specific political missteps, rival philosophers, and disputed biblical interpretation, not religion as such opposing science as such.",
    sources: [
      { author: 'Mario Biagioli', title: 'Galileo, Courtier', year: '1993', type: 'secondary' },
      { author: 'Stillman Drake', title: 'Galileo at Work', year: '1978', type: 'secondary' },
    ],
    relatedEntryIds: ['galileo-telescope', 'copernicus', 'aristotle', 'descartes'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'galileo-telescope',
    slug: 'galileo-telescope',
    title: "Galileo's Telescope",
    subtitle: 'An instrument that had to earn its credibility',
    kind: 'instrument',
    period: 'renaissance',
    summary:
      'Galileo improved existing Dutch spyglass designs into an instrument capable of serious astronomical observation, but contemporaries disputed whether its images could be trusted.',
    longDescription:
      "Some of Galileo's contemporaries, including capable astronomers, initially saw blurred or inconsistent results through early telescopes, or doubted that a device could reveal truths invisible to the naked eye. Galileo had to argue, demonstrate, and build a case for the instrument's reliability alongside his case for what it showed — a vivid historical example of why trust in instruments is itself something that has to be established, not assumed.",
    startYear: 1609,
    endYear: 1610,
    dateDisplay: '1609–1610',
    approximateDate: false,
    latitude: 45.4064,
    longitude: 11.8768,
    places: [{ name: 'Padua', latitude: 45.4064, longitude: 11.8768 }],
    transregional: false,
    people: ['galileo'],
    cultures: ['Italian', 'Dutch'],
    disciplines: ['astronomy', 'optics'],
    themes: ['instruments-and-method'],
    philosophicalQuestions: [
      {
        prompt:
          'What would it take to convince a skeptic that a new instrument reveals truth rather than artefacts of the device itself?',
        debateId: 'entity-realism-hacking',
      },
    ],
    historicalSignificance:
      'A case study in the "experimenter\'s regress": establishing that an instrument works reliably, and that its outputs are not mere artefacts, is itself a contested achievement.',
    sources: [
      {
        author: 'Albert Van Helden',
        title: '"The Invention of the Telescope"',
        year: '1977',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['galileo', 'ibn-al-haytham'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'descartes',
    slug: 'descartes',
    title: 'René Descartes',
    subtitle: 'Mechanical philosophy and the method of doubt',
    kind: 'person',
    period: 'early-modern',
    summary:
      'Descartes proposed a mechanical philosophy of nature — matter in motion, explained without purposes — alongside a method of systematic doubt meant to secure certain foundations for knowledge.',
    longDescription:
      'Working largely in the Dutch Republic, Descartes argued that the physical world operates through the contact and motion of particles, extending a modified atomism-without-void to explain everything from magnetism to animal physiology mechanically. His Discourse on Method (1637) and Meditations (1641) also tried to place knowledge on certain foundations by doubting everything not indubitable, shaping the entire later debate about scientific method and the relationship between mind and matter.',
    startYear: 1596,
    endYear: 1650,
    dateDisplay: '1596–1650',
    approximateDate: false,
    latitude: 52.1601,
    longitude: 4.497,
    places: [{ name: 'Leiden / Dutch Republic', latitude: 52.1601, longitude: 4.497 }],
    transregional: false,
    people: ['descartes'],
    cultures: ['French', 'Dutch'],
    disciplines: ['natural philosophy', 'mathematics', 'philosophy'],
    themes: ['method', 'matter-theory'],
    philosophicalQuestions: [
      {
        prompt:
          'Can systematic doubt ever reach a secure starting point, or does all inquiry rest on some assumptions that cannot themselves be proven?',
        debateId: 'induction-problem',
      },
    ],
    historicalSignificance:
      'His mechanical philosophy offered a rival framework to Aristotelianism that shaped the vocabulary of early modern physics, even where his specific physical theories (such as vortex-based planetary motion) were later abandoned.',
    theoryStatus: 'superseded',
    sources: [
      {
        author: 'Stephen Gaukroger',
        title: 'Descartes: An Intellectual Biography',
        year: '1995',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['galileo', 'boyle', 'newton', 'democritus'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'royal-society',
    slug: 'royal-society',
    title: 'The Royal Society of London',
    subtitle: 'An institution built around collective experiment and witnessing',
    kind: 'institution',
    period: 'early-modern',
    summary:
      'Founded in 1660, the Royal Society institutionalised experimental natural philosophy, publishing results, encouraging correspondence, and relying on collective witnessing to validate claims.',
    longDescription:
      "The Society's early culture, especially around figures like Robert Boyle, developed specific social technologies for producing credible facts: experiments performed before witnesses, detailed published reports allowing (in principle) replication, and a studied avoidance of metaphysical dispute in favour of careful fact-reporting. Its early fellowship was wealthy, male, and largely Anglican, raising questions about whose testimony counted as credible.",
    startYear: 1660,
    dateDisplay: 'founded 1660',
    approximateDate: false,
    latitude: 51.5072,
    longitude: -0.1276,
    places: [{ name: 'London', latitude: 51.5072, longitude: -0.1276 }],
    transregional: false,
    people: ['boyle', 'newton'],
    cultures: ['English'],
    disciplines: ['natural philosophy'],
    themes: ['institutions-and-funding', 'instruments-and-method', 'exclusion-and-access'],
    philosophicalQuestions: [
      {
        prompt:
          'Why should the testimony of a credible witness, rather than the experiment itself, count as evidence — and who got to be a credible witness?',
        debateId: 'objectivity-values',
      },
    ],
    historicalSignificance:
      'Pioneered institutional norms — peer witnessing, published replication, correspondence networks — that remain recognisable in scientific practice today.',
    sources: [
      {
        author: 'Steven Shapin',
        title: 'A Social History of Truth',
        year: '1994',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['boyle', 'newton'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'boyle',
    slug: 'boyle',
    title: 'Robert Boyle',
    subtitle: 'The air-pump and the making of experimental facts',
    kind: 'person',
    period: 'early-modern',
    summary:
      'Boyle\'s air-pump experiments on vacuum and air pressure, conducted before witnesses and reported in painstaking detail, helped define what counted as a properly established "matter of fact."',
    longDescription:
      "Boyle's dispute with Thomas Hobbes over the air-pump — Hobbes doubted the instrument's reliability and the whole experimental program's philosophical standing — is a foundational case study in how scientific facts get socially and materially constructed as well as discovered. Boyle's preference for cautious, piecemeal experimental claims over grand systematic theorising became a template for later experimental science.",
    startYear: 1627,
    endYear: 1691,
    dateDisplay: '1627–1691',
    approximateDate: false,
    latitude: 51.5072,
    longitude: -0.1276,
    places: [{ name: 'London', latitude: 51.5072, longitude: -0.1276 }],
    transregional: false,
    people: ['boyle', 'hobbes'],
    cultures: ['Anglo-Irish'],
    disciplines: ['natural philosophy', 'chemistry'],
    themes: ['instruments-and-method', 'experiment'],
    philosophicalQuestions: [
      {
        prompt:
          'What makes an experimental result a "matter of fact" rather than a disputable interpretation — and can that line ever be drawn purely on evidence?',
        debateId: 'objectivity-values',
      },
    ],
    historicalSignificance:
      'The Boyle–Hobbes dispute remains a touchstone in the history and sociology of science for how experimental authority gets established.',
    sources: [
      {
        author: 'Steven Shapin',
        title: 'Leviathan and the Air-Pump',
        year: '1985',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['royal-society', 'descartes'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'newton',
    slug: 'newton',
    title: 'Isaac Newton',
    subtitle: 'Universal gravitation, and a private life of alchemy and theology',
    kind: 'person',
    period: 'early-modern',
    summary:
      "Newton's Principia (1687) unified terrestrial and celestial mechanics under a single law of gravitation, even though Newton himself could not explain how gravity acted at a distance and spent at least as much time on alchemy and biblical chronology.",
    longDescription:
      'The Principia\'s mathematical success in predicting planetary motion, tides, and projectile paths was enormous, yet Newton\'s refusal to specify a mechanism for gravitational action at a distance ("hypotheses non fingo") troubled many contemporaries attached to mechanical philosophy. Decades of private manuscripts, uncovered and studied seriously only in the twentieth century, show Newton devoted enormous energy to alchemical experiment and prophetic biblical interpretation alongside his mathematical physics.',
    startYear: 1642,
    endYear: 1727,
    dateDisplay: '1642–1727',
    approximateDate: false,
    latitude: 52.2043,
    longitude: 0.1218,
    places: [{ name: 'Cambridge', latitude: 52.2043, longitude: 0.1218, role: 'institution' }],
    transregional: false,
    people: ['newton'],
    cultures: ['English'],
    disciplines: ['physics', 'mathematics', 'alchemy'],
    themes: ['cosmology', 'matter-theory'],
    theoryStatus: 'limited-domain',
    theoryStatusNote:
      'Newtonian mechanics remains highly effective and is still used for almost all practical engineering and orbital calculation; it was later shown to be a limited-domain approximation of relativistic and quantum physics, not simply "wrong."',
    philosophicalQuestions: [
      {
        prompt:
          'Can a theory be enormously successful in practice while its underlying metaphysical interpretation (what gravity actually is) remains genuinely disputed?',
        debateId: 'scientific-realism-no-miracles',
      },
    ],
    historicalSignificance:
      'The Principia became the paradigm of successful mathematical physics for the following two centuries, and the model later philosophers of science used when asking what makes a theory scientific at all.',
    commonMyth:
      'That Newton was a purely rational, secular mathematician uninterested in mysticism or religion.',
    historicalComplication:
      'Newton\'s alchemical notebooks and theological writings, now known to be extensive, were deliberately downplayed by earlier biographers uncomfortable with a less tidy picture of the "father of modern physics."',
    sources: [
      {
        author: 'Richard Westfall',
        title: 'Never at Rest: A Biography of Isaac Newton',
        year: '1980',
        type: 'secondary',
      },
      {
        author: 'Betty Jo Teeter Dobbs',
        title: 'The Janus Faces of Genius',
        year: '1991',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['principia', 'kepler', 'descartes', 'royal-society'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'principia',
    slug: 'principia',
    title: 'Philosophiæ Naturalis Principia Mathematica',
    subtitle: "Newton's mathematical unification of motion",
    kind: 'text',
    period: 'early-modern',
    summary:
      "Newton's 1687 treatise derived planetary and terrestrial motion from three laws of motion and universal gravitation, funded and championed by Edmond Halley.",
    longDescription:
      "The Principia used geometric mathematics (not the calculus Newton had also developed) to present its results, in a style intended to meet the standards of rigorous classical demonstration. Its predictive success — including Halley's correct prediction of a comet's return using Newtonian mechanics — became the paradigm case later philosophers of science used when theorising about confirmation and scientific success.",
    startYear: 1687,
    endYear: 1687,
    dateDisplay: '1687',
    approximateDate: false,
    latitude: 51.5072,
    longitude: -0.1276,
    places: [{ name: 'London (published)', latitude: 51.5072, longitude: -0.1276 }],
    transregional: false,
    people: ['newton'],
    cultures: ['English'],
    disciplines: ['physics', 'mathematics'],
    themes: ['texts-and-circulation', 'cosmology'],
    philosophicalQuestions: [
      {
        prompt:
          "Does a theory's remarkable predictive success (like Halley's comet) count as near-miraculous evidence that it is true?",
        debateId: 'scientific-realism-no-miracles',
      },
    ],
    historicalSignificance:
      'Became the touchstone example in philosophy of science for discussions of confirmation, explanation, and theory change.',
    sources: [
      {
        author: 'I. Bernard Cohen',
        title: 'The Newtonian Revolution',
        year: '1980',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['newton'],
    confidence: 'established',
    contentStatus: 'complete',
  },
]
