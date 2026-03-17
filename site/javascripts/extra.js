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
}

if (typeof window.document$ !== 'undefined' && typeof window.document$.subscribe === 'function') {
  window.document$.subscribe(setupDrawerInteractions);
} else {
  document.addEventListener('DOMContentLoaded', setupDrawerInteractions);
}
