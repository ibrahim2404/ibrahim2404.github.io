/* =========================================================
   Portfolio AI assistant — front end
   Talks to the Cloudflare Worker, renders answers and runs
   the whitelisted actions (open project, scroll, offer link).
   ========================================================= */
(() => {
  'use strict';

  // Paste your Worker URL here after deploying (e.g. https://portfolio-assistant.yourname.workers.dev).
  // While it is empty, the assistant stays hidden so the site keeps working.
  const CHAT_API = 'https://portfolio-assistant.andoulsiibrahimkhalil.workers.dev/';

  if (!CHAT_API) return;

  const T = {
    en: {
      launch: 'Ask my AI', nudge: 'Back to the chat',
      title: 'Ask about Ibrahim', status: 'AI assistant · answers from this portfolio',
      hello: 'Hi! I\'m Ibrahim\'s AI assistant. Ask me anything about his experience, projects or skills — I can also take you straight to the evidence on this page.',
      starters: ['Why should I consider Ibrahim for an AI role?', 'Walk me through the PwC copilot', 'What MLOps experience does he have?', 'How can I contact him?'],
      placeholder: 'Ask a question…', note: 'Answers come only from this portfolio · AI can make mistakes',
      trace: 'Show agent steps', reset: 'New conversation', close: 'Close', send: 'Send',
      opened: 'Opened', scrolled: 'Scrolled to', offered: 'Offered link',
      links: { linkedin: 'Open LinkedIn', github: 'Open GitHub', demo: 'Watch the PwC demo', cv: 'View the CV', email: 'Email Ibrahim' },
      sections: { about: 'About', projects: 'Projects', experience: 'Experience', skills: 'Skills', education: 'Education', contact: 'Contact' },
      focus: { overview: 'Overview', challenge: 'Challenge', built: 'What he built', architecture: 'Architecture', results: 'Results', stack: 'Stack' },
      show: 'Show',
      errRate: 'You\'re sending messages a bit fast — give me a few seconds and try again.',
      errBusy: 'I\'m at capacity right now. You can still reach Ibrahim directly:',
      errNet: 'I couldn\'t reach the server. Please try again in a moment, or contact Ibrahim directly:',
      limit: 'This conversation is getting long — start a new one to keep answers sharp.'
    },
    fr: {
      launch: 'Demander à mon IA', nudge: 'Revenir au chat',
      title: 'Questions sur Ibrahim', status: 'Assistant IA · répond à partir de ce portfolio',
      hello: 'Bonjour ! Je suis l\'assistant IA d\'Ibrahim. Posez-moi vos questions sur son expérience, ses projets ou ses compétences — je peux aussi vous montrer directement la preuve sur cette page.',
      starters: ['Pourquoi considérer Ibrahim pour un poste en IA ?', 'Présentez-moi le copilote PwC', 'Quelle est son expérience en MLOps ?', 'Comment le contacter ?'],
      placeholder: 'Posez une question…', note: 'Réponses issues uniquement de ce portfolio · L\'IA peut se tromper',
      trace: 'Voir les étapes de l\'agent', reset: 'Nouvelle conversation', close: 'Fermer', send: 'Envoyer',
      opened: 'Ouvert', scrolled: 'Défilé vers', offered: 'Lien proposé',
      links: { linkedin: 'Ouvrir LinkedIn', github: 'Ouvrir GitHub', demo: 'Voir la démo PwC', cv: 'Voir le CV', email: 'Écrire à Ibrahim' },
      sections: { about: 'À propos', projects: 'Projets', experience: 'Expérience', skills: 'Compétences', education: 'Formation', contact: 'Contact' },
      focus: { overview: 'Vue d\'ensemble', challenge: 'Défi', built: 'Réalisations', architecture: 'Architecture', results: 'Résultats', stack: 'Stack' },
      show: 'Voir',
      errRate: 'Vous envoyez des messages un peu vite — patientez quelques secondes et réessayez.',
      errBusy: 'Je suis saturé pour le moment. Vous pouvez contacter Ibrahim directement :',
      errNet: 'Impossible de joindre le serveur. Réessayez dans un instant, ou contactez Ibrahim directement :',
      limit: 'La conversation devient longue — démarrez-en une nouvelle pour garder des réponses précises.'
    }
  };

  const ICON = {
    send: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M18 6 6 18M6 6l12 12"/></svg>',
    reset: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg>',
    trace: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 6h10M4 12h16M4 18h7"/></svg>',
    ext: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>'
  };

  const MAX_MESSAGES = 24;
  const root = document.documentElement;
  const P = () => window.Portfolio;
  const lang = () => (P() && P().lang()) || 'en';
  const t = k => T[lang()][k];
  const isPhone = () => matchMedia('(max-width: 640px)').matches;

  let history = [];       // {role, content} sent to the API
  let busy = false;

  /* ---------- DOM ---------- */
  const launch = document.createElement('button');
  launch.className = 'ai-launch';
  launch.type = 'button';
  launch.innerHTML = '<span class="ai-orb">IK</span><span class="ai-label"></span><span class="ai-nudge"></span><span class="ai-pulse"></span>';

  const panel = document.createElement('div');
  panel.className = 'ai-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'false');
  panel.innerHTML = `
    <header class="ai-head">
      <span class="ai-orb">IK</span>
      <div><b class="ai-title"></b><small><i></i><span class="ai-status"></span></small></div>
      <div class="ai-head-btns">
        <button type="button" class="ai-icon-btn ai-trace-btn">${ICON.trace}</button>
        <button type="button" class="ai-icon-btn ai-reset-btn">${ICON.reset}</button>
        <button type="button" class="ai-icon-btn ai-close-btn">${ICON.close}</button>
      </div>
    </header>
    <div class="ai-body" aria-live="polite"></div>
    <footer class="ai-foot">
      <form class="ai-form">
        <textarea rows="1" maxlength="1200"></textarea>
        <button type="submit" class="ai-send" disabled>${ICON.send}</button>
      </form>
      <p class="ai-note"></p>
    </footer>`;

  document.body.append(launch, panel);
  const body = panel.querySelector('.ai-body');
  const form = panel.querySelector('.ai-form');
  const input = form.querySelector('textarea');
  const sendBtn = form.querySelector('.ai-send');
  const traceBtn = panel.querySelector('.ai-trace-btn');

  function applyStrings() {
    launch.querySelector('.ai-label').textContent = t('launch');
    launch.querySelector('.ai-nudge').textContent = t('nudge');
    launch.setAttribute('aria-label', t('launch'));
    panel.setAttribute('aria-label', t('title'));
    panel.querySelector('.ai-title').textContent = t('title');
    panel.querySelector('.ai-status').textContent = t('status');
    panel.querySelector('.ai-note').textContent = t('note');
    input.placeholder = t('placeholder');
    traceBtn.title = traceBtn.ariaLabel = t('trace');
    panel.querySelector('.ai-reset-btn').title = panel.querySelector('.ai-reset-btn').ariaLabel = t('reset');
    panel.querySelector('.ai-close-btn').title = panel.querySelector('.ai-close-btn').ariaLabel = t('close');
    sendBtn.ariaLabel = t('send');
    const hello = body.querySelector('.ai-hello .ai-bubble');
    if (hello) hello.textContent = t('hello');
    const starters = body.querySelector('.ai-starters');
    if (starters) renderStarters(starters);
  }

  /* ---------- Rendering ---------- */
  const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function md(text) {
    const lines = esc(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').split('\n');
    let html = '', list = false, para = [];
    const flush = () => { if (para.length) { html += `<p>${para.join('<br>')}</p>`; para = []; } };
    for (const raw of lines) {
      const line = raw.trim();
      if (/^[-•*] /.test(line)) { flush(); if (!list) { html += '<ul>'; list = true; } html += `<li>${line.slice(2)}</li>`; }
      else { if (list) { html += '</ul>'; list = false; } if (line) para.push(line); else flush(); }
    }
    flush(); if (list) html += '</ul>';
    return html;
  }

  function scrollDown() { body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' }); }

  function addMsg(role, html, cls = '') {
    const m = document.createElement('div');
    m.className = `ai-msg ${role} ${cls}`.trim();
    m.innerHTML = `<div class="ai-bubble">${html}</div>`;
    body.appendChild(m);
    scrollDown();
    return m;
  }

  function renderStarters(box) {
    box.innerHTML = '';
    t('starters').forEach(q => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'ai-starter'; b.textContent = q;
      b.addEventListener('click', () => send(q));
      box.appendChild(b);
    });
  }

  function welcome() {
    body.innerHTML = '';
    const h = addMsg('bot', '', 'ai-hello');
    h.querySelector('.ai-bubble').textContent = t('hello');
    const s = document.createElement('div');
    s.className = 'ai-starters';
    renderStarters(s);
    body.appendChild(s);
  }

  function linkButton(target) {
    const label = t('links')[target];
    const P_ = P();
    if (target === 'cv' || target === 'email') {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'ai-act';
      b.innerHTML = `${esc(label)} ${ICON.arrow}`;
      b.addEventListener('click', () => {
        if (isPhone()) minimize();
        target === 'cv' ? P_.openCV() : P_.openMail();
      });
      return b;
    }
    const a = document.createElement('a');
    a.className = 'ai-act'; a.href = P_.links[target]; a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = `${esc(label)} ${ICON.ext}`;
    return a;
  }

  function navLabel(a) {
    if (a.type === 'open_project') {
      const f = a.focus ? ` · ${t('focus')[a.focus]}` : '';
      return P().projectTitle(a.target) + f;
    }
    return t('sections')[a.target];
  }

  function runNav(a) {
    if (isPhone()) minimize();
    if (a.type === 'open_project') P().openProject(a.target, a.focus);
    else P().scrollTo(a.target);
  }

  function renderActions(msgEl, actions) {
    if (!actions || !actions.length) return;
    const acts = document.createElement('div');
    acts.className = 'ai-acts';
    const trace = document.createElement('div');
    trace.className = 'ai-trace';
    let navDone = false;

    actions.forEach(a => {
      if (a.type === 'offer_link') {
        acts.appendChild(linkButton(a.target));
        trace.insertAdjacentHTML('beforeend', `<span>offer_link("${a.target}")</span>`);
        return;
      }
      const call = a.type === 'open_project' ? `open_project("${a.target}"${a.focus ? `, "${a.focus}"` : ''})` : `scroll_to("${a.target}")`;
      trace.insertAdjacentHTML('beforeend', `<span>${call}</span>`);
      // Run the first navigation automatically, keep the others as buttons
      if (!navDone) { navDone = true; setTimeout(() => runNav(a), 350); }
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'ai-act';
      b.innerHTML = `${esc(t('show'))}: ${esc(navLabel(a))} ${ICON.arrow}`;
      b.addEventListener('click', () => runNav(a));
      acts.appendChild(b);
    });

    if (acts.children.length) msgEl.appendChild(acts);
    msgEl.appendChild(trace);
    scrollDown();
  }

  function fallback(msgKey) {
    const m = addMsg('bot', esc(t(msgKey)));
    if (msgKey !== 'errRate') renderActions(m, [{ type: 'offer_link', target: 'email', focus: '' }, { type: 'offer_link', target: 'linkedin', focus: '' }]);
  }

  /* ---------- Networking ---------- */
  async function send(text) {
    text = (text || '').trim();
    if (!text || busy) return;
    const starters = body.querySelector('.ai-starters');
    if (starters) starters.remove();
    if (history.length >= MAX_MESSAGES) { addMsg('bot', esc(t('limit'))); return; }

    addMsg('user', esc(text));
    history.push({ role: 'user', content: text });
    input.value = ''; autosize(); updateSend();

    busy = true; updateSend();
    const typing = document.createElement('div');
    typing.className = 'ai-msg bot';
    typing.innerHTML = '<div class="ai-typing"><i></i><i></i><i></i></div>';
    body.appendChild(typing); scrollDown();

    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 30000);
      const res = await fetch(CHAT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang: lang(), messages: history }),
        signal: ctrl.signal
      });
      clearTimeout(timer);
      typing.remove();
      if (res.status === 429) { history.pop(); fallback('errRate'); return; }
      if (!res.ok) { history.pop(); fallback(res.status === 503 ? 'errBusy' : 'errNet'); return; }
      const data = await res.json();
      const answer = String(data.answer || '').trim();
      if (!answer) { history.pop(); fallback('errNet'); return; }
      history.push({ role: 'assistant', content: answer });
      const m = addMsg('bot', md(answer));
      renderActions(m, data.actions);
    } catch (e) {
      typing.remove();
      history.pop();
      fallback('errNet');
    } finally {
      busy = false; updateSend();
      if (!isPhone()) input.focus();
    }
  }

  /* ---------- Open / close ---------- */
  function open() {
    launch.classList.remove('nudge');
    panel.classList.add('open');
    launch.classList.add('hidden');
    root.classList.add('chat-open');
    root.classList.toggle('chat-full', isPhone());
    if (!body.children.length) welcome();
    if (!isPhone()) setTimeout(() => input.focus(), 250);
  }
  function close() {
    panel.classList.remove('open');
    launch.classList.remove('hidden');
    root.classList.remove('chat-open', 'chat-full');
  }
  // Phones: get out of the way so the visitor sees what the assistant opened
  function minimize() {
    close();
    launch.classList.add('nudge');
  }

  launch.addEventListener('click', open);
  panel.querySelector('.ai-close-btn').addEventListener('click', close);
  panel.querySelector('.ai-reset-btn').addEventListener('click', () => { history = []; welcome(); });
  traceBtn.addEventListener('click', () => {
    panel.classList.toggle('show-trace');
    traceBtn.classList.toggle('on', panel.classList.contains('show-trace'));
    scrollDown();
  });
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('open') && !document.querySelector('.mail-modal.open')) close();
  });

  /* ---------- Input ---------- */
  function autosize() { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; }
  function updateSend() { sendBtn.disabled = busy || !input.value.trim(); }
  input.addEventListener('input', () => { autosize(); updateSend(); });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(input.value); }
  });
  form.addEventListener('submit', e => { e.preventDefault(); send(input.value); });

  addEventListener('portfolio:lang', applyStrings);
  addEventListener('resize', () => { if (panel.classList.contains('open')) root.classList.toggle('chat-full', isPhone()); });

  applyStrings();
})();
