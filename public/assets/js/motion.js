/* ProGrade motion bundle: SummitRoof template scripts, unchanged except ui.js
   (template form/cookie handlers removed; forms are React components here).
   Loaded once per page after React hydration, from pages/_app.js. */

/* ---- textreveal.js ---- */
/* SummitRoof motion — word-level text reveal (Bixoo-gap C2).
   Vanilla equivalent of GSAP SplitText (~30KB) at ~1KB. Wraps each word of a
   heading in a masked span so words rise + unblur in sequence when the block
   reveals. Runs BEFORE reveal.js and marks its targets data-reveal="fade" so
   the container only fades (opacity) while the words carry the movement —
   never a double transform. Text stays selectable; the heading keeps an
   aria-label with the original text and the word spans are aria-hidden, so
   screen readers read it cleanly. No layout shift (words wrap in place). */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function split(el) {
    if (el.dataset.split || el.children.length) return; /* skip done / rich-markup headings */
    var text = el.textContent;
    if (!text.trim()) return;
    el.dataset.split = "1";
    el.setAttribute("aria-label", text.trim());
    var tokens = text.split(/(\s+)/);
    el.textContent = "";
    var wi = 0;
    tokens.forEach(function (tok) {
      if (tok === "") return;
      if (/^\s+$/.test(tok)) { el.appendChild(document.createTextNode(tok)); return; }
      var outer = document.createElement("span");
      outer.className = "sr-word"; outer.setAttribute("aria-hidden", "true");
      var inner = document.createElement("span");
      inner.className = "sr-word__i"; inner.textContent = tok;
      inner.style.setProperty("--wi", Math.min(wi, 14)); /* cap stagger length */
      outer.appendChild(inner);
      el.appendChild(outer);
      wi++;
    });
  }

  /* Hero headline: the H1 itself becomes an opacity-only reveal target. */
  document.querySelectorAll(".sr-hero__content h1").forEach(function (h) {
    h.setAttribute("data-reveal", "fade");
    split(h);
  });
  /* Section headings: the section-head is the reveal target; split the H2. */
  document.querySelectorAll(".sr-section-head h2").forEach(function (h) {
    var head = h.closest(".sr-section-head");
    if (head) head.setAttribute("data-reveal", "fade");
    split(h);
  });
})();

/* ---- reveal.js ---- */
/* SummitRoof motion — reveal engine (Bible §7 + Premium pass).
   Auto-assigns a reveal *type* per element role so sections have rhythm
   (focus / rise / clip / directional / fade-up) with no per-element HTML.
   Self-guarding: sets <html class="reveal-js"> so the CSS failsafe stands
   down; if this file never loads, CSS reveals content on its own. */
