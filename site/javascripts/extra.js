document.addEventListener('DOMContentLoaded', function() {
  // Fix hamburger menu
  const drawerToggle = document.querySelector('input[data-md-toggle="drawer"]');
  const sidebar = document.querySelector('.md-sidebar--primary');
  const overlay = document.querySelector('.md-overlay');
  
  if (drawerToggle && sidebar) {
    drawerToggle.addEventListener('change', function() {
      if (this.checked) {
        sidebar.style.transform = 'translateX(0)';
      } else {
        sidebar.style.transform = 'translateX(-100%)';
      }
    });
  }
  
  // Close sidebar when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', function() {
      if (drawerToggle) {
        drawerToggle.checked = false;
        if (sidebar) {
          sidebar.style.transform = 'translateX(-100%)';
        }
      }
    });
  }
  
  // Close sidebar when clicking a link (mobile)
  const navLinks = document.querySelectorAll('.md-nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 1220 && drawerToggle) {
        drawerToggle.checked = false;
        if (sidebar) {
          sidebar.style.transform = 'translateX(-100%)';
        }
      }
    });
  });
});