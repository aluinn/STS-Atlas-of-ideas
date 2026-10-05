import type { Entry } from '../types'

export const warAndColdWarEntries: Entry[] = [
  {
    id: 'haber-bosch',
    slug: 'haber-bosch',
    title: 'The Haber–Bosch Process',
    subtitle: 'Nitrogen fixation that fed the world and fueled war',
    kind: 'discovery',
    period: 'war-and-big-science',
    summary:
      'Fritz Haber discovered a practical catalytic method for fixing atmospheric nitrogen into ammonia (1909), industrialised by Carl Bosch at BASF, enabling synthetic fertiliser production and explosives manufacture alike.',
    longDescription:
      "Haber's process broke dependence on finite natural nitrate deposits (notably Chilean saltpetre) for fertiliser, a change credited with sustaining a large fraction of the dramatic growth in global food production over the twentieth century. The very same process also freed Germany to manufacture nitrate explosives during the First World War despite an Allied blockade, making Haber simultaneously one of the most consequential contributors to feeding humanity and to prolonging industrialised war.",
    startYear: 1909,
    endYear: 1913,
    dateDisplay: '1909–1913',
    approximateDate: false,
    latitude: 52.52,
    longitude: 13.405,
    places: [{ name: 'Berlin / BASF, Ludwigshafen', latitude: 49.4811, longitude: 8.4353 }],
    transregional: false,
    people: ['fritz-haber', 'carl-bosch'],
    cultures: ['German'],
    disciplines: ['chemistry'],
    themes: ['laboratory-to-industry', 'ethics', 'war-and-science'],
    philosophicalQuestions: [
      {
        prompt:
          'Is scientific knowledge itself morally neutral, with only its applications good or bad — or can some discoveries be inseparable from the uses they enable?',
        debateId: 'ethics-in-science',
      },
    ],
    historicalSignificance:
      'One of the most consequential chemical discoveries of the modern era, central to both twentieth-century agriculture and industrialised warfare.',
    sources: [
      {
        author: 'Daniel Charles',
        title: 'Master Mind: The Rise and Fall of Fritz Haber',
        year: '2005',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['haber-chemical-warfare', 'moseley'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'haber-chemical-warfare',
    slug: 'haber-chemical-warfare',
    title: 'Fritz Haber and Chemical Warfare',
    subtitle: 'The same chemist who directed the first large-scale gas attacks',
    kind: 'event',
    period: 'war-and-big-science',
    summary:
      "Fritz Haber personally directed the German military's development and first deployment of chlorine gas at Ypres in 1915, arguing that making war more lethal might shorten it.",
    longDescription:
      "Haber's wartime role, pursued with patriotic conviction and state backing, led directly to his first wife Clara Immerwahr's suicide, reportedly in protest at his work; Haber nonetheless continued directing chemical weapons research for the remainder of the war. His later Nobel Prize (1918), awarded for the ammonia synthesis rather than his wartime work, remains one of the most debated prizes in the award's history.",
    startYear: 1914,
    endYear: 1918,
    dateDisplay: '1914–1918',
    approximateDate: false,
    latitude: 50.85,
    longitude: 2.8833,
    places: [{ name: 'Ypres, Belgium', latitude: 50.85, longitude: 2.8833 }],
    transregional: false,
    people: ['fritz-haber'],
    cultures: ['German'],
    disciplines: ['chemistry'],
    themes: ['ethics', 'war-and-science'],
    philosophicalQuestions: [
      {
        prompt:
          "Should scientific honours (like the Nobel Prize) be separable from the full record of a scientist's wartime conduct?",
        debateId: 'ethics-in-science',
      },
    ],
    historicalSignificance:
      'A central case study for the ethics of science in war and the question of whether scientific contribution can be morally compartmentalised from its use.',
    sources: [
      {
        author: 'Margit Szollosi-Janze',
        title: 'Fritz Haber: Chemiker, Nobelpreisträger, Deutscher, Jude',
        year: '1998',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['haber-bosch', 'manhattan-project'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'moseley',
    slug: 'moseley',
    title: 'Henry Moseley',
    subtitle: 'X-ray spectroscopy, atomic number, and death at Gallipoli',
    kind: 'person',
    period: 'war-and-big-science',
    summary:
      "Moseley's X-ray spectroscopy established atomic number, rather than atomic weight, as the organising principle of the periodic table, before he was killed in action at Gallipoli in 1915 at age 27.",
    longDescription:
      "Moseley's law, relating the frequency of characteristic X-ray emission to an element's atomic number, resolved several anomalies in the periodic table and provided strong physical grounding for the nuclear model of the atom. His death, while serving as a signals officer despite his scientific standing, became a frequently cited argument for later British and American policies of reserving scientifically valuable personnel from frontline combat.",
    startYear: 1887,
    endYear: 1915,
    dateDisplay: '1887–1915',
    approximateDate: false,
    latitude: 51.752,
    longitude: -1.2577,
    places: [
      { name: 'Oxford', latitude: 51.752, longitude: -1.2577, role: 'institution' },
      { name: 'Gallipoli, Ottoman Empire', latitude: 40.2, longitude: 26.4, role: 'death' },
    ],
    transregional: false,
    people: ['moseley'],
    cultures: ['English'],
    disciplines: ['physics'],
    themes: ['war-and-science', 'profession-and-identity'],
    philosophicalQuestions: [
      {
        prompt:
          'How did the loss of a generation of young researchers to the First World War shape which scientific questions got pursued, and by whom, afterward?',
      },
    ],
    historicalSignificance:
      'His death is often cited as galvanising later policies of scientific conscription exemption, shaping how states managed scientific talent in the Second World War and Cold War.',
    sources: [
      {
        author: 'J.L. Heilbron',
        title: 'H.G.J. Moseley: The Life and Letters of an English Physicist, 1887–1915',
        year: '1974',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['manhattan-project'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'manhattan-project',
    slug: 'manhattan-project',
    title: 'The Manhattan Project',
    subtitle: 'Secrecy, scale, and state power reshape physics',
    kind: 'event',
    period: 'war-and-big-science',
    summary:
      "The United States' wartime project to build nuclear weapons assembled thousands of scientists, engineers, and workers under military secrecy at Los Alamos and other sites, fundamentally changing the scale and organisation of physics research.",
    longDescription:
      'Directed by General Leslie Groves with scientific leadership from Robert Oppenheimer, the project organised previously independent academic physicists into a compartmentalised, security-classified, military-funded research hierarchy unlike anything in prior peacetime science. Its success established a template — enormous state funding, close secrecy, and military direction of fundamental research — that shaped science policy for the rest of the twentieth century.',
    startYear: 1942,
    endYear: 1945,
    dateDisplay: '1942–1945',
    approximateDate: false,
    latitude: 35.88,
    longitude: -106.3031,
    places: [{ name: 'Los Alamos, New Mexico', latitude: 35.88, longitude: -106.3031 }],
    transregional: false,
    people: ['robert-oppenheimer'],
    cultures: ['American'],
    disciplines: ['physics', 'engineering'],
    themes: ['war-and-science', 'institutions-and-funding', 'ethics', 'big-science'],
    philosophicalQuestions: [
      {
        prompt:
          'Does massive scale, secrecy, and state funding change the kind of knowledge that gets produced, beyond simply speeding it up?',
      },
      {
        prompt:
          'Can scientists who build a weapon of enormous destructive power meaningfully disclaim moral responsibility for how it is used?',
        debateId: 'ethics-in-science',
      },
    ],
    historicalSignificance:
      'A pivotal moment establishing "Big Science" — large, state-funded, secretive, military-linked research — as a durable model for the rest of the twentieth century.',
    commonMyth:
      'That the atomic bomb was the product of a single eureka-style breakthrough by a few famous names.',
    historicalComplication:
      "The project depended on tens of thousands of workers, many unaware of the project's purpose, and on extensive industrial infrastructure (uranium enrichment plants, plutonium reactors) as much as on theoretical insight.",
    sources: [
      {
        author: 'Richard Rhodes',
        title: 'The Making of the Atomic Bomb',
        year: '1986',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['haber-chemical-warfare', 'vannevar-bush', 'moseley'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'vannevar-bush',
    slug: 'vannevar-bush',
    title: 'Vannevar Bush and "Science, The Endless Frontier"',
    subtitle: 'The blueprint for postwar state-funded research',
    kind: 'text',
    period: 'war-and-big-science',
    summary:
      "Bush's 1945 report to the US President argued for sustained federal funding of basic research as a public good, laying the institutional and rhetorical foundation for postwar science policy, including the National Science Foundation.",
    longDescription:
      "Having directed the US Office of Scientific Research and Development during the war, Bush argued that government should fund open, curiosity-driven basic research at universities, trusting that useful applications would eventually follow — a linear model of innovation that has been influential, and increasingly contested, ever since. The report's vision of a wall between funding and directing research set much of the agenda for Cold War science policy.",
    startYear: 1945,
    endYear: 1945,
    dateDisplay: '1945',
    approximateDate: false,
    latitude: 38.9072,
    longitude: -77.0369,
    places: [{ name: 'Washington, D.C.', latitude: 38.9072, longitude: -77.0369 }],
    transregional: false,
    people: ['vannevar-bush'],
    cultures: ['American'],
    disciplines: ['science policy'],
    themes: ['institutions-and-funding', 'big-science'],
    philosophicalQuestions: [
      {
        prompt:
          'Does public funding of "pure," curiosity-driven research actually produce more useful knowledge than directed, applied funding — or is that a convenient myth?',
      },
    ],
    historicalSignificance:
      'One of the most influential documents in the history of science policy, shaping how Western governments justified and organised research funding for decades.',
    sources: [
      {
        author: 'Vannevar Bush',
        title: 'Science, The Endless Frontier',
        year: '1945',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['manhattan-project', 'cold-war-big-science'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'cold-war-big-science',
    slug: 'cold-war-big-science',
    title: 'Cold War "Big Science"',
    subtitle: 'Money, manpower, machines, media, and the military',
    kind: 'idea',
    period: 'cold-war',
    summary:
      'Historian Derek de Solla Price\'s notion of "Big Science" describes the postwar pattern of enormous research projects defined by massive funding, large teams, expensive machinery, public visibility, and close ties to military priorities.',
    longDescription:
      'From particle accelerators to space programs to oceanographic survey fleets, both the US and USSR organised vast swaths of research within this template during the Cold War, often justified publicly by scientific or civilian goals while serving strategic military interests as well. The approach produced genuine breakthroughs while also raising enduring concerns about whether military funding subtly steers which scientific questions get asked.',
    startYear: 1945,
    endYear: 1991,
    dateDisplay: '1945–1991',
    approximateDate: true,
    transregional: true,
    places: [
      { name: 'Washington, D.C.', latitude: 38.9072, longitude: -77.0369 },
      { name: 'Moscow', latitude: 55.7558, longitude: 37.6173 },
    ],
    people: [],
    cultures: ['American', 'Soviet'],
    disciplines: ['physics', 'earth science', 'engineering'],
    themes: ['big-science', 'war-and-science', 'institutions-and-funding'],
    philosophicalQuestions: [
      {
        prompt:
          'Can military priorities shape the direction of supposedly "pure" research even when scientists believe themselves to be working freely?',
        debateId: 'objectivity-values',
      },
    ],
    historicalSignificance:
      'Defines much of the institutional landscape of twentieth-century physical and earth sciences, from CERN to NASA to Soviet closed research cities.',
    sources: [
      {
        author: 'Audra Wolfe',
        title: 'Competing with the Soviets: Science, Technology, and the State in Cold War America',
        year: '2013',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['vannevar-bush', 'plate-tectonics', 'manhattan-project'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'plate-tectonics',
    slug: 'plate-tectonics',
    title: 'Plate Tectonics',
    subtitle: "From a dismissed hypothesis to geology's unifying theory, funded by Cold War navies",
    kind: 'discovery',
    period: 'cold-war',
    summary:
      "Alfred Wegener's early-twentieth-century continental drift hypothesis was widely rejected for decades until Cold War-funded naval oceanographic surveys of the sea floor provided the mechanism and evidence that transformed it into plate tectonics.",
    longDescription:
      "Wegener's 1912 proposal lacked a plausible mechanism and was rejected by most geologists, especially in the English-speaking world, for nearly fifty years. Submarine mapping, magnetic striping surveys, and seismology — funded substantially through US and Soviet naval interest in submarine warfare and detecting nuclear tests — supplied the sea-floor spreading evidence that let Harry Hess and others reformulate the idea as plate tectonics in the 1960s, now the unifying framework of geology.",
    startYear: 1912,
    endYear: 1968,
    dateDisplay: '1912–1968',
    approximateDate: false,
    transregional: true,
    places: [
      {
        name: 'Scripps Institution of Oceanography, La Jolla',
        latitude: 32.8328,
        longitude: -117.2713,
      },
    ],
    people: ['alfred-wegener', 'harry-hess'],
    cultures: ['German', 'American'],
    disciplines: ['geology', 'geophysics'],
    themes: ['big-science', 'overturning-authority', 'war-and-science'],
    theoryStatus: 'dominant',
    theoryStatusNote:
      'Plate tectonics moved from rejected fringe hypothesis to the dominant, well-confirmed framework of modern geology within about half a century.',
    philosophicalQuestions: [
      {
        prompt:
          'Why did the geological community reject continental drift for decades despite suggestive evidence, and what does that say about when scepticism of a bold idea is reasonable versus obstructive?',
        debateId: 'kuhn-paradigms-revolutions',
      },
    ],
    historicalSignificance:
      'A textbook example of scientific revolution and of how military-funded instrumentation can unexpectedly transform an entirely different field of civilian science.',
    commonMyth:
      "That Wegener's idea was rejected purely because it was too radical for closed-minded geologists.",
    historicalComplication:
      "The rejection also reflected a reasonable scientific demand for a physical mechanism, which Wegener could not supply; the theory's eventual vindication depended on new data and instruments, not just a change of attitude.",
    sources: [
      {
        author: 'Naomi Oreskes',
        title: 'The Rejection of Continental Drift',
        year: '1999',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['cold-war-big-science'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'lysenkoism-soviet-genetics',
    slug: 'lysenkoism-soviet-genetics',
    title: 'Lysenkoism and Soviet Genetics',
    subtitle: 'Science conducted under political control',
    kind: 'event',
    period: 'cold-war',
    summary:
      "Trofim Lysenko's rejection of Mendelian genetics, backed by Soviet state power, became official biological doctrine from 1948, suppressing rival research and persecuting geneticists who disagreed.",
    longDescription:
      "Lysenko promoted a Lamarckian-influenced theory of heredity that he presented as more compatible with Marxist ideology than Mendelian genetics, and secured Stalin's backing to have it declared the only correct biology at a 1948 session of the Lenin All-Union Academy of Agricultural Sciences. Geneticists who defended Mendelian inheritance were dismissed, imprisoned, or in some cases died in custody — the botanist Nikolai Vavilov, a prominent critic, died in a Soviet prison in 1943. Lysenkoism dominated Soviet biology and agricultural policy into the 1960s, with serious costs to both scientific research and agricultural planning, before losing official support after Khrushchev's removal in 1964.",
    startYear: 1927,
    endYear: 1964,
    dateDisplay: '1927–1964 (official doctrine from 1948)',
    approximateDate: false,
    latitude: 55.7558,
    longitude: 37.6173,
    places: [{ name: 'Moscow', latitude: 55.7558, longitude: 37.6173 }],
    transregional: false,
    people: ['trofim-lysenko', 'nikolai-vavilov'],
    cultures: ['Soviet'],
    disciplines: ['genetics', 'agricultural science'],
    themes: ['ethics', 'profession-and-identity', 'institutions-and-funding'],
    philosophicalQuestions: [
      {
        prompt:
          'When a state enforces a scientific doctrine by force, does that make it political ideology wearing the label of science, or can it still count as "science" if it is widely practised under that name?',
        debateId: 'what-makes-a-scientist',
      },
      {
        prompt:
          "Lysenkoism directly violated Merton's universalism and organised scepticism — does a case this stark show those norms are indispensable, or simply that norms alone cannot protect science from political power?",
        debateId: 'ethics-in-science',
      },
    ],
    historicalSignificance:
      'One of the starkest documented cases of a state imposing scientific doctrine by political force, widely used in the history and sociology of science to examine what happens when institutional norms of open criticism are deliberately overridden.',
    commonMyth:
      'That Lysenkoism was simply bad science that failed to persuade anyone and was quickly abandoned.',
    historicalComplication:
      'Lysenkoism was official Soviet doctrine for roughly two decades, actively enforced through dismissal and imprisonment of dissenting scientists, and caused serious real-world harm to Soviet agricultural planning — it was not merely an obscure fringe theory.',
    sources: [
      { author: 'David Joravsky', title: 'The Lysenko Affair', year: '1970', type: 'secondary' },
      {
        author: 'Loren R. Graham',
        title: 'Science in Russia and the Soviet Union: A Short History',
        year: '1993',
        type: 'secondary',
      },
    ],
    relatedEntryIds: ['merton-norms', 'gieryn-boundary-work', 'cold-war-big-science'],
    confidence: 'established',
    contentStatus: 'complete',
  },
]
