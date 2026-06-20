// Menu mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha o menu ao clicar em um link (mobile)
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano automático no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

// ====== EDITE AQUI SEUS CONTATOS ======
const LINKEDIN_URL = "https://www.linkedin.com/in/liribeiro/";
const EMAIL = "liribeirodealmeida@gmail.com";
// =======================================

const linkedinLink = document.getElementById('linkedinLink');
const emailLink = document.getElementById('emailLink');

if (linkedinLink) {
  if (LINKEDIN_URL) {
    linkedinLink.href = LINKEDIN_URL;
    linkedinLink.target = "_blank";
    linkedinLink.rel = "noopener";
  } else {
    linkedinLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Adicione seu link do LinkedIn no arquivo assets/js/main.js (variável LINKEDIN_URL).');
    });
  }
}

if (emailLink) {
  if (EMAIL) {
    emailLink.href = `mailto:${EMAIL}`;
  } else {
    emailLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Adicione seu e-mail no arquivo assets/js/main.js (variável EMAIL).');
    });
  }
}