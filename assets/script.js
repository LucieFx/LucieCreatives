const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const glow = document.querySelector('.cursor-glow');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const email = 'Hello@mediahouse.space';
const copyEmailButton = document.getElementById('copyEmail');
copyEmailButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.textContent = 'Email Copied';
    setTimeout(() => { copyEmailButton.textContent = 'Copy Email'; }, 1600);
  } catch (error) {
    window.location.href = `mailto:${email}`;
  }
});
