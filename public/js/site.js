const menuButton = document.querySelector('[data-menu-toggle]');
const menuPanel = document.querySelector('[data-mobile-menu]');

if (menuButton && menuPanel) {
  menuButton.addEventListener('click', () => {
    menuPanel.classList.toggle('hidden');
  });
}