(function () {
  "use strict";
  document.documentElement.classList.add("reveal-js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1) Opt more elements into the system (cards, media, section heads). */
  var enrich = [
    ".sr-section-head",
    ".sr-grid > .sr-card", ".sr-grid > .sr-service", ".sr-grid > .sr-step",
    ".sr-grid > .sr-quote", ".sr-grid > .sr-value", ".sr-grid > .sr-pricing",
    ".sr-grid > .sr-gallery-item", ".sr-grid > .sr-blog",
    ".sr-whyus__media", ".sr-areas__map", ".sr-hero__media",
    ".sr-hero__content > *", ".sr-hero__form",
    ".sr-whyus .sr-container > *", ".sr-areas .sr-container > *", ".sr-split > *"
  ];
  document.querySelectorAll(enrich.join(",")).forEach(function (e) { e.classList.add("reveal"); });

  var all = Array.prototype.slice.call(document.querySelectorAll("[data-reveal], .reveal"));
  if (!all.length) return;

  /* 2) Keep only the outermost reveal in any nested pair (avoid double-hide). */
  var els = all.filter(function (e) {
    return !all.some(function (o) { return o !== e && o.contains(e); });
  });
  /* Dropped (nested) elements must NOT stay hidden — they ride with their
     parent's reveal, so strip the hiding hooks or they'd be trapped invisible. */
  all.forEach(function (e) {
    if (els.indexOf(e) === -1) { e.classList.remove("reveal"); e.removeAttribute("data-reveal"); }
  });

  /* 3) Assign a reveal type by role, then normalize to [data-reveal]. */
  var typeFor = function (e) {
    var pre = e.getAttribute("data-reveal");
    if (pre) return pre;
    if (e.matches(".sr-section-head")) return "focus";
    if (e.matches(".sr-whyus__media,.sr-areas__map,.sr-hero__media,.sr-gallery-item")) return "clip";
    if (e.matches(".sr-card,.sr-service,.sr-step,.sr-quote,.sr-value,.sr-pricing,.sr-blog")) return "rise";
    /* split sections: the text side slides in from its own edge (image side clips above) */
    if (e.matches(".sr-whyus .sr-container > *,.sr-areas .sr-container > *,.sr-split > *")) {
      var sibs = Array.prototype.slice.call(e.parentNode.children);
      return sibs.indexOf(e) === 0 ? "fade-right" : "fade-left";
    }
    return "fade-up";
  };
  els.forEach(function (e) {
    e.setAttribute("data-reveal", typeFor(e));
    e.classList.remove("reveal"); /* one governing rule per element */
  });

  /* 4) Stagger: sequence children of grids AND the hero content column. */
  document.querySelectorAll(".sr-grid, .sr-hero__content").forEach(function (group) {
    var kids = Array.prototype.filter.call(group.children, function (c) {
      return c.hasAttribute("data-reveal");
    });
    kids.forEach(function (c, i) {
      if (!c.hasAttribute("data-reveal-delay")) c.style.setProperty("--reveal-i", Math.min(i, 6));
    });
  });
  els.forEach(function (e) {
    var d = e.getAttribute("data-reveal-delay");
    if (d !== null) e.style.setProperty("--reveal-i", Math.min(parseInt(d, 10) || 0, 6));
  });

  /* ---- RHYTHM: assign each scene a tempo by its role (Experience pass) ---- */
  var tempoFor = function (s) {
    if (s.matches(".sr-hero")) return "hero";
    if (s.matches(".sr-cta-band")) return "crescendo";
    if (s.matches(".sr-stats-band")) return "gravity";
    if (s.matches(".sr-footer")) return "resolution";
    if (s.matches(".sr-whyus") || s.querySelector(".sr-gallery-item")) return "immersive";
    if (s.querySelector(".sr-quote")) return "alive";
    if (s.querySelector(".sr-step")) return "walk";
    if (s.querySelector(".sr-service")) return "brisk";
    if (s.querySelector("[data-quote-form]")) return "crescendo"; /* closing CTA form */
    if (s.matches(".sr-areas")) return "brisk";
    return "";
  };
  document.querySelectorAll("section,.sr-section,.sr-cta-band,.sr-stats-band,.sr-footer").forEach(function (s) {
    if (s.hasAttribute("data-tempo")) return;
    var t = tempoFor(s);
    if (t) s.setAttribute("data-tempo", t);
  });
  /* Anticipation beat: content leads the head by --lead; headings stay at 0. */
  els.forEach(function (e) {
    if (!e.matches(".sr-section-head") && !e.closest(".sr-hero")) {
      e.style.setProperty("--reveal-lead", "var(--lead, 0ms)");
    }
  });
  /* Hero build: the form arrives LAST, as the invitation after the promise. */
  var heroForm = document.querySelector(".sr-hero__form");
  if (heroForm) heroForm.style.setProperty("--reveal-i", 6);

  var reveal = function (e) { e.classList.add("is-in"); };
  var revealAll = function () { els.forEach(reveal); };

  /* No-motion path: show everything at once. */
  if (reduce) { revealAll(); return; }

  /* Skip-proof scroll engine. A single rAF-throttled check reveals any
     pending element whose top has entered the lower 90% of the viewport (or
     been scrolled past). Unlike IntersectionObserver this can't miss an
     element during a fast programmatic scroll jump, so clip/media reveals are
     guaranteed. The CSS transition-delay still staggers grids. Listener
     detaches once everything is revealed. */
  var vh = function () { return window.innerHeight || document.documentElement.clientHeight || 0; };
  var pending = els.slice();
  var check = function () {
    var h = vh();
    for (var i = pending.length - 1; i >= 0; i--) {
      var r = pending[i].getBoundingClientRect();
      if (r.top < h * 0.9 && r.bottom > 0) { reveal(pending[i]); pending.splice(i, 1); }
      else if (r.top < 0) { reveal(pending[i]); pending.splice(i, 1); } /* scrolled past */
    }
    if (!pending.length) { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); }
  };
  var ticking = false;
  var onScroll = function () {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { check(); ticking = false; }); }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  check(); /* initial: reveals the above-the-fold entrance */

  /* Belt-and-suspenders: a short-lived interval guarantees any element that
     has entered view reveals within 300ms even if a scroll event's rAF was
     coalesced during a fast programmatic jump. Only reveals in-/above-view
     elements, so below-the-fold scroll reveals are preserved. Self-stops. */
  var safety = setInterval(function () {
    check();
    if (!pending.length) clearInterval(safety);
  }, 300);
  setTimeout(function () { clearInterval(safety); }, 8000);
})();

