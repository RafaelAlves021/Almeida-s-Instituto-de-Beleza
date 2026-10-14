/* ============================================================
   SCRIPT: Interatividade da Landing Page
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  // Alterna o menu mobile ao clicar no ícone hambúrguer
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  // Fecha o menu mobile automaticamente ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
    });
  });

  // Sombra dinâmica no cabeçalho ao rolar a página
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});