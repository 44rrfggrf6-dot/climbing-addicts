(function() {
  'use strict';

  const header = document.querySelector('.header');
  let lastScroll = 0;

  function onScroll() {
    if (!header) return;
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
      header.style.background = 'rgba(13,15,20,.95)';
    } else {
      header.style.background = 'rgba(13,15,20,.8)';
    }
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = header ? header.offsetHeight : 72;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.feature-card, .section-header, .download-text, .download-phone').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
})();