document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const smMenu = document.querySelector('.header__sm-menu');
    const hamburger = document.querySelector('.hamburger');
    const mobileLinks = document.querySelectorAll('.header__sm-menu-link a');
  
    // Alterna el menú móvil y la animación del ícono hamburguesa
    menuToggle.addEventListener('click', function (event) {
      event.stopPropagation(); // Evita que el clic se propague al documento
      smMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  
    // Oculta el menú móvil al hacer clic en cualquier enlace del menú
    mobileLinks.forEach(link => {
      link.addEventListener('click', function () {
        smMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  
    // Oculta el menú móvil al hacer clic en cualquier otra parte de la pantalla
    document.addEventListener('click', function (event) {
      // Si el clic no es dentro del menú móvil ni en el botón hamburguesa
      if (!smMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        smMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });
  