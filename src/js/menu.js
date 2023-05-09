(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    closeMenuLink: document.querySelectorAll('.burger-menu-link'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
  refs.closeMenuLink.forEach(item =>
    item.addEventListener('click', toggleMenu)
  );
})();