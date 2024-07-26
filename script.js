document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('close-btn');
  const showContactButton = document.getElementById('show-contact');
  const contactInfo = document.querySelector('.contact-info');
  const sidebar = document.getElementById('sidebar');

 // Toggle mobile navigation menu
  hamburgerMenu.addEventListener('click', () => {
    mobileNav.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.style.display = 'none';
  });

 // Close mobile navigation menu when a link is clicked
  document.querySelectorAll('.nav-links li a, .mobile-nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.style.display = 'none';
      document.querySelectorAll('.nav-links li a, .mobile-nav ul li a').forEach(item => {
        item.classList.remove('active');
      });
      link.classList.add('active');
    });
  });


  // Hide mobile navigation menu on window resize if width is greater than 799px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 799) {
      mobileNav.style.display = 'none';
    }
  });

  // Toggle contact information visibility
  showContactButton.addEventListener('click', () => {
    if (contactInfo.classList.contains('hidden')) {
      contactInfo.classList.remove('hidden');
      showContactButton.textContent = 'Hide Contact';
    } else {
      contactInfo.classList.add('hidden');
      showContactButton.textContent = 'Show Contact';
    }
  });
});
