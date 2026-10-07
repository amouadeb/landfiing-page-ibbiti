// Premissas acadêmicas da Série V2, data-base setembro de 2026.
const TOKENOMICS = Object.freeze({
  price: 105464,
  benefitFace: 780,
  benefitCost: 24960,
  benefitUse: 41600,
});

// Preencher apenas com a URL pública e verificada da aplicação do grupo.
const APPLICATION_URL = '';

const applicationLink = document.getElementById('application-link');
const applicationPending = document.getElementById('application-pending');
if (APPLICATION_URL) {
  try {
    const destination = new URL(APPLICATION_URL);
    if (destination.protocol === 'https:') {
      applicationLink.href = destination.href;
      applicationLink.hidden = false;
      applicationPending.hidden = true;
    }
  } catch {
    // Mantém o estado de preparação até existir uma URL válida.
  }
}

const brl = value => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
}).format(value);

document.querySelectorAll('[data-value]').forEach(node => {
  node.textContent = brl(TOKENOMICS[node.dataset.value]);
});

const menu = document.getElementById('menu');
const nav = document.getElementById('navegacao');

menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('open', open);
});

nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Abrir menu');
  }
});
