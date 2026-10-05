import type { Entry } from '../types'

export const philosophyEntries: Entry[] = [
  {
    id: 'francis-bacon',
    slug: 'francis-bacon',
    title: 'Francis Bacon',
    subtitle: 'Knowledge through organised, collective observation',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Bacon\'s Novum Organum (1620) argued for a systematic, inductive method of collecting and organising observations to escape inherited prejudice ("idols of the mind") and build genuinely cumulative knowledge.',
    longDescription:
      'Bacon envisioned science as a collective, institutionally organised enterprise — closer to his fictional research academy in New Atlantis than to the solitary genius — explicitly contrasting this with scholastic reliance on authority and syllogism. His call for large-scale, state-supported, collaborative natural history influenced the founding generation of the Royal Society, even though his specific inductive method proved harder to operationalise than he hoped.',
    startYear: 1561,
    endYear: 1626,
    dateDisplay: '1561–1626',
    approximateDate: false,
    latitude: 51.5072,
    longitude: -0.1276,
    places: [{ name: 'London', latitude: 51.5072, longitude: -0.1276 }],
    transregional: false,
    people: ['francis-bacon'],
    cultures: ['English'],
    disciplines: ['philosophy'],
    themes: ['method'],
    philosophicalQuestions: [
      {
        prompt:
          'Can careful, large-scale collection of observations by itself generate reliable general theories, or is some prior theoretical framework always needed to decide what to observe?',
        debateId: 'induction-problem',
      },
    ],
    historicalSignificance:
      "The most influential early articulation of empirical, institutionally organised scientific method, directly inspiring the Royal Society's founders.",
    sources: [{ author: 'Francis Bacon', title: 'Novum Organum', year: '1620', type: 'primary' }],
    relatedEntryIds: ['royal-society', 'david-hume'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'david-hume',
    slug: 'david-hume',
    title: 'David Hume',
    subtitle: 'The problem of induction',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Hume argued that no amount of past observed regularity can logically guarantee that the future will resemble the past, since any such inference itself relies on the very assumption of uniformity it is trying to justify.',
    longDescription:
      'In the Enquiry Concerning Human Understanding (1748), Hume distinguished relations of ideas (logically necessary) from matters of fact (known only through experience), and showed that inductive inference — the backbone of empirical science — cannot be rationally justified by either deduction or further induction without circularity. The "problem of induction" he identified remains unresolved in any fully satisfying way and underlies much of twentieth-century philosophy of science.',
    startYear: 1711,
    endYear: 1776,
    dateDisplay: '1711–1776',
    approximateDate: false,
    latitude: 55.9533,
    longitude: -3.1883,
    places: [{ name: 'Edinburgh', latitude: 55.9533, longitude: -3.1883 }],
    transregional: false,
    people: ['david-hume'],
    cultures: ['Scottish'],
    disciplines: ['philosophy'],
    themes: ['method', 'induction'],
    philosophicalQuestions: [
      {
        prompt:
          'If induction cannot be rationally justified, does that mean scientific confidence is ultimately a matter of habit rather than reason?',
        debateId: 'induction-problem',
      },
    ],
    historicalSignificance:
      'Identified the single most durable unresolved problem in the philosophy of scientific method.',
    sources: [
      {
        author: 'David Hume',
        title: 'An Enquiry Concerning Human Understanding',
        year: '1748',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['francis-bacon', 'karl-popper'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'logical-positivism-vienna-circle',
    slug: 'logical-positivism-vienna-circle',
    title: 'The Vienna Circle and Logical Positivism',
    subtitle: 'Meaning, verification, and the unity of science',
    kind: 'institution',
    period: 'philosophy-of-science',
    summary:
      'A group of philosophers and scientists meeting in interwar Vienna, including Moritz Schlick and Rudolf Carnap, argued that a statement is meaningful only if it can in principle be empirically verified, aiming to eliminate metaphysics from science.',
    longDescription:
      "The Circle's verification criterion of meaning aimed to put science, especially physics, on a logically rigorous foundation and to unify all sciences under a common empiricist language. The criterion faced severe technical difficulties (universal scientific laws cannot be conclusively verified by any finite set of observations), and the group was scattered by the rise of Nazism, with many members emigrating to Britain and the United States, reshaping Anglophone philosophy of science.",
    startYear: 1924,
    endYear: 1936,
    dateDisplay: '1924–1936',
    approximateDate: false,
    latitude: 48.2082,
    longitude: 16.3738,
    places: [{ name: 'Vienna', latitude: 48.2082, longitude: 16.3738 }],
    transregional: false,
    people: ['moritz-schlick', 'rudolf-carnap'],
    cultures: ['Austrian', 'German'],
    disciplines: ['philosophy'],
    themes: ['method', 'verification'],
    theoryStatus: 'superseded',
    theoryStatusNote:
      'Strict verificationism was abandoned by most philosophers of science by the 1950s–60s, but its emphasis on logical rigor and empirical content left a lasting mark.',
    philosophicalQuestions: [
      {
        prompt:
          'Can a single criterion of meaningfulness cleanly separate science from metaphysics and nonsense?',
        debateId: 'verificationism-positivism',
      },
    ],
    historicalSignificance:
      'Defined the agenda for much of twentieth-century philosophy of science, including the reactions (Popper, Quine, Kuhn) that superseded it.',
    commonMyth:
      'That logical positivism was a naive, soon-forgotten dead end with no lasting influence.',
    historicalComplication:
      'Positivist techniques in logic and philosophy of language were absorbed into later philosophy of science even as the verification criterion itself was rejected.',
    sources: [
      { author: 'A.J. Ayer', title: 'Language, Truth and Logic', year: '1936', type: 'primary' },
    ],
    relatedEntryIds: ['karl-popper', 'pierre-duhem', 'quine'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'karl-popper',
    slug: 'karl-popper',
    title: 'Karl Popper',
    subtitle: 'Falsifiability as the mark of science',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Popper argued that science is distinguished not by verification but by falsifiability: genuinely scientific theories make risky predictions that could, in principle, be shown false by observation.',
    longDescription:
      "In The Logic of Scientific Discovery (1959), Popper proposed that science advances through bold conjectures and severe attempts at refutation, not accumulation of confirming instances, partly solving Hume's problem by redefining scientific rationality around error-elimination rather than justification. He used this criterion to argue that Marxism and psychoanalysis, as then practised, were unfalsifiable and therefore not strictly scientific — a controversial application of his own demarcation criterion.",
    startYear: 1902,
    endYear: 1994,
    dateDisplay: '1902–1994',
    approximateDate: false,
    latitude: 51.5072,
    longitude: -0.1276,
    places: [
      { name: 'Vienna', latitude: 48.2082, longitude: 16.3738, role: 'origin' },
      { name: 'London', latitude: 51.5072, longitude: -0.1276, role: 'later career' },
    ],
    transregional: false,
    people: ['karl-popper'],
    cultures: ['Austrian', 'British'],
    disciplines: ['philosophy'],
    themes: ['method', 'demarcation'],
    philosophicalQuestions: [
      {
        prompt:
          'What evidence would make a given scientific claim falsifiable — and does falsifiability really separate science cleanly from pseudoscience?',
        debateId: 'falsifiability-popper',
      },
    ],
    historicalSignificance:
      'Falsifiability remains the most widely known popular criterion for distinguishing science from pseudoscience, despite serious technical objections from philosophers.',
    sources: [
      {
        author: 'Karl Popper',
        title: 'The Logic of Scientific Discovery',
        year: '1959',
        type: 'primary',
      },
    ],
    relatedEntryIds: [
      'logical-positivism-vienna-circle',
      'pierre-duhem',
      'thomas-kuhn',
      'gieryn-boundary-work',
    ],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'pierre-duhem',
    slug: 'pierre-duhem',
    title: 'Pierre Duhem',
    subtitle: 'No hypothesis is tested in isolation',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Duhem argued that a single hypothesis can never be tested in isolation: any test depends on a whole web of auxiliary assumptions, so a failed prediction never says which part of the web is wrong.',
    longDescription:
      'Writing as both a physicist and historian of science, Duhem showed that when an experiment fails to confirm a prediction, logic alone cannot tell you whether the core hypothesis, an auxiliary assumption, or the measuring instrument is at fault — a problem later generalised by Quine into the "Duhem–Quine thesis." This directly complicates any simple falsificationist picture in which a single failed prediction straightforwardly refutes a theory.',
    startYear: 1861,
    endYear: 1916,
    dateDisplay: '1861–1916',
    approximateDate: false,
    latitude: 44.8378,
    longitude: -0.5792,
    places: [{ name: 'Bordeaux', latitude: 44.8378, longitude: -0.5792 }],
    transregional: false,
    people: ['pierre-duhem'],
    cultures: ['French'],
    disciplines: ['physics', 'philosophy'],
    themes: ['method', 'underdetermination'],
    philosophicalQuestions: [
      {
        prompt:
          'When an experiment contradicts a prediction, how do scientists decide which assumption to blame — and is that decision ever purely logical?',
        debateId: 'duhem-quine-underdetermination',
      },
    ],
    historicalSignificance:
      'Identified a structural problem for falsificationism that remains central to philosophy of science today.',
    sources: [
      {
        author: 'Pierre Duhem',
        title: 'The Aim and Structure of Physical Theory',
        year: '1906',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['karl-popper', 'quine'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'quine',
    slug: 'quine',
    title: 'W. V. O. Quine',
    subtitle: 'Two dogmas of empiricism and the web of belief',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Quine\'s "Two Dogmas of Empiricism" (1951) attacked the sharp distinction between analytic and synthetic statements and extended Duhem\'s insight into a holistic picture where our whole web of beliefs faces experience together.',
    longDescription:
      'Quine argued that no statement, including those that seem purely logical or definitional, is immune from revision if enough pressure from experience builds up elsewhere in the web of belief — a thesis with radical implications for how we think theories relate to evidence. Combined with Duhem\'s point, the "Duhem–Quine thesis" implies that theories are always underdetermined by any finite body of evidence.',
    startYear: 1908,
    endYear: 2000,
    dateDisplay: '1908–2000',
    approximateDate: false,
    latitude: 42.3736,
    longitude: -71.1097,
    places: [{ name: 'Harvard University, Cambridge, MA', latitude: 42.3736, longitude: -71.1097 }],
    transregional: false,
    people: ['quine'],
    cultures: ['American'],
    disciplines: ['philosophy'],
    themes: ['method', 'underdetermination'],
    philosophicalQuestions: [
      {
        prompt:
          'If no single belief is immune from revision, how does science ever reach stable, trustworthy conclusions?',
        debateId: 'duhem-quine-underdetermination',
      },
    ],
    historicalSignificance:
      "Reshaped analytic philosophy's understanding of theory, evidence, and meaning, with deep consequences for philosophy of science.",
    sources: [
      {
        author: 'W.V.O. Quine',
        title: '"Two Dogmas of Empiricism"',
        year: '1951',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['pierre-duhem', 'thomas-kuhn'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'thomas-kuhn',
    slug: 'thomas-kuhn',
    title: 'Thomas Kuhn',
    subtitle: 'Paradigms, normal science, and revolution',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Kuhn\'s The Structure of Scientific Revolutions (1962) argued that science mostly proceeds as "normal science" within a shared paradigm, punctuated by rare revolutionary crises in which the paradigm itself is replaced.',
    longDescription:
      'Kuhn described normal science as puzzle-solving within an accepted framework, with anomalies accumulating until a crisis prompts a revolutionary shift to a new, often "incommensurable" paradigm that changes not just theories but the very questions, standards, and even observations scientists find meaningful. His account displaced a simple, cumulative, continuously progressive picture of scientific history and triggered decades of debate about relativism, progress, and rationality in science.',
    startYear: 1922,
    endYear: 1996,
    dateDisplay: '1922–1996',
    approximateDate: false,
    latitude: 42.3736,
    longitude: -71.1097,
    places: [
      { name: 'Harvard University', latitude: 42.3736, longitude: -71.1097 },
      { name: 'UC Berkeley', latitude: 37.8719, longitude: -122.2585 },
    ],
    transregional: false,
    people: ['thomas-kuhn'],
    cultures: ['American'],
    disciplines: ['philosophy', 'history of science'],
    themes: ['method', 'scientific-change'],
    philosophicalQuestions: [
      {
        prompt:
          'If successive paradigms are genuinely "incommensurable," can we still meaningfully say that science progresses toward truth?',
        debateId: 'kuhn-paradigms-revolutions',
      },
    ],
    historicalSignificance:
      'Among the most influential works in twentieth-century philosophy and history of science, reshaping how both fields describe scientific change.',
    sources: [
      {
        author: 'Thomas Kuhn',
        title: 'The Structure of Scientific Revolutions',
        year: '1962',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['karl-popper', 'quine', 'paul-feyerabend', 'plate-tectonics', 'copernicus'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'paul-feyerabend',
    slug: 'paul-feyerabend',
    title: 'Paul Feyerabend',
    subtitle: '"Anything goes": against a single scientific method',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Feyerabend argued in Against Method (1975) that no single, fixed methodological rule has actually governed successful episodes of scientific progress — important breakthroughs often violated whatever rule philosophers proposed.',
    longDescription:
      "Drawing on detailed historical cases, including Galileo's own rhetorical and sometimes evidentially loose tactics, Feyerabend argued that rigid methodological rules would have stifled, not enabled, major scientific advances, and that epistemic pluralism better describes and better serves scientific progress than any single prescribed method. His provocations were deliberately polemical, aimed as much at excessive philosophical confidence in method as at science itself.",
    startYear: 1924,
    endYear: 1994,
    dateDisplay: '1924–1994',
    approximateDate: false,
    latitude: 37.8715,
    longitude: -122.273,
    places: [{ name: 'UC Berkeley', latitude: 37.8715, longitude: -122.273 }],
    transregional: false,
    people: ['paul-feyerabend'],
    cultures: ['Austrian', 'American'],
    disciplines: ['philosophy'],
    themes: ['method', 'pluralism'],
    philosophicalQuestions: [
      {
        prompt:
          'If no single method reliably distinguishes good science from bad, how should we evaluate competing scientific claims at all?',
        debateId: 'kuhn-paradigms-revolutions',
      },
    ],
    historicalSignificance:
      'Pushed philosophy of science toward serious consideration of methodological pluralism and historical contingency in scientific success.',
    sources: [
      { author: 'Paul Feyerabend', title: 'Against Method', year: '1975', type: 'primary' },
    ],
    relatedEntryIds: ['thomas-kuhn', 'galileo'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'hilary-putnam',
    slug: 'hilary-putnam',
    title: 'Hilary Putnam',
    subtitle: 'The "no-miracles" argument for scientific realism',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Putnam argued that the extraordinary predictive success of mature scientific theories would be a near-miracle if those theories were not at least approximately true descriptions of an independent reality.',
    longDescription:
      'The "no-miracles argument" remains the central positive case for scientific realism: it would be a staggering coincidence for theories about unobservable entities (electrons, genes, quarks) to generate novel, successful predictions unless those entities really exist roughly as described. Putnam later revised several of his own philosophical positions over his career, making him an example of a philosopher who treated his own prior views as open to the same scrutiny he applied to science.',
    startYear: 1926,
    endYear: 2016,
    dateDisplay: '1926–2016',
    approximateDate: false,
    latitude: 42.3736,
    longitude: -71.1097,
    places: [{ name: 'Harvard University', latitude: 42.3736, longitude: -71.1097 }],
    transregional: false,
    people: ['hilary-putnam'],
    cultures: ['American'],
    disciplines: ['philosophy'],
    themes: ['realism'],
    philosophicalQuestions: [
      {
        prompt:
          'Is predictive success really strong evidence of truth, or could successful theories still be fundamentally mistaken about the entities they posit?',
        debateId: 'scientific-realism-no-miracles',
      },
    ],
    historicalSignificance:
      'Formulated the most widely cited positive argument for scientific realism, still debated today.',
    sources: [
      {
        author: 'Hilary Putnam',
        title: 'Reason, Truth and History',
        year: '1981',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['larry-laudan', 'bas-van-fraassen'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'larry-laudan',
    slug: 'larry-laudan',
    title: 'Larry Laudan',
    subtitle: 'The pessimistic meta-induction against realism',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Laudan argued that the history of science is littered with once-successful theories (phlogiston, caloric, the ether) that were later judged false, undermining the claim that predictive success is reliable evidence of truth.',
    longDescription:
      'His 1981 "Confutation of Convergent Realism" catalogued numerous empirically successful past theories whose central theoretical entities turned out not to exist, arguing that if past successful theories were false, we have no strong inductive reason to think current successful theories are true. Realists have responded that many of these theories were only "approximately" or "partially" false, with central terms sometimes continuing to refer in modified form — a debate still unresolved.',
    startYear: 1941,
    endYear: 2022,
    dateDisplay: '1941–2022',
    approximateDate: false,
    latitude: 40.4406,
    longitude: -79.9959,
    places: [{ name: 'University of Pittsburgh', latitude: 40.4406, longitude: -79.9959 }],
    transregional: false,
    people: ['larry-laudan'],
    cultures: ['American'],
    disciplines: ['philosophy'],
    themes: ['realism', 'scientific-change'],
    philosophicalQuestions: [
      {
        prompt:
          'If past successful theories later turned out false, why should we trust that current successful theories are true?',
        debateId: 'pessimistic-meta-induction-laudan',
      },
    ],
    historicalSignificance:
      'The most influential historically grounded challenge to scientific realism, central to every subsequent defence of realism.',
    sources: [
      {
        author: 'Larry Laudan',
        title: '"A Confutation of Convergent Realism"',
        year: '1981',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['hilary-putnam', 'bas-van-fraassen'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'bas-van-fraassen',
    slug: 'bas-van-fraassen',
    title: 'Bas van Fraassen',
    subtitle: 'Constructive empiricism: believe only what is observable',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Van Fraassen proposed that scientists should aim for theories that are "empirically adequate" — correctly describing observable phenomena — without needing to believe claims about unobservable entities are literally true.',
    longDescription:
      'In The Scientific Image (1980), van Fraassen argued that accepting a theory only requires believing it gets the observable world right, remaining agnostic about whether unobservable posits like electrons exist as described — a position distinct from both full realism and old-style instrumentalism. Critics, including Ian Hacking, pushed back by arguing that scientists routinely manipulate unobservable entities in ways that make agnosticism about their existence hard to sustain.',
    startYear: 1941,
    endYear: 2024,
    dateDisplay: '1941–2024',
    approximateDate: false,
    latitude: 40.3431,
    longitude: -74.6551,
    places: [{ name: 'Princeton University', latitude: 40.3431, longitude: -74.6551 }],
    transregional: false,
    people: ['bas-van-fraassen'],
    cultures: ['Dutch', 'American'],
    disciplines: ['philosophy'],
    themes: ['realism', 'empirical-adequacy'],
    philosophicalQuestions: [
      {
        prompt:
          'Is it rational to accept a theory as useful without believing its claims about unobservable entities are literally true?',
        debateId: 'constructive-empiricism-van-fraassen',
      },
    ],
    historicalSignificance:
      'Revived serious anti-realist philosophy of science as a sophisticated alternative to both naive realism and crude instrumentalism.',
    sources: [
      { author: 'Bas van Fraassen', title: 'The Scientific Image', year: '1980', type: 'primary' },
    ],
    relatedEntryIds: ['larry-laudan', 'ian-hacking', 'ptolemy'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'ian-hacking',
    slug: 'ian-hacking',
    title: 'Ian Hacking',
    subtitle: '"If you can spray them, they exist"',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Hacking argued for realism about entities (though not necessarily about all theories) on the grounds that scientists routinely manipulate unobservable things like electrons as reliable experimental tools, not just theoretical posits.',
    longDescription:
      'In Representing and Intervening (1983), Hacking distinguished the question "do theories represent the world truly?" from "do scientists successfully intervene in the world using entities their theories describe?" — arguing the second question has a much more confident, realist answer, independent of how theory itself might change. His focus on experimental practice, not just theory, shifted philosophy of science toward taking laboratory work seriously as a subject in its own right.',
    startYear: 1936,
    endYear: 2023,
    dateDisplay: '1936–2023',
    approximateDate: false,
    latitude: 43.6532,
    longitude: -79.3832,
    places: [{ name: 'University of Toronto', latitude: 43.6532, longitude: -79.3832 }],
    transregional: false,
    people: ['ian-hacking'],
    cultures: ['Canadian'],
    disciplines: ['philosophy'],
    themes: ['realism', 'experiment'],
    philosophicalQuestions: [
      {
        prompt:
          'Does reliably using something as a tool (like an electron gun) count as evidence that the thing exists, independent of which theory about it turns out correct?',
        debateId: 'entity-realism-hacking',
      },
    ],
    historicalSignificance:
      "Shifted philosophy of science's attention from theories alone toward experimental practice as a distinct and philosophically important activity.",
    sources: [
      {
        author: 'Ian Hacking',
        title: 'Representing and Intervening',
        year: '1983',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['bas-van-fraassen', 'galileo-telescope'],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
  {
    id: 'nancy-cartwright',
    slug: 'nancy-cartwright',
    title: 'Nancy Cartwright',
    subtitle: '"How the laws of physics lie"',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Cartwright argued that the fundamental laws of physics are strictly true only of deliberately idealised models, not of the messy real world, while more modest "phenomenological" laws can be literally true of specific situations.',
    longDescription:
      'Her 1983 book provocatively claimed that the explanatory power of fundamental laws comes precisely from their being idealisations that strip away real-world complexity, which is also why they do not literally describe any actual concrete situation without extensive, theory-external correction. This reframes idealisation not as a regrettable shortcut but as integral to how physical explanation works at all.',
    startYear: 1944,
    endYear: undefined,
    dateDisplay: 'b. 1944',
    approximateDate: false,
    latitude: 51.5072,
    longitude: -0.1276,
    places: [{ name: 'London School of Economics', latitude: 51.5072, longitude: -0.1276 }],
    transregional: false,
    people: ['nancy-cartwright'],
    cultures: ['American', 'British'],
    disciplines: ['philosophy'],
    themes: ['models-and-idealisation'],
    philosophicalQuestions: [
      {
        prompt:
          'If a fundamental law is strictly true only of an idealised model that nothing in the real world exactly matches, in what sense is it still true?',
        debateId: 'models-idealisation-pragmatic-turn',
      },
    ],
    historicalSignificance:
      'A central figure in the "models as mediators" turn in philosophy of science, treating models as autonomous tools between theory and the world.',
    sources: [
      {
        author: 'Nancy Cartwright',
        title: 'How the Laws of Physics Lie',
        year: '1983',
        type: 'primary',
      },
    ],
    relatedEntryIds: ['bas-van-fraassen', 'newton'],
    confidence: 'established',
    contentStatus: 'complete',
  },
  {
    id: 'heather-douglas',
    slug: 'heather-douglas',
    title: 'Heather Douglas',
    subtitle: 'Against the value-free ideal of science',
    kind: 'person',
    period: 'philosophy-of-science',
    summary:
      'Douglas argued that scientists cannot and should not try to keep ethical and social values entirely out of scientific reasoning, especially where uncertainty carries real-world risk of harm.',
    longDescription:
      'In Science, Policy, and the Value-Free Ideal (2009), Douglas distinguished legitimate roles for values (helping decide how much evidence is enough before acting, given the costs of being wrong) from illegitimate ones (distorting evidence itself), arguing scientists bear direct moral responsibility for the foreseeable consequences of uncertainty in their work, particularly in policy-relevant science like pharmaceutical safety or environmental risk.',
    startYear: 1969,
    endYear: undefined,
    dateDisplay: 'b. 1969',
    approximateDate: false,
    latitude: 40.4406,
    longitude: -79.9959,
    places: [{ name: 'University of Pittsburgh', latitude: 40.4406, longitude: -79.9959 }],
    transregional: false,
    people: ['heather-douglas'],
    cultures: ['American'],
    disciplines: ['philosophy'],
    themes: ['objectivity', 'ethics'],
    philosophicalQuestions: [
      {
        prompt:
          'Can science ever be fully "value-free," especially when deciding how much uncertainty is acceptable before recommending action?',
        debateId: 'objectivity-values',
      },
    ],
    historicalSignificance:
      'A leading contemporary voice reshaping how philosophy of science handles the inescapable role of values in scientific judgement, directly relevant to climate and public-health policy debates.',
    sources: [
      {
        author: 'Heather Douglas',
        title: 'Science, Policy, and the Value-Free Ideal',
        year: '2009',
        type: 'primary',
      },
    ],
    relatedEntryIds: [
      'feminist-epistemology-idea',
      'climate-science-scepticism',
      'rachel-carson-silent-spring',
    ],
    confidence: 'established',
    contentStatus: 'complete',
    isJourneyStop: true,
  },
]
