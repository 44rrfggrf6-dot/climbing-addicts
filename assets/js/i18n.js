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
      'meta.title': 'Climbing Addicts — Bêta ouverte : carnet de progression en escalade',
      'meta.description': "Climbing Addicts est en construction : bêta web ouverte, carnet de voies, progression, crews. Photo IA en cours de dev. Testez et donnez votre avis.",
      'nav.features': 'Fonctionnalités',
      'nav.blog': 'Blog',
      'nav.download': 'Soutenir',
      'nav.signin': 'Tester la bêta',
      'hero.title': 'Climb with your people.',
      'hero.subtitle': "Je construis Climbing Addicts seul et en public : carnet de blocs et voies, progression, crews. La reconnaissance photo IA est en cours de développement. Testez la bêta et dites-moi ce qui coince.",
      'hero.cta.primary': 'Tester la bêta',
      'hero.cta.secondary': 'Donner mon avis',
      'hero.stats.1': 'Web ouverte',
      'hero.stats.2': 'Construit en indépendant',
      'hero.stats.3': 'Vos retours font la roadmap',
      'features.title': 'Ce qui marche, ce qui est en chantier',
      'features.subtitle': 'Transparent : disponible en bêta ou en cours de développement.',
      'features.1.title': "Carnet d'escalade",
      'features.1.text': "Logguez chaque essai : cotation, flash / send / projet, salle, photos. Disponible en bêta.",
      'features.2.title': 'Reconnaissance photo',
      'features.2.text': "Segmentation des prises déjà là ; couleur/cotation auto en pause le temps de rebrancher une IA. En cours de développement.",
      'features.3.title': 'Stats & progression',
      'features.3.text': "Premiers panneaux en ligne, analyses avancées à venir avec vos retours. Disponible en bêta.",
      'features.4.title': 'Crews & défis',
      'features.4.text': "Créez votre crew, partagez vos sessions en direct. Disponible en bêta — testeurs bienvenus.",
      'download.title': 'Testez, donnez votre avis, soutenez le chantier',
      'download.text': "Bêta web ouverte, pas encore sur les stores. Un bug, une idée ? Écrivez à benoit@climbingaddicts.app.",
      'download.aria.appstore': 'Ouvrir la bêta web',
      'download.aria.play': 'Soutenir sur Buy Me a Coffee',
      'download.alt': "Aperçu de l'application Climbing Addicts",
      'footer.tagline': "App bêta, construite en solo. Contact : benoit@climbingaddicts.app",
      'footer.product': 'Produit',
      'footer.product.features': 'Fonctionnalités',
      'footer.product.pricing': 'Tester la bêta',
      'footer.product.download': 'Soutenir ☕',
      'footer.product.changelog': 'Donner mon avis',
      'footer.community': 'Communauté',
      'footer.community.blog': 'Blog',
      'footer.community.challenges': 'Donner mon avis',
      'footer.community.gyms': 'Proposer ma salle',
      'footer.community.ambassadors': 'Ambassadeurs',
      'footer.legal': 'Légal',
      'footer.legal.privacy': 'Confidentialité',
      'footer.legal.terms': 'CGU',
      'footer.legal.cookies': 'Cookies',
      'footer.rights': '© 2026 Climbing Addicts — bêta en construction. Tous droits réservés.',
      'blog.back': '← Retour au blog',
      'blog.title': 'Blog',
      'blog.subtitle': 'Conseils entraînement, technique, matos et récits de grimpe.',
      'blog.read': 'Lire l’article',
      'blog.empty': 'Aucun article dans cette langue pour le moment — revenez bientôt.',
      'auth.title.signin': 'Bon retour',
      'auth.title.signup': 'Créer un compte',
      'auth.label.email': 'Email',
      'auth.label.password': 'Mot de passe',
      'auth.label.confirm': 'Confirmer le mot de passe',
      'auth.button.signin': 'Se connecter',
      'auth.button.signup': 'Créer un compte',
      'auth.divider': 'ou',
      'auth.google': 'Continuer avec Google',
      'auth.switch.toSignup.text': 'Nouveau ici ?',
      'auth.switch.toSignup.link': 'Créer un compte',
      'auth.switch.toSignin.text': 'Déjà un compte ?',
      'auth.switch.toSignin.link': 'Se connecter',
      'auth.note': "Cette page est une démo — elle n'est pas encore reliée à un vrai compte. Télécharge l'app pour créer le tien.",
      'auth.demoMessage': "Fonctionnalité de démonstration : télécharge l'app pour créer un vrai compte."
    },
    en: {
      'meta.title': 'Climbing Addicts — Open beta: climbing progress logbook',
      'meta.description': 'Climbing Addicts is under construction: open web beta, route logbook, progression, crews. Photo AI in development. Test it and share feedback.',
      'nav.features': 'Features',
      'nav.blog': 'Blog',
      'nav.download': 'Support',
      'nav.signin': 'Try the beta',
      'hero.title': 'Climb with your people.',
      'hero.subtitle': "I'm building Climbing Addicts solo and in the open: logbook, progression, crews. AI photo recognition is in development. Try the beta and tell me what breaks.",
      'hero.cta.primary': 'Try the beta',
      'hero.cta.secondary': 'Share feedback',
      'hero.stats.1': 'Open web',
      'hero.stats.2': 'Independently built',
      'hero.stats.3': 'Your feedback sets the roadmap',
      'features.title': "What works, what's in progress",
      'features.subtitle': 'Honest status: live in beta or in development.',
      'features.1.title': 'Climbing logbook',
      'features.1.text': 'Log every attempt: grade, flash / send / project, gym, photos. Live in beta.',
      'features.2.title': 'Photo recognition',
      'features.2.text': 'Hold segmentation works; auto color/grade paused while I plug in a new AI provider. In development.',
      'features.3.title': 'Stats & progression',
      'features.3.text': 'First panels live, advanced insights coming with your feedback. Live in beta.',
      'features.4.title': 'Crews & challenges',
      'features.4.text': 'Create your crew, share live sessions. Live in beta — testers welcome.',
      'download.title': 'Test it, tell me, support the build',
      'download.text': 'Open web beta, not on the stores yet. A bug, an idea? Write to benoit@climbingaddicts.app.',
      'download.aria.appstore': 'Open the web beta',
      'download.aria.play': 'Support on Buy Me a Coffee',
      'download.alt': 'Climbing Addicts app preview',
      'footer.tagline': 'Beta app, solo-built. Contact: benoit@climbingaddicts.app',
      'footer.product': 'Product',
      'footer.product.features': 'Features',
      'footer.product.pricing': 'Try the beta',
      'footer.product.download': 'Support ☕',
      'footer.product.changelog': 'Share feedback',
      'footer.community': 'Community',
      'footer.community.blog': 'Blog',
      'footer.community.challenges': 'Share feedback',
      'footer.community.gyms': 'Suggest my gym',
      'footer.community.ambassadors': 'Ambassadors',
      'footer.legal': 'Legal',
      'footer.legal.privacy': 'Privacy',
      'footer.legal.terms': 'Terms',
      'footer.legal.cookies': 'Cookies',
      'footer.rights': '© 2026 Climbing Addicts — beta under construction. All rights reserved.',
      'blog.back': '← Back to blog',
      'blog.title': 'Blog',
      'blog.subtitle': 'Training tips, technique, gear and climbing stories.',
      'blog.read': 'Read article',
      'blog.empty': 'No articles in this language yet — check back soon.',
      'auth.title.signin': 'Welcome back',
      'auth.title.signup': 'Create an account',
      'auth.label.email': 'Email',
      'auth.label.password': 'Password',
      'auth.label.confirm': 'Confirm password',
      'auth.button.signin': 'Sign in',
      'auth.button.signup': 'Create account',
      'auth.divider': 'or',
      'auth.google': 'Continue with Google',
      'auth.switch.toSignup.text': 'New here?',
      'auth.switch.toSignup.link': 'Create an account',
      'auth.switch.toSignin.text': 'Already have an account?',
      'auth.switch.toSignin.link': 'Sign in',
      'auth.note': "This page is a demo — it isn't wired to a real account yet. Download the app to create yours.",
      'auth.demoMessage': "Demo feature: download the app to create a real account."
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
