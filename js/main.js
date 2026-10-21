/* =========================================================
   Joann Michel Razafinimanana — Portfolio (refonte)
   Fond « constellations » + interactions cinématographiques
   ========================================================= */

(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Année ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =======================================================
     Internationalisation FR / EN
  ======================================================= */
  const I18N = {
    fr: {
      "nav.works": "Travaux", "nav.expertise": "Expertise", "nav.about": "À propos",
      "nav.journey": "Parcours", "nav.contact": "Me contacter",
      "hero.available": "Disponible pour de nouveaux projets",
      "hero.roleTag": "Développeur Fullstack",
      "hero.role": "Je conçois et je construis des applications web de bout en bout — de l'interface qu'on touche au serveur qu'on ne voit jamais.",
      "hero.cta1": "Voir mes travaux", "hero.cv": "Télécharger le CV",
      "hero.stat1": "Années à coder", "hero.stat2": "Technologies maîtrisées", "hero.stat3": "Front → Back",
      "hero.scroll": "Explorer",
      "works.eyebrow": "Travaux sélectionnés",
      "works.title": "Des projets pensés produit,<br />taillés pour la production.",
      "works.visit": "Voir le site",
      "works.talenteed.tag": "Plateforme RH · SaaS",
      "works.talenteed.desc": "Plateforme RH complète : annonces, événements, articles et espace membre. Conçue, développée et déployée de A à Z pour le client.",
      "works.solution.tag": "Site vitrine · WordPress",
      "works.solution.desc": "Site vitrine de conseil RH : services, business cases et SkillPlang. Design et intégration WordPress sur-mesure, jusqu'à la mise en ligne.",
      "works.code": "Voir le code",
      "works.daric.tag": "Finances · Web App",
      "works.daric.desc": "Gestionnaire de finances personnelles : multi-comptes, budgets mensuels, transferts et tableau de bord graphique. Multi-devises.",
      "works.thumos.tag": "Productivité · Web App",
      "works.thumos.desc": "Tableau de bord de vie : objectifs, suivi d'habitudes avec streaks et journal. Calendrier mensuel et heatmap.",
      "works.emporion.tag": "E-commerce · API + SPA",
      "works.emporion.desc": "Marketplace e-commerce en architecture découplée : API REST Laravel et application Vue (SPA) côté client.",
      "expertise.eyebrow": "Expertise", "expertise.title": "La stack, alignée sur le besoin.",
      "expertise.front.t": "Interfaces", "expertise.front.d": "Des UI accessibles, animées avec mesure, pensées mobile-first.",
      "expertise.back.t": "Serveurs & API", "expertise.back.d": "Des services fiables, testés, documentés, pensés pour durer.",
      "expertise.data.t": "Bases de données", "expertise.data.d": "Modélisation soignée, requêtes optimisées, données cohérentes.",
      "expertise.ops.t": "Déploiement", "expertise.ops.d": "Du commit à la prod : intégration continue et infra maîtrisée.",
      "expertise.cms.t": "Sites & CMS", "expertise.cms.d": "Sites et boutiques WordPress : thèmes sur-mesure, extensions, WooCommerce.",
      "about.eyebrow": "Philosophie",
      "about.title": "Un développeur qui pense produit, pas seulement code.",
      "about.a1.q": "Le point de départ",
      "about.a1.a": "Je m'appelle Joann Michel Razafinimanana. J'accompagne startups, agences et entrepreneurs pour transformer une intuition en produit web solide — rapide, lisible, maintenable.",
      "about.a2.q": "Mon cap",
      "about.a2.a": "Résoudre des problèmes réels avec le bon niveau de simplicité. J'aime les bases de données bien modélisées, les interfaces qui respirent et le code que la prochaine personne comprend sans mode d'emploi.",
      "about.a3.q": "L'horizon",
      "about.a3.a": "Curieux de design, de performance et d'expérience utilisateur. Je vois chaque projet comme une collaboration : écouter, cadrer, livrer, puis améliorer.",
      "about.tag1": "Autonome", "about.tag2": "Design-friendly", "about.tag3": "Orienté performance",
      "about.open": "Ouvert aux missions",
      "about.quote": "« Le meilleur code est celui qu'on n'a pas besoin d'expliquer. »",
      "about.basedIn": "Basé à", "about.basedInV": "Madagascar · Remote",
      "about.tz": "Fuseau", "about.reply": "Réponse",
      "journey.eyebrow": "Trajectoire", "journey.title": "Le parcours, en quelques points.",
      "journey.j1.y": "2024 — Aujourd'hui", "journey.j1.t": "Développeur Fullstack indépendant",
      "journey.j1.d": "Conception et livraison d'applications web sur mesure pour clients internationaux, du cadrage à la mise en production.",
      "journey.j2.t": "Développeur Fullstack — Agence web",
      "journey.j2.d": "Développement de plateformes SaaS et e-commerce, intégration d'API, optimisation des performances et du référencement.",
      "journey.j3.t": "Développeur Web Junior",
      "journey.j3.d": "Premiers projets front et back, montée en compétence sur les bases de données, Git et les bonnes pratiques.",
      "journey.j4.t": "Formation & auto-apprentissage",
      "journey.j4.d": "Fondations en algorithmique, structures de données et développement web moderne.",
      "contact.eyebrow": "Signal ouvert", "contact.title": "Un projet à mettre en orbite ?",
      "contact.lede": "Parlons-en. Je réponds vite, et je dis toujours honnêtement si je suis la bonne personne pour votre besoin.",
      "contact.phone": "+261 34 76 566 38",
      "contact.name": "Nom", "contact.namePh": "Votre nom",
      "contact.email": "Email", "contact.emailPh": "vous@exemple.com",
      "contact.message": "Message", "contact.messagePh": "Parlez-moi de votre projet…",
      "contact.send": "Envoyer le message",
      "footer.note": "Conçu dans le vide, compilé sous les étoiles.",
      "form.errRequired": "Ce champ est requis.",
      "form.errEmail": "Adresse email invalide.",
      "form.sending": "Envoi en cours…",
      "form.sent": "Message envoyé, je vous réponds vite ✦",
      "form.failed": "L'envoi a échoué. Réessayez ou écrivez-moi directement par email.",
    },
    en: {
      "nav.works": "Work", "nav.expertise": "Expertise", "nav.about": "About",
      "nav.journey": "Journey", "nav.contact": "Contact me",
      "hero.available": "Available for new projects",
      "hero.roleTag": "Fullstack Developer",
      "hero.role": "I design and build web applications end to end — from the interface you touch to the server you never see.",
      "hero.cta1": "View my work", "hero.cv": "Download CV",
      "hero.stat1": "Years coding", "hero.stat2": "Technologies mastered", "hero.stat3": "Front → Back",
      "hero.scroll": "Explore",
      "works.eyebrow": "Selected work",
      "works.title": "Projects built product-first,<br />shipped for production.",
      "works.visit": "Visit site",
      "works.talenteed.tag": "HR platform · SaaS",
      "works.talenteed.desc": "Full HR platform: job listings, events, articles and a member area. Designed, built and deployed end to end for the client.",
      "works.solution.tag": "Showcase site · WordPress",
      "works.solution.desc": "HR consulting showcase: services, business cases and SkillPlang. Custom WordPress design and build, all the way to launch.",
      "works.code": "View code",
      "works.daric.tag": "Finance · Web App",
      "works.daric.desc": "Personal finance manager: multi-account, monthly budgets, transfers and a chart dashboard. Multi-currency.",
      "works.thumos.tag": "Productivity · Web App",
      "works.thumos.desc": "Life dashboard: goals, habit tracking with streaks and a journal. Monthly calendar and heatmap.",
      "works.emporion.tag": "E-commerce · API + SPA",
      "works.emporion.desc": "E-commerce marketplace with a decoupled architecture: Laravel REST API and a client-side Vue SPA.",
      "expertise.eyebrow": "Expertise", "expertise.title": "A stack aligned with the need.",
      "expertise.front.t": "Interfaces", "expertise.front.d": "Accessible UIs, animated with restraint, built mobile-first.",
      "expertise.back.t": "Servers & APIs", "expertise.back.d": "Reliable services — tested, documented, built to last.",
      "expertise.data.t": "Databases", "expertise.data.d": "Careful modeling, optimized queries, consistent data.",
      "expertise.ops.t": "Deployment", "expertise.ops.d": "From commit to production: continuous integration and solid infra.",
      "expertise.cms.t": "Sites & CMS", "expertise.cms.d": "WordPress sites and shops: custom themes, plugins, WooCommerce.",
      "about.eyebrow": "Philosophy",
      "about.title": "A developer who thinks product, not just code.",
      "about.a1.q": "Starting point",
      "about.a1.a": "I'm Joann Michel Razafinimanana. I help startups, agencies and founders turn an intuition into a solid web product — fast, readable, maintainable.",
      "about.a2.q": "My compass",
      "about.a2.a": "Solving real problems with the right level of simplicity. I love well-modeled databases, interfaces that breathe, and code the next person understands without a manual.",
      "about.a3.q": "The horizon",
      "about.a3.a": "Curious about design, performance and user experience. I see every project as a collaboration: listen, frame, ship, then improve.",
      "about.tag1": "Autonomous", "about.tag2": "Design-friendly", "about.tag3": "Performance-driven",
      "about.open": "Open to work",
      "about.quote": "“The best code is the code you don't have to explain.”",
      "about.basedIn": "Based in", "about.basedInV": "Madagascar · Remote",
      "about.tz": "Timezone", "about.reply": "Response",
      "journey.eyebrow": "Trajectory", "journey.title": "The journey, in a few points.",
      "journey.j1.y": "2024 — Present", "journey.j1.t": "Independent Fullstack Developer",
      "journey.j1.d": "Designing and shipping custom web applications for international clients, from scoping to production.",
      "journey.j2.t": "Fullstack Developer — Web agency",
      "journey.j2.d": "Building SaaS and e-commerce platforms, API integration, performance and SEO optimization.",
      "journey.j3.t": "Junior Web Developer",
      "journey.j3.d": "First front and back projects, growing skills in databases, Git and best practices.",
      "journey.j4.t": "Training & self-learning",
      "journey.j4.d": "Foundations in algorithms, data structures and modern web development.",
      "contact.eyebrow": "Open signal", "contact.title": "A project to put in orbit?",
      "contact.lede": "Let's talk. I reply fast, and I'm always honest about whether I'm the right person for your need.",
      "contact.phone": "+261 34 76 566 38",
      "contact.name": "Name", "contact.namePh": "Your name",
      "contact.email": "Email", "contact.emailPh": "you@example.com",
      "contact.message": "Message", "contact.messagePh": "Tell me about your project…",
      "contact.send": "Send message",
      "footer.note": "Designed in the void, compiled under the stars.",
      "form.errRequired": "This field is required.",
      "form.errEmail": "Invalid email address.",
      "form.sending": "Sending…",
      "form.sent": "Message sent, I'll get back to you soon ✦",
      "form.failed": "Sending failed. Try again or email me directly.",
    },
  };

  let lang = "fr";
  try { lang = localStorage.getItem("jmr-lang") || "fr"; } catch (e) {}
  if (!I18N[lang]) lang = "fr";

  function t(key) { return (I18N[lang] && I18N[lang][key]) || (I18N.fr[key] ?? key); }

  function applyLang() {
    const dict = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n")];
      // N'écrit que si le texte change : sinon toute la page est remise en page pour rien
      if (v != null && el.textContent !== v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-ph")];
      if (v != null && el.getAttribute("placeholder") !== v) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll(".lang__btn").forEach((b) => {
      const on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }

  function setLang(next) {
    if (!I18N[next] || next === lang) return;
    lang = next;
    try { localStorage.setItem("jmr-lang", lang); } catch (e) {}
    applyLang();
  }

  document.querySelectorAll(".lang__btn").forEach((b) =>
    b.addEventListener("click", () => setLang(b.getAttribute("data-lang")))
  );
  applyLang();

  /* =======================================================
     Thème sombre (bascule + révélation circulaire)
  ======================================================= */
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    const root = document.documentElement;
    const sync = () => themeBtn.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));
    const toggleTheme = () => {
      const dark = root.dataset.theme !== "dark";
      if (dark) root.dataset.theme = "dark"; else delete root.dataset.theme;
      try { localStorage.setItem("jmr-theme", dark ? "dark" : "royal"); } catch (e) {}
      sync();
    };
    themeBtn.addEventListener("click", (e) => {
      if (!document.startViewTransition || prefersReduced) return toggleTheme();
      const r = themeBtn.getBoundingClientRect();
      // Clic clavier : clientX/Y valent 0, on part du centre du bouton
      const x = e.clientX || r.left + r.width / 2;
      const y = e.clientY || r.top + r.height / 2;
      const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      document.startViewTransition(toggleTheme).ready.then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
          { duration: 600, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" }
        );
      });
    });
    sync();
  }

  /* =======================================================
     Formulaire de contact (validation + envoi via FormSubmit)
  ======================================================= */
  const form = document.getElementById("contactForm");
  if (form) {
    const note = document.getElementById("formNote");
    const fields = {
      name: form.querySelector("#cf-name"),
      email: form.querySelector("#cf-email"),
      message: form.querySelector("#cf-msg"),
    };
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const setError = (input, msg) => {
      const field = input.closest(".field");
      const err = field.querySelector(".field__error");
      field.classList.toggle("is-invalid", !!msg);
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (err) err.textContent = msg || "";
    };

    const validate = (input) => {
      const val = input.value.trim();
      if (!val) { setError(input, t("form.errRequired")); return false; }
      if (input.type === "email" && !emailRe.test(val)) { setError(input, t("form.errEmail")); return false; }
      setError(input, "");
      return true;
    };

    Object.values(fields).forEach((input) => {
      input.addEventListener("blur", () => validate(input));
      input.addEventListener("input", () => {
        if (input.closest(".field").classList.contains("is-invalid")) validate(input);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const results = Object.values(fields).map(validate);
      if (results.includes(false)) {
        const firstBad = Object.values(fields).find((f) => f.closest(".field").classList.contains("is-invalid"));
        if (firstBad) firstBad.focus();
        return;
      }
      if (form.getAttribute("aria-busy") === "true") return;
      const setNote = (key, isError) => {
        if (!note) return;
        note.classList.toggle("is-error", isError);
        note.textContent = t(key);
      };
      form.setAttribute("aria-busy", "true");
      setNote("form.sending", false);
      fetch("https://formsubmit.co/ajax/932c6ada398ad0f603411092a44798dd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name.value.trim(),
          email: fields.email.value.trim(),
          message: fields.message.value.trim(),
          _subject: `Contact portfolio — ${fields.name.value.trim()}`,
          _replyto: fields.email.value.trim(),
          _template: "table",
        }),
      })
        .then((res) => res.json().then((data) => {
          if (!res.ok || String(data.success) !== "true") throw new Error(data.message);
          setNote("form.sent", false);
          form.reset();
        }))
        // Les champs restent remplis en cas d'échec : rien n'est perdu.
        .catch((err) => { console.warn("Formulaire :", err.message); setNote("form.failed", true); })
        .finally(() => form.removeAttribute("aria-busy"));
    });
  }

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");
  if (burger && links) {
    const toggle = (open) => {
      links.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    };
    burger.addEventListener("click", () => toggle(!links.classList.contains("is-open")));
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));
  }

  /* ---------- Progression de lecture + retour en haut ---------- */
  const progress = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");
  if (progress || toTop) {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (progress) progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      if (toTop) toTop.classList.toggle("is-visible", h.scrollTop > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
    });
  }

  /* ---------- Révélation au scroll (avec stagger) ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          // Stagger entre voisins d'un même conteneur
          const siblings = Array.from(el.parentElement.children).filter((c) =>
            c.classList.contains("reveal")
          );
          const idx = siblings.indexOf(el);
          el.style.transitionDelay = Math.max(0, idx) * 0.07 + "s";
          el.classList.add("is-visible");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------- Nav : état actif selon la section ---------- */
  const navLinks = document.querySelectorAll(".nav__links a[data-nav]");
  const sections = Array.from(navLinks)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = "#" + entry.target.id;
          navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === id));
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -40% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  if (!prefersReduced) {
    /* ---------- Compteurs du héro (après l'intro) ---------- */
    document.querySelectorAll(".hero__stats dd").forEach((dd) => {
      const node = dd.firstChild;
      const end = parseInt(node.textContent, 10);
      if (!end) return;
      node.textContent = "0";
      setTimeout(() => {
        const t0 = performance.now();
        const step = (now) => {
          const p = Math.min((now - t0) / 1600, 1);
          node.textContent = Math.round(end * (1 - Math.pow(1 - p, 4)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, 700);
    });

    /* ---------- Projecteur / lueur des cartes ---------- */
    const spotlight = document.getElementById("spotlight");
    window.addEventListener(
      "pointermove",
      (e) => {
        if (spotlight) {
          spotlight.style.setProperty("--mx", e.clientX + "px");
          spotlight.style.setProperty("--my", e.clientY + "px");
        }
      },
      { passive: true }
    );
    document.querySelectorAll(".card").forEach((card) => {
      const glow = card.querySelector(".card__glow");
      if (!glow) return;
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        glow.style.setProperty("--cx", e.clientX - r.left + "px");
        glow.style.setProperty("--cy", e.clientY - r.top + "px");
        // Inclinaison 3D : ±5° selon la position du pointeur
        card.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 10 + "deg");
        card.style.setProperty("--rx", (0.5 - (e.clientY - r.top) / r.height) * 10 + "deg");
      });
      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--rx");
        card.style.removeProperty("--ry");
      });
    });

    /* ---------- Boutons magnétiques ---------- */
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      const strength = 0.28;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- Fond animé : constellations ---------- */
  const canvas = document.getElementById("constellation");
  if (!canvas || prefersReduced) return;

  const ctx = canvas.getContext("2d");
  let width, height, dpr;
  let stars = [];
  let shootingStars = [];
  const pointer = { x: 0.5, y: 0.5 };
  const LINK_DIST = 132;

  // Halos pré-rendus : un shadowBlur par étoile et par frame coûte trop cher au CPU mobile
  function makeGlow(rgb) {
    const c = document.createElement("canvas");
    c.width = c.height = 32;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, `rgba(${rgb},0.9)`);
    grad.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = grad;
    g.fillRect(0, 0, 32, 32);
    return c;
  }
  const glowGold = makeGlow("244,213,141");
  const glowBlue = makeGlow("143,176,255");

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedStars();
  }

  function seedStars() {
    const count = Math.min(150, Math.round((width * height) / 11000));
    stars = [];
    for (let i = 0; i < count; i++) {
      const gold = Math.random() < 0.12;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.7 + 0.3,
        r: Math.random() * 1.5 + 0.4,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        tw: Math.random() * Math.PI * 2,
        twSpeed: Math.random() * 0.02 + 0.005,
        gold,
      });
    }
  }

  function spawnShootingStar() {
    const fromLeft = Math.random() < 0.5;
    shootingStars.push({
      x: fromLeft ? -50 : width + 50,
      y: Math.random() * height * 0.5,
      vx: (fromLeft ? 1 : -1) * (Math.random() * 5 + 7),
      vy: Math.random() * 2 + 2,
      life: 1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const px = (pointer.x - 0.5) * 40;
    const py = (pointer.y - 0.5) * 40;

    // Liaisons
    for (let i = 0; i < stars.length; i++) {
      const a = stars[i];
      const ax = a.x + px * a.z;
      const ay = a.y + py * a.z;
      for (let j = i + 1; j < stars.length; j++) {
        const b = stars[j];
        const bx = b.x + px * b.z;
        const by = b.y + py * b.z;
        const dist = Math.hypot(ax - bx, ay - by);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(143,176,255,${(1 - dist / LINK_DIST) * 0.32})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
    }

    // Étoiles
    for (const s of stars) {
      s.x += s.vx; s.y += s.vy; s.tw += s.twSpeed;
      if (s.x < -10) s.x = width + 10;
      if (s.x > width + 10) s.x = -10;
      if (s.y < -10) s.y = height + 10;
      if (s.y > height + 10) s.y = -10;

      const twinkle = 0.55 + Math.sin(s.tw) * 0.45;
      const sx = s.x + px * s.z;
      const sy = s.y + py * s.z;
      const r = s.r * (0.8 + twinkle * 0.5);

      ctx.globalAlpha = s.gold ? 1 : 0.75;
      ctx.drawImage(s.gold ? glowGold : glowBlue, sx - r * 4, sy - r * 4, r * 8, r * 8);
      ctx.globalAlpha = 1;
      ctx.fillStyle = s.gold
        ? `rgba(244,213,141,${0.55 + twinkle * 0.45})`
        : `rgba(231,239,255,${0.45 + twinkle * 0.5})`;
      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Étoiles filantes
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const sh = shootingStars[i];
      sh.x += sh.vx; sh.y += sh.vy; sh.life -= 0.012;
      const tailX = sh.x - sh.vx * 6;
      const tailY = sh.y - sh.vy * 6;
      const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255,255,255,${Math.max(sh.life, 0)})`);
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      if (sh.life <= 0 || sh.x < -80 || sh.x > width + 80) shootingStars.splice(i, 1);
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener(
    "pointermove",
    (e) => { pointer.x = e.clientX / width; pointer.y = e.clientY / height; },
    { passive: true }
  );

  function scheduleShooting() {
    const delay = Math.random() * 6000 + 5000;
    setTimeout(() => {
      if (document.visibilityState === "visible") spawnShootingStar();
      scheduleShooting();
    }, delay);
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  resize();
  requestAnimationFrame(draw);
  scheduleShooting();
})();
