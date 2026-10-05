(() => {
  'use strict';

  /* =========================================================
     CONFIG — edit these lines only
     ========================================================= */
  const CV_URL = 'CV_Ibrahim_Khalil_Andoulsi.pdf';
  // Paste the direct LinkedIn post URL of the PwC demo here:
  const DEMO_URL = 'https://www.linkedin.com/in/ibrahim-khalil-andoulsi-023980300/recent-activity/all/';
  const GITHUB_URL = 'https://github.com/ibrandos';
  const EMAIL = 'andoulsiibrahimkhalil@gmail.com';
  const PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const isTouch = matchMedia('(hover: none)').matches;

  $$('[data-gh]').forEach(a => a.href = GITHUB_URL);
  $('#year').textContent = new Date().getFullYear();

  /* =========================================================
     PROJECTS — all case-study content lives here (EN + FR)
     ========================================================= */
  const PROJECTS = [
    {
      id: 'pwc', cat: 'pro', featured: true, demo: true,
      type: { en: 'Professional · Agentic AI', fr: 'Professionnel · IA agentique' },
      title: { en: 'Agentic AI Copilot for Power BI', fr: 'Copilote IA agentique pour Power BI' },
      meta: { en: 'PwC · AI Engineering Intern · Feb – Jul 2026', fr: 'PwC · Stagiaire ingénieur IA · Févr. – Juil. 2026' },
      brief: {
        en: 'An AI assistant embedded in Power BI that lets directors analyze reports, filter, navigate and create visuals — by text or by voice.',
        fr: 'Un assistant IA intégré à Power BI qui permet aux directeurs d\'analyser leurs rapports, filtrer, naviguer et créer des visuels — à l\'écrit ou à la voix.'
      },
      overview: {
        en: [
          'Directors work with dense Power BI reports: many pages, filters, KPIs and DAX measures. Getting a precise answer often means knowing exactly where to click and how each measure is computed.',
          'I designed and built an agentic assistant that lives inside the dashboard. Directors ask questions or give commands in natural language or by voice, and the agent explains KPIs, applies filters, navigates pages and builds new visuals on the filtered data.'
        ],
        fr: [
          'Les directeurs travaillent avec des rapports Power BI denses : de nombreuses pages, des filtres, des KPI et des mesures DAX. Obtenir une réponse précise suppose souvent de savoir exactement où cliquer et comment chaque mesure est calculée.',
          'J\'ai conçu et développé un assistant agentique intégré directement au tableau de bord. Les directeurs posent leurs questions ou donnent des commandes en langage naturel ou à la voix, et l\'agent explique les KPI, applique des filtres, navigue entre les pages et crée de nouveaux visuels sur les données filtrées.'
        ]
      },
      challenge: {
        en: 'Make complex BI reports usable through conversation, while keeping every answer faithful to the data on screen and every action within the user\'s access rights.',
        fr: 'Rendre des rapports BI complexes utilisables par la conversation, tout en gardant chaque réponse fidèle aux données affichées et chaque action dans le périmètre des droits de l\'utilisateur.'
      },
      approach: {
        en: 'Ground the LLM in the live report state — active visuals, active filters, measures and DAX — and let a LangGraph agent decide between answering, routing and executing dashboard actions through the Power BI JavaScript APIs.',
        fr: 'Ancrer le LLM dans l\'état réel du rapport — visuels actifs, filtres actifs, mesures et DAX — et laisser un agent LangGraph choisir entre répondre, router et exécuter des actions sur le tableau de bord via les API JavaScript de Power BI.'
      },
      features: {
        en: [
          'Angular SPA integrating Power BI Embedded, connected to a FastAPI backend.',
          '11-node LangGraph workflow handling routing, memory and automated tool execution.',
          'Report pipeline combining Power BI APIs and PBIX semantic-model parsing to feed Azure OpenAI with visuals, filters, measures and DAX expressions.',
          'Natural-language and voice commands for analysis, filtering, page navigation and custom visual creation.',
          'Microsoft Entra ID and MSAL authentication, with enterprise row-level security strictly enforced.'
        ],
        fr: [
          'SPA Angular intégrant Power BI Embedded, connectée à un backend FastAPI.',
          'Workflow LangGraph à 11 nœuds gérant le routage, la mémoire et l\'exécution automatique des outils.',
          'Pipeline de rapport combinant les API Power BI et l\'analyse du modèle sémantique PBIX pour fournir à Azure OpenAI les visuels, filtres, mesures et expressions DAX.',
          'Commandes en langage naturel et vocales pour l\'analyse, le filtrage, la navigation et la création de visuels personnalisés.',
          'Authentification Microsoft Entra ID et MSAL, avec application stricte de la sécurité au niveau des lignes (RLS).'
        ]
      },
      arch: {
        nodes: [
          { t: 'Angular SPA', s: { en: 'Power BI Embedded', fr: 'Power BI Embedded' } },
          { t: 'FastAPI', s: { en: 'Orchestration backend', fr: 'Backend d\'orchestration' } },
          { t: 'LangGraph', s: { en: '11-node agent', fr: 'Agent à 11 nœuds' }, hl: true },
          { t: 'Azure OpenAI', s: { en: 'Grounded on live report context', fr: 'Ancré dans le contexte du rapport' } }
        ],
        note: {
          en: 'Actions executed through the Power BI JavaScript APIs · Secured with Entra ID, MSAL and RLS',
          fr: 'Actions exécutées via les API JavaScript Power BI · Sécurisé par Entra ID, MSAL et RLS'
        }
      },
      bars: [
        { v: 100, l: { en: 'Page navigation & targeted filtering', fr: 'Navigation entre pages & filtrage ciblé' } },
        { v: 90, l: { en: 'On-demand visual creation with filtered data', fr: 'Création de visuels à la demande sur données filtrées' } },
        { v: 75, l: { en: 'Analytical Q&A & KPI interpretation', fr: 'Questions analytiques & interprétation des KPI' } }
      ],
      resultsNote: {
        en: 'Accuracy measured on automated dashboard interactions.',
        fr: 'Précision mesurée sur les interactions automatisées avec le tableau de bord.'
      },
      stack: ['LangGraph', 'Azure OpenAI', 'FastAPI', 'Angular', 'Power BI Embedded', 'Power BI JS API', 'DAX', 'Entra ID', 'MSAL']
    },
    {
      id: 'docmind', cat: 'personal',
      type: { en: 'Personal project · RAG', fr: 'Projet personnel · RAG' },
      title: { en: 'DocMind', fr: 'DocMind' },
      meta: { en: 'Personal project · Multimodal RAG assistant', fr: 'Projet personnel · Assistant RAG multimodal' },
      brief: {
        en: 'A multimodal document assistant that answers with page-level citations across PDF, DOCX, PPTX and XLSX — charts and images included.',
        fr: 'Un assistant documentaire multimodal qui répond avec des citations à la page sur PDF, DOCX, PPTX et XLSX — graphiques et images compris.'
      },
      overview: {
        en: [
          'Answers from documents are only useful if you can trust them. DocMind is a document assistant built around grounding: every answer points back to the page it comes from.',
          'It handles PDF, DOCX, PPTX and XLSX files, and extends grounding beyond text to charts and images using a local vision-language model.'
        ],
        fr: [
          'Une réponse tirée d\'un document n\'est utile que si l\'on peut s\'y fier. DocMind est un assistant documentaire construit autour de l\'ancrage : chaque réponse renvoie à la page dont elle provient.',
          'Il traite les fichiers PDF, DOCX, PPTX et XLSX, et étend l\'ancrage au-delà du texte, aux graphiques et aux images, grâce à un modèle vision-langage local.'
        ]
      },
      challenge: {
        en: 'Retrieval quality was the bottleneck — top-3 retrieval accuracy started at 58% — and visual content like charts was out of reach for a text-only pipeline.',
        fr: 'La qualité de la recherche était le point faible — la précision top-3 partait de 58 % — et les contenus visuels comme les graphiques échappaient à un pipeline purement textuel.'
      },
      approach: {
        en: 'Combine dense and BM25 retrieval over Qdrant, rerank the candidates, and bring charts and images into the grounding with a local VLM.',
        fr: 'Combiner recherche dense et BM25 sur Qdrant, reclasser les candidats, et intégrer graphiques et images à l\'ancrage grâce à un VLM local.'
      },
      features: {
        en: [
          'Hybrid retrieval (dense + BM25) over Qdrant with a reranking stage.',
          'Support for PDF, DOCX, PPTX and XLSX documents.',
          'Local vision-language model to ground answers in charts and images.',
          'Page-level citations on every answer.',
          'Evaluation with Ragas on a 100-question set.'
        ],
        fr: [
          'Recherche hybride (dense + BM25) sur Qdrant avec une étape de reranking.',
          'Prise en charge des documents PDF, DOCX, PPTX et XLSX.',
          'Modèle vision-langage local pour ancrer les réponses dans les graphiques et les images.',
          'Citations à la page pour chaque réponse.',
          'Évaluation avec Ragas sur un jeu de 100 questions.'
        ]
      },
      arch: {
        nodes: [
          { t: 'Documents', s: { en: 'PDF · DOCX · PPTX · XLSX', fr: 'PDF · DOCX · PPTX · XLSX' } },
          { t: 'Qdrant', s: { en: 'Dense + BM25 hybrid search', fr: 'Recherche hybride dense + BM25' }, hl: true },
          { t: 'Reranker', s: { en: 'Candidate reordering', fr: 'Reclassement des candidats' } },
          { t: 'LLM + local VLM', s: { en: 'Answers with page citations', fr: 'Réponses citées à la page' } }
        ],
        note: { en: 'Evaluated with Ragas on 100 questions', fr: 'Évalué avec Ragas sur 100 questions' }
      },
      stats: [
        { from: 58, v: 92.1, dec: 1, suf: '%', l: { en: 'Top-3 retrieval accuracy', fr: 'Précision de recherche top-3' } },
        { v: 100, l: { en: 'Questions in the Ragas eval set', fr: 'Questions dans le jeu d\'évaluation Ragas' } },
        { v: 4, l: { en: 'Document formats supported', fr: 'Formats de documents pris en charge' } }
      ],
      stack: ['Python', 'Qdrant', 'BM25', 'Reranking', 'VLM', 'Ragas']
    },
    {
      id: 'binergy', cat: 'pro',
      type: { en: 'Professional · MLOps', fr: 'Professionnel · MLOps' },
      title: { en: 'Industrial Anomaly Detection', fr: 'Détection d\'anomalies industrielles' },
      meta: { en: 'Bi\'nergy · AI Engineering & MLOps Intern · Jul – Aug 2025', fr: 'Bi\'nergy · Stagiaire ingénieur IA & MLOps · Juil. – Août 2025' },
      brief: {
        en: 'End-to-end fault detection on a year of minute-level machine sensor data, shipped with CI/CD and full observability.',
        fr: 'Détection de pannes de bout en bout sur un an de données capteurs à la minute, déployée avec CI/CD et une observabilité complète.'
      },
      overview: {
        en: [
          'Industrial machines produce continuous sensor streams, and faults hide in noisy, high-frequency data. The goal was to detect them reliably and to run the detector like a real production service.',
          'I built the whole chain: from raw sensor data to a containerized, monitored model with automated alerting.'
        ],
        fr: [
          'Les machines industrielles produisent des flux de capteurs continus, et les pannes se cachent dans des données bruitées et à haute fréquence. L\'objectif : les détecter de façon fiable et faire tourner le détecteur comme un vrai service de production.',
          'J\'ai construit toute la chaîne : des données brutes des capteurs jusqu\'à un modèle conteneurisé, supervisé et doté d\'alertes automatiques.'
        ]
      },
      challenge: {
        en: 'Around a year of raw, minute-level sensor data per feature, with a first model stuck at about 60% performance.',
        fr: 'Environ un an de données capteurs brutes à la minute par variable, avec un premier modèle plafonnant autour de 60 %.'
      },
      approach: {
        en: 'Invest in data quality and features first, track every experiment in MLflow, then ship the best model with production-grade monitoring.',
        fr: 'Miser d\'abord sur la qualité des données et des features, suivre chaque expérience dans MLflow, puis déployer le meilleur modèle avec une supervision digne de la production.'
      },
      features: {
        en: [
          'ETL workflows to clean and transform raw machine data.',
          'Feature engineering that lifted model performance from 60% to 92%, then to a 96.2% F1-score with XGBoost.',
          'Experiment and model-run tracking with MLflow.',
          'Dockerized application delivered through a CI/CD pipeline.',
          'Prometheus/Grafana monitoring of latency, throughput, error rates and resource usage, with automated email alerting.'
        ],
        fr: [
          'Workflows ETL pour nettoyer et transformer les données brutes des machines.',
          'Feature engineering ayant porté la performance de 60 % à 92 %, puis à un F1-score de 96,2 % avec XGBoost.',
          'Suivi des expériences et des modèles avec MLflow.',
          'Application Dockerisée livrée via un pipeline CI/CD.',
          'Supervision Prometheus/Grafana de la latence, du débit, des erreurs et des ressources, avec alertes automatiques par e-mail.'
        ]
      },
      arch: {
        nodes: [
          { t: { en: 'Sensor data', fr: 'Données capteurs' }, s: { en: 'Minute-level, ~1 year', fr: 'À la minute, ~1 an' } },
          { t: 'ETL & features', s: { en: 'Cleaning & transformation', fr: 'Nettoyage & transformation' } },
          { t: 'XGBoost', s: { en: 'Tracked in MLflow', fr: 'Suivi dans MLflow' }, hl: true },
          { t: 'Docker + CI/CD', s: { en: 'Deployment', fr: 'Déploiement' } },
          { t: 'Prometheus · Grafana', s: { en: 'Monitoring & alerts', fr: 'Supervision & alertes' } }
        ]
      },
      stats: [
        { v: 96.2, dec: 1, suf: '%', l: { en: 'F1-score', fr: 'F1-score' } },
        { v: 96.9, dec: 1, suf: '%', l: { en: 'Fault recall', fr: 'Rappel des pannes' } },
        { from: 60, v: 92, suf: '%', l: { en: 'Performance gain from ETL & feature engineering', fr: 'Gain de performance grâce à l\'ETL & au feature engineering' } }
      ],
      stack: ['Python', 'XGBoost', 'MLflow', 'Docker', 'CI/CD', 'Prometheus', 'Grafana']
    },
    {
      id: 'nutrigen', cat: 'personal',
      type: { en: 'Personal project · LLMOps', fr: 'Projet personnel · LLMOps' },
      title: { en: 'NutriGen', fr: 'NutriGen' },
      meta: { en: 'Personal project · Governed LLM platform', fr: 'Projet personnel · Plateforme LLM gouvernée' },
      brief: {
        en: 'A fine-tuned recipe-generation LLM with a governance layer enforcing nutrition constraints, deployed as scalable microservices.',
        fr: 'Un LLM de génération de recettes affiné, encadré par une couche de gouvernance nutritionnelle et déployé en microservices scalables.'
      },
      overview: {
        en: [
          'Generative models are creative, but in nutrition, creativity has to respect hard limits. NutriGen generates recipes while enforcing calories, macros and allergens — and logs every decision for audit.',
          'Beyond the model, the project is a complete MLOps platform: microservices on Kubernetes, event-driven inference and automated delivery.'
        ],
        fr: [
          'Les modèles génératifs sont créatifs, mais en nutrition, la créativité doit respecter des limites strictes. NutriGen génère des recettes en imposant calories, macros et allergènes — et journalise chaque décision pour l\'audit.',
          'Au-delà du modèle, le projet est une plateforme MLOps complète : microservices sur Kubernetes, inférence événementielle et livraison automatisée.'
        ]
      },
      challenge: {
        en: 'Make a small LLM generate useful recipes while reliably respecting nutritional constraints, and run it as a scalable service.',
        fr: 'Faire générer à un petit LLM des recettes utiles en respectant de façon fiable des contraintes nutritionnelles, et l\'exploiter comme un service scalable.'
      },
      approach: {
        en: 'Fine-tune SmolLM2 with QLoRA on RecipeNLG, wrap it in a governance layer with full audit logging, and decouple inference with Kafka on an autoscaling Kubernetes deployment.',
        fr: 'Affiner SmolLM2 par QLoRA sur RecipeNLG, l\'encadrer par une couche de gouvernance avec journalisation complète, et découpler l\'inférence avec Kafka sur un déploiement Kubernetes autoscalé.'
      },
      features: {
        en: [
          'QLoRA fine-tuning of SmolLM2 on RecipeNLG (2M+ recipes).',
          'AI governance layer enforcing calories, macros and allergens.',
          'Full audit logging of every generation.',
          'Microservices on Kubernetes with Horizontal Pod Autoscaling.',
          'Kafka-decoupled inference and Jenkins CI/CD.'
        ],
        fr: [
          'Fine-tuning QLoRA de SmolLM2 sur RecipeNLG (plus de 2M de recettes).',
          'Couche de gouvernance IA imposant calories, macros et allergènes.',
          'Journalisation complète de chaque génération pour l\'audit.',
          'Microservices sur Kubernetes avec Horizontal Pod Autoscaling.',
          'Inférence découplée par Kafka et CI/CD Jenkins.'
        ]
      },
      arch: {
        nodes: [
          { t: 'RecipeNLG', s: { en: '2M+ recipes', fr: '2M+ recettes' } },
          { t: 'SmolLM2 + QLoRA', s: { en: 'Fine-tuning', fr: 'Fine-tuning' } },
          { t: { en: 'Governance layer', fr: 'Couche de gouvernance' }, s: { en: 'Constraints & audit log', fr: 'Contraintes & journal d\'audit' }, hl: true },
          { t: 'Kafka', s: { en: 'Decoupled inference', fr: 'Inférence découplée' } },
          { t: 'Kubernetes + HPA', s: { en: 'Autoscaled serving', fr: 'Service autoscalé' } }
        ],
        note: { en: 'CI/CD automated with Jenkins', fr: 'CI/CD automatisée avec Jenkins' }
      },
      stats: [
        { v: 89, suf: '%', l: { en: 'Constraint satisfaction rate', fr: 'Taux de respect des contraintes' } },
        { v: 2, suf: 'M+', l: { en: 'Training recipes', fr: 'Recettes d\'entraînement' } }
      ],
      stack: ['SmolLM2', 'QLoRA', 'HuggingFace', 'Kubernetes', 'HPA', 'Kafka', 'Jenkins']
    },
    {
      id: 'greenai', cat: 'personal',
      type: { en: 'Hackathon · Agentic AI', fr: 'Hackathon · IA agentique' },
      title: { en: 'Green AI Energy Agent', fr: 'Agent énergétique Green AI' },
      meta: { en: 'Green AI Hackathon · ENSTAB · Dec 2025 · 1st place', fr: 'Hackathon Green AI · ENSTAB · Déc. 2025 · 1re place' },
      brief: {
        en: 'An agent that watches a household\'s energy consumption, detects surges, finds the devices responsible and acts on them to bring consumption down.',
        fr: 'Un agent qui surveille la consommation d\'énergie d\'un foyer, détecte les pics, identifie les appareils responsables et agit sur eux pour réduire la consommation.'
      },
      overview: {
        en: [
          'Households waste energy without noticing it: a surge happens, and nobody knows which device caused it or what to do about it. We built an agentic solution that monitors a home\'s consumption over time and reacts on its own.',
          'When the agent detects a peak in the consumption time series, it determines which devices are drawing the most energy and takes action to reduce their consumption. The target is any smart appliance connected to the home Wi-Fi — air conditioners, TVs, washing machines.',
          'Built in a 24-hour hackathon, the solution won first place.'
        ],
        fr: [
          'Les foyers gaspillent de l\'énergie sans s\'en rendre compte : un pic survient, et personne ne sait quel appareil l\'a causé ni quoi faire. Nous avons conçu une solution agentique qui surveille la consommation d\'un foyer dans le temps et réagit d\'elle-même.',
          'Quand l\'agent détecte un pic dans la série temporelle de consommation, il identifie les appareils les plus énergivores et agit pour réduire leur consommation. La cible : tout appareil intelligent connecté au Wi-Fi de la maison — climatiseurs, téléviseurs, machines à laver.',
          'Réalisée en 24 heures, la solution a remporté la première place.'
        ]
      },
      challenge: {
        en: 'Turn raw consumption data into decisions: spot a surge as it happens, attribute it to the right devices, and act on them automatically — then prove it works, live, within a 24-hour hackathon.',
        fr: 'Transformer des données de consommation brutes en décisions : repérer un pic au moment où il survient, l\'attribuer aux bons appareils et agir automatiquement sur eux — puis le prouver en direct, en 24 heures de hackathon.'
      },
      approach: {
        en: 'An agent loop over time-series data: monitor, detect the peak, identify the most consuming devices, act. For the demo, we used a host–client architecture on two computers connected to the same Wi-Fi: the host runs the agent and controls both itself and the client. When the agent detected a peak, it lowered screen brightness and capped CPU usage at 30% on the machines concerned. A human stays in the loop: in Autonomous mode every action waits for approval, and in Chat mode the user drives the agent directly.',
        fr: 'Une boucle agentique sur des séries temporelles : surveiller, détecter le pic, identifier les appareils les plus énergivores, agir. Pour la démo, nous avons utilisé une architecture hôte–client sur deux ordinateurs connectés au même Wi-Fi : l\'hôte exécute l\'agent et se contrôle lui-même ainsi que le client. Au moindre pic détecté, l\'agent réduisait la luminosité de l\'écran et plafonnait l\'utilisation du CPU à 30 % sur les machines concernées. L\'humain reste dans la boucle : en mode autonome, chaque action attend sa validation, et en mode chat, l\'utilisateur pilote directement l\'agent.'
      },
      features: {
        en: [
          'Continuous monitoring of household energy consumption as time-series data.',
          'Peak detection to spot consumption surges as they happen.',
          'Identification of the devices responsible for the surge.',
          'Autonomous actions to reduce consumption on the devices concerned.',
          'Host–client demo over Wi-Fi: the host runs the agent and controls itself and the client, lowering brightness and capping CPU at 30% on detected peaks.',
          'React monitoring dashboard with two modes: Autonomous mode, where the agent detects peaks and proposes actions on its own and a human approves them before they are applied; and Chat mode, where you ask the agent questions or tell it to perform specific actions.',
          'Python and FastAPI backend running the LangChain agent.'
        ],
        fr: [
          'Surveillance continue de la consommation d\'énergie du foyer sous forme de séries temporelles.',
          'Détection des pics de consommation au moment où ils surviennent.',
          'Identification des appareils responsables du pic.',
          'Actions autonomes pour réduire la consommation des appareils concernés.',
          'Démo hôte–client via Wi-Fi : l\'hôte exécute l\'agent, se contrôle lui-même et contrôle le client, en baissant la luminosité et en plafonnant le CPU à 30 % lors des pics détectés.',
          'Tableau de bord React avec deux modes : le mode autonome, où l\'agent détecte les pics et propose lui-même des actions qu\'un humain valide avant leur application ; et le mode chat, où l\'on pose des questions à l\'agent ou lui demande d\'effectuer des actions précises.',
          'Backend Python et FastAPI exécutant l\'agent LangChain.'
        ]
      },
      arch: {
        nodes: [
          { t: { en: 'Consumption data', fr: 'Données de consommation' }, s: { en: 'Time series', fr: 'Séries temporelles' } },
          { t: { en: 'Peak detection', fr: 'Détection des pics' }, s: { en: 'Surge spotted', fr: 'Pic repéré' } },
          { t: { en: 'LangChain agent', fr: 'Agent LangChain' }, s: { en: 'Host · FastAPI · finds the devices responsible', fr: 'Hôte · FastAPI · identifie les appareils responsables' }, hl: true },
          { t: { en: 'Host + client', fr: 'Hôte + client' }, s: { en: 'Controlled over Wi-Fi', fr: 'Contrôlés via Wi-Fi' } },
          { t: 'React', s: { en: 'Dashboard · Autonomous (human approval) or Chat mode', fr: 'Tableau de bord · Mode autonome (validation humaine) ou chat' } }
        ],
        note: {
          en: 'Demo: host–client on two computers on the same Wi-Fi · brightness lowered and CPU capped at 30% on peak',
          fr: 'Démo : hôte–client sur deux ordinateurs du même Wi-Fi · luminosité réduite et CPU plafonné à 30 % lors d\'un pic'
        }
      },
      stats: [
        { v: 1, pre: '#', l: { en: 'Place — Green AI Hackathon', fr: 'Place — Hackathon Green AI' } },
        { v: 30, suf: '%', l: { en: 'CPU cap applied automatically on a detected peak', fr: 'Plafond CPU appliqué automatiquement lors d\'un pic' } },
        { v: 24, suf: 'h', l: { en: 'To design, build and demo', fr: 'Pour concevoir, construire et présenter' } }
      ],
      stack: ['LangChain', 'Python', 'FastAPI', 'React', 'Human-in-the-loop', 'Time series', 'IoT']
    },
    {
      id: 'oss', cat: 'pro',
      type: { en: 'Professional · Full-stack + ML', fr: 'Professionnel · Full-stack + ML' },
      title: { en: 'Asset & Maintenance Platform', fr: 'Plateforme actifs & maintenance' },
      meta: { en: 'OSS · AI Software Engineering Intern · Jul – Aug 2024', fr: 'OSS · Stagiaire ingénieur logiciel IA · Juil. – Août 2024' },
      brief: {
        en: 'An internal platform to manage assets and maintenance, with ML-based ticket triage to prioritize and route requests.',
        fr: 'Une plateforme interne de gestion des actifs et de la maintenance, avec un tri des tickets par ML pour prioriser et router les demandes.'
      },
      overview: {
        en: [
          'An internal full-stack platform to track assets and handle maintenance requests, built and deployed on the MERN stack.',
          'To speed up handling, a triage workflow combines what users write in their tickets with structured inputs to prioritize and route each request.'
        ],
        fr: [
          'Une plateforme interne full-stack pour suivre les actifs et traiter les demandes de maintenance, développée et déployée sur la stack MERN.',
          'Pour accélérer le traitement, un workflow de tri combine ce que les utilisateurs écrivent dans leurs tickets avec des données structurées pour prioriser et router chaque demande.'
        ]
      },
      challenge: {
        en: 'Maintenance requests had to be prioritized and routed correctly, based on both their free-text description and their structured attributes.',
        fr: 'Les demandes de maintenance devaient être priorisées et routées correctement, à partir de leur description libre et de leurs attributs structurés.'
      },
      approach: {
        en: 'Pair a MERN application with a Random Forest classifier that uses text features from issue descriptions plus structured numerical inputs.',
        fr: 'Associer une application MERN à un classifieur Random Forest exploitant les features textuelles des descriptions et des données numériques structurées.'
      },
      features: {
        en: [
          'Full-stack MERN platform for assets and maintenance.',
          'SQL for structured inventory data, MongoDB for user authentication.',
          'Random Forest triage on ticket text features plus numerical inputs.',
          'Automatic prioritization and routing of requests.'
        ],
        fr: [
          'Plateforme MERN full-stack pour les actifs et la maintenance.',
          'SQL pour les données d\'inventaire structurées, MongoDB pour l\'authentification.',
          'Tri par Random Forest sur les features textuelles des tickets et des données numériques.',
          'Priorisation et routage automatiques des demandes.'
        ]
      },
      arch: {
        nodes: [
          { t: 'React', s: { en: 'Web interface', fr: 'Interface web' } },
          { t: 'Node.js + Express', s: { en: 'REST API', fr: 'API REST' } },
          { t: 'SQL + MongoDB', s: { en: 'Inventory & auth', fr: 'Inventaire & auth' } },
          { t: 'Random Forest', s: { en: 'Ticket triage', fr: 'Tri des tickets' }, hl: true }
        ]
      },
      stack: ['MongoDB', 'Express', 'React', 'Node.js', 'SQL', 'Scikit-learn']
    }
  ];

  const EXPERIENCE = [
    {
      org: 'PwC', id: 'pwc',
      role: { en: 'AI Engineering Intern', fr: 'Stagiaire ingénieur IA' },
      date: { en: 'Feb 2026 — Jul 2026', fr: 'Févr. 2026 — Juil. 2026' },
      line: { en: 'Built an agentic AI copilot embedded in Power BI for directors.', fr: 'Conception d\'un copilote IA agentique intégré à Power BI pour les directeurs.' },
      tags: ['LangGraph', 'Azure OpenAI', 'FastAPI', 'Angular', 'Power BI']
    },
    {
      org: 'Bi\'nergy', id: 'binergy',
      role: { en: 'AI Engineering & MLOps Intern', fr: 'Stagiaire ingénieur IA & MLOps' },
      date: { en: 'Jul 2025 — Aug 2025', fr: 'Juil. 2025 — Août 2025' },
      line: { en: 'Built and deployed an industrial anomaly detection pipeline with full observability.', fr: 'Conception et déploiement d\'un pipeline de détection d\'anomalies industrielles avec observabilité complète.' },
      tags: ['XGBoost', 'MLflow', 'Docker', 'Grafana']
    },
    {
      org: 'OSS', id: 'oss',
      role: { en: 'AI Software Engineering Intern', fr: 'Stagiaire ingénieur logiciel IA' },
      date: { en: 'Jul 2024 — Aug 2024', fr: 'Juil. 2024 — Août 2024' },
      line: { en: 'Built an internal asset and maintenance platform with ML-based ticket triage.', fr: 'Développement d\'une plateforme interne de gestion des actifs avec tri des tickets par ML.' },
      tags: ['MERN', 'SQL', 'Scikit-learn']
    }
  ];

  /* =========================================================
     i18n
     ========================================================= */
  const FR = {
    'nav.about': `À propos`, 'nav.projects': `Projets`, 'nav.exp': `Expérience`, 'nav.skills': `Compétences`, 'nav.contact': `Contact`,
    'hero.badge': `Ouvert aux opportunités en ingénierie IA`,
    'hero.build': `Je construis`,
    'hero.sub': `Ingénieur IA &amp; logiciel, je transforme les grands modèles de langage en produits fiables et sécurisés — des copilotes agentiques au RAG multimodal, jusqu'au MLOps en production.`,
    'hero.explore': `Explorer mes projets`,
    'cv.view': `Voir le CV`, 'cv.download': `Télécharger le CV`, 'cv.dlShort': `Télécharger`, 'cv.tab': `Ouvrir`,
    'about.label': `À propos`,
    'about.title': `Une IA qui passe en production,<br><span class="grad">pas seulement en démo.</span>`,
    'about.p1': `Je suis <strong>ingénieur IA &amp; logiciel</strong>, diplômé de l'ENSTAB en Technologies Avancées. Je travaille là où les grands modèles de langage rencontrent les systèmes d'entreprise : des agents qui agissent dans les outils déjà utilisés, des pipelines de recherche qui citent leurs sources et des modèles qui restent supervisés une fois en production.`,
    'about.p2': `Au fil de trois stages — full-stack chez <strong>OSS</strong>, MLOps chez <strong>Bi'nergy</strong>, IA agentique chez <strong>PwC</strong> — j'ai appris à maîtriser tout le cycle de vie : données, modèles, API, interfaces, sécurité et observabilité.`,
    'proj.label': `Projets`,
    'proj.title': `Choisissez un projet<br><span class="grad">à explorer.</span>`,
    'proj.intro': `Chaque carte ouvre une étude de cas complète — le contexte, ce que j'ai construit, l'architecture et les résultats.`,
    'f.all': `Tous`, 'f.pro': `Professionnels`, 'f.personal': `Personnels &amp; hackathons`,
    'exp.label': `Expérience`,
    'exp.title': `Du full-stack<br><span class="grad">à l'IA agentique.</span>`,
    'skills.label': `Compétences`, 'skills.title': `La <span class="grad">boîte à outils.</span>`,
    'skills.g1': `IA &amp; Machine Learning`, 'skills.g2': `Génie logiciel`,
    'skills.g3': `Cloud, DevOps &amp; MLOps`, 'skills.g4': `Données &amp; bases de données`,
    'edu.label': `Formation &amp; distinctions`,
    'edu.title': `Fondations &amp;<br><span class="grad">reconnaissance.</span>`,
    'edu.h1': `Formation`, 'edu.h2': `Distinctions`, 'edu.h3': `Langues`,
    'edu.1.t': `Diplôme d'ingénieur en Technologies Avancées`,
    'edu.2.t': `Cycle préparatoire Mathématiques-Physique`,
    'edu.2.s': `Mathématiques, algèbre linéaire, analyse et résolution de problèmes`,
    'aw.1.t': `Hackathon Green AI — 1re place`, 'aw.1.d': `ENSTAB · Déc. 2025`,
    'aw.1.s': `Système d'IA agentique pour réduire la consommation d'énergie des foyers`,
    'aw.2.t': `Hackathon IA interne PwC — 4e place`, 'aw.2.d': `PwC · Mai 2026`,
    'aw.2.s': `Solution pilotée par l'IA pour améliorer la productivité`,
    'lang.ar': `Arabe`, 'lang.ar.l': `Langue maternelle`, 'lang.fr': `Français`, 'lang.fr.l': `Courant`, 'lang.en': `Anglais`,
    'contact.label': `Contact`,
    'contact.title': `Construisons quelque chose d'<span class="grad">intelligent.</span>`,
    'contact.p': `Ouvert aux postes en ingénierie IA et aux collaborations. Le plus rapide pour me joindre reste l'e-mail.`,
    'contact.email': `M'écrire`,
    'mail.title': `Comment souhaitez-vous me contacter ?`,
    'mail.default': `Application mail par défaut`,
    'mail.copy': `Copier l'adresse`,
    'ui.back': `Tous les projets`, 'ui.backSite': `Retour`,
    'footer.built': `Conçu &amp; développé avec soin · aiandoulsisolutions.me`
  };

  const UI = {
    en: {
      explore: 'Explore project', featured: 'Featured · Demo', overview: 'Overview', challenge: 'The challenge',
      approach: 'The approach', built: 'What I built', arch: 'Architecture', results: 'Results', stack: 'Tech stack',
      demo: 'Watch the demo on LinkedIn', soon: 'Code coming soon', prev: 'Previous', next: 'Next project',
      viewProject: 'View the project', writeup: 'A detailed write-up of this project is coming soon.',
      copied: 'Copied!', cvError: 'The CV could not be displayed here.', cvOpen: 'Open the PDF'
    },
    fr: {
      explore: 'Explorer le projet', featured: 'À la une · Démo', overview: 'Vue d\'ensemble', challenge: 'Le défi',
      approach: 'L\'approche', built: 'Ce que j\'ai construit', arch: 'Architecture', results: 'Résultats', stack: 'Stack technique',
      demo: 'Voir la démo sur LinkedIn', soon: 'Code bientôt disponible', prev: 'Précédent', next: 'Projet suivant',
      viewProject: 'Voir le projet', writeup: 'Une présentation détaillée de ce projet arrive bientôt.',
      copied: 'Copié !', cvError: 'Le CV n\'a pas pu être affiché ici.', cvOpen: 'Ouvrir le PDF'
    }
  };

  const WORDS = {
    en: ['agentic AI systems', 'production RAG pipelines', 'MLOps platforms', 'AI copilots for the enterprise'],
    fr: ['des systèmes d\'IA agentique', 'des pipelines RAG en production', 'des plateformes MLOps', 'des copilotes IA pour l\'entreprise']
  };
  const TITLES = {
    en: 'Ibrahim Khalil Andoulsi — AI & Software Engineer',
    fr: 'Ibrahim Khalil Andoulsi — Ingénieur IA & Logiciel'
  };
  const SUBJECT = { en: 'Opportunity — via your portfolio', fr: 'Opportunité — via votre portfolio' };

  let lang = 'en';
  try { if (localStorage.getItem('lang') === 'fr') lang = 'fr'; } catch (e) { /* storage blocked */ }

  const tx = o => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[lang] !== undefined ? o[lang] : o.en) : o;
  const ui = k => UI[lang][k];

  const i18nEls = $$('[data-i18n]');
  const EN = {};
  i18nEls.forEach(el => { if (!(el.dataset.i18n in EN)) EN[el.dataset.i18n] = el.innerHTML; });

  /* =========================================================
     Number formatting & counters
     ========================================================= */
  function fmt(v, o) {
    const dec = +(o.dec || 0);
    let s = Number(v).toFixed(dec);
    if (lang === 'fr') s = s.replace('.', ',');
    let suf = o.suf || '';
    if (lang === 'fr' && suf === '%') suf = '\u202F%';
    return (o.pre || '') + s + suf;
  }
  function count(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const target = parseFloat(el.dataset.count);
    const o = el.dataset;
    const dur = 1600, start = performance.now();
    const step = now => {
      const k = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - k, 4);
      el.textContent = fmt(target * e, o);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* =========================================================
     Reveal on scroll (page)
     ========================================================= */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
  $$('.reveal, .stagger').forEach(el => io.observe(el));

  /* =========================================================
     Projects grid + filters
     ========================================================= */
  const grid = $('#projectGrid');
  let filter = 'all';

  function cardHTML(p) {
    return `<button class="card spot pcard${p.featured ? ' featured' : ''}" data-open="${p.id}" data-cat="${p.cat}">
      <div class="p-top"><span class="p-tag">${tx(p.type)}</span>${p.featured ? `<span class="badge-f">${ui('featured')}</span>` : ''}</div>
      <h3>${tx(p.title)}</h3>
      <p class="p-meta">${tx(p.meta)}</p>
      <p class="p-brief">${tx(p.brief)}</p>
      <div class="tags">${p.stack.slice(0, 4).map(s => `<span>${s}</span>`).join('')}</div>
      <span class="p-go">${ui('explore')}<svg class="ic"><use href="#i-right"/></svg></span>
    </button>`;
  }
  function applyFilter() {
    let i = 0;
    $$('.pcard', grid).forEach(c => {
      const show = filter === 'all' || c.dataset.cat === filter;
      c.classList.toggle('hide', !show);
      if (show) c.style.setProperty('--i', i++);
    });
  }
  function renderProjects() {
    grid.innerHTML = PROJECTS.map(cardHTML).join('');
    applyFilter();
  }
  $$('.filter').forEach(b => b.addEventListener('click', () => {
    filter = b.dataset.filter;
    $$('.filter').forEach(x => x.classList.toggle('on', x === b));
    const wasIn = grid.classList.contains('in');
    grid.classList.remove('in');
    applyFilter();
    if (wasIn) { void grid.offsetWidth; grid.classList.add('in'); }
    updateFocus();
  }));

  /* =========================================================
     Experience timeline
     ========================================================= */
  const tlList = $('#tlList');
  let tlItems = [];
  function renderExperience() {
    const first = !tlList.children.length;
    tlList.innerHTML = EXPERIENCE.map(e => `<article class="tl-item reveal${first ? '' : ' in'}">
      <span class="tl-dot"></span>
      <div class="tl-card card spot">
        <div class="tl-head"><div><h3>${e.org}</h3><p class="role">${tx(e.role)}</p></div><span class="date">${tx(e.date)}</span></div>
        <p>${tx(e.line)}</p>
        <div class="tags">${e.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <button class="tl-link" data-open="${e.id}">${ui('viewProject')}<svg class="ic"><use href="#i-right"/></svg></button>
      </div>
    </article>`).join('');
    tlItems = $$('.tl-item', tlList);
    if (first) tlItems.forEach(el => io.observe(el));
  }

  /* =========================================================
     Project detail sheet
     ========================================================= */
  const pSheet = $('#projectSheet'), pBody = $('#projectBody'), cvSheet = $('#cvSheet');
  let currentProject = null, dio = null;

  const sec = (title, body, extra = '') => `<section class="d-sec d-reveal"${extra}><h3 class="sub-h">${title}</h3>${body}</section>`;

  function archHTML(a) {
    const nodes = a.nodes.map((n, i) =>
      `${i ? '<div class="link"></div>' : ''}<div class="node${n.hl ? ' node-hl' : ''}"><b>${tx(n.t)}</b><small>${tx(n.s)}</small></div>`
    ).join('');
    return `<div class="flow">${nodes}</div>${a.note ? `<div class="shield">${tx(a.note)}</div>` : ''}`;
  }

  function metricsHTML(p) {
    let h = '';
    if (p.stats) {
      h += `<div class="m-stats">${p.stats.map(s => `<div class="m-stat">
        <div class="num grad">${s.from != null ? `<span class="from">${fmt(s.from, s)}</span> → ` : ''}<span data-count="${s.v}" data-dec="${s.dec || 0}" data-pre="${s.pre || ''}" data-suf="${s.suf || ''}">${fmt(0, s)}</span></div>
        <p>${tx(s.l)}</p></div>`).join('')}</div>`;
    }
    if (p.bars) {
      h += `<div class="card bars">${p.bars.map(b => `<div class="bar" style="--w:${b.v}%">
        <div class="bar-top"><span>${tx(b.l)}</span><b data-count="${b.v}" data-suf="%">${fmt(0, { suf: '%' })}</b></div>
        <div class="track"><div class="fill"></div></div></div>`).join('')}</div>`;
    }
    if (p.resultsNote) h += `<p class="d-note">${tx(p.resultsNote)}</p>`;
    return h;
  }

  function detailHTML(p) {
    const idx = PROJECTS.indexOf(p);
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];

    let actions = '';
    if (p.demo) actions += `<a class="btn btn-primary" href="${DEMO_URL}" target="_blank" rel="noopener"><svg class="ic"><use href="#i-play"/></svg>${ui('demo')}</a>`;
    if (p.repo) actions += `<a class="btn btn-ghost" href="${p.repo}" target="_blank" rel="noopener"><svg class="ic"><use href="#i-gh"/></svg>GitHub</a>`;
    else if (p.cat === 'personal') actions += `<span class="soon">${ui('soon')}</span>`;

    let h = `<article class="detail">
      <header class="d-head d-reveal" data-k="top">
        <div class="p-top"><span class="p-tag">${tx(p.type)}</span>${p.featured ? `<span class="badge-f">${ui('featured')}</span>` : ''}</div>
        <h2 class="d-title">${tx(p.title)}</h2>
        <p class="d-meta">${tx(p.meta)}</p>
        <div class="d-actions">${actions}</div>
      </header>`;

    h += sec(ui('overview'), `<div class="d-overview">${tx(p.overview).map(x => `<p>${x}</p>`).join('')}</div>`, ' data-k="overview"');

    if (p.challenge) {
      h += `<section class="d-sec d-grid2" data-k="challenge">
        <div class="card d-reveal"><span class="card-n">01</span><h4>${ui('challenge')}</h4><p>${tx(p.challenge)}</p></div>
        <div class="card d-reveal" style="--d:.12s"><span class="card-n">02</span><h4>${ui('approach')}</h4><p>${tx(p.approach)}</p></div>
      </section>`;
    }
    if (p.features) h += sec(ui('built'), `<ul class="d-list">${tx(p.features).map(f => `<li>${f}</li>`).join('')}</ul>`, ' data-k="built"');
    if (p.arch) h += sec(ui('arch'), archHTML(p.arch), ' data-k="architecture"');
    if (p.stats || p.bars) h += sec(ui('results'), metricsHTML(p), ' data-k="results"');
    if (p.writeup) h += `<p class="d-note d-reveal">${ui('writeup')}</p>`;
    h += sec(ui('stack'), `<div class="chips">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>`, ' data-k="stack"');

    h += `<nav class="d-nav d-reveal">
        <button class="d-nav-btn" data-goto="${prev.id}"><small>← ${ui('prev')}</small><b>${tx(prev.title)}</b></button>
        <button class="d-nav-btn next" data-goto="${next.id}"><small>${ui('next')} →</small><b>${tx(next.title)}</b></button>
      </nav>
    </article>`;
    return h;
  }

  function observeDetail() {
    if (dio) dio.disconnect();
    dio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const t = e.target;
        t.classList.add('in');
        $$('[data-count]', t).forEach(count);
        $$('.bar', t).forEach(b => b.classList.add('in'));
        dio.unobserve(t);
      });
    }, { root: pBody, threshold: 0, rootMargin: '0px 0px -8% 0px' });
    $$('.d-reveal', pBody).forEach(el => dio.observe(el));
  }

  function lockScroll() {
    const any = pSheet.classList.contains('open') || cvSheet.classList.contains('open');
    document.documentElement.classList.toggle('locked', any);
  }

  function showProject(id, keepScroll) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    const st = pBody.scrollTop;
    currentProject = id;
    pBody.innerHTML = detailHTML(p);
    $('#sheetTitle').textContent = tx(p.title);
    pSheet.classList.add('open');
    pSheet.setAttribute('aria-hidden', 'false');
    pBody.scrollTop = keepScroll ? st : 0;
    observeDetail();
    lockScroll();
  }
  function hideProject() {
    if (!pSheet.classList.contains('open')) return;
    pSheet.classList.remove('open');
    pSheet.setAttribute('aria-hidden', 'true');
    currentProject = null;
    lockScroll();
  }

  /* =========================================================
     CV viewer (pdf.js — renders identically on PC and phone)
     ========================================================= */
  const cvBox = $('#cvPages');
  let pdfLibPromise = null, pdfDoc = null, cvWidth = 0, cvRendering = false;

  function loadPdfLib() {
    if (!pdfLibPromise) {
      pdfLibPromise = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = PDFJS + 'pdf.min.js';
        s.onload = () => {
          const lib = window.pdfjsLib || window['pdfjs-dist/build/pdf'];
          if (!lib) { reject(new Error('pdf.js missing')); return; }
          lib.GlobalWorkerOptions.workerSrc = PDFJS + 'pdf.worker.min.js';
          resolve(lib);
        };
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    return pdfLibPromise;
  }

  async function renderCV(force) {
    const w = Math.round(cvBox.getBoundingClientRect().width);
    if (!w || cvRendering) return;
    if (!force && pdfDoc && w === cvWidth && cvBox.querySelector('canvas')) return;
    cvRendering = true;
    cvBox.innerHTML = '<div class="loader"></div>';
    try {
      const lib = await loadPdfLib();
      if (!pdfDoc) pdfDoc = await lib.getDocument(CV_URL).promise;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const frag = document.createDocumentFragment();
      const canvases = [];
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const base = page.getViewport({ scale: 1 });
        const vp = page.getViewport({ scale: (w / base.width) * dpr });
        const c = document.createElement('canvas');
        c.width = Math.floor(vp.width);
        c.height = Math.floor(vp.height);
        await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
        canvases.push(c);
      }
      canvases.forEach(c => frag.appendChild(c));
      cvBox.innerHTML = '';
      cvBox.appendChild(frag);
      cvWidth = w;
    } catch (err) {
      cvBox.innerHTML = `<div class="cv-error"><p>${ui('cvError')}</p><a class="btn btn-primary" href="${CV_URL}" target="_blank" rel="noopener">${ui('cvOpen')}</a></div>`;
    }
    cvRendering = false;
  }

  function showCV() {
    cvSheet.classList.add('open');
    cvSheet.setAttribute('aria-hidden', 'false');
    lockScroll();
    requestAnimationFrame(() => renderCV(false));
  }
  function hideCV() {
    if (!cvSheet.classList.contains('open')) return;
    cvSheet.classList.remove('open');
    cvSheet.setAttribute('aria-hidden', 'true');
    lockScroll();
  }

  /* =========================================================
     Routing — #project-<id> and #cv (phone back button closes)
     ========================================================= */
  let pushed = false;

  function route() {
    const h = location.hash;
    const m = h.match(/^#project-([\w-]+)$/);
    if (m && PROJECTS.some(p => p.id === m[1])) {
      hideCV();
      showProject(m[1], false);
    } else if (h === '#cv') {
      hideProject();
      showCV();
    } else {
      hideProject();
      hideCV();
      pushed = false;
    }
  }
  function go(hash) {
    if (location.hash === hash) { route(); return; }
    pushed = true;
    location.hash = hash;
  }
  function closeOverlay() {
    if (pushed) {
      pushed = false;
      history.back();
    } else {
      history.replaceState(null, '', location.pathname + location.search);
      route();
    }
  }
  addEventListener('hashchange', route);

  /* Global click delegation */
  document.addEventListener('click', e => {
    const open = e.target.closest('[data-open]');
    if (open) { e.preventDefault(); go('#project-' + open.dataset.open); return; }
    const gotoBtn = e.target.closest('[data-goto]');
    if (gotoBtn) { location.replace('#project-' + gotoBtn.dataset.goto); return; }
    if (e.target.closest('[data-close]')) { closeOverlay(); return; }
    if (e.target.closest('[data-cv-view]')) { e.preventDefault(); nav.classList.remove('open'); go('#cv'); }
  });

  /* Spotlight follows the pointer (mouse or finger) */
  document.addEventListener('pointermove', e => {
    const c = e.target.closest && e.target.closest('.spot');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${e.clientX - r.left}px`);
    c.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });

  /* =========================================================
     Language
     ========================================================= */
  function setLang(l) {
    lang = l;
    const dict = l === 'fr' ? FR : EN;
    i18nEls.forEach(el => { const v = dict[el.dataset.i18n]; if (v !== undefined) el.innerHTML = v; });
    document.documentElement.lang = l;
    document.title = TITLES[l];
    $$('#langBtn span').forEach(s => s.classList.toggle('on', s.dataset.l === l));
    try { localStorage.setItem('lang', l); } catch (e) { /* storage blocked */ }
    renderProjects();
    renderExperience();
    if (currentProject) showProject(currentProject, true);
    const err = $('.cv-error', cvBox);
    if (err) err.innerHTML = `<p>${ui('cvError')}</p><a class="btn btn-primary" href="${CV_URL}" target="_blank" rel="noopener">${ui('cvOpen')}</a>`;
    restartTyping();
    onScroll();
    window.dispatchEvent(new CustomEvent('portfolio:lang', { detail: l }));
  }
  $('#langBtn').addEventListener('click', () => setLang(lang === 'en' ? 'fr' : 'en'));

  /* =========================================================
     Typing effect
     ========================================================= */
  const typed = $('#typed');
  let wi = 0, ci = 0, del = false, tTimer;
  function tick() {
    const words = WORDS[lang], w = words[wi % words.length];
    ci += del ? -1 : 1;
    typed.textContent = w.slice(0, ci);
    let delay = del ? 32 : 68;
    if (!del && ci === w.length) { delay = 1900; del = true; }
    else if (del && ci === 0) { del = false; wi++; delay = 350; }
    tTimer = setTimeout(tick, delay);
  }
  function restartTyping() {
    clearTimeout(tTimer); wi = 0; ci = 0; del = false;
    tick();
  }

  /* =========================================================
     Scroll: progress, nav, active link, timeline, touch focus
     ========================================================= */
  const nav = $('#nav'), progress = $('#progress');
  const sections = $$('main section[id]');
  const links = $$('.nav-links a');
  const tl = $('.timeline'), tlp = $('.timeline-progress');

  function updateFocus() {
    if (!isTouch) return;
    const top = innerHeight * .3, bottom = innerHeight * .7;
    $$('main .spot').forEach(c => {
      if (c.classList.contains('hide')) { c.classList.remove('focus'); return; }
      const r = c.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      c.classList.toggle('focus', mid > top && mid < bottom);
    });
  }

  let ticking = false;
  function onScroll() {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle('scrolled', y > 30);
    let cur = '';
    sections.forEach(s => { if (y >= s.offsetTop - innerHeight * .4) cur = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
    if (tl) {
      const r = tl.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * .6 - r.top) / r.height, 0), 1);
      tlp.style.transform = `scaleY(${p})`;
      tlItems.forEach(it => it.classList.toggle('lit', it.getBoundingClientRect().top < innerHeight * .6));
    }
    updateFocus();
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* Mobile menu */
  $('#burger').addEventListener('click', () => nav.classList.toggle('open'));
  links.forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  /* =========================================================
     Email chooser
     ========================================================= */
  const mailModal = $('#mailModal');
  function openMail(e) {
    if (e) e.preventDefault();
    const s = encodeURIComponent(SUBJECT[lang]);
    $('#mGmail').href = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${s}`;
    $('#mOutlook').href = `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}&subject=${s}`;
    $('#mDefault').href = `mailto:${EMAIL}?subject=${s}`;
    mailModal.classList.add('open');
    mailModal.setAttribute('aria-hidden', 'false');
  }
  function closeMail() {
    mailModal.classList.remove('open');
    mailModal.setAttribute('aria-hidden', 'true');
  }
  $$('[data-mail]').forEach(el => el.addEventListener('click', openMail));
  $('#mailClose').addEventListener('click', closeMail);
  mailModal.addEventListener('click', e => { if (e.target === mailModal) closeMail(); });
  $$('.mail-opts a').forEach(a => a.addEventListener('click', () => setTimeout(closeMail, 300)));
  $('#mCopy').addEventListener('click', async e => {
    const b = e.currentTarget;
    try {
      await navigator.clipboard.writeText(EMAIL);
      b.textContent = ui('copied');
      setTimeout(() => { b.innerHTML = (lang === 'fr' ? FR : EN)['mail.copy']; }, 1800);
    } catch (err) { b.textContent = EMAIL; }
  });

  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.documentElement.classList.contains('chat-open') && !mailModal.classList.contains('open')) return;
    if (mailModal.classList.contains('open')) closeMail();
    else if (pSheet.classList.contains('open') || cvSheet.classList.contains('open')) closeOverlay();
    else nav.classList.remove('open');
  });

  /* =========================================================
     Public API for the AI assistant (chat.js)
     ========================================================= */
  function flash(el) {
    if (!el) return;
    el.classList.remove('ai-hl');
    void el.offsetWidth;
    el.classList.add('ai-hl');
    setTimeout(() => el.classList.remove('ai-hl'), 3200);
  }
  window.Portfolio = {
    lang: () => lang,
    projectTitle: id => { const p = PROJECTS.find(x => x.id === id); return p ? tx(p.title) : id; },
    projectIds: PROJECTS.map(p => p.id),
    links: { linkedin: 'https://www.linkedin.com/in/ibrahim-khalil-andoulsi-023980300', github: GITHUB_URL, demo: DEMO_URL },
    openProject(id, focus) {
      if (!PROJECTS.some(p => p.id === id)) return false;
      const already = currentProject === id && pSheet.classList.contains('open');
      if (!already) go('#project-' + id);
      setTimeout(() => {
        const el = $(`[data-k="${focus || 'top'}"]`, pBody) || $('[data-k="top"]', pBody);
        if (!el) return;
        el.classList.add('in');
        $$('[data-count]', el).forEach(count);
        $$('.bar', el).forEach(b => b.classList.add('in'));
        const top = el.getBoundingClientRect().top - pBody.getBoundingClientRect().top + pBody.scrollTop - 24;
        pBody.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        flash(el);
      }, already ? 50 : 650);
      return true;
    },
    scrollTo(id) {
      const sec = document.getElementById(id);
      if (!sec) return false;
      const doScroll = () => {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        $$('.reveal, .stagger, .tl-item', sec).forEach(el => el.classList.add('in'));
        setTimeout(() => flash($('.container', sec) || sec), 450);
      };
      if (pSheet.classList.contains('open') || cvSheet.classList.contains('open')) { closeOverlay(); setTimeout(doScroll, 450); }
      else doScroll();
      return true;
    },
    openCV() { go('#cv'); },
    openMail() { openMail(); }
  };
  window.dispatchEvent(new Event('portfolio:ready'));

  /* =========================================================
     Hero agent graph — same behaviour on mouse and touch
     ========================================================= */
  const hero = $('#hero'), canvas = $('#graph'), ctx = canvas.getContext('2d');
  let GC = {};
  function readGraphColors() {
    const light = document.documentElement.dataset.theme === 'light';
    const a = getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim() || '200,169,107';
    GC = {
      a,
      line: light ? .30 : .22,
      glow: light ? .08 : .06,
      dot: light ? 'rgba(22,21,26,.28)' : 'rgba(242,240,234,.32)',
      pulse: `rgba(${a},.95)`,
      near: `rgba(${a},.95)`
    };
  }
  readGraphColors();
  let W = 0, H = 0, pts = [], pulses = [], LINK = 140, running = true;
  const focus = { x: -9999, y: -9999 };
  let pointerActive = false, releaseTimer, ghostT = Math.random() * 100;

  function resizeGraph() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    LINK = W < 640 ? 115 : 140;
    const n = Math.round(Math.max(38, Math.min(90, (W * H) / 15000)));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 1.6 + 1
    }));
    pulses = [];
  }

  function draw() {
    // Wandering focus point when nobody is pointing (keeps phones alive)
    if (!pointerActive) {
      ghostT += 0.0045;
      focus.x = W * (0.5 + 0.38 * Math.sin(ghostT * 1.3));
      focus.y = H * (0.5 + 0.32 * Math.sin(ghostT * 0.9 + 1));
    }
    ctx.clearRect(0, 0, W, H);

    const g = ctx.createRadialGradient(focus.x, focus.y, 0, focus.x, focus.y, 200);
    g.addColorStop(0, `rgba(${GC.a},${GC.glow})`);
    g.addColorStop(1, `rgba(${GC.a},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      if (pointerActive) {
        const dx = focus.x - p.x, dy = focus.y - p.y;
        if (Math.hypot(dx, dy) < 180) { p.x += dx * .006; p.y += dy * .006; }
      }
    }

    const edges = [];
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(${GC.a},${(1 - d / LINK) * GC.line})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          edges.push([a, b]);
        }
      }
    }

    if (edges.length && pulses.length < 14 && Math.random() < .09) {
      const [a, b] = edges[(Math.random() * edges.length) | 0];
      pulses.push({ a, b, t: 0 });
    }
    pulses = pulses.filter(p => p.t <= 1);
    ctx.shadowColor = GC.pulse; ctx.shadowBlur = 10; ctx.fillStyle = GC.pulse;
    for (const p of pulses) {
      p.t += .02;
      ctx.beginPath();
      ctx.arc(p.a.x + (p.b.x - p.a.x) * p.t, p.a.y + (p.b.y - p.a.y) * p.t, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    for (const p of pts) {
      const near = Math.hypot(focus.x - p.x, focus.y - p.y) < 170;
      ctx.fillStyle = near ? GC.near : GC.dot;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r + (near ? 1 : 0), 0, Math.PI * 2); ctx.fill();
    }
  }

  function loop() {
    if (!running) return;
    draw();
    requestAnimationFrame(loop);
  }

  function setFocus(x, y) {
    const r = canvas.getBoundingClientRect();
    focus.x = x - r.left; focus.y = y - r.top;
    pointerActive = true;
    clearTimeout(releaseTimer);
  }
  function release(delay) {
    clearTimeout(releaseTimer);
    releaseTimer = setTimeout(() => { pointerActive = false; }, delay);
  }
  hero.addEventListener('mousemove', e => setFocus(e.clientX, e.clientY));
  hero.addEventListener('mouseleave', () => release(0));
  hero.addEventListener('touchstart', e => { const t = e.touches[0]; if (t) setFocus(t.clientX, t.clientY); }, { passive: true });
  hero.addEventListener('touchmove', e => { const t = e.touches[0]; if (t) setFocus(t.clientX, t.clientY); }, { passive: true });
  hero.addEventListener('touchend', () => release(1200), { passive: true });

  let rT, lastW = innerWidth;
  addEventListener('resize', () => {
    clearTimeout(rT);
    rT = setTimeout(() => {
      // Ignore height-only changes (mobile address bar) to avoid resetting the graph
      if (innerWidth !== lastW || !pts.length) { lastW = innerWidth; resizeGraph(); }
      if (cvSheet.classList.contains('open')) renderCV(false);
      onScroll();
    }, 180);
  });

  resizeGraph();
  new IntersectionObserver(([e]) => {
    const was = running;
    running = e.isIntersecting;
    if (running && !was) requestAnimationFrame(loop);
  }).observe(hero);
  requestAnimationFrame(loop);

  /* =========================================================
     Theme — follows the device by default, manual toggle wins
     ========================================================= */
  const root = document.documentElement;
  const metaTheme = $('meta[name="theme-color"]');
  const sysLight = matchMedia('(prefers-color-scheme: light)');
  function applyTheme(t, save) {
    root.setAttribute('data-theme', t);
    if (metaTheme) metaTheme.setAttribute('content', t === 'light' ? '#F6F3EC' : '#0B0B0C');
    if (save) { try { localStorage.setItem('theme', t); } catch (e) { /* storage blocked */ } }
    readGraphColors();
  }
  $('#themeBtn').addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'light' ? 'dark' : 'light', true);
  });
  const onSys = e => {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) { /* ignore */ }
    if (saved !== 'light' && saved !== 'dark') applyTheme(e.matches ? 'light' : 'dark', false);
  };
  if (sysLight.addEventListener) sysLight.addEventListener('change', onSys);
  else if (sysLight.addListener) sysLight.addListener(onSys);
  applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark', false);

  /* =========================================================
     Init
     ========================================================= */
  setLang(lang);
  route();
  onScroll();
})();
