const button = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
button.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('img').forEach(image => {
  image.loading = 'lazy';
  image.decoding = 'async';
});

const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate([{opacity: 0, transform: 'translateY(22px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 650, easing: 'ease-out', fill: 'forwards'});
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: .08});
document.querySelectorAll('.card,.steps article,.why-list article,.gallery-grid img').forEach(el => { el.style.opacity = 0; reveal.observe(el); });