/* ---- header.js ---- */
/* SummitRoof motion — header: sticky, dropdown, mobile drawer. */
(function () {
  "use strict";
  var nav = document.querySelector(".sr-nav");
  if (nav) {
    var onScroll = function () { nav.classList.toggle("is-stuck", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  document.querySelectorAll("[data-burger]").forEach(function (b) {
    b.addEventListener("click", function () {
      var links = document.querySelector(".sr-nav-links");
      if (links) links.classList.toggle("is-open");
      b.setAttribute("aria-expanded", links && links.classList.contains("is-open"));
    });
  });
  /* Dropdowns — hover on desktop; tap toggles on mobile.
     Pure-dropdown toggles (href="#") never navigate on any viewport. */
  document.querySelectorAll(".sr-drop-toggle").forEach(function (t) {
    t.addEventListener("click", function (e) {
      var pureToggle = t.getAttribute("href") === "#";
      if (pureToggle || window.matchMedia("(max-width:1024px)").matches) {
        e.preventDefault();
        var d = t.parentElement;
        d.classList.toggle("is-open");
        t.setAttribute("aria-expanded", d.classList.contains("is-open"));
      }
    });
  });
  /* Close open dropdowns when clicking outside (desktop). */
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".sr-drop.is-open").forEach(function (d) {
      if (!d.contains(e.target)) {
        d.classList.remove("is-open");
        var tog = d.querySelector(".sr-drop-toggle");
        if (tog) tog.setAttribute("aria-expanded", "false");
      }
    });
  });
})();

/* ---- counter.js ---- */
/* SummitRoof motion — count-up stats (rAF, reduced-motion aware, static fallback). */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var counters = document.querySelectorAll("[data-count]");
  if (!counters.length || !("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      var el = e.target, target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      if (reduce || isNaN(target)) { if (!isNaN(target)) el.textContent = target.toLocaleString() + suffix; return; }
      var t0 = null, dur = 1400;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var val = Math.floor((0.5 - Math.cos(p * Math.PI) / 2) * target);
        el.textContent = val.toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });
  counters.forEach(function (c) { io.observe(c); });
})();

/* ---- accordion.js ---- */
/* SummitRoof motion — accordion (grid-rows; toggles .is-open only). */
(function () {
  "use strict";
  document.querySelectorAll(".sr-acc__head").forEach(function (h) {
    h.addEventListener("click", function () {
      var item = h.closest(".sr-acc");
      var open = item.classList.toggle("is-open");
      h.setAttribute("aria-expanded", open);
    });
  });
})();

/* ---- beforeAfter.js ---- */
/* SummitRoof motion — before/after compare slider (pointer + keyboard). */
(function () {
  "use strict";
  document.querySelectorAll(".sr-ba").forEach(function (ba) {
    var after = ba.querySelector(".sr-ba__after"), handle = ba.querySelector(".sr-ba__handle");
    if (!after || !handle) return;
    var set = function (pct) {
      pct = Math.max(0, Math.min(100, pct));
      after.style.clipPath = "inset(0 0 0 " + pct + "%)";
      handle.style.left = pct + "%";
    };
    var fromX = function (x) { var r = ba.getBoundingClientRect(); set(((x - r.left) / r.width) * 100); };
    var down = false;
    ba.addEventListener("mousedown", function (e) { down = true; fromX(e.clientX); });
    ba.addEventListener("touchstart", function (e) { down = true; fromX(e.touches[0].clientX); }, { passive: true });
    window.addEventListener("mousemove", function (e) { if (down) fromX(e.clientX); });
    window.addEventListener("touchmove", function (e) { if (down) fromX(e.touches[0].clientX); }, { passive: true });
    window.addEventListener("mouseup", function () { down = false; });
    window.addEventListener("touchend", function () { down = false; });
    /* keyboard */
    ba.setAttribute("tabindex", "0");
    ba.setAttribute("role", "slider");
    ba.setAttribute("aria-label", "Before and after comparison");
    var pos = 50;
    ba.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { pos = Math.max(0, pos - 4); set(pos); e.preventDefault(); }
      if (e.key === "ArrowRight") { pos = Math.min(100, pos + 4); set(pos); e.preventDefault(); }
    });
  });
})();

/* ---- scroll.js ---- */
/* SummitRoof motion — scroll progress + sticky-nav anchor offset (Phase 3).
   No scroll-jacking: native smooth scroll is preserved; this only reports
   progress (transform-only bar) and corrects anchor landing under the nav. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Progress hairline — passive scroll, rAF-throttled, scaleX only. */
  var bar = document.querySelector(".sr-progress");
  if (bar && !reduce) {
    var ticking = false;
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? Math.min(h.scrollTop / max, 1) : 0;
      bar.style.transform = "scaleX(" + p + ")";
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* Anchor offset so targets land below the sticky header. */
  var nav = document.querySelector(".sr-nav");
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute("href");
    if (!id || id.length < 2) return;
    a.addEventListener("click", function (e) {
      var t;
      try { t = document.querySelector(id); } catch (err) { return; }
      if (!t) return;
      e.preventDefault();
      var off = (nav ? nav.offsetHeight : 0) + 12;
      var y = t.getBoundingClientRect().top + window.pageYOffset - off;
      window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
      if (history.pushState) history.pushState(null, "", id);
    });
  });
})();

