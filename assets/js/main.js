// ================================================
// Navigation — scroll effect + mobile hamburger
// ================================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

if (hamburger && navLinks) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ================================================
// Typed.js
// ================================================
if (document.getElementById('typed-text')) {
  new Typed('#typed-text', {
    strings: [
      'Senior Software Engineer',
      'Backend Systems Architect',
      'Cloud Infrastructure Engineer',
      'Python Expert',
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 2200,
    startDelay: 900,
    loop: true,
    smartBackspace: true,
  });
}

// ================================================
// Scroll Reveal — timeline items
// ================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));

// ================================================
// GitHub — latest repo in footer
// ================================================
fetch('https://api.github.com/users/omnone/repos')
  .then(r => r.json())
  .then(repos => {
    if (!Array.isArray(repos)) return;
    const latest = repos
      .filter(r => r.name !== 'omnone.github.io' && !r.fork)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];
    if (!latest) return;
    const el = document.getElementById('footer-repo');
    if (el) {
      el.innerHTML = `Latest repo: <a href="${latest.html_url}" target="_blank">${latest.name}</a>${latest.description ? ' — ' + latest.description : ''}`;
    }
  })
  .catch(() => {});
