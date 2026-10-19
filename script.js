/* Menu mobile: teclado, clique externo e mudança de largura. */
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr-only').textContent = open ? 'Fechar menu' : 'Abrir menu';
  menu.classList.toggle('is-open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

// Entrée décalée à l'approche du viewport, avec repli sans IntersectionObserver.
const projectCards = document.querySelectorAll('.project-card, .benefit-card');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
 }, { threshold: 0.12 });
 projectCards.forEach(card => { card.classList.add('will-reveal'); observer.observe(card); });
}

// Le processus démarre une seule fois lorsqu'il devient visible.
const processSection = document.querySelector('.process');
if (processSection) {
 if ('IntersectionObserver' in window) {
  const processObserver = new IntersectionObserver(entries => {
   if (entries.some(entry => entry.isIntersecting)) { processSection.classList.add('is-running'); processObserver.disconnect(); }
  }, { threshold: 0.15 });
  processObserver.observe(processSection);
 } else { processSection.classList.add('is-running'); }
}

// Entrada das três frases de atendimento ao alcançar a lista.
const regionFeatures = document.querySelector('.regions-features');
if (regionFeatures && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 regionFeatures.classList.add('is-ready');
 const featuresObserver = new IntersectionObserver(entries => {
  if (entries.some(entry => entry.isIntersecting)) {
   regionFeatures.classList.add('is-entering');
   featuresObserver.disconnect();
  }
 }, { threshold: 0.25 });
 featuresObserver.observe(regionFeatures);
}

// Mantém apenas uma resposta aberta sem retirar suporte nativo ao teclado.
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => item.addEventListener('toggle', () => {
 if (item.open) faqItems.forEach(other => { if (other !== item) other.open = false; });
}));

// Prépare la mensagem com encodeURIComponent; nenhum dado é armazenado no site.
const projectForm = document.querySelector('#project-form');
if (projectForm) {
 const existingSite = projectForm.elements.possuiSite;
 const siteField = document.querySelector('#site-field');
 existingSite.addEventListener('change', () => {
  const show = existingSite.value === 'Sim';
  siteField.hidden = !show;
  projectForm.elements.site.disabled = !show;
 });
 projectForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!projectForm.reportValidity()) return;
  const data = new FormData(projectForm);
  const get = key => String(data.get(key) || '').trim();
  const date = get('dia').split('-').reverse().join('/');
  const lines = ['Olá! Vim através do site, gostaria de conversar sobre o meu projeto.', '',
   'SOBRE MIM', 'Nome: ' + get('nome'), 'Represento: ' + get('representa'),
   'Empresa/agência: ' + get('empresa'), 'Nicho: ' + get('nicho'), 'Cidade e estado: ' + get('regiao')];
  if (get('email')) lines.push('E-mail: ' + get('email'));
  lines.push('', 'SOBRE O PROJETO', 'Serviço: ' + get('servico'));
  if (get('possuiSite')) lines.push('Já possuo site: ' + get('possuiSite'));
  if (get('possuiSite') === 'Sim' && get('site')) lines.push('Site atual: ' + get('site'));
  lines.push('Objetivo: ' + get('objetivo'), '', 'PREFERÊNCIA PARA CONVERSA', 'Dia: ' + date, 'Horário: ' + get('horario'), 'Aguardo a confirmação do dia e horário.');
  window.location.assign('https://wa.me/5541984678439?text=' + encodeURIComponent(lines.join('\n')));
 });
}
