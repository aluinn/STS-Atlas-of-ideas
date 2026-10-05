import type { Entry } from '../types'

export const innovationAndPolicyEntries: Entry[] = [
  {
    id: 'linear-model-of-innovation',
    slug: 'linear-model-of-innovation',
    title: 'The Linear Model of Innovation',
    subtitle: 'Basic research → applied research → development → innovation',
    kind: 'idea',
    period: 'war-and-big-science',
    summary:
      'The influential postwar assumption that innovation flows in one direction, from curiosity-driven basic research through applied research and development to eventual commercial or social innovation — a model increasingly challenged as too simple.',
    longDescription:
      "Associated with Vannevar Bush's 1945 report, the linear model assumes a one-way pipeline: fund open-ended basic research, and useful applications will eventually and reliably follow, developed and commercialised downstream. Critics have long argued real innovation is far more recursive — applied problems often drive basic research questions (not just the reverse), and firms, users, and regulators shape technologies throughout development, not only at the end of a pipeline. The model remains influential in how funding agencies justify basic-research budgets, even though most historians and innovation scholars now regard it as a simplification.",
    startYear: 1945,
    endYear: 1945,
    dateDisplay: '1945 (as named policy model)',
    approximateDate: false,
    transregional: true,
    scale: 'nation',
    places: [{ name: 'Washington, D.C.', latitude: 38.9072, longitude: -77.0369 }],
    people: ['vannevar-bush'],
    cultures: ['American'],
    disciplines: ['science policy'],
    themes: ['innovation-policy', 'institutions-and-funding'],
    theoryStatus: 'superseded',
    theoryStatusNote:
      'Still invoked rhetorically in funding debates, but innovation scholars generally regard it as an oversimplified account superseded by more recursive, distributed models like Mode 2 and the Triple Helix.',
    philosophicalQuestions: [
      {
        prompt:
          'If innovation rarely actually flows in one direction from basic research to application, why does the linear model remain so persuasive as a justification for funding decisions?',
      },
    ],
    historicalSignificance:
      'Shaped Western science funding policy for decades and remains the implicit model behind much public rhetoric about the value of basic research, even as scholars have moved on from it.',
    sources: [
      {
        author: 'Vannevar Bush',
        title: 'Science, The Endless Frontier',
        year: '1945',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['vannevar-bush', 'mode-2-knowledge-production', 'triple-helix-model'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'mode-2-knowledge-production',
    slug: 'mode-2-knowledge-production',
    title: 'Mode 2 Knowledge Production',
    subtitle: 'Contextual, interdisciplinary, and distributed research',
    kind: 'idea',
    period: 'environmental-contemporary',
    summary:
      'Michael Gibbons and colleagues argued that a "Mode 2" of knowledge production had emerged alongside traditional disciplinary ("Mode 1") research: knowledge generated in the context of application, drawing on multiple disciplines, and distributed across universities, industry, and other sites rather than confined to academic departments.',
    longDescription:
      'Mode 1 knowledge production is investigator-led, discipline-bound, and organised around universities. Mode 2, by contrast, is organised around solving specific problems, draws together expertise from wherever it is needed regardless of discipline, is produced in diverse institutional settings (firms, government labs, consultancies, as well as universities), and is subject to broader forms of social accountability than peer review alone. The framework was influential in justifying interdisciplinary and application-oriented funding programmes, though critics argue the "Mode 1 to Mode 2" shift was less a clean historical transition and more a redescription of practices that, to varying degrees, always coexisted.',
    startYear: 1994,
    endYear: 1994,
    dateDisplay: '1994',
    approximateDate: false,
    transregional: true,
    scale: 'network',
    places: [],
    people: ['michael-gibbons'],
    cultures: ['British'],
    disciplines: ['science policy'],
    themes: ['innovation-policy'],
    philosophicalQuestions: [
      {
        prompt:
          'If knowledge production becomes more distributed across universities, firms, and consultancies, who is accountable when that knowledge turns out to be wrong?',
        debateId: 'ethics-in-science',
      },
    ],
    historicalSignificance:
      'Widely cited in debates over interdisciplinary and application-oriented research funding, and a direct precursor to the Triple Helix and mission-oriented innovation frameworks.',
    sources: [
      {
        author: 'Michael Gibbons et al.',
        title:
          'The New Production of Knowledge: The Dynamics of Science and Research in Contemporary Societies',
        year: '1994',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['linear-model-of-innovation', 'triple-helix-model'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'triple-helix-model',
    slug: 'triple-helix-model',
    title: 'The Triple Helix Model',
    subtitle: 'University, industry, and government in interaction',
    kind: 'idea',
    period: 'environmental-contemporary',
    summary:
      'Henry Etzkowitz and Loet Leydesdorff modelled innovation as an interaction between three institutional spheres — university, industry, and government — each increasingly taking on roles traditionally associated with the others.',
    longDescription:
      'The model describes several configurations. A "statist" configuration has government directing both industry and academia from above. A "laissez-faire" configuration keeps the three spheres separate, interacting only at arm\'s length through markets and contracts. A more networked or hybrid configuration has overlapping roles: universities act entrepreneurially (patenting, spinning out companies, running incubators), industry conducts research normally reserved for academia, and government acts as a venture capitalist as well as a regulator. This hybrid configuration is associated with the rise of the "entrepreneurial university" and university-affiliated incubators — and with real tension between a university\'s traditional role of producing open public knowledge and newer pressure to generate commercial, economically exploitable results.',
    startYear: 2000,
    endYear: 2000,
    dateDisplay: '2000',
    approximateDate: false,
    transregional: true,
    scale: 'nation',
    places: [],
    people: ['henry-etzkowitz', 'loet-leydesdorff'],
    cultures: ['American', 'Dutch'],
    disciplines: ['science policy'],
    themes: ['innovation-policy', 'assetisation'],
    philosophicalQuestions: [
      {
        prompt:
          'When a university acts entrepreneurially — patenting, licensing, spinning out companies — does that strengthen its ability to fund open research, or quietly compromise its commitment to publishing knowledge openly?',
        debateId: 'ethics-in-science',
      },
    ],
    historicalSignificance:
      'A widely used framework for describing and designing national innovation systems, and the main lens through which "entrepreneurial university" policy has been analysed since the 1990s.',
    sources: [
      {
        author: 'Henry Etzkowitz and Loet Leydesdorff',
        title:
          '"The Dynamics of Innovation: From National Systems and \'Mode 2\' to a Triple Helix of University-Industry-Government Relations"',
        year: '2000',
        type: 'primary',
      },
    ],
    relatedEntryIds: [
      'mode-2-knowledge-production',
      'assetisation-technoscientific-rent',
      'mission-oriented-innovation',
    ],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'mission-oriented-innovation',
    slug: 'mission-oriented-innovation',
    title: 'Mission-Oriented Innovation',
    subtitle: 'Public institutions setting direction around major social goals',
    kind: 'idea',
    period: 'environmental-contemporary',
    summary:
      'Associated with economist Mariana Mazzucato, mission-oriented innovation policy argues that public institutions should actively direct research and investment toward major social "missions" — curing a disease, decarbonising an economy, landing on the Moon — rather than only funding undirected basic research and waiting for the market to apply it.',
    longDescription:
      'Drawing on historical cases like the Apollo programme and wartime research mobilisation, mission-oriented advocates argue that ambitious, clearly defined public goals can coordinate investment across many sectors at once (energy, transport, manufacturing, computing) in ways that undirected funding cannot. Critics worry about governments "picking winners" badly, about accountability when missions fail, and about whether mission framing can be captured by incumbent industries claiming their existing plans already serve the stated mission. The approach explicitly rejects the linear model\'s separation of funding from directing research, treating the state as an active shaper of markets rather than merely a corrector of market failures.',
    startYear: 2013,
    endYear: 2021,
    dateDisplay: 'c. 2013–2021',
    approximateDate: true,
    transregional: true,
    scale: 'nation',
    places: [],
    people: ['mariana-mazzucato'],
    cultures: ['American', 'Italian'],
    disciplines: ['science policy'],
    themes: ['innovation-policy', 'society-and-power'],
    philosophicalQuestions: [
      {
        prompt:
          'If government actively directs research toward chosen missions rather than funding open-ended enquiry, who should decide which missions matter most, and how should failure be judged?',
        debateId: 'expertise-trust-policy',
      },
    ],
    historicalSignificance:
      'Influenced recent industrial and research-funding strategy in the EU, UK, and elsewhere, explicitly positioning government as an active market-shaper rather than a passive basic-research funder.',
    sources: [
      {
        author: 'Mariana Mazzucato',
        title: 'Mission Economy: A Moonshot Guide to Changing Capitalism',
        year: '2021',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['linear-model-of-innovation', 'triple-helix-model', 'manhattan-project'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'derek-de-solla-price',
    slug: 'derek-de-solla-price',
    title: 'Derek de Solla Price and the Growth of Science',
    subtitle: 'Measuring science scientifically',
    kind: 'person',
    period: 'cold-war',
    summary:
      'Derek de Solla Price founded scientometrics, showing that the number of scientists, journals, and papers had grown exponentially since the seventeenth century, and coining the influential distinction between "Little Science" and the new postwar "Big Science".',
    longDescription:
      "In Little Science, Big Science (1963), Price plotted the growth of scientific output over three centuries and found a strikingly consistent exponential curve, prompting his famous observation that most scientists who had ever lived were alive at the time he wrote — and that exponential growth of this kind cannot continue indefinitely, implying science would eventually have to change character or slow. Price's quantitative approach to studying science founded the field of scientometrics (citation analysis, bibliometrics) and gave early, data-driven substance to the sense that postwar science had become qualitatively different in scale from anything before it.",
    startYear: 1963,
    endYear: 1963,
    dateDisplay: '1963',
    approximateDate: false,
    transregional: false,
    scale: 'institution',
    latitude: 41.3083,
    longitude: -72.9279,
    places: [{ name: 'Yale University', latitude: 41.3083, longitude: -72.9279 }],
    people: ['derek-de-solla-price'],
    cultures: ['British', 'American'],
    disciplines: ['history of science', 'scientometrics'],
    themes: ['big-science', 'innovation-policy'],
    philosophicalQuestions: [
      {
        prompt:
          'If the exponential growth of science cannot continue forever, what does that imply about limits on how much we can expect to keep learning through the same institutional model?',
      },
    ],
    historicalSignificance:
      'Founded scientometrics and gave the term "Big Science" its first rigorous, quantitative backing, shaping how later scholars measured and periodised the scale of modern research.',
    sources: [
      {
        author: 'Derek de Solla Price',
        title: 'Little Science, Big Science',
        year: '1963',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['cold-war-big-science', 'alvin-weinberg-big-science-critique'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'alvin-weinberg-big-science-critique',
    slug: 'alvin-weinberg-big-science-critique',
    title: "Alvin Weinberg's Critique of Big Science",
    subtitle: '"Journalitis", "moneyitis", and "administratitis"',
    kind: 'idea',
    period: 'cold-war',
    summary:
      'Physicist and Oak Ridge National Laboratory director Alvin Weinberg, who popularised the term "Big Science" itself, also warned of its characteristic pathologies: spectacle-driven publicity, runaway spending, and administrative bloat overtaking scientific substance.',
    longDescription:
      'In a 1961 Science article, Weinberg worried that Big Science projects risked three afflictions: "journalitis" (pursuing newsworthy spectacle over substantive results), "moneyitis" (treating funding scale as itself a measure of scientific importance), and "administratitis" (research increasingly managed by administrators and hierarchies rather than by scientists\' own judgement). Weinberg was not opposed to large-scale research — he directed a major national laboratory — but he argued for scientific criteria (not political spectacle or raw budget size) to guide which large projects deserved public support, a tension that has recurred in every subsequent debate about mega-science funding.',
    startYear: 1961,
    endYear: 1961,
    dateDisplay: '1961',
    approximateDate: false,
    transregional: false,
    scale: 'institution',
    latitude: 36.0103,
    longitude: -84.2696,
    places: [{ name: 'Oak Ridge National Laboratory', latitude: 36.0103, longitude: -84.2696 }],
    people: ['alvin-weinberg'],
    cultures: ['American'],
    disciplines: ['science policy'],
    themes: ['big-science', 'innovation-policy'],
    philosophicalQuestions: [
      {
        prompt:
          "If a research project's scale and public spectacle become measures of its importance in their own right, how can scientific merit still be judged independently?",
        debateId: 'ethics-in-science',
      },
    ],
    historicalSignificance:
      'Supplied the enduring vocabulary for criticising Big Science from within, used ever since by scientists and policymakers worried that scale is crowding out scientific judgement.',
    sources: [
      {
        author: 'Alvin M. Weinberg',
        title: '"Impact of Large-Scale Science on the United States"',
        year: '1961',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['derek-de-solla-price', 'cold-war-big-science', 'manhattan-project'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'science-policy-ecology',
    slug: 'science-policy-ecology',
    title: 'Science Policy as a Fragmented Ecology',
    subtitle: 'Brokerage, access, and the "Swiss Army knife" problem',
    kind: 'idea',
    period: 'environmental-contemporary',
    summary:
      'No country has one unified "science policy system" — instead a changing ecology of government departments, research councils, universities, companies, advisers, learned societies, civil-society groups, and international bodies, connected (or not) by policy brokers who translate evidence for decision-makers.',
    longDescription:
      'Policy brokers — individuals, organisations, models, or forecasts — occupy the gap between evidence and decision, and who gets to broker is itself a form of power: whose knowledge travels into the policy conversation, and whose is excluded, shapes outcomes as much as the underlying evidence does. Science policy is also asked to do too much at once — what might be called the "Swiss Army knife" problem — expected simultaneously to deliver economic growth, national defence, international prestige, public health, workforce skills, regional development, and solutions to social crises, often with the same limited funding pot and no clear way to prioritise between these goals. This creates persistent tension with industrial policy, education policy, and economic policy, which pull in their own, sometimes conflicting, directions. Scholars in this tradition (notably Roger Pielke Jr.) argue that transparency about which role — "honest broker" of options, or advocate for one — an adviser is playing is essential to maintaining trust.',
    startYear: 2007,
    endYear: 2007,
    dateDisplay: '2007',
    approximateDate: false,
    transregional: true,
    scale: 'nation',
    places: [],
    people: ['roger-pielke-jr'],
    cultures: ['American'],
    disciplines: ['science policy'],
    themes: ['innovation-policy', 'expertise-and-policy', 'society-and-power'],
    philosophicalQuestions: [
      {
        prompt:
          'If science policy is expected to deliver growth, defence, prestige, health, and social solutions all at once, how could any single funding decision ever satisfy all of those goals simultaneously?',
        debateId: 'expertise-trust-policy',
      },
    ],
    historicalSignificance:
      'Reframes "science policy" from a single coherent system into a fragmented ecology whose coordination (or lack of it) is itself a major object of study.',
    sources: [
      {
        author: 'Roger A. Pielke Jr.',
        title: 'The Honest Broker: Making Sense of Science in Policy and Politics',
        year: '2007',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['triple-helix-model', 'vannevar-bush', 'mission-oriented-innovation'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
]
