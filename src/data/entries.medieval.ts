import type { Entry } from '../types'

export const medievalEntries: Entry[] = [
  {
    id: 'baghdad-translation-movement',
    slug: 'baghdad-translation-movement',
    title: 'The Baghdad Translation Movement',
    subtitle: 'Greek, Persian, and Indian knowledge rendered into Arabic',
    kind: 'event',
    period: 'medieval-translation',
    summary:
      'Under Abbasid patronage, scholars in Baghdad translated, corrected, and extended Greek, Persian, and Indian scientific and philosophical texts into Arabic over roughly two centuries.',
    longDescription:
      'Far from passive copying, this was an active, critical enterprise: translators such as Hunayn ibn Ishaq cross-checked manuscripts, corrected errors in the Greek originals, and added commentary that frequently advanced the underlying science, especially in astronomy, optics, and medicine. The movement drew on Christian, Muslim, Jewish, and Zoroastrian scholars working together, funded by caliphal patronage and by wealthy private sponsors.',
    startYear: 750,
    endYear: 950,
    dateDisplay: 'c. 750–950 CE',
    approximateDate: true,
    latitude: 33.3152,
    longitude: 44.3661,
    places: [{ name: 'Baghdad', latitude: 33.3152, longitude: 44.3661 }],
    transregional: false,
    people: [],
    cultures: ['Islamic', 'Persian', 'Syriac-Christian', 'Jewish'],
    disciplines: ['astronomy', 'medicine', 'optics', 'philosophy'],
    themes: ['translation-and-transmission', 'non-western-origins', 'institutions-and-funding'],
    philosophicalQuestions: [
      {
        prompt:
          'Is translation ever a neutral act of transmission, or does every translation reinterpret and transform the knowledge it carries?',
      },
    ],
    historicalSignificance:
      'Preserved, corrected, and extended a large share of surviving Greek scientific and philosophical writing, and produced original advances later transmitted to medieval Europe via Islamic Iberia and Sicily.',
    commonMyth:
      'That medieval Islamic scholars merely "preserved" Greek knowledge for later European use, like a library in storage.',
    historicalComplication:
      'Scholars in Baghdad, Damascus, and Cairo actively criticised, corrected, and superseded Greek sources — for example, refining Ptolemaic astronomy centuries before Copernicus used some of the same critical techniques.',
    sources: [
      {
        author: 'Dimitri Gutas',
        title: 'Greek Thought, Arabic Culture',
        year: '1998',
        type: 'secondary',
      },
      { author: 'Jonathan Lyons', title: 'The House of Wisdom', year: '2009', type: 'secondary' },
    ],
    relatedEntryIds: [
      'house-of-wisdom',
      'ibn-al-haytham',
      'al-khwarizmi',
      'alexandria-library',
      'medieval-universities',
    ],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'house-of-wisdom',
    slug: 'house-of-wisdom',
    title: 'The House of Wisdom (Bayt al-Hikma)',
    subtitle: 'A caliphal library, observatory, and translation academy',
    kind: 'institution',
    period: 'medieval-translation',
    summary:
      'A Baghdad institution associated with Abbasid patronage of translation, astronomy, and mathematics, though its exact scale and organisation remain debated among historians.',
    longDescription:
      "Traditionally described as a grand library and research academy founded under Caliph al-Mansur and expanded under al-Rashid and al-Ma'mun, the House of Wisdom has become a symbol of the Baghdad translation movement. Recent scholarship cautions that some popular accounts exaggerate its institutional unity; what is well documented is sustained caliphal and private patronage for astronomers, mathematicians, and translators working in the city.",
    startYear: 800,
    endYear: 1258,
    dateDisplay: 'c. 800 CE – 1258 CE',
    approximateDate: true,
    latitude: 33.3152,
    longitude: 44.3661,
    places: [{ name: 'Baghdad', latitude: 33.3152, longitude: 44.3661 }],
    transregional: false,
    people: [],
    cultures: ['Islamic'],
    disciplines: ['astronomy', 'mathematics', 'philosophy'],
    themes: ['institutions-and-funding', 'non-western-origins'],
    philosophicalQuestions: [
      {
        prompt:
          'How should historians weigh popular, symbolically powerful accounts of an institution against a thinner, more cautious documentary record?',
      },
    ],
    historicalSignificance:
      'Whatever its precise institutional form, it stands for a model of concentrated state patronage for research that recurs across the atlas, from Alexandria to the Royal Society to Los Alamos.',
    commonMyth:
      'That the House of Wisdom was a single purpose-built "university" destroyed in one dramatic moment by the 1258 Mongol siege.',
    historicalComplication:
      "Its scale and institutional coherence are debated by specialists; Baghdad's scholarly life also continued, in diminished and altered form, after 1258.",
    sources: [
      { author: 'Jonathan Lyons', title: 'The House of Wisdom', year: '2009', type: 'secondary' },
    ],
    relatedEntryIds: ['baghdad-translation-movement', 'al-khwarizmi'],
    confidence: 'contested',
    contentStatus: 'complete',
  },
  {
    id: 'ibn-al-haytham',
    slug: 'ibn-al-haytham',
    title: 'Ibn al-Haytham (Alhazen)',
    subtitle: 'Experimental optics and a new theory of vision',
    kind: 'person',
    period: 'medieval-translation',
    summary:
      'A mathematician and natural philosopher whose Book of Optics used controlled experiment and geometric reasoning to argue that vision results from light entering the eye, not rays emitted by it.',
    longDescription:
      'Ibn al-Haytham combined mathematics, careful apparatus (including a camera obscura-like device), and systematic experiment to overturn the dominant "extramission" theory of vision in favour of an "intromission" account closer to the modern view. His insistence on testing hypotheses against controlled observation, and his explicit methodological reflections on doubt and verification, influenced later European optics through Latin translations of his work.',
    startYear: 965,
    endYear: 1040,
    dateDisplay: 'c. 965–1040 CE',
    approximateDate: true,
    latitude: 30.0444,
    longitude: 31.2357,
    places: [
      { name: 'Basra', latitude: 30.5085, longitude: 47.7804, role: 'birthplace' },
      { name: 'Cairo', latitude: 30.0444, longitude: 31.2357, role: 'institution' },
    ],
    transregional: false,
    people: ['ibn-al-haytham'],
    cultures: ['Islamic'],
    disciplines: ['optics', 'mathematics'],
    themes: ['instruments-and-method', 'non-western-origins', 'experiment'],
    philosophicalQuestions: [
      {
        prompt:
          'When should a new instrument or experimental setup be trusted over inherited authority and everyday perception?',
        debateId: 'induction-problem',
      },
    ],
    historicalSignificance:
      'Often credited with articulating an early, explicit experimental method centuries before the "Scientific Revolution," complicating any story that locates the birth of experimental science solely in seventeenth-century Europe.',
    sources: [
      {
        author: 'A.I. Sabra',
        title: '"The Optics of Ibn al-Haytham", translation and commentary',
        year: '1989',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['baghdad-translation-movement', 'galileo-telescope'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'al-khwarizmi',
    slug: 'al-khwarizmi',
    title: 'Muhammad ibn Musa al-Khwarizmi',
    subtitle: 'Algebra, algorithm, and astronomical tables',
    kind: 'person',
    period: 'medieval-translation',
    summary:
      'A mathematician and astronomer at the Abbasid court whose systematic treatment of equations gave algebra its name and method, and whose astronomical tables were used across the Islamic world and medieval Europe.',
    longDescription:
      'Working in Baghdad, al-Khwarizmi wrote a treatise on solving linear and quadratic equations (al-jabr, the origin of "algebra") using systematic, step-by-step procedures — the origin, via Latin translation of his name, of the word "algorithm." He also compiled astronomical tables combining Indian, Persian, and Greek sources, illustrating how thoroughly cross-cultural ninth-century Baghdad mathematics was.',
    startYear: 780,
    endYear: 850,
    dateDisplay: 'c. 780–850 CE',
    approximateDate: true,
    latitude: 33.3152,
    longitude: 44.3661,
    places: [{ name: 'Baghdad', latitude: 33.3152, longitude: 44.3661 }],
    transregional: false,
    people: ['al-khwarizmi'],
    cultures: ['Islamic', 'Persian'],
    disciplines: ['mathematics', 'astronomy'],
    themes: ['non-western-origins', 'translation-and-transmission'],
    philosophicalQuestions: [
      {
        prompt:
          'Does crediting a method to one named author obscure the many cultures whose numerals and techniques it synthesised?',
      },
    ],
    historicalSignificance:
      'His systematic methods for solving equations underlie the word "algebra" and shaped mathematics across the Islamic world and, through Latin translation, medieval Europe.',
    sources: [
      {
        author: 'Jens Høyrup',
        title: 'Al-Khwarizmi, Ibn Turk, and the Babylonian Tradition',
        year: '1998',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['baghdad-translation-movement', 'house-of-wisdom'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'medieval-universities',
    slug: 'medieval-universities',
    title: 'Medieval European Universities',
    subtitle: 'Scholasticism, disputation, and the Latin curriculum',
    kind: 'institution',
    period: 'medieval-translation',
    summary:
      'From the twelfth century, universities in cities such as Bologna, Paris, and Oxford institutionalised the study of texts newly available in Latin translation, including Aristotle and Islamic commentators.',
    longDescription:
      'Organised around faculties and structured disputation, medieval universities created a durable institutional form for transmitting, debating, and gradually revising inherited natural philosophy. Access was restricted largely to clergy and elite men, and curricula were shaped by theological oversight, but the practice of formal, rule-governed argument that universities cultivated proved an important precedent for later scientific debate.',
    startYear: 1150,
    endYear: 1500,
    dateDisplay: 'c. 1150–1500 CE',
    approximateDate: true,
    latitude: 48.8566,
    longitude: 2.3522,
    places: [
      { name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
      { name: 'Bologna', latitude: 44.4949, longitude: 11.3426 },
      { name: 'Oxford', latitude: 51.752, longitude: -1.2577 },
    ],
    transregional: true,
    people: [],
    cultures: ['European', 'Latin Christian'],
    disciplines: ['natural philosophy', 'theology', 'logic'],
    themes: ['institutions-and-funding', 'exclusion-and-access'],
    philosophicalQuestions: [
      {
        prompt:
          'Does formal, rule-governed disputation train the same skills as empirical scientific reasoning, or a different one entirely?',
      },
    ],
    historicalSignificance:
      'Created the institutional template — faculties, degrees, and structured argument — that later scientific academies and universities adapted rather than invented from scratch.',
    commonMyth:
      'That the medieval university period was an intellectual "Dark Age" of stagnation before the Renaissance.',
    historicalComplication:
      'Scholastic natural philosophers debated motion, infinity, and the void in sophisticated ways that anticipated some early modern arguments, even while operating within an Aristotelian and theological framework.',
    sources: [
      {
        author: 'Edward Grant',
        title: 'The Foundations of Modern Science in the Middle Ages',
        year: '1996',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['baghdad-translation-movement', 'aristotle', 'scholasticism'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'scholasticism',
    slug: 'scholasticism',
    title: 'Scholastic Natural Philosophy',
    subtitle: 'Reasoning about nature through commentary and disputation',
    kind: 'idea',
    period: 'medieval-translation',
    summary:
      'A method of inquiry, centred on close textual commentary and formal disputation, that medieval scholars used to reconcile Aristotelian natural philosophy with Christian theology.',
    longDescription:
      'Scholastic thinkers such as Thomas Aquinas, Jean Buridan, and Nicole Oresme worked within and against Aristotelian physics, developing concepts such as "impetus" that anticipated, without fully reaching, later notions of inertia. The method emphasised careful definition, logical consistency, and engagement with authorities, which later natural philosophers both inherited and reacted against.',
    startYear: 1200,
    endYear: 1500,
    dateDisplay: 'c. 1200–1500 CE',
    approximateDate: true,
    transregional: true,
    places: [{ name: 'Paris', latitude: 48.8566, longitude: 2.3522 }],
    people: [],
    cultures: ['European'],
    disciplines: ['natural philosophy', 'theology'],
    themes: ['method'],
    theoryStatus: 'modified',
    philosophicalQuestions: [
      {
        prompt:
          'Can a conceptual innovation (like impetus theory) be a genuine step toward a later idea (inertia) even if its authors did not intend or foresee that destination?',
      },
    ],
    historicalSignificance:
      'Impetus theory and scholastic critiques of strict Aristotelian motion are now seen by historians as meaningful intermediate steps rather than a dead end bypassed by the Scientific Revolution.',
    sources: [
      {
        author: 'Edward Grant',
        title: 'The Foundations of Modern Science in the Middle Ages',
        year: '1996',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['medieval-universities', 'aristotle', 'galileo'],
    confidence: 'likely',
    contentStatus: 'complete',
  },
  {
    id: 'chinese-astronomy-technology',
    slug: 'chinese-astronomy-technology',
    title: 'Chinese Astronomical and Technical Traditions',
    subtitle: 'Court astronomy, mechanical clocks, and printed knowledge',
    kind: 'idea',
    period: 'medieval-translation',
    summary:
      'Imperial Chinese bureaus maintained long, precise astronomical records and supported technical innovations — including mechanical clockwork, printing, and gunpowder — within a distinct cosmological and administrative framework.',
    longDescription:
      "Chinese court astronomers tracked eclipses, comets (including what Europeans later called Halley's Comet), and novae over centuries, producing records now valuable to modern astrophysics. Technologies such as Su Song's astronomical clock tower (eleventh century) and woodblock printing developed independently of, and in some cases far earlier than, equivalent European technologies, embedded in a cosmology oriented around administrative order and the Mandate of Heaven rather than Aristotelian causation.",
    startYear: 100,
    endYear: 1600,
    dateDisplay: 'c. 100–1600 CE',
    approximateDate: true,
    latitude: 34.3416,
    longitude: 108.9398,
    places: [
      {
        name: "Chang'an / Beijing (imperial observatories)",
        latitude: 34.3416,
        longitude: 108.9398,
      },
    ],
    transregional: true,
    people: [],
    cultures: ['Chinese'],
    disciplines: ['astronomy', 'engineering'],
    themes: ['non-western-origins', 'independent-development', 'instruments-and-method'],
    philosophicalQuestions: [
      {
        prompt:
          'When two cultures develop similar techniques independently, does that strengthen the case that those techniques track something real, or merely that similar problems invite similar tools?',
      },
    ],
    historicalSignificance:
      'A sustained counterexample to any narrative in which "science" is a uniquely European achievement later exported to the rest of the world; Chinese records remain valuable primary data for modern astronomy.',
    commonMyth:
      'That premodern China had technology but lacked anything resembling theoretical science.',
    historicalComplication:
      'Chinese natural knowledge was organised around different core concepts (correlative cosmology, qi, the Mandate of Heaven) rather than failing to achieve European concepts; Joseph Needham\'s own framing of a "failure" to produce modern science has itself been challenged by later historians as a loaded, teleological question.',
    sources: [
      {
        author: 'Joseph Needham',
        title: 'Science and Civilisation in China',
        year: '1954–',
        type: 'secondary',
      },
      {
        author: 'Benjamin Elman',
        title: 'On Their Own Terms: Science in China, 1550–1900',
        year: '2005',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['zheng-he-voyages', 'qing-gewu', 'jesuit-china-exchange'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
]
