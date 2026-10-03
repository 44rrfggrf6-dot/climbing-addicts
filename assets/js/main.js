(function() {
  'use strict';

  var docEl = document.documentElement;
  // Signale que le JS fonctionne : le CSS ne masque les éléments à révéler
  // QUE sous html.js — sans JS, tout reste visible (dégradation gracieuse).
  docEl.classList.add('js');

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var header = document.querySelector('.header');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 100) {
      header.style.background = 'rgba(13,15,20,.95)';
    } else {
      header.style.background = 'rgba(13,15,20,.8)';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = header ? header.offsetHeight : 72;
        var targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  });

  // Menu mobile repliable.
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      var label = open ? toggle.getAttribute('data-label-close') : toggle.getAttribute('data-label-open');
      if (label) toggle.setAttribute('aria-label', label);
    }
    toggle.addEventListener('click', function() {
      setOpen(!nav.classList.contains('is-open'));
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    nav.addEventListener('click', function(e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  // Révélation progressive : les classes sont ajoutées EN JS, donc sans JS
  // (script bloqué, erreur, vieux navigateur) la page reste lisible.
  // Neutralisée aussi si prefers-reduced-motion.
  var revealEls = document.querySelectorAll('.feature-card, .section-header, .download-text, .download-phone');
  if (!reduceMotion && 'IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach(function(el) { el.classList.add('will-reveal'); });
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(function(el) { observer.observe(el); });
  }

  // Mesure des 3 sorties (appel à testeurs). Cloudflare Web Analytics mesure
  // les pages vues automatiquement via le beacon ; il n'expose pas (encore)
  // d'API d'événements custom, donc on relaie vers Zaraz (zaraz.track) et
  // vers une API compatible Plausible si l'un d'eux est présent — sinon no-op,
  // sans erreur et sans cookie.
  function trackOutbound(name, href) {
    try {
      if (window.zaraz && typeof window.zaraz.track === 'function') {
        window.zaraz.track(name, { destination: href });
      }
    } catch (err) { /* mesure best-effort : jamais bloquante */ }
    try {
      if (typeof window.plausible === 'function') {
        window.plausible(name, { props: { destination: href } });
      }
    } catch (err) { /* idem */ }
  }

  document.addEventListener('click', function(e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('https://climbingaddicts.app') === 0) {
      trackOutbound('open_beta', href);
    } else if (href.indexOf('buymeacoffee.com') !== -1) {
      trackOutbound('support_coffee', href);
    } else if (href.indexOf('mailto:') === 0) {
      trackOutbound('contact_email', href);
    }
  });
})();