/* ---- lightbox.js ---- */
/* SummitRoof motion — accessible image lightbox (no dependencies).
   Any element with [data-lb="<full-image-src>"] opens the overlay.
   Group with [data-lb-group="name"] to enable prev/next within a set.
   Caption comes from [data-lb-cap]. Honors prefers-reduced-motion,
   traps focus, restores focus on close, and supports keyboard nav. */
(function () {
  "use strict";
  var triggers = [].slice.call(document.querySelectorAll("[data-lb]"));
  if (!triggers.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lastFocus = null;
  var group = [];      // triggers in the currently open group
  var index = 0;

  /* ---- Build overlay once ---- */
  var overlay = document.createElement("div");
  overlay.className = "sr-lb";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Image viewer");
  overlay.innerHTML =
    '<button class="sr-lb__close" aria-label="Close (Esc)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
    '<button class="sr-lb__nav sr-lb__prev" aria-label="Previous image"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg></button>' +
    '<button class="sr-lb__nav sr-lb__next" aria-label="Next image"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button>' +
    '<figure class="sr-lb__stage">' +
      '<img class="sr-lb__img" alt="">' +
      '<figcaption class="sr-lb__cap"></figcaption>' +
    '</figure>' +
    '<div class="sr-lb__count" aria-hidden="true"></div>';
  document.body.appendChild(overlay);

  var imgEl   = overlay.querySelector(".sr-lb__img");
  var capEl   = overlay.querySelector(".sr-lb__cap");
  var countEl = overlay.querySelector(".sr-lb__count");
  var btnClose = overlay.querySelector(".sr-lb__close");
  var btnPrev  = overlay.querySelector(".sr-lb__prev");
  var btnNext  = overlay.querySelector(".sr-lb__next");

  function groupFor(trigger) {
    var name = trigger.getAttribute("data-lb-group");
    if (!name) return [trigger];
    return triggers.filter(function (t) {
      return t.getAttribute("data-lb-group") === name;
    });
  }

  function render() {
    var t = group[index];
    var src = t.getAttribute("data-lb");
    var cap = t.getAttribute("data-lb-cap") || "";
    imgEl.src = src;
    imgEl.alt = cap || "Enlarged image";
    capEl.textContent = cap;
    capEl.style.display = cap ? "" : "none";
    var multi = group.length > 1;
    btnPrev.style.display = btnNext.style.display = multi ? "" : "none";
    countEl.style.display = multi ? "" : "none";
    countEl.textContent = (index + 1) + " / " + group.length;
  }

  function open(trigger) {
    lastFocus = document.activeElement;
    group = groupFor(trigger);
    index = group.indexOf(trigger);
    render();
    overlay.classList.add("is-open");
    document.documentElement.classList.add("sr-lb-lock");
    btnClose.focus();
    document.addEventListener("keydown", onKey);
  }

  function close() {
    overlay.classList.remove("is-open");
    document.documentElement.classList.remove("sr-lb-lock");
    document.removeEventListener("keydown", onKey);
    imgEl.src = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(dir) {
    if (group.length < 2) return;
    index = (index + dir + group.length) % group.length;
    if (!reduce) {
      imgEl.classList.remove("is-in");
      /* force reflow so the animation restarts */
      void imgEl.offsetWidth;
      imgEl.classList.add("is-in");
    }
    render();
  }

  function onKey(e) {
    if (e.key === "Escape") { close(); }
    else if (e.key === "ArrowLeft") { step(-1); }
    else if (e.key === "ArrowRight") { step(1); }
    else if (e.key === "Tab") {
      /* simple focus trap across the visible controls */
      var f = [btnClose, btnPrev, btnNext].filter(function (b) {
        return b.style.display !== "none";
      });
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  triggers.forEach(function (t) {
    /* make non-button triggers keyboard-operable */
    if (t.tagName !== "BUTTON" && t.tagName !== "A") {
      t.setAttribute("tabindex", "0");
      t.setAttribute("role", "button");
    }
    t.addEventListener("click", function (e) {
      e.preventDefault();
      open(t);
    });
    t.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(t); }
    });
  });

  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", function () { step(-1); });
  btnNext.addEventListener("click", function () { step(1); });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target.classList.contains("sr-lb__stage")) close();
  });
})();

/* ---- ui.js (back-to-top only) ---- */
/* SummitRoof motion — back-to-top, cookie bar, quote/lead forms. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var top = document.querySelector(".sr-top");
  if (top) {
    window.addEventListener("scroll", function () {
      top.classList.toggle("is-vis", window.scrollY > 600);
    }, { passive: true });
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }
})();
