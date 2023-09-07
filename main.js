const displayMenu = document.querySelector('.openmenu');
const hideMenu = document.querySelector('.closemenu');
const menu = document.querySelector('.hmenu');

const openMenu = () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('-translate-y-full');
  hideMenu.classList.toggle('hidden');
  displayMenu.classList.toggle('hidden');
  menu.classList.toggle('flex');
};

displayMenu.addEventListener('click', openMenu);
hideMenu.addEventListener('click', openMenu);
