import type { Debate } from '../types'

export const debates: Debate[] = [
  {
    id: 'induction-problem',
    slug: 'induction-problem',
    title: "Deduction, Induction, and Hume's Problem",
    question: 'Can observing the past ever rationally justify predictions about the future?',
    plainLanguageIntroduction:
      'Science relies constantly on induction: inferring general patterns from particular observations, and trusting that nature will keep behaving the way it has so far. David Hume pointed out a deep problem — you cannot justify this trust deductively (it is not a matter of logic), and you cannot justify it inductively either, without assuming the very thing you are trying to prove. This "problem of induction" has never been fully solved, only managed.',
    positions: [
      {
        id: 'inductivism',
        name: 'Inductivism',
        statement:
          'Repeated, careful observation can build justified general knowledge, even without airtight logical proof.',
        thinkers: ['francis-bacon'],
        argumentsFor: [
          'Practical success of accumulated observation in medicine, agriculture, and astronomy over millennia.',
          'Alternatives (pure scepticism) make ordinary life and science impossible.',
        ],
        objections: [
          'Cannot explain why nature should keep being regular.',
          'Risks circularity: using past success of induction to justify induction.',
        ],
      },
      {
        id: 'humean-scepticism',
        name: 'Humean Scepticism',
        statement:
          'Our confidence in induction is a psychological habit, not something reason can fully justify.',
        thinkers: ['david-hume'],
        argumentsFor: [
          'No logical bridge exists from "has always happened" to "will always happen."',
          'Even using probability to justify induction presupposes induction is reliable.',
        ],
        objections: [
          'Seems to leave all empirical science without rational foundation, which feels too strong a conclusion.',
        ],
      },
      {
        id: 'falsificationist-response',
        name: 'Falsificationist Response',
        statement:
          'Science does not need induction at all — it proceeds by conjecture and attempted refutation, a purely deductive process.',
        thinkers: ['karl-popper'],
        argumentsFor: [
          'Avoids the problem of induction by rejecting the need to justify generalisations positively.',
          'Matches the logical asymmetry: one counterexample can deductively refute a universal claim.',
        ],
        objections: [
          'Scientists do seem to treat repeated confirmation as making a theory more credible, not just "not yet refuted."',
        ],
      },
    ],
    thinkers: ['francis-bacon', 'david-hume', 'karl-popper'],
    historicalCaseIds: [
      'babylonian-astronomy',
      'aristotle',
      'ibn-al-haytham',
      'descartes',
      'whewell',
    ],
    contemporaryRelevance:
      'Every statistical model, weather forecast, and clinical trial extrapolates from past data to future cases — the same logical gap Hume identified underlies ongoing debates about the limits of machine-learning generalisation.',
    furtherReading: [
      {
        author: 'David Hume',
        title: 'An Enquiry Concerning Human Understanding',
        year: '1748',
        type: 'primary',
      },
      {
        author: 'Wesley Salmon',
        title: '"The Foundations of Scientific Inference"',
        year: '1967',
        type: 'secondary',
      },
    ],
    themes: ['method', 'induction'],
  },
  {
    id: 'verificationism-positivism',
    slug: 'verificationism-positivism',
    title: 'Verification and Logical Positivism',
    question: 'Is a statement only meaningful if it can be empirically verified?',
    plainLanguageIntroduction:
      'Logical positivists wanted to draw a sharp line between meaningful, scientific claims and meaningless metaphysical speculation, proposing that only empirically verifiable (or falsifiable) statements are meaningful at all. The criterion proved far harder to state precisely than it first appeared.',
    positions: [
      {
        id: 'strong-verificationism',
        name: 'Strong Verificationism',
        statement:
          'A statement is meaningful only if it can be conclusively verified by observation.',
        thinkers: ['moritz-schlick'],
        argumentsFor: [
          'Ties meaning directly to empirical content, ruling out unfalsifiable metaphysics.',
        ],
        objections: [
          'Universal scientific laws ("all metals conduct electricity") can never be conclusively verified by any finite set of observations.',
          'The verification principle itself cannot be verified by its own standard.',
        ],
      },
      {
        id: 'weak-confirmationism',
        name: 'Weak Confirmationism',
        statement:
          'A statement is meaningful if evidence can at least partially confirm or disconfirm it, even without full verification.',
        thinkers: ['rudolf-carnap'],
        argumentsFor: ['More realistic about how actual scientific claims relate to evidence.'],
        objections: [
          'Hard to specify "partial confirmation" with logical precision; later shown to admit many counterintuitive cases.',
        ],
      },
    ],
    thinkers: ['moritz-schlick', 'rudolf-carnap', 'a-j-ayer'],
    historicalCaseIds: ['logical-positivism-vienna-circle', 'karl-popper'],
    contemporaryRelevance:
      'Debates about what counts as a "meaningful" or "testable" claim still shape how courts, journals, and regulators decide whether a scientific claim deserves a hearing at all.',
    furtherReading: [
      { author: 'A.J. Ayer', title: 'Language, Truth and Logic', year: '1936', type: 'primary' },
    ],
    themes: ['method', 'verification'],
  },
  {
    id: 'falsifiability-popper',
    slug: 'falsifiability-popper',
    title: 'Popper and Falsifiability',
    question: 'Does making risky, falsifiable predictions mark the boundary of real science?',
    plainLanguageIntroduction:
      'Karl Popper proposed that what makes a theory scientific is not that it can be confirmed, but that it makes bold predictions that could, in principle, be shown false. A theory compatible with literally any evidence, he argued, tells us nothing.',
    positions: [
      {
        id: 'falsificationism',
        name: 'Falsificationism',
        statement:
          'Science progresses through bold conjecture and severe attempts at refutation, not accumulation of confirming evidence.',
        thinkers: ['karl-popper'],
        argumentsFor: [
          'Explains the asymmetry between confirming and disconfirming evidence.',
          'Gives a plausible reason to distrust theories (like some psychoanalytic claims) compatible with any outcome.',
        ],
        objections: [
          'The Duhem–Quine problem means no single experiment cleanly falsifies an isolated hypothesis.',
          'Historically, scientists have sometimes rightly ignored apparent falsifications, assuming measurement error instead.',
        ],
      },
    ],
    thinkers: ['karl-popper'],
    historicalCaseIds: ['plate-tectonics', 'ptolemy', 'newton'],
    contemporaryRelevance:
      '"Falsifiable" remains the most common popular shorthand for distinguishing real science from pseudoscience, even though philosophers regard the criterion as too simple on its own.',
    furtherReading: [
      {
        author: 'Karl Popper',
        title: 'The Logic of Scientific Discovery',
        year: '1959',
        type: 'primary',
      },
    ],
    themes: ['method', 'demarcation'],
  },
  {
    id: 'duhem-quine-underdetermination',
    slug: 'duhem-quine-underdetermination',
    title: 'The Duhem–Quine Problem and Underdetermination',
    question: 'When a prediction fails, how do we know which assumption to blame?',
    plainLanguageIntroduction:
      'No hypothesis is tested alone — every prediction depends on auxiliary assumptions about instruments, background theory, and initial conditions. When an experiment fails, logic alone cannot tell you whether the core hypothesis is wrong or one of these other assumptions is.',
    positions: [
      {
        id: 'holism',
        name: 'Confirmational Holism',
        statement:
          'Evidence bears on our whole web of belief together, never on a single statement in isolation.',
        thinkers: ['pierre-duhem', 'quine'],
        argumentsFor: [
          'Matches real scientific practice: anomalies are often blamed on instruments or background assumptions before the core theory.',
        ],
        objections: [
          'If taken to an extreme, seems to make theory choice arbitrary or purely a matter of convention.',
        ],
      },
      {
        id: 'moderate-holism',
        name: 'Moderate / Naturalised Holism',
        statement:
          'In practice, some beliefs are far more entrenched and resistant to revision than others, giving theory choice real structure despite underdetermination.',
        thinkers: ['w-v-o-quine'],
        argumentsFor: [
          'Explains why scientists do not treat all beliefs as equally revisable in practice.',
        ],
        objections: [
          'Still leaves open exactly how much freedom scientists have in assigning blame for failed predictions.',
        ],
      },
    ],
    thinkers: ['pierre-duhem', 'quine'],
    historicalCaseIds: ['plate-tectonics', 'galileo-telescope', 'newton'],
    contemporaryRelevance:
      'Debates over whether anomalous data (in climate models, particle physics, or psychology replication crises) should be blamed on theory or methodology recur constantly in contemporary science.',
    furtherReading: [
      {
        author: 'Pierre Duhem',
        title: 'The Aim and Structure of Physical Theory',
        year: '1906',
        type: 'primary',
      },
      {
        author: 'W.V.O. Quine',
        title: '"Two Dogmas of Empiricism"',
        year: '1951',
        type: 'primary',
      },
    ],
    themes: ['method', 'underdetermination'],
  },
  {
    id: 'kuhn-paradigms-revolutions',
    slug: 'kuhn-paradigms-revolutions',
    title: 'Kuhn: Paradigms, Revolutions, and Incommensurability',
    question:
      'Does science progress continuously, or through discontinuous revolutions that change the very questions being asked?',
    plainLanguageIntroduction:
      'Thomas Kuhn argued that most science is "normal science" — puzzle-solving inside a shared framework (a paradigm) — until anomalies accumulate into a crisis resolved by a revolutionary shift to a new paradigm. He controversially suggested that successive paradigms can be partly "incommensurable," making straightforward comparison between them difficult.',
    positions: [
      {
        id: 'kuhnian-revolutions',
        name: 'Paradigm Change',
        statement:
          'Major scientific change involves a holistic shift in concepts, standards, and even what counts as data — not just new facts added to an old framework.',
        thinkers: ['thomas-kuhn'],
        argumentsFor: [
          'Matches historical cases like the Copernican and chemical revolutions, where even basic terms and standards changed.',
        ],
        objections: [
          'If paradigms are truly incommensurable, it becomes hard to say science progresses toward anything, which many find an unacceptable conclusion.',
        ],
      },
      {
        id: 'continuous-progress',
        name: 'Continuous, Cumulative Progress',
        statement:
          'Despite dramatic-looking shifts, later science generally preserves, corrects, and extends earlier results rather than replacing them wholesale.',
        thinkers: ['hilary-putnam'],
        argumentsFor: [
          'Many successful predictions and techniques survive theory change (e.g. Newtonian mechanics remains useful).',
        ],
        objections: [
          'Can understate how radically some revolutions (e.g. relativity, plate tectonics) really did change prior assumptions.',
        ],
      },
    ],
    thinkers: ['thomas-kuhn', 'paul-feyerabend'],
    historicalCaseIds: ['copernicus', 'plate-tectonics', 'newton', 'aristotle'],
    contemporaryRelevance:
      '"Paradigm shift" has become common shorthand, sometimes loosely, for any major conceptual change — in science and far beyond it.',
    furtherReading: [
      {
        author: 'Thomas Kuhn',
        title: 'The Structure of Scientific Revolutions',
        year: '1962',
        type: 'primary',
      },
    ],
    themes: ['scientific-change', 'method'],
  },
  {
    id: 'scientific-realism-no-miracles',
    slug: 'scientific-realism-no-miracles',
    title: 'Scientific Realism and the No-Miracles Argument',
    question: 'Does the predictive success of science mean its theories are approximately true?',
    plainLanguageIntroduction:
      'Scientific realists argue that it would be a near-miracle for theories about unobservable things like electrons or genes to make such accurate novel predictions unless those entities really exist roughly as described. Critics respond that this argument proves too much, given how many past successful theories were later rejected.',
    positions: [
      {
        id: 'realism',
        name: 'Scientific Realism',
        statement:
          'Mature, successful scientific theories are at least approximately true descriptions of a mind-independent reality, including its unobservable parts.',
        thinkers: ['hilary-putnam'],
        argumentsFor: [
          'The no-miracles argument: success this precise and novel is hard to explain any other way.',
        ],
        objections: [
          'The pessimistic meta-induction: many successful past theories were still false.',
        ],
      },
      {
        id: 'anti-realism',
        name: 'Anti-Realism / Instrumentalism',
        statement:
          'Theories are tools for organising and predicting observations; their unobservable posits need not be taken as literally true.',
        thinkers: ['bas-van-fraassen'],
        argumentsFor: [
          'Avoids committing to entities science may later abandon.',
          'Matches historical cases like Ptolemaic epicycles, useful without being physically real.',
        ],
        objections: [
          'Struggles to explain why theories about unobservables succeed at all if they are not at least tracking something real.',
        ],
      },
    ],
    thinkers: ['hilary-putnam', 'bas-van-fraassen', 'larry-laudan'],
    historicalCaseIds: ['ptolemy', 'newton', 'copernicus'],
    contemporaryRelevance:
      'Whether to take unobservable entities in fundamental physics (dark matter, quantum fields) as literally real or as useful modelling tools remains a live question.',
    furtherReading: [
      {
        author: 'Hilary Putnam',
        title: 'Reason, Truth and History',
        year: '1981',
        type: 'primary',
      },
    ],
    themes: ['realism'],
  },
  {
    id: 'pessimistic-meta-induction-laudan',
    slug: 'pessimistic-meta-induction-laudan',
    title: 'The Pessimistic Meta-Induction',
    question: 'If so many past successful theories turned out false, why trust current ones?',
    plainLanguageIntroduction:
      'Larry Laudan catalogued numerous historically successful theories — phlogiston, caloric, the luminiferous ether — that made accurate predictions yet posited entities we now think do not exist. If predictive success did not make those theories true, why should it make our current theories true?',
    positions: [
      {
        id: 'pessimistic-induction',
        name: 'Pessimistic Meta-Induction',
        statement:
          'The historical track record of discarded successful theories undermines any inference from current success to current truth.',
        thinkers: ['larry-laudan'],
        argumentsFor: [
          'A long, well-documented list of historical counterexamples to "success implies truth."',
        ],
        objections: [
          'Selectively counts failures without weighing how many successful theories were never overturned.',
        ],
      },
      {
        id: 'selective-realism',
        name: 'Selective / Structural Realism',
        statement:
          'What survives theory change is not every claim but specific structures, relations, or working parts of past theories, which can still count as (partially) true.',
        thinkers: ['hilary-putnam'],
        argumentsFor: [
          'Terms like "heat" continued to refer across the caloric-to-thermodynamics transition even as the underlying theory changed.',
        ],
        objections: [
          'Can look like redefining "success" after the fact to save realism from counterexamples.',
        ],
      },
    ],
    thinkers: ['larry-laudan', 'hilary-putnam'],
    historicalCaseIds: ['newton', 'ptolemy'],
    contemporaryRelevance:
      "Directly informs how seriously we should take the possibility that today's best-confirmed physics (e.g. string theory's assumptions, or current cosmological models) could later be overturned.",
    furtherReading: [
      {
        author: 'Larry Laudan',
        title: '"A Confutation of Convergent Realism"',
        year: '1981',
        type: 'primary',
      },
    ],
    themes: ['realism', 'scientific-change'],
  },
  {
    id: 'constructive-empiricism-van-fraassen',
    slug: 'constructive-empiricism-van-fraassen',
    title: 'Constructive Empiricism',
    question:
      'Is it rational to accept a theory as useful without believing its unobservable claims are true?',
    plainLanguageIntroduction:
      'Bas van Fraassen argued scientists only need a theory to be "empirically adequate" — correct about what is observable — not literally true about unobservable entities. Accepting a theory, on this view, involves belief only in what it says about the observable world, plus a practical commitment to use it.',
    positions: [
      {
        id: 'constructive-empiricism',
        name: 'Constructive Empiricism',
        statement:
          'Science aims at empirical adequacy, not literal truth about unobservables; agnosticism about unobservables is rational.',
        thinkers: ['bas-van-fraassen'],
        argumentsFor: [
          'Avoids metaphysical commitments beyond what evidence requires.',
          'Respects a principled observable/unobservable distinction.',
        ],
        objections: [
          'Ian Hacking: reliably manipulating unobservable entities in experiments makes pure agnosticism about their existence hard to sustain.',
        ],
      },
    ],
    thinkers: ['bas-van-fraassen', 'ian-hacking'],
    historicalCaseIds: ['ptolemy', 'galileo-telescope'],
    contemporaryRelevance:
      'Still shapes debates about whether we should believe in entities we can only detect indirectly, such as dark matter or certain quantum phenomena.',
    furtherReading: [
      { author: 'Bas van Fraassen', title: 'The Scientific Image', year: '1980', type: 'primary' },
    ],
    themes: ['realism', 'empirical-adequacy'],
  },
  {
    id: 'entity-realism-hacking',
    slug: 'entity-realism-hacking',
    title: 'Experimental Entity Realism',
    question:
      'Does successfully using something as a tool prove it exists, even if theories about it keep changing?',
    plainLanguageIntroduction:
      'Ian Hacking proposed separating belief in entities from belief in theories about them. If you can reliably manipulate electrons to do things — "spray" them, in his phrase — that practical reliability is strong grounds for believing electrons exist, independent of which theory about electrons eventually wins out.',
    positions: [
      {
        id: 'entity-realism',
        name: 'Entity Realism',
        statement:
          'Experimental, instrumental reliability in manipulating an entity justifies believing it exists, even amid theoretical disagreement.',
        thinkers: ['ian-hacking'],
        argumentsFor: [
          'Explains why scientists feel confident about electrons despite disagreement over deeper quantum theory.',
        ],
        objections: [
          'Critics ask how you can be sure you are manipulating the entity itself rather than an artefact of the instrument — the "experimenter\'s regress."',
        ],
      },
    ],
    thinkers: ['ian-hacking'],
    historicalCaseIds: ['galileo-telescope', 'ibn-al-haytham'],
    contemporaryRelevance:
      'Relevant to debates about trusting entities detected only through complex instruments, such as gravitational waves or subatomic particles found only in collider data.',
    furtherReading: [
      {
        author: 'Ian Hacking',
        title: 'Representing and Intervening',
        year: '1983',
        type: 'primary',
      },
    ],
    themes: ['realism', 'experiment'],
  },
  {
    id: 'models-idealisation-pragmatic-turn',
    slug: 'models-idealisation-pragmatic-turn',
    title: 'Models, Idealisation, and the Pragmatic Turn',
    question: 'How can a model that is deliberately false still produce real understanding?',
    plainLanguageIntroduction:
      'Scientific models are often knowingly simplified or idealised — frictionless planes, infinite populations, point masses. Rather than treating this as a flaw, many philosophers now argue that idealisation is what gives models their explanatory power, acting as autonomous "mediators" between abstract theory and messy reality.',
    positions: [
      {
        id: 'models-as-mediators',
        name: 'Models as Mediators',
        statement:
          'Models are partly independent tools, neither pure theory nor pure data, that must be assessed on their own terms.',
        thinkers: ['nancy-cartwright'],
        argumentsFor: [
          'Explains how the same fundamental theory can be applied via very different models to different systems.',
        ],
        objections: [
          'Risks making it unclear what "truth" even means for a deliberately idealised model.',
        ],
      },
    ],
    thinkers: ['nancy-cartwright'],
    historicalCaseIds: ['newton', 'laplace'],
    contemporaryRelevance:
      'Climate models, epidemiological models, and economic models are all deliberately idealised — understanding how idealisation can still yield genuine insight is central to interpreting their outputs responsibly.',
    furtherReading: [
      {
        author: 'Nancy Cartwright',
        title: 'How the Laws of Physics Lie',
        year: '1983',
        type: 'primary',
      },
    ],
    themes: ['models-and-idealisation'],
  },
  {
    id: 'objectivity-values',
    slug: 'objectivity-values',
    title: 'Objectivity and the Role of Values',
    question: 'Can science be objective while still being shaped by values?',
    plainLanguageIntroduction:
      'The traditional "value-free ideal" holds that genuine science should be insulated from ethical, social, and political values, which belong only to how findings are applied. Critics argue this is neither possible nor desirable, especially where uncertainty means values inevitably shape judgement calls.',
    positions: [
      {
        id: 'value-free-ideal',
        name: 'The Value-Free Ideal',
        statement:
          'Values should be excluded from the core reasoning of science, confined to decisions about which questions to pursue or how to apply results.',
        thinkers: ['robert-merton'],
        argumentsFor: [
          'Protects scientific conclusions from being distorted by political or commercial interest.',
        ],
        objections: [
          'Impossible in practice when evidence is uncertain and a decision (how much evidence is "enough") must still be made.',
        ],
      },
      {
        id: 'values-in-science',
        name: 'Values Are Inescapable (Responsibly)',
        statement:
          'Values legitimately shape judgements about acceptable risk and evidentiary thresholds, and scientists bear responsibility for those judgements.',
        thinkers: ['heather-douglas'],
        argumentsFor: [
          'Explains real cases (drug safety, environmental risk) where "sufficient evidence" always embeds a value judgement about the cost of being wrong.',
        ],
        objections: [
          'Risks blurring the line between legitimate value-laden judgement and illegitimate bias distorting the evidence itself.',
        ],
      },
    ],
    thinkers: ['robert-merton', 'heather-douglas', 'lorraine-daston'],
    historicalCaseIds: [
      'boyle',
      'royal-society',
      'climate-science-scepticism',
      'daston-galison-objectivity',
    ],
    contemporaryRelevance:
      'Central to debates about expert testimony on vaccines, climate policy, and pharmaceutical regulation, where "just follow the science" obscures real, unavoidable value judgements.',
    furtherReading: [
      {
        author: 'Heather Douglas',
        title: 'Science, Policy, and the Value-Free Ideal',
        year: '2009',
        type: 'primary',
      },
    ],
    themes: ['objectivity', 'ethics'],
  },
  {
    id: 'feminist-epistemology',
    slug: 'feminist-epistemology',
    title: 'Feminist Epistemology and Situated Knowledge',
    question: "Does acknowledging a knower's social position make science more objective, or less?",
    plainLanguageIntroduction:
      'Feminist philosophers argue that all knowledge comes from somewhere — every researcher has a social position that shapes what questions seem worth asking. Rather than undermining objectivity, making this explicit and including previously excluded standpoints can produce "strong objectivity": more rigorous, less parochial knowledge.',
    positions: [
      {
        id: 'strong-objectivity',
        name: 'Strong Objectivity',
        statement:
          'Explicitly accounting for social position, and including marginalised standpoints, strengthens rather than weakens scientific objectivity.',
        thinkers: ['sandra-harding'],
        argumentsFor: [
          'Documented cases where unexamined assumptions (e.g. about sex differences, or primate social behaviour) produced worse science until challenged by differently positioned researchers.',
        ],
        objections: [
          'Critics worry this risks collapsing into relativism if pushed too far — are all standpoints equally valid?',
        ],
      },
    ],
    thinkers: ['sandra-harding', 'lorraine-code'],
    historicalCaseIds: ['margaret-cavendish', 'maria-sibylla-merian', 'feminist-epistemology-idea'],
    contemporaryRelevance:
      'Informs ongoing efforts to diversify research fields and reconsider which questions get funded and asked in the first place.',
    furtherReading: [
      {
        author: 'Sandra Harding',
        title: 'The Science Question in Feminism',
        year: '1986',
        type: 'primary',
      },
    ],
    themes: ['objectivity', 'gender'],
  },
  {
    id: 'demarcation-boundary-work',
    slug: 'demarcation-boundary-work',
    title: 'Demarcation and Boundary-Work',
    question: 'Is there a single, principled line between science and non-science?',
    plainLanguageIntroduction:
      'Philosophers have proposed criteria — verifiability, falsifiability — to separate science from pseudoscience or metaphysics. Sociologists like Thomas Gieryn argue that in practice, scientists draw this boundary strategically, depending on what they are defending it against, which undermines the idea of one fixed criterion.',
    positions: [
      {
        id: 'philosophical-demarcation',
        name: 'A Principled Criterion Exists',
        statement:
          'Some logical or methodological feature (falsifiability, testability) genuinely separates science from non-science.',
        thinkers: ['karl-popper'],
        argumentsFor: ['Offers a clear, teachable standard for evaluating claims.'],
        objections: [
          'No single criterion proposed so far survives all counterexamples without exception.',
        ],
      },
      {
        id: 'boundary-work',
        name: 'Demarcation as Boundary-Work',
        statement:
          'The science/non-science boundary is drawn rhetorically and strategically by scientists themselves, shifting with context and interest.',
        thinkers: ['thomas-gieryn'],
        argumentsFor: [
          'Documented cases of scientists using inconsistent criteria depending on whether they were excluding religion, pseudoscience, or government interference.',
        ],
        objections: [
          'Risks suggesting the boundary is arbitrary, when some proposed non-sciences really do lack good evidence.',
        ],
      },
    ],
    thinkers: ['karl-popper', 'thomas-gieryn'],
    historicalCaseIds: ['gieryn-boundary-work', 'merton-norms'],
    contemporaryRelevance:
      'Shapes legal and policy decisions about what counts as admissible scientific evidence or legitimate expertise.',
    furtherReading: [
      {
        author: 'Thomas Gieryn',
        title: 'Cultural Boundaries of Science',
        year: '1999',
        type: 'primary',
      },
    ],
    themes: ['demarcation'],
  },
  {
    id: 'expertise-trust-policy',
    slug: 'expertise-trust-policy',
    title: 'Expertise, Trust, and Public Policy',
    question:
      'What should society do when scientific experts disagree, or when the public distrusts expert consensus?',
    plainLanguageIntroduction:
      'Scientists do not stay inside laboratories. They also act as government advisers, regulators, expert witnesses, consultants, public communicators, advocates, and critics — roles that the naive picture of science (scientists discover neutral facts, governments simply apply them) does not capture well. Experts examining the very same evidence can recommend different actions, because disagreement can come from genuine uncertainty, different methods or disciplines, different background assumptions, or different judgements about which risks are acceptable. Precaution itself is a value-laden choice, not a purely factual one, and policy frequently has to act before uncertainty fully disappears. This raises hard questions about how non-experts should decide whom to trust, how to recognise manufactured doubt, and how much deference expert consensus deserves — especially when affected communities and practitioners outside formal credentialed expertise may hold relevant knowledge too.',
    positions: [
      {
        id: 'deference-to-consensus',
        name: 'Deference to Expert Consensus',
        statement:
          'Where a strong, broad expert consensus exists, non-experts are generally rational to defer to it over fringe dissent.',
        thinkers: ['naomi-oreskes'],
        argumentsFor: [
          'Non-experts lack the training to evaluate technical evidence directly; consensus aggregates distributed expert judgement.',
        ],
        objections: [
          'Consensus has sometimes been wrong, and deference can be exploited to shut down legitimate dissent.',
        ],
      },
      {
        id: 'precautionary-action',
        name: 'Precaution Under Uncertainty',
        statement:
          'When risks are serious and evidence is suggestive but incomplete, policy should act cautiously rather than waiting for full certainty.',
        thinkers: ['rachel-carson'],
        argumentsFor: [
          'Delaying action until proof is complete can allow serious, irreversible harm.',
        ],
        objections: [
          'Precaution can also be invoked to justify costly or unjustified restrictions without good evidence.',
        ],
      },
      {
        id: 'transparent-advice',
        name: 'Transparent, Value-Explicit Advice',
        statement:
          'Expert advice should state its evidence, assumptions, and value judgements explicitly, rather than presenting conclusions as simple neutral facts — so that genuine evidential disagreement can be told apart from disagreement about values.',
        thinkers: ['heather-douglas'],
        argumentsFor: [
          'Distinguishes cases where experts disagree because the evidence is genuinely unclear from cases where they agree on the evidence but weigh acceptable risk differently.',
          'Lets affected communities and non-expert decision-makers see where a judgement call, not just a measurement, is being made.',
        ],
        objections: [
          'Transparency about assumptions does not by itself resolve disagreements about which values should guide policy.',
        ],
      },
    ],
    thinkers: ['rachel-carson', 'naomi-oreskes', 'heather-douglas'],
    historicalCaseIds: [
      'john-snow-cholera',
      'rachel-carson-silent-spring',
      'climate-science-scepticism',
      'bengal-famine-science',
    ],
    contemporaryRelevance:
      "Directly shapes public debate over vaccination, pandemic advice, pesticide and environmental regulation, and climate policy, where scientific consensus, public trust, and political interest frequently collide — and where scientists' own roles as advisers, regulators, and advocates are themselves part of the story.",
    furtherReading: [
      { author: 'Naomi Oreskes', title: 'Merchants of Doubt', year: '2010', type: 'secondary' },
    ],
    themes: ['expertise-and-policy', 'evidence-and-action'],
  },
  {
    id: 'ethics-in-science',
    slug: 'ethics-in-science',
    title: 'Ethics in Science',
    question:
      'Is scientific knowledge itself morally neutral, with only its applications good or bad?',
    plainLanguageIntroduction:
      'Fritz Haber discovered how to feed billions and how to gas soldiers using closely related chemistry. Cases like his test whether we can cleanly separate "pure" scientific knowledge from the uses it enables, and what responsibility researchers bear for foreseeable misuse. Ethics, in plain terms, is reasoning about how people ought to act — and different ethical frameworks give different answers here. A consequentialist (including the utilitarian tradition) judges actions by their outcomes: weighing expected benefits against expected harms. A deontologist holds that some actions are wrong regardless of good outcomes, because they violate duties or treat people merely as means to an end. Virtue ethics asks instead what a person of good character — honest, careful, humble about uncertainty — would do, rather than calculating consequences or applying a fixed rule. None of these frameworks is presented here as simply correct; comparing how each would judge the same historical case is itself informative.\n\nWorth sitting with: Can the production of knowledge really be separated from its possible uses? Does a scientist have responsibilities beyond following the law? Do good consequences justify dangerous research? Who should decide whether a risk is acceptable? And does refusing to pursue a line of research also have consequences?',
    positions: [
      {
        id: 'neutrality-thesis',
        name: 'Neutrality of Knowledge',
        statement:
          'Knowledge itself is neutral; moral responsibility attaches only to how it is applied, not to discovering it.',
        thinkers: [],
        argumentsFor: [
          "Preserves scientists' ability to pursue open inquiry without being blamed for every possible misuse.",
        ],
        objections: [
          'Some research (e.g. weapons-specific research) seems to have foreseeable, near-exclusive harmful application, undermining a clean separation.',
        ],
      },
      {
        id: 'researcher-responsibility',
        name: 'Researcher Responsibility',
        statement:
          'Scientists bear real moral responsibility for the foreseeable consequences and applications of their work, not just its discovery.',
        thinkers: ['heather-douglas'],
        argumentsFor: [
          'Consistent with standard moral reasoning about foreseeable consequences in other professions.',
        ],
        objections: [
          'Hard to specify in advance how foreseeable a consequence must be to generate responsibility.',
        ],
      },
      {
        id: 'consequentialist-framing',
        name: 'Consequentialism / Utilitarianism',
        statement:
          'Research choices should be judged by weighing their likely benefits against their likely harms, aiming for the best overall balance of outcomes.',
        thinkers: [],
        argumentsFor: [
          "Captures intuitive reasoning actually used to justify difficult choices, such as Haber's claim that more lethal weapons might shorten a war.",
        ],
        objections: [
          'Consequences are often difficult to predict or weigh reliably in advance.',
          'Can be used to justify serious harms to a few if an aggregate benefit to many is claimed.',
        ],
      },
      {
        id: 'deontological-framing',
        name: 'Deontology',
        statement:
          'Some actions — developing weapons intended to kill, or experimenting on people without consent — are wrong regardless of beneficial outcomes, because they violate duties or rights.',
        thinkers: [],
        argumentsFor: [
          "Protects individuals from being treated merely as means to someone else's end, even for a popular cause.",
        ],
        objections: [
          'Can produce rigid conclusions that take no account of catastrophic consequences of inaction.',
        ],
      },
      {
        id: 'virtue-framing',
        name: 'Virtue Ethics',
        statement:
          'Ask what a person of good character — honest, humble about uncertainty, careful of others — would do, rather than calculating consequences or applying a fixed rule.',
        thinkers: [],
        argumentsFor: [
          'Matches how practising scientists often actually describe professional integrity and mentorship.',
        ],
        objections: [
          'Offers less concrete guidance for genuinely novel dilemmas.',
          'What counts as a "virtue" can itself be culturally contested.',
        ],
      },
    ],
    thinkers: ['heather-douglas'],
    historicalCaseIds: [
      'haber-bosch',
      'haber-chemical-warfare',
      'manhattan-project',
      'congo-resource-extraction',
      'lysenkoism-soviet-genetics',
      'ai-academic-knowledge',
    ],
    contemporaryRelevance:
      'Central to contemporary debates over dual-use research in biotechnology and AI, medical research ethics, environmental risk, and science conducted under political pressure — fields with both clear benefits and serious risks of misuse.',
    furtherReading: [
      {
        author: 'Heather Douglas',
        title: 'Science, Policy, and the Value-Free Ideal',
        year: '2009',
        type: 'primary',
      },
      {
        author: 'Michael Sandel',
        title: "Justice: What's the Right Thing to Do?",
        year: '2009',
        type: 'secondary',
      },
    ],
    themes: ['ethics'],
  },
  {
    id: 'discovery-invention-progress',
    slug: 'discovery-invention-progress',
    title: 'Discovery, Invention, and the Shape of Progress',
    question:
      'Are "discovery" and "invention" stable concepts, and does science progress in a single direction at all?',
    plainLanguageIntroduction:
      'We often say scientists "discover" facts about a world that was already there, and "invent" tools and technologies. But cases of simultaneous independent discovery, contested credit, and knowledge built on uncredited labour complicate both concepts — and raise the question of whether talking about scientific "progress" assumes a tidier, more linear story than history supports.',
    positions: [
      {
        id: 'discovery-realism',
        name: 'Discovery Tracks a Mind-Independent World',
        statement:
          '"Discovery" is the right word when a claim describes something that existed independently of the person who found it, regardless of who gets social credit.',
        thinkers: [],
        argumentsFor: [
          'Matches ordinary usage and the intuitive difference between finding a fact and making an artefact.',
        ],
        objections: [
          'Does not resolve who should get credit, or how much labour (field assistants, informants, technicians) goes unacknowledged in any given "discovery."',
        ],
      },
      {
        id: 'social-construction-of-credit',
        name: 'Credit and Priority Are Socially Constructed',
        statement:
          'Whatever the metaphysics of discovery, who gets named as "the discoverer" is shaped by class, race, gender, and institutional power, not by priority alone.',
        thinkers: [],
        argumentsFor: [
          "Documented cases (Wallace/Darwin, Merian's unnamed informants, colonial science) where credit did not track contribution cleanly.",
        ],
        objections: [
          'Can be read as denying that some people really did make the key intellectual contribution, when often they did.',
        ],
      },
    ],
    thinkers: [],
    historicalCaseIds: [
      'darwin',
      'alfred-russel-wallace',
      'maria-sibylla-merian',
      'babylonian-astronomy',
      'ai-academic-knowledge',
    ],
    contemporaryRelevance:
      'Still central to debates over authorship, patenting, and credit in large collaborative science (and now, AI-assisted research).',
    furtherReading: [
      {
        author: 'Thomas Kuhn',
        title: 'The Structure of Scientific Revolutions',
        year: '1962',
        type: 'primary',
      },
    ],
    themes: ['scientific-change', 'profession-and-identity'],
  },
  {
    id: 'what-makes-a-scientist',
    slug: 'what-makes-a-scientist',
    title: 'What Makes Someone a Scientist?',
    question: 'What makes someone a scientist?',
    plainLanguageIntroduction:
      'This question can be answered in at least three different ways, which this atlas treats as complementary rather than competing. A philosopher\'s answer looks for a distinctive method: a scientist is someone who reasons in a particular way, typically by moving from observation to generalisation (induction) or by testing bold conjectures against evidence (as Popper proposed). A historian\'s answer looks for a specific, datable social identity: before the nineteenth century, investigators of nature were usually called "natural philosophers," practising a largely unpaid, often theologically inflected pursuit; the word "scientist" itself was only coined in 1834, naming a new professional role that emerged gradually through specialisation, paid posts, and disciplinary societies. A sociologist\'s answer looks for community norms and boundary-drawing: being a scientist is partly a matter of having one\'s work recognised as science by the relevant scientific community and its institutions, which actively defend the label "science" because it confers authority, funding, and public trust.',
    positions: [
      {
        id: 'method-based',
        name: "The Philosopher's Answer: A Distinctive Method",
        statement:
          'Science is distinguished from other pursuits by its method — moving from observation to generalisation, or systematically testing conjectures against evidence.',
        thinkers: ['francis-bacon', 'david-hume', 'karl-popper'],
        argumentsFor: [
          'Offers a principled way to separate science from pseudoscience, rather than relying on social prestige.',
          'Matches how many working scientists describe their own practice.',
        ],
        objections: [
          "Hume's problem of induction: inferring that the sun will rise tomorrow because it always has before cannot be logically guaranteed, since it assumes nature will keep behaving uniformly.",
          'No observation is ever completely neutral or theory-free, making a clean starting point for pure induction hard to locate.',
          'Twentieth-century philosophy of science (Kuhn, Feyerabend) argued that no single method has actually governed all successful science across history.',
        ],
      },
      {
        id: 'historical-identity',
        name: "The Historian's Answer: A Specific Professional Identity",
        statement:
          '"Scientist" names a historically specific role that emerged gradually in nineteenth-century Britain, replacing the older, broader category of "natural philosopher."',
        thinkers: ['mary-somerville', 'whewell'],
        argumentsFor: [
          'The English word "scientist" did not exist before 1834 and was initially contested, showing the identity was actively constructed, not simply discovered.',
          'Professionalisation — paid posts, training, examinations, societies, journals — created a recognisable modern role that natural philosophy, as a largely amateur and gentlemanly pursuit, had not required.',
        ],
        objections: [
          'Risks implying earlier investigators were not "really" doing science, which is anachronistic.',
          "The category was shaped as much by gender, class, and access to institutions as by the content of anyone's work — Mary Somerville, among the most capable natural philosophers of her generation, never fit neatly into the professional categories being built around her.",
        ],
      },
      {
        id: 'social-institutional',
        name: "The Sociologist's Answer: Community Norms and Boundary-Work",
        statement:
          'Being a scientist is partly a social achievement: meeting a community\'s norms, and having one\'s work successfully recognised as "science" by scientific institutions.',
        thinkers: ['robert-merton', 'thomas-gieryn'],
        argumentsFor: [
          'Merton described an institutional ethos — communalism, universalism, disinterestedness, organised scepticism — that explains why certain conduct (plagiarism, data fabrication) is treated as a betrayal of science itself, not just bad luck.',
          "Gieryn's boundary-work shows that scientists and institutions actively, sometimes inconsistently, defend the science/non-science boundary because the label confers authority, funding, and legitimacy.",
          'Scientific priority disputes make the tension visible: withholding results before publication can be condemned as secrecy, yet defended as protecting credit or ensuring results are checked before release.',
        ],
        objections: [
          'Merton was describing an idealised ethos, not claiming scientists always live up to it — real practice regularly departs from these norms.',
          'Defining science by what the community currently calls science risks circularity.',
        ],
      },
    ],
    thinkers: [
      'francis-bacon',
      'david-hume',
      'karl-popper',
      'mary-somerville',
      'whewell',
      'robert-merton',
      'thomas-gieryn',
    ],
    historicalCaseIds: [
      'mary-somerville',
      'whewell',
      'word-scientist',
      'natural-philosophy',
      'professionalisation-of-science',
      'scientific-societies',
      'merton-norms',
      'gieryn-boundary-work',
      'lysenkoism-soviet-genetics',
    ],
    contemporaryRelevance:
      'Still live in disputes over who counts as a legitimate scientist today — citizen scientists, industry researchers without academic posts, and now researchers whose work is substantially AI-assisted all test where the community currently draws the line.',
    furtherReading: [
      {
        author: 'Sydney Ross',
        title: '"Scientist: The Story of a Word"',
        year: '1962',
        type: 'secondary',
      },
      {
        author: 'Robert Merton',
        title: 'The Sociology of Science',
        year: '1973',
        type: 'secondary',
      },
      {
        author: 'Thomas Gieryn',
        title: 'Cultural Boundaries of Science',
        year: '1999',
        type: 'secondary',
      },
    ],
    themes: ['profession-and-identity', 'method', 'demarcation', 'induction'],
  },
  {
    id: 'scientific-images-objectivity',
    slug: 'scientific-images-objectivity',
    title: 'Can We Trust What Science Shows Us?',
    question: 'Can we trust what science shows us?',
    plainLanguageIntroduction:
      'Images, diagrams, models, specimens, maps, and visualisations are not simply decorative illustrations added to an already-finished theory — historians of science argue they are often central to producing scientific knowledge in the first place. From Galileo\'s telescopic drawings of a cratered, imperfect Moon to Vesalius\'s anatomical woodcuts, every scientific image involves choices: what to select, how to frame it, at what scale, in what colour, what to label, what to enhance, and what counts as a "representative" example worth showing at all. Daston and Galison\'s history of scientific objectivity shows that even the standards for a trustworthy image have changed over time — from idealised "truth-to-nature" illustrations, to "mechanical objectivity" that tried to minimise the observer\'s interpretive role (favouring photography and other automatic recording), to a later return of "trained judgement" that reintroduced expert interpretation as a virtue rather than a flaw.',
    positions: [
      {
        id: 'images-as-evidence',
        name: 'Images Can Count as Direct Evidence',
        statement:
          'Well-made scientific images, especially those produced through standardised, mechanical, or quantitative procedures, can function as genuine evidence rather than mere illustration.',
        thinkers: ['galileo'],
        argumentsFor: [
          'Shared, reproducible imaging techniques let independent observers check the same evidence for themselves.',
          'Historically, instruments and images have often earned trust precisely by being checked, repeated, and compared across observers.',
        ],
        objections: [
          'Every image still involves selection, framing, and enhancement choices that are never fully "neutral."',
        ],
      },
      {
        id: 'images-as-constructed',
        name: 'Images Are Always Partly Constructed',
        statement:
          'Scientific images are always shaped by choices about framing, scale, colour, labelling, and what counts as a "representative" example, so they must be read critically rather than taken as transparent windows onto nature.',
        thinkers: [],
        argumentsFor: [
          'Historical shifts in what counted as a properly "objective" image — idealised type specimens, raw mechanical reproduction, later trained expert judgement — show that objectivity itself has a history, not a single fixed standard.',
        ],
        objections: [
          'Taken too far, this risks implying all images are equally unreliable, collapsing a useful distinction between careful and careless representation.',
        ],
      },
    ],
    thinkers: ['galileo'],
    historicalCaseIds: [
      'galileo-telescope',
      'vesalius',
      'maria-sibylla-merian',
      'daston-galison-objectivity',
      'ibn-al-haytham',
    ],
    contemporaryRelevance:
      'Medical imaging, satellite and climate-data visualisation, and AI-generated or AI-enhanced scientific images all raise the same questions about selection, enhancement, and trust in a newly pressing form.',
    furtherReading: [
      { author: 'Lorraine Daston', title: 'Objectivity', year: '2007', type: 'secondary' },
    ],
    themes: ['scientific-images', 'objectivity', 'instruments-and-method'],
  },
]
