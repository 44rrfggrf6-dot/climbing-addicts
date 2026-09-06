(function () {
  'use strict';

  var form = document.getElementById('auth-form');
  var confirmField = document.querySelector('[data-auth-confirm]');
  var titleSignin = document.querySelector('[data-auth-title-signin]');
  var titleSignup = document.querySelector('[data-auth-title-signup]');
  var submitBtn = document.querySelector('[data-auth-submit-signin]');
  var switchToSignup = document.querySelector('[data-auth-switch-signup]');
  var switchToSignin = document.querySelector('[data-auth-switch-signin]');
  var message = document.querySelector('[data-auth-message]');
  var confirmInput = document.getElementById('auth-confirm');

  var mode = 'signin';

  function applyMode() {
    var isSignup = mode === 'signup';
    confirmField.hidden = !isSignup;
    confirmInput.required = isSignup;
    titleSignin.hidden = isSignup;
    titleSignup.hidden = !isSignup;
    switchToSignup.hidden = isSignup;
    switchToSignin.hidden = !isSignup;

    var lang = (window.CA_I18N && window.CA_I18N.getLang()) || 'fr';
    var dict = (window.CA_I18N && window.CA_I18N.strings[lang]) || {};
    submitBtn.textContent = isSignup
      ? (dict['auth.button.signup'] || 'Créer un compte')
      : (dict['auth.button.signin'] || 'Se connecter');

    message.hidden = true;
  }

  document.querySelectorAll('[data-auth-toggle]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      mode = mode === 'signin' ? 'signup' : 'signin';
      applyMode();
    });
  });

  document.addEventListener('ca:langchange', applyMode);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var lang = (window.CA_I18N && window.CA_I18N.getLang()) || 'fr';
    var dict = (window.CA_I18N && window.CA_I18N.strings[lang]) || {};
    message.textContent = dict['auth.demoMessage'] || "Fonctionnalité de démonstration : télécharge l'app pour créer un vrai compte.";
    message.hidden = false;
  });

  var googleBtn = document.getElementById('auth-google');
  if (googleBtn) {
    googleBtn.addEventListener('click', function () {
      var lang = (window.CA_I18N && window.CA_I18N.getLang()) || 'fr';
      var dict = (window.CA_I18N && window.CA_I18N.strings[lang]) || {};
      message.textContent = dict['auth.demoMessage'] || "Fonctionnalité de démonstration : télécharge l'app pour créer un vrai compte.";
      message.hidden = false;
    });
  }

  applyMode();
})();
