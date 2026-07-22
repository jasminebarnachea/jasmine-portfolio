document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('focus-grid').innerHTML = portfolioData.focus.map((item) => `
    <article class="focus-card reveal"><span class="card-no">${item.no}</span><h3>${item.title}</h3><p>${item.text}</p><div class="tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div><span class="card-arrow">↗</span></article>`).join('');
  document.getElementById('cert-list').innerHTML = portfolioData.certifications.map((cert, i) => `<div class="cert-item reveal"><span>0${i + 1}</span><p>${cert}</p><b>↗</b></div>`).join('');
  document.getElementById('tool-cloud').innerHTML = portfolioData.tools.map((tool, i) => `<span class="tool ${i % 4 === 0 ? 'accent' : ''}">${tool}</span>`).join('');

  const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const menu = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav');
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); menu.innerHTML = open ? 'Close <span>×</span>' : 'Menu <span>+</span>'; });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.innerHTML = 'Menu <span>+</span>'; }));
});
