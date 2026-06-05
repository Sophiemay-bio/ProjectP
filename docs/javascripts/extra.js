function setupDrawerInteractions() {
  const drawerToggle = document.querySelector('input[data-md-toggle="drawer"]');
  const navLinks = document.querySelectorAll('.md-nav__link');

  if (!drawerToggle) {
    return;
  }

  // Close the drawer after tapping a navigation link (mobile only).
  // The blurred overlay beside the menu is the theme's native close control
  // (a <label for="__drawer">), so it does not need a JS handler - adding one
  // fights the native toggle and cancels the close out.
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