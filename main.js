(() => {
  /* ===== CONFIG — paste the direct LinkedIn post URL of the PwC demo here ===== */
  const DEMO_URL = 'https://lnkd.in/p/dnNG8J2n';
  const EMAIL = 'andoulsiibrahimkhalil@gmail.com';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  $$('[data-demo]').forEach(a => a.href = DEMO_URL);
  $('#year').textContent = new Date().getFullYear();

  /* ===== i18n ===== */
  const FR = {
    'nav.about': `À propos`, 'nav.work': `Étude de cas`, 'nav.exp': `Expérience`, 'nav.projects': `Projets`,
    'nav.skills': `Compétences`, 'nav.contact': `Contact`, 'nav.cv': `CV`,
    'hero.badge': `Ouvert aux opportunités en ingénierie IA`,
    'hero.build': `Je construis`,
    'hero.sub': `Ingénieur IA &amp; logiciel, je transforme les grands modèles de langage en produits fiables et sécurisés — des copilotes agentiques au RAG multimodal, jusqu'au MLOps en production.`,
    'hero.cv': `Télécharger le CV`, 'hero.demo': `Voir la démo PwC`,
    'impact.f1': `F1-score en détection de pannes industrielles`,
    'impact.rag': `Précision top-3 en recherche documentaire (DocMind)`,
    'impact.nodes': `Nœuds dans le workflow agentique LangGraph conçu chez PwC`,
    'impact.gov': `Taux de respect des contraintes (NutriGen)`,
    'impact.intern': `Stages en ingénierie IA`,
    'impact.hack': `Vainqueur du Hackathon Green AI`,
    'about.label': `À propos`,
    'about.title': `Une IA qui passe en production,<br><span class="grad">pas seulement en démo.</span>`,
    'about.p1': `Je suis <strong>ingénieur IA &amp; logiciel</strong>, diplômé de l'ENSTAB en Technologies Avancées. Je travaille là où les grands modèles de langage rencontrent les systèmes d'entreprise : des agents qui agissent dans les outils déjà utilisés, des pipelines de recherche qui citent leurs sources et des modèles qui restent supervisés une fois en production.`,
    'about.p2': `Au fil de trois stages — full-stack chez <strong>OSS</strong>, MLOps chez <strong>Bi'nergy</strong>, IA agentique chez <strong>PwC</strong> — j'ai appris à maîtriser tout le cycle de vie : données, modèles, API, interfaces, sécurité et observabilité.`,
    'work.label': `Étude de cas phare`,
    'work.title': `Un copilote IA agentique<br><span class="grad">au cœur de Power BI.</span>`,
    'work.meta': `PwC · Stagiaire ingénieur IA · Févr. – Juil. 2026`,
    'work.c.t': `Le défi`,
    'work.c.p': `Les directeurs avaient besoin de réponses issues de rapports Power BI complexes, sans fouiller dans les pages, les filtres et les mesures DAX.`,
    'work.s.t': `La solution`,
    'work.s.p': `Un assistant intégré au tableau de bord qui comprend les commandes en langage naturel et vocales : il explique les KPI, applique des filtres, navigue entre les pages et crée des visuels à la demande.`,
    'work.r.t': `Le résultat`,
    'work.r.p': `Chaque réponse s'appuie sur ce qui est affiché — visuels et filtres actifs, mesures et DAX extraits du modèle sémantique PBIX — tout en respectant la sécurité au niveau des lignes de l'entreprise.`,
    'work.arch': `Architecture`,
    'arch.api': `Backend d'orchestration`, 'arch.agent': `Workflow agentique à 11 nœuds`,
    'arch.llm': `Ancré dans le contexte du rapport`, 'arch.sec': `Sécurisé de bout en bout`,
    'work.results': `Précision validée`,
    'work.b1': `Navigation entre pages &amp; filtrage ciblé`,
    'work.b2': `Création de visuels à la demande sur données filtrées`,
    'work.b3': `Questions analytiques &amp; interprétation des KPI`,
    'work.demo': `Voir la démo sur LinkedIn`,
    'exp.label': `Expérience`,
    'exp.title': `Du full-stack<br><span class="grad">à l'IA agentique.</span>`,
    'exp.1.role': `Stagiaire ingénieur IA`, 'exp.1.date': `Févr. 2026 — Juil. 2026`,
    'exp.1.a': `Conception d'un assistant IA agentique intégré à Power BI, piloté par commandes en langage naturel et vocales, sur une architecture Angular + FastAPI orchestrant un workflow LangGraph à 11 nœuds.`,
    'exp.1.b': `Ancrage d'Azure OpenAI dans le contexte du rapport via les API Power BI et l'analyse du modèle sémantique PBIX, sécurisé par Entra ID, MSAL et RLS.`,
    'exp.1.c': `Précision validée : 100 % sur la navigation et le filtrage, 90 % sur la création de visuels et 75 % sur les questions analytiques.`,
    'exp.2.role': `Stagiaire ingénieur IA &amp; MLOps`, 'exp.2.date': `Juil. 2025 — Août 2025`,
    'exp.2.a': `Conception d'un pipeline complet de détection d'anomalies sur un an de données capteurs industrielles à la minute, avec suivi des expériences dans MLflow.`,
    'exp.2.b': `ETL et feature engineering ayant porté la performance de 60 % à un F1-score de 96,2 % avec 96,9 % de rappel des pannes grâce à XGBoost.`,
    'exp.2.c': `Déploiement Dockerisé avec CI/CD et observabilité Prometheus/Grafana, plus alertes automatiques par e-mail.`,
    'exp.3.role': `Stagiaire ingénieur logiciel IA`, 'exp.3.date': `Juil. 2024 — Août 2024`,
    'exp.3.a': `Développement et déploiement d'une plateforme interne de gestion des actifs et de la maintenance sur la stack MERN, avec SQL pour l'inventaire et MongoDB pour l'authentification.`,
    'exp.3.b': `Ajout d'un workflow de tri par Random Forest combinant le texte des tickets et des données structurées pour prioriser et router les demandes.`,
    'proj.label': `Projets`,
    'proj.title': `Construits pour aller<br><span class="grad">plus loin.</span>`,
    'proj.soon': `Code bientôt disponible`, 'proj.follow': `Suivre sur GitHub`,
    'proj.1.tag': `RAG multimodal`,
    'proj.1.p': `Un assistant documentaire qui répond avec des citations précises à la page sur PDF, DOCX, PPTX et XLSX — graphiques et images compris, grâce à un modèle vision-langage local.`,
    'proj.1.v': `58 % → 92,1 %`, 'proj.1.m': `Précision top-3 sur un jeu d'évaluation Ragas de 100 questions`,
    'proj.2.tag': `LLM gouverné · MLOps`,
    'proj.2.p': `SmolLM2 affiné par QLoRA sur plus de 2M de recettes, encadré par une couche de gouvernance qui impose calories, macros et allergènes avec journalisation complète — servi en microservices Kubernetes.`,
    'proj.2.v': `89 %`, 'proj.2.m': `Taux de respect des contraintes`,
    'proj.3.tag': `IA agentique · Hackathon`, 'proj.3.t': `Agent Green AI`,
    'proj.3.p': `Un système d'IA agentique conçu pour aider les foyers à réduire leur consommation d'énergie — réalisé en temps limité et récompensé par la première place.`,
    'proj.3.v': `1re place`, 'proj.3.m': `Hackathon Green AI · ENSTAB · Déc. 2025`,
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
    'contact.copy': `Copier l'e-mail`,
    'contact.email': `M'écrire`,
    'mail.title': `Comment souhaitez-vous me contacter ?`,
    'mail.default': `Application mail par défaut`,
    'mail.copy': `Copier l'adresse`,
    'footer.built': `Conçu &amp; développé avec soin · aiandoulsisolutions.me`
  };
  const WORDS = {
    en: ['agentic AI systems', 'production RAG pipelines', 'MLOps platforms', 'AI copilots for the enterprise'],
    fr: ['des systèmes d\'IA agentique', 'des pipelines RAG en production', 'des plateformes MLOps', 'des copilotes IA pour l\'entreprise']
  };
  const TITLES = {
    en: 'Ibrahim Khalil Andoulsi — AI & Software Engineer',
    fr: 'Ibrahim Khalil Andoulsi — Ingénieur IA & Logiciel'
  };
  const COPIED = { en: 'Copied!', fr: 'Copié !' };

  const i18nEls = $$('[data-i18n]');
  const EN = {};
  i18nEls.forEach(el => { if (!(el.dataset.i18n in EN)) EN[el.dataset.i18n] = el.innerHTML; });

  let lang = localStorage.getItem('lang') === 'fr' ? 'fr' : 'en';

  function setLang(l) {
    lang = l;
    const dict = l === 'fr' ? FR : EN;
    i18nEls.forEach(el => { const v = dict[el.dataset.i18n]; if (v !== undefined) el.innerHTML = v; });
    document.documentElement.lang = l;
    document.title = TITLES[l];
    $$('#langBtn span').forEach(s => s.classList.toggle('on', s.dataset.l === l));
    localStorage.setItem('lang', l);
    $$('[data-count].done').forEach(el => el.textContent = fmt(el, parseFloat(el.dataset.count)));
    restartTyping();
  }
  $('#langBtn').addEventListener('click', () => setLang(lang === 'en' ? 'fr' : 'en'));

  /* ===== Typing effect ===== */
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
    if (reduce) { typed.textContent = WORDS[lang][0]; return; }
    tick();
  }

  /* ===== Counters ===== */
  function fmt(el, v) {
    const dec = +(el.dataset.dec || 0);
    let s = v.toFixed(dec);
    if (lang === 'fr') s = s.replace('.', ',');
    const suf = el.dataset.suf ? (lang === 'fr' ? '\u202F' : '') + el.dataset.suf : '';
    return (el.dataset.pre || '') + s + suf;
  }
  function count(el) {
    const target = parseFloat(el.dataset.count);
    const done = () => { el.textContent = fmt(el, target); el.classList.add('done'); };
    if (reduce) return done();
    const dur = 1800, start = performance.now();
    const step = now => {
      const k = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - k, 4);
      el.textContent = fmt(el, target * e);
      k < 1 ? requestAnimationFrame(step) : done();
    };
    requestAnimationFrame(step);
  }

  /* ===== Reveal on scroll ===== */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      if (e.target.hasAttribute('data-count')) count(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: .15, rootMargin: '0px 0px -60px 0px' });
  $$('.reveal, [data-count], .bar').forEach(el => io.observe(el));

  /* ===== Scroll: progress, nav, active link, timeline ===== */
  const nav = $('#nav'), progress = $('#progress');
  const sections = $$('main section[id]');
  const links = $$('.nav-links a');
  const tl = $('.timeline'), tlp = $('.timeline-progress'), tlItems = $$('.tl-item');
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
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ===== Mobile menu ===== */
  $('#burger').addEventListener('click', () => nav.classList.toggle('open'));
  links.forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  /* ===== Card spotlight ===== */
  $$('.spot').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${e.clientX - r.left}px`);
    c.style.setProperty('--my', `${e.clientY - r.top}px`);
  }));

  /* ===== Email chooser ===== */
  const SUBJECT = { en: 'Opportunity — via your portfolio', fr: 'Opportunité — via votre portfolio' };
  const mailModal = $('#mailModal');
  function openMail(e) {
    e.preventDefault();
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
  addEventListener('keydown', e => { if (e.key === 'Escape') closeMail(); });
  $$('.mail-opts a').forEach(a => a.addEventListener('click', () => setTimeout(closeMail, 300)));
  $('#mCopy').addEventListener('click', async e => {
    const b = e.currentTarget;
    try {
      await navigator.clipboard.writeText(EMAIL);
      b.textContent = COPIED[lang];
      setTimeout(() => { b.innerHTML = (lang === 'fr' ? FR : EN)['mail.copy']; }, 1800);
    } catch { b.textContent = EMAIL; }
  });

  /* ===== Hero agent graph ===== */
  const hero = $('#hero'), canvas = $('#graph'), ctx = canvas.getContext('2d');
  let W, H, pts = [], pulses = [], mouse = { x: -9999, y: -9999 }, running = true;
  const LINK = 140;

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(90, (W * H) / 16000));
    const sp = reduce ? 0 : .35;
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * sp, vy: (Math.random() - .5) * sp,
      r: Math.random() * 1.6 + 1
    }));
    pulses = [];
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = mouse.x - p.x, dy = mouse.y - p.y;
      if (Math.hypot(dx, dy) < 180) { p.x += dx * .006; p.y += dy * .006; }
    }
    const edges = [];
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(139,92,246,${(1 - d / LINK) * .35})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          edges.push([a, b]);
        }
      }
    }
    if (!reduce && edges.length && pulses.length < 14 && Math.random() < .08) {
      const [a, b] = edges[(Math.random() * edges.length) | 0];
      pulses.push({ a, b, t: 0 });
    }
    pulses = pulses.filter(p => p.t <= 1);
    ctx.shadowColor = '#22d3ee'; ctx.shadowBlur = 12; ctx.fillStyle = 'rgba(34,211,238,.95)';
    for (const p of pulses) {
      p.t += .02;
      ctx.beginPath();
      ctx.arc(p.a.x + (p.b.x - p.a.x) * p.t, p.a.y + (p.b.y - p.a.y) * p.t, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    for (const p of pts) {
      const near = Math.hypot(mouse.x - p.x, mouse.y - p.y) < 180;
      ctx.fillStyle = near ? 'rgba(34,211,238,.95)' : 'rgba(200,210,255,.5)';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r + (near ? 1 : 0), 0, Math.PI * 2); ctx.fill();
    }
  }

  function loop() {
    if (!running) return;
    draw();
    requestAnimationFrame(loop);
  }

  hero.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });

  let rT;
  addEventListener('resize', () => {
    clearTimeout(rT);
    rT = setTimeout(() => { resize(); if (reduce) draw(); }, 150);
  });

  resize();
  if (reduce) {
    draw();
  } else {
    new IntersectionObserver(([e]) => {
      const was = running;
      running = e.isIntersecting;
      if (running && !was) requestAnimationFrame(loop);
    }).observe(hero);
    requestAnimationFrame(loop);
  }

  /* ===== Init ===== */
  setLang(lang);
  onScroll();
})();
