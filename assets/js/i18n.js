/* Climbing Addicts — i18n FR/EN, extensible à d'autres langues.
 * Usage: ajouter data-i18n="cle" sur tout élément traduisible.
 * - data-i18n-html : interprété en innerHTML (pour <br>)
 * - data-i18n-aria-label : traduit l'aria-label
 * - data-i18n-content : pour <meta name="description"> etc.
 * Langue : ?lang=en > localStorage 'ca-lang' > navigator.language > 'fr'
 * Pour ajouter une langue (ex: 'es') : ajouter entrée dans STRINGS + bouton data-lang="es".
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'ca-lang';
  var DEFAULT_LANG = 'fr';
  var SUPPORTED = ['fr', 'en'];

  var STRINGS = {
    fr: {
      'meta.title': 'Climbing Addicts — Track Your Climbing Progress',
      'meta.description': "Enregistrez chaque bloc et voie : cotations, essais, styles et salles. Prenez une photo pour identifier la voie et savoir exactement quoi améliorer.",
      'nav.features': 'Fonctionnalités',
      'nav.blog': 'Blog',
      'nav.download': 'Télécharger',
      'hero.title': 'Track Every Climb.<br>Progress Faster.',
      'hero.subtitle': 'Enregistrez chaque bloc et voie : cotations, essais, styles et salles. Prenez une photo pour identifier la voie et savoir exactement quoi améliorer.',
      'hero.cta.primary': 'Commencer gratuitement',
      'hero.cta.secondary': 'Voir les fonctionnalités',
      'hero.stats.1': 'Grimpes enregistrées',
      'hero.stats.2': 'Salles partenaires',
      'hero.stats.3': 'Note App Store',
      'features.title': 'Tout pour progresser',
      'features.subtitle': 'Des outils pensés par des grimpeurs, pour des grimpeurs.',
      'features.1.title': "Carnet d'escalade complet",
      'features.1.text': 'Enregistrez chaque essai : cotation, style (flash, essai, travail), type de voie, salle. Filtrez et analysez votre progression.',
      'features.2.title': 'Reconnaissance photo',
      'features.2.text': "Prenez en photo une voie ou un bloc : l'app identifie la cotation, le style et vous suggère les points à travailler.",
      'features.3.title': 'Stats & analyses',
      'features.3.text': 'Visualisez votre évolution : pyramides de cotations, heatmap des styles, progression par salle, comparaison dans le temps.',
      'features.4.title': 'Communauté & défis',
      'features.4.text': 'Rejoignez des défis mensuels, partagez vos projets, motivez-vous entre amis. La grimpe c’est mieux ensemble.',
      'download.title': 'Prêt à grimper plus fort ?',
      'download.text': 'Disponible sur iOS et Android. Synchronisation cloud, mode hors-ligne, export de données.',
      'download.aria.appstore': "Télécharger sur l'App Store",
      'download.aria.play': 'Télécharger sur Google Play',
      'download.alt': "Aperçu de l'application Climbing Addicts",
      'footer.tagline': 'L’app pour grimpeurs qui veulent progresser.',
      'footer.product': 'Produit',
      'footer.product.features': 'Fonctionnalités',
      'footer.product.pricing': 'Tarifs',
      'footer.product.download': 'Télécharger',
      'footer.product.changelog': 'Changelog',
      'footer.community': 'Communauté',
      'footer.community.blog': 'Blog',
      'footer.community.challenges': 'Défis',
      'footer.community.gyms': 'Salles partenaires',
      'footer.community.ambassadors': 'Ambassadeurs',
      'footer.legal': 'Légal',
      'footer.legal.privacy': 'Confidentialité',
      'footer.legal.terms': 'CGU',
      'footer.legal.cookies': 'Cookies',
      'footer.rights': '© 2025 Climbing Addicts. Tous droits réservés.',
      'blog.back': '← Retour au blog',
      'blog.title': 'Blog',
      'blog.subtitle': 'Conseils entraînement, technique, matos et récits de grimpe.',
      'blog.read': 'Lire l’article',
      'blog.empty': 'Aucun article dans cette langue pour le moment — revenez bientôt.'
    },
    en: {
      'meta.title': 'Climbing Addicts — Track Your Climbing Progress',
      'meta.description': 'Log every boulder and rope climb: grades, attempts, styles and gyms. Snap a photo to identify the route and see exactly what to improve.',
      'nav.features': 'Features',
      'nav.blog': 'Blog',
      'nav.download': 'Download',
      'hero.title': 'Track Every Climb.<br>Progress Faster.',
      'hero.subtitle': 'Log every boulder and rope climb: grades, attempts, styles and gyms. Snap a photo to identify the route and see exactly what to improve.',
      'hero.cta.primary': 'Start for free',
      'hero.cta.secondary': 'See features',
      'hero.stats.1': 'Logged climbs',
      'hero.stats.2': 'Partner gyms',
      'hero.stats.3': 'App Store rating',
      'features.title': 'Everything to progress',
      'features.subtitle': 'Tools made by climbers, for climbers.',
      'features.1.title': 'Full climbing logbook',
      'features.1.text': 'Log every attempt: grade, style (flash, redpoint, project), climb type, gym. Filter and analyze your progress.',
      'features.2.title': 'Photo recognition',
      'features.2.text': 'Snap a photo of a route or boulder: the app identifies the grade, style and suggests what to work on.',
      'features.3.title': 'Stats & insights',
      'features.3.text': 'Visualize your progress: grade pyramids, style heatmaps, per-gym progression, over-time comparison.',
      'features.4.title': 'Community & challenges',
      'features.4.text': 'Join monthly challenges, share your projects, stay motivated with friends. Climbing is better together.',
      'download.title': 'Ready to climb stronger?',
      'download.text': 'Available on iOS and Android. Cloud sync, offline mode, data export.',
      'download.aria.appstore': 'Download on the App Store',
      'download.aria.play': 'Get it on Google Play',
      'download.alt': 'Climbing Addicts app preview',
      'footer.tagline': 'The app for climbers who want to progress.',
      'footer.product': 'Product',
      'footer.product.features': 'Features',
      'footer.product.pricing': 'Pricing',
      'footer.product.download': 'Download',
      'footer.product.changelog': 'Changelog',
      'footer.community': 'Community',
      'footer.community.blog': 'Blog',
      'footer.community.challenges': 'Challenges',
      'footer.community.gyms': 'Partner gyms',
      'footer.community.ambassadors': 'Ambassadors',
      'footer.legal': 'Legal',
      'footer.legal.privacy': 'Privacy',
      'footer.legal.terms': 'Terms',
      'footer.legal.cookies': 'Cookies',
      'footer.rights': '© 2025 Climbing Addicts. All rights reserved.',
      'blog.back': '← Back to blog',
      'blog.title': 'Blog',
      'blog.subtitle': 'Training tips, technique, gear and climbing stories.',
      'blog.read': 'Read article',
      'blog.empty': 'No articles in this language yet — check back soon.'
    }
  };

  function detectLang() {
    try {
      var url = new URL(window.location.href);
      var q = url.searchParams.get('lang');
      if (q && SUPPORTED.indexOf(q) !== -1) return q;
    } catch (e) { /* ignore */ }
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* ignore */ }
    var nav = (navigator.language || navigator.userLanguage || DEFAULT_LANG).slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : DEFAULT_LANG;
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    var dict = STRINGS[lang] || {};
    var fallback = STRINGS[DEFAULT_LANG] || {};
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = dict[key] !== undefined ? dict[key] : fallback[key];
      if (val === undefined) return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      var val = dict[key] !== undefined ? dict[key] : fallback[key];
      if (val !== undefined) el.setAttribute('aria-label', val);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var val = dict[key] !== undefined ? dict[key] : fallback[key];
      if (val !== undefined) el.setAttribute('alt', val);
    });
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-content');
      var val = dict[key] !== undefined ? dict[key] : fallback[key];
      if (val !== undefined) el.setAttribute('content', val);
    });
    if (dict['meta.title']) document.title = dict['meta.title'];

    // État actif du sélecteur
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    // Articles blog : filtre par langue, fallback FR
    document.querySelectorAll('[data-lang-article]').forEach(function (article) {
      var langs = (article.getAttribute('data-lang-article') || '').split(' ');
      var show = langs.indexOf(lang) !== -1;
      // Si aucune version dans la langue courante, on garde l'article FR visible
      // uniquement si data-fallback="true" et aucun article de la langue n'existe.
      article.hidden = !show && article.getAttribute('data-fallback') !== 'true';
    });
    // Si des fallbacks existent, les masquer dès qu'au moins un article natif est visible
    var hasNative = document.querySelector('[data-lang-article]:not([hidden]):not([data-fallback="true"])');
    if (hasNative) {
      document.querySelectorAll('[data-lang-article][data-fallback="true"]').forEach(function (a) { a.hidden = true; });
    }
    var emptyMsg = document.querySelector('[data-blog-empty]');
    if (emptyMsg) {
      var anyVisible = !!document.querySelector('[data-lang-article]:not([hidden])');
      emptyMsg.hidden = anyVisible;
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    try {
      var url = new URL(window.location.href);
      if (url.searchParams.get('lang') !== lang) {
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
      }
    } catch (e) { /* ignore */ }
    document.dispatchEvent(new CustomEvent('ca:langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) { applyLang(lang); }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-lang]') : null;
    if (btn) { e.preventDefault(); setLang(btn.getAttribute('data-lang')); }
  });

  document.addEventListener('DOMContentLoaded', function () { applyLang(detectLang()); });

  window.CA_I18N = { setLang: setLang, getLang: detectLang, supported: SUPPORTED.slice(), strings: STRINGS };
})();
