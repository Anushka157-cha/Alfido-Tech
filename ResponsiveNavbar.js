document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, 
          behavior: 'smooth'
        });
      }
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });
  
