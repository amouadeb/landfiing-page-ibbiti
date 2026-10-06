// Premissas acadêmicas da Série V1, usadas apenas para informar a landing page.
const TOKENOMICS = Object.freeze({
  price: 113763,
  benefitFace: 780,
  benefitCost: 24960,
  benefitUse: 41600,
});

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
