document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
  
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    const submenuItems = document.querySelectorAll('.has-submenu');
  
    submenuItems.forEach(item => {
      item.addEventListener('click', e => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    });
  });
  