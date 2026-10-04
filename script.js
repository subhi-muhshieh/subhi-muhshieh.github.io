document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.main-nav a');
  const sections = document.querySelectorAll('main section[id], footer[id]');

  const activateLink = () => {
    let currentId = 'home';
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isActive = href === '#' + currentId || (currentId === 'home' && href === '#home');
      link.style.color = isActive ? '#1d4ed8' : '#5b6b82';
    });
  };

  activateLink();
  window.addEventListener('scroll', activateLink, { passive: true });
});
