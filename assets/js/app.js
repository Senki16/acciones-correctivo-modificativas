/* Enrutador y vistas del sitio. Sin dependencias. */
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const main = $("#main");
  const C = window.CLASES, P = window.PAPERS, D = window.DESCARGAS, CUR = window.CURSO;
  const BASE = (window.RELEASE_BASE || "").replace(/\/$/, "");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fileUrl = (name) => (BASE ? `${BASE}/${name}` : `descargas.html`);
  const arrow = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const dlIcon = '<svg viewBox="0 0 24 24"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>';
  const extIcon = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  const temaImg = { "Análisis de fallas": "assets/img/clase2.webp", "Diagnóstico con IA": "assets/img/clase3.webp", "Recuperación de partes": "assets/img/clase4.webp", "Decisión y rediseño": "assets/img/clase5.webp" };
  const totalFiles = D.reduce((n, g) => n + g.items.reduce((m, it) => m + (it.tipos ? it.tipos.length : 1), 0), 0);

  /* ───────── piezas reutilizables */
  const classCard = (c) => `
    <a class="ccard reveal" href="clase-${c.n}.html">
      <div class="ccard__media"><img src="${c.img}" alt="" loading="lazy"><span class="ccard__num">0${c.n}</span></div>
      <div class="ccard__body"><h3>${esc(c.titulo)}</h3><p>${esc(c.subtitulo)}</p><span class="ccard__go">${arrow}</span></div>
    </a>`;

  const paperCard = (p, img = true) => `
    <article class="pcard reveal">
      ${img ? `<div class="pcard__media"><img src="${temaImg[p.tema]}" alt="" loading="lazy"></div>` : ""}
      <div class="pcard__body">
        <div><span class="tag">${esc(p.tema)}</span></div>
        <h3>${esc(p.t)}</h3>
        <div class="pcard__meta"><b>${esc(p.r)}</b> · ${esc(p.f)}<br>${esc(p.a)}</div>
        <p class="pcard__s">${esc(p.s)}</p>
        <div class="pcard__foot">
          <span class="${p.v ? "badge-v" : "badge-v badge-v--n"}" title="${p.v ? "Título, autores y fecha verificados en la página de la revista" : "Datos tomados del índice de búsqueda; la página de la revista no fue accesible"}">${p.v ? "✓ Verificado" : "Según índice"}</span>
          <a class="btn btn--sm btn--ghost" href="${esc(p.url)}" target="_blank" rel="noopener">Leer ${extIcon}</a>
        </div>
      </div>
    </article>`;

  const dlRow = (it) => {
    if (it.tipos) {
      const btns = it.tipos.map(([ext, mb]) => `<a class="dl-btn" href="${fileUrl(it.f + "." + ext)}" download>${dlIcon}${ext.toUpperCase()} · ${mb} MB</a>`).join("");
      return `<div class="dl-row"><span class="ficon ficon--pdf">PDF</span><div><div class="dl-row__t">${esc(it.t)}</div><div class="dl-row__m">${it.tipos.map((t) => t[0].toUpperCase()).join(" · ")}</div></div><div class="dl-row__a">${btns}</div></div>`;
    }
    return `<div class="dl-row"><span class="ficon ficon--${it.tipo}">${it.tipo.toUpperCase()}</span><div><div class="dl-row__t">${esc(it.t)}</div><div class="dl-row__m">${it.tipo.toUpperCase()} · ${it.mb} MB</div></div><div class="dl-row__a"><a class="dl-btn" href="${fileUrl(it.file)}" download>${dlIcon}Descargar</a></div></div>`;
  };

  const tile = (href, icon, t, d) => `<a class="tile reveal" href="${href}">${icon}<h3>${t}</h3><p>${d}</p></a>`;
  const ICONS = {
    book: '<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M9 7h6"/></svg>',
    cards: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/></svg>',
    check: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 12 3 3 5-6"/></svg>',
    route: '<svg viewBox="0 0 24 24"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7v4a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4"/><path d="M18 5h-6"/></svg>',
  };

  /* ───────── vistas */
  function viewHome() {
    return `
    <section class="hero">
      <img class="hero__bg" src="assets/img/hero.webp" alt="" fetchpriority="high">
      <div class="wrap hero__inner">
        <div class="hero__copy">
          <span class="eyebrow">${esc(CUR.programa)}</span>
          <h1 class="h-display">Acciones <span class="accent">Correctivo-</span><br>Modificativas</h1>
          <p class="lead">Del síntoma a la causa, de la causa a la reparación. Clases, repaso de conceptos, descargas e investigación reciente en un solo lugar.</p>
          <div class="hero__ctas">
            <a class="btn btn--primary" href="clases.html">Explorar las clases ${arrow}</a>
            <a class="btn btn--ghost" href="repaso.html">Repasar conceptos</a>
          </div>
        </div>
      </div>
      <div class="hero__chip">Confiabilidad<br>Mantenibilidad<br>Disponibilidad</div>
    </section>

    <section class="section--tight"><div class="wrap">
      <div class="stats reveal">
        <div class="stat"><b>5</b><span>clases</span></div>
        <div class="stat"><b>${C.reduce((n, c) => n + c.conceptos.length, 0)}</b><span>conceptos clave</span></div>
        <div class="stat"><b>${totalFiles}</b><span>archivos para descargar</span></div>
        <div class="stat"><b>${P.length}</b><span>papers de 2026</span></div>
      </div>
    </div></section>

    <section class="section" id="clases"><div class="wrap">
      <div class="sec-head"><div><h2 class="h2">Clases <span class="accent">del curso</span></h2><div class="rule"></div></div><a class="link-more" href="clases.html">Ver todas las clases</a></div>
      <div class="classes">${C.map(classCard).join("")}</div>
    </div></section>

    <section class="section section--alt"><div class="wrap">
      <div class="sec-head"><div><h2 class="h2">Repaso <span class="accent">de conceptos</span></h2><div class="rule"></div></div><a class="link-more" href="repaso.html">Ir al repaso</a></div>
      <div class="tiles">
        ${tile("repaso.html?modo=conceptos", ICONS.book, "Conceptos clave", "Las definiciones esenciales de cada clase, listas para leer.")}
        ${tile("repaso.html?modo=tarjetas", ICONS.cards, "Tarjetas de estudio", "Toque la tarjeta para ver la definición y ponerse a prueba.")}
        ${tile("repaso.html?modo=quiz", ICONS.check, "Autoevaluación", "Preguntas de selección con respuesta y explicación inmediata.")}
        ${tile("repaso.html?modo=ruta", ICONS.route, "Ruta de decisión", "Recorra el diagrama: ¿desvare, reparación definitiva o modificación?")}
      </div>
    </div></section>

    <section class="section"><div class="wrap">
      <div class="sec-head"><div><h2 class="h2">Descar<span class="accent">gas</span></h2><div class="rule"></div></div><a class="link-more" href="descargas.html">Ver todas las descargas</a></div>
      <div class="dl-list reveal">${D[0].items.map(dlRow).join("")}</div>
    </div></section>

    <section class="section section--alt"><div class="wrap">
      <div class="sec-head"><div><h2 class="h2">Papers <span class="accent">recientes 2026</span></h2><div class="rule"></div></div><a class="link-more" href="papers.html">Ver todos los papers</a></div>
      <div class="papers">${[P[0], P[9], P[5]].map((p) => paperCard(p)).join("")}</div>
    </div></section>`;
  }

  function viewClases() {
    return `
    <section class="page-head"><div class="wrap">
      <span class="eyebrow">Cinco sesiones</span>
      <h1 class="h1" style="margin-top:12px">Clases <span class="accent">del curso</span></h1>
      <p class="lead">${esc(CUR.objetivo)}</p>
    </div></section>
    <section class="section" style="padding-top:20px"><div class="wrap">
      <div class="classes">${C.map(classCard).join("")}</div>
      <div class="note">Cada clase incluye ideas para retener, conceptos clave, ejemplos aplicados y sus archivos en PDF y PowerPoint.</div>
    </div></section>`;
  }

  function viewClase(n) {
    const c = C.find((x) => x.n === n);
    if (!c) return viewNotFound();
    const prev = C.find((x) => x.n === n - 1), next = C.find((x) => x.n === n + 1);
    const dl = D[0].items[n - 1];
    return `
    <section class="chero">
      <img class="chero__img" src="${c.img}" alt="">
      <div class="wrap chero__copy">
        <div class="chero__num">Clase ${c.n} de 5</div>
        <h1>${esc(c.titulo)}</h1>
        <p>${esc(c.resumen)}</p>
      </div>
    </section>
    <div class="wrap crumbs"><a href="index.html">Inicio</a> › <a href="clases.html">Clases</a> › ${esc(c.titulo)}</div>

    <section class="section"><div class="wrap">
      <div class="sec-head"><div><h2 class="h2">Ideas <span class="accent">para retener</span></h2><div class="rule"></div></div></div>
      <div class="ideas">${c.ideas.map((t, i) => `<div class="idea reveal"><b>${i + 1}</b><p>${esc(t)}</p></div>`).join("")}</div>
    </div></section>

    <section class="section section--alt"><div class="wrap">
      <div class="sec-head"><div><h2 class="h2">Conceptos <span class="accent">clave</span></h2><div class="rule"></div></div><a class="link-more" href="repaso.html?clase=${c.n}&modo=tarjetas">Practicar con tarjetas</a></div>
      <div class="concepts">${c.conceptos.map(([t, d]) => `<div class="concept reveal"><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join("")}</div>
    </div></section>

    <section class="section"><div class="wrap">
      <div class="sec-head"><div><h2 class="h2">Ejemplos <span class="accent">aplicados</span></h2><div class="rule"></div></div></div>
      <div class="examples">${c.ejemplos.map(([t, d]) => `<div class="example reveal"><span class="tag">Ejemplo</span><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join("")}</div>
    </div></section>

    <section class="section section--alt"><div class="wrap">
      <div class="sec-head"><div><h2 class="h2">Material <span class="accent">de la clase</span></h2><div class="rule"></div></div><a class="link-more" href="repaso.html?clase=${c.n}&modo=quiz">Autoevaluarme</a></div>
      <div class="dl-list reveal">${dlRow(dl)}</div>
    </div></section>

    <section class="section--tight"><div class="wrap cnav">
      ${prev ? `<a href="clase-${prev.n}.html"><small>← Clase anterior</small><strong>${esc(prev.titulo)}</strong></a>` : "<span style='flex:1'></span>"}
      ${next ? `<a class="next" href="clase-${next.n}.html"><small>Siguiente clase →</small><strong>${esc(next.titulo)}</strong></a>` : `<a class="next" href="repaso.html"><small>Terminó el curso →</small><strong>Repaso general</strong></a>`}
    </div></section>`;
  }

  /* Repaso */
  const R = { clase: 1, modo: "conceptos" };
  function viewRepaso(q) {
    if (q.clase) R.clase = Math.min(5, Math.max(1, parseInt(q.clase, 10) || 1));
    if (q.modo) R.modo = q.modo;
    const modos = [["conceptos", "Conceptos"], ["tarjetas", "Tarjetas"], ["quiz", "Autoevaluación"], ["ruta", "Ruta de decisión"]];
    return `
    <section class="page-head"><div class="wrap">
      <span class="eyebrow">Repaso</span>
      <h1 class="h1" style="margin-top:12px">Repase a su <span class="accent">ritmo</span></h1>
      <p class="lead">Lea los conceptos, póngase a prueba con tarjetas y preguntas, o recorra la ruta de decisión después de una falla.</p>
    </div></section>
    <section class="section" style="padding-top:12px"><div class="wrap">
      <div class="review-bar">
        <div class="seg" role="tablist" aria-label="Modo de repaso">${modos.map(([k, t]) => `<button role="tab" data-modo="${k}" class="${R.modo === k ? "is-on" : ""}" aria-selected="${R.modo === k}">${t}</button>`).join("")}</div>
        ${R.modo !== "ruta" ? `<div class="seg" aria-label="Clase">${C.map((c) => `<button data-clase="${c.n}" class="${R.clase === c.n ? "is-on" : ""}" title="${esc(c.titulo)}">Clase ${c.n}</button>`).join("")}</div>` : ""}
      </div>
      <div id="reviewBody">${reviewBody()}</div>
    </div></section>`;
  }

  function reviewBody() {
    const c = C[R.clase - 1];
    if (R.modo === "tarjetas")
      return `<p class="muted" style="margin:0 0 20px">${esc(c.titulo)} · toque una tarjeta para ver la respuesta.</p>
        <div class="cards-grid">${c.conceptos.map(([t, d]) => `<button class="flip" aria-label="${esc(t)}: ver definición"><div class="flip__in"><div class="flip__f"><h4>${esc(t)}</h4><small>Toque para ver la definición ↺</small></div><div class="flip__b"><b>${esc(t)}</b>${esc(d)}</div></div></button>`).join("")}</div>`;
    if (R.modo === "quiz")
      return `<div class="quiz" id="quiz">${c.quiz.map((q, i) => `<div class="qcard" data-a="${q.a}"><h4><span>${i + 1}.</span>${esc(q.q)}</h4>${q.o.map((o, j) => `<button class="opt" data-j="${j}">${esc(o)}</button>`).join("")}<p class="qexp" hidden>${esc(q.e)}</p></div>`).join("")}
        <div class="score" id="score">Respuestas correctas: <span id="scoreN">0</span> de ${c.quiz.length}</div></div>`;
    if (R.modo === "ruta") return `<div class="decision" id="decision"></div>`;
    return `<div class="concepts">${c.conceptos.map(([t, d]) => `<div class="concept"><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join("")}</div>
      <div class="note">¿Quiere ver la clase completa? <a href="clase-${c.n}.html">Ir a la clase ${c.n}: ${esc(c.titulo)}</a></div>`;
  }

  function bindRepaso() {
    $$("[data-modo]").forEach((b) => b.addEventListener("click", () => { R.modo = b.dataset.modo; setRepaso(); }));
    $$("[data-clase]").forEach((b) => b.addEventListener("click", () => { R.clase = +b.dataset.clase; setRepaso(); }));
    $$(".flip").forEach((f) => f.addEventListener("click", () => f.classList.toggle("is-flipped")));
    const quiz = $("#quiz");
    if (quiz) {
      let ok = 0;
      $$(".qcard", quiz).forEach((card) => {
        const a = +card.dataset.a;
        $$(".opt", card).forEach((btn) => btn.addEventListener("click", () => {
          const j = +btn.dataset.j;
          $$(".opt", card).forEach((b) => { b.disabled = true; if (+b.dataset.j === a) b.classList.add("ok"); });
          if (j !== a) btn.classList.add("bad"); else ok++;
          $(".qexp", card).hidden = false;
          $("#scoreN").textContent = ok;
        }));
      });
    }
    if ($("#decision")) runDecision([]);
  }

  function runDecision(trail, nodeId) {
    const DEC = window.DECISION, box = $("#decision");
    const id = nodeId || DEC.inicio, n = DEC.nodos[id];
    const tr = trail.length ? `<div class="decision__trail">${trail.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : "";
    if (n.fin) {
      box.innerHTML = `${tr}<div class="decision__res"><span class="tag tag--amber">Resultado</span><h3 style="margin-top:14px">${esc(n.t)}</h3><p>${esc(n.d)}</p><button class="btn btn--ghost" style="background:#fff" id="decReset">Empezar de nuevo</button></div>`;
      $("#decReset").onclick = () => runDecision([]);
      return;
    }
    box.innerHTML = `${tr}<span class="eyebrow">Después de la falla</span><h3 style="margin-top:12px">${esc(n.t)}</h3><p>${esc(n.ayuda)}</p>
      <div class="decision__btns"><button class="btn btn--primary" id="decSi">Sí</button><button class="btn btn--ghost" id="decNo">No</button></div>`;
    $("#decSi").onclick = () => runDecision([...trail, `${n.t} → Sí`], n.si);
    $("#decNo").onclick = () => runDecision([...trail, `${n.t} → No`], n.no);
  }

  function viewDescargas() {
    return `
    <section class="page-head"><div class="wrap">
      <span class="eyebrow">Documentación</span>
      <h1 class="h1" style="margin-top:12px">Descar<span class="accent">gas</span></h1>
      <p class="lead">Todas las clases del curso en PDF y PowerPoint, más el material del curso anterior: clases originales, trabajos de estudiantes y lecturas de referencia.</p>
    </div></section>
    <section class="section" style="padding-top:12px"><div class="wrap">
      <div class="dl-group reveal"><div class="dl-list">
        <div class="dl-row"><span class="ficon ficon--zip">ZIP</span><div><div class="dl-row__t">Paquete completo · las 5 clases en PDF</div><div class="dl-row__m">ZIP · 26.8 MB</div></div><div class="dl-row__a"><a class="dl-btn" href="${fileUrl("curso-actualizado-clases-pdf.zip")}" download>${dlIcon}Descargar todo</a></div></div>
      </div></div>
      ${D.map((g) => `<div class="dl-group reveal"><div class="dl-group__head"><h3>${esc(g.grupo)}</h3><p>${esc(g.desc)}</p></div><div class="dl-list">${g.items.map(dlRow).join("")}</div></div>`).join("")}
      <div class="note">Los trabajos de estudiantes se comparten como material de apoyo del curso; los créditos corresponden a sus autores.</div>
    </div></section>`;
  }

  const PF = { tema: "Todos" };
  function viewPapers() {
    const temas = ["Todos", ...new Set(P.map((p) => p.tema))];
    const list = PF.tema === "Todos" ? P : P.filter((p) => p.tema === PF.tema);
    return `
    <section class="page-head"><div class="wrap">
      <span class="eyebrow">Investigación reciente</span>
      <h1 class="h1" style="margin-top:12px">Papers <span class="accent">2026</span></h1>
      <p class="lead">Lo más reciente publicado en 2026 sobre análisis de fallas, diagnóstico con inteligencia artificial, recuperación de partes y decisiones de mantenimiento, conectado con los temas del curso.</p>
    </div></section>
    <section class="section" style="padding-top:12px"><div class="wrap">
      <div class="chips" role="tablist" aria-label="Filtrar por tema">${temas.map((t) => `<button class="chip ${PF.tema === t ? "is-on" : ""}" data-tema="${esc(t)}">${esc(t)}${t !== "Todos" ? ` · ${P.filter((p) => p.tema === t).length}` : ""}</button>`).join("")}</div>
      <div class="papers">${list.map((p) => paperCard(p, false)).join("")}</div>
      <div class="note"><b>✓ Verificado</b>: título, autores y fecha comprobados en la página de la revista. <b>Según índice</b>: la página de la revista no fue accesible al momento de la consulta; los datos provienen del índice de búsqueda. Algunos artículos pueden requerir suscripción institucional (biblioteca EAFIT).</div>
    </div></section>`;
  }
  function bindPapers() {
    $$("[data-tema]").forEach((b) => b.addEventListener("click", () => { PF.tema = b.dataset.tema; render(); }));
  }

  function viewNotFound() {
    return `<section class="page-head"><div class="wrap"><h1 class="h1">Página no encontrada</h1><p class="lead">Vuelva al <a href="index.html">inicio</a>.</p></div></section>`;
  }

  /* ───────── búsqueda */
  const INDEX = [];
  C.forEach((c) => {
    INDEX.push({ t: `Clase ${c.n}: ${c.titulo}`, d: c.subtitulo, k: "Clase", h: `clase-${c.n}.html` });
    c.conceptos.forEach(([t, d]) => INDEX.push({ t, d, k: `Clase ${c.n}`, h: `clase-${c.n}.html` }));
    c.ejemplos.forEach(([t, d]) => INDEX.push({ t, d, k: `Ejemplo · Clase ${c.n}`, h: `clase-${c.n}.html` }));
  });
  P.forEach((p) => INDEX.push({ t: p.t, d: `${p.r} · ${p.f}`, k: "Paper 2026", h: "papers.html" }));
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  function openSearch() { $("#search").hidden = false; $("#searchInput").value = ""; doSearch(""); setTimeout(() => $("#searchInput").focus(), 30); }
  function closeSearch() { $("#search").hidden = true; }
  function doSearch(q) {
    const nq = norm(q.trim());
    const res = nq ? INDEX.filter((x) => norm(x.t + " " + x.d).includes(nq)).slice(0, 30) : INDEX.filter((x) => x.k === "Clase");
    $("#searchResults").innerHTML = res.length ? res.map((r) => `<a class="sres" href="${r.h}"><em>${esc(r.k)}</em><b>${esc(r.t)}</b><span>${esc(r.d.slice(0, 140))}${r.d.length > 140 ? "…" : ""}</span></a>`).join("") : `<div class="sempty">Sin resultados para «${esc(q)}».</div>`;
  }
  $("#openSearch").addEventListener("click", openSearch);
  $("#closeSearch").addEventListener("click", closeSearch);
  $("#search").addEventListener("click", (e) => { if (e.target.id === "search") closeSearch(); });
  $("#searchInput").addEventListener("input", (e) => doSearch(e.target.value));
  $("#searchResults").addEventListener("click", (e) => { if (e.target.closest(".sres")) closeSearch(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#search").hidden) closeSearch();
    if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && document.activeElement.tagName !== "INPUT")) { e.preventDefault(); openSearch(); }
  });

  /* ───────── menú móvil */
  const toggle = $("#navToggle"), links = $("#navlinks");
  toggle.addEventListener("click", () => { const o = links.classList.toggle("is-open"); toggle.setAttribute("aria-expanded", o); });
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") { links.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); } });

  /* ───────── páginas: cada sección es un archivo HTML independiente */
  const PAGE = document.body.dataset.page || "inicio";
  const Q = Object.fromEntries(new URLSearchParams(location.search));
  function setRepaso() {
    history.replaceState(null, "", `repaso.html?clase=${R.clase}&modo=${R.modo}`);
    render();
  }
  function render() {
    let html, bind;
    if (PAGE === "inicio") html = viewHome();
    else if (PAGE === "clase") html = viewClase(+document.body.dataset.n);
    else if (PAGE === "clases") html = viewClases();
    else if (PAGE === "repaso") { html = viewRepaso(Q); bind = bindRepaso; Q.clase = Q.modo = undefined; }
    else if (PAGE === "descargas") html = viewDescargas();
    else if (PAGE === "papers") { html = viewPapers(); bind = bindPapers; }
    else html = viewNotFound();
    main.innerHTML = html;
    if (!$("#search").hidden) closeSearch();
    if (bind) bind();
    const active = PAGE === "clase" ? "clases" : PAGE;
    $$(".nav__links a").forEach((a) => {
      const on = a.dataset.route === active;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    observe();
  }
  let io;
  function observe() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("is-in")); return; }
    io && io.disconnect();
    io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`; io.observe(el); });
  }
  render();
})();
