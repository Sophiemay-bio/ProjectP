function setupDrawerInteractions() {
  const drawerToggle = document.querySelector('input[data-md-toggle="drawer"]');
  const overlay = document.querySelector('.md-overlay');
  const navLinks = document.querySelectorAll('.md-nav__link');

  if (!drawerToggle) {
    return;
  }

  if (overlay && !overlay.dataset.drawerCloseBound) {
    overlay.addEventListener('click', () => {
      drawerToggle.checked = false;
    });
    overlay.dataset.drawerCloseBound = 'true';
  }

  navLinks.forEach((link) => {
    if (link.dataset.drawerCloseBound) {
      return;
    }

    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 76.1875em)').matches) {
        drawerToggle.checked = false;
      }
    });
    link.dataset.drawerCloseBound = 'true';
  });

  const mainContent = document.querySelector('.md-main');
  if (mainContent && !mainContent.dataset.drawerOutsideCloseBound) {
    mainContent.addEventListener('click', (event) => {
      const toggle = document.querySelector('input[data-md-toggle="drawer"]');
      if (!toggle || !toggle.checked) {
        return;
      }
      if (event.target.closest('.md-sidebar--primary')) {
        return;
      }
      if (event.target.closest('[for="__drawer"]')) {
        return;
      }
      if (event.target.closest('.md-header')) {
        return;
      }
      if (!window.matchMedia('(max-width: 76.1875em)').matches) {
        return;
      }
      toggle.checked = false;
    });
    mainContent.dataset.drawerOutsideCloseBound = 'true';
  }
}

if (typeof window.document$ !== 'undefined' && typeof window.document$.subscribe === 'function') {
  window.document$.subscribe(setupDrawerInteractions);
} else {
  document.addEventListener('DOMContentLoaded', setupDrawerInteractions);
}
