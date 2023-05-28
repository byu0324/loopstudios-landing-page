let menu = document.querySelector('.header-menu');
let btn = document.querySelector('.header-btn');
let icon = document.querySelector('.header-btn img');
let logo = document.querySelector('.logo');

btn.addEventListener('click', () => {
  if(menu.classList.contains('open')) {
    menu.classList.remove('open');
    btn.classList.remove('fixed');
    logo.classList.remove('fixed');
    icon.setAttribute('src', 'images/icon-hamburger.svg');
  } else {
    menu.classList.add('open');
    btn.classList.add('fixed');
    logo.classList.add('fixed');
    icon.setAttribute('src', 'images/icon-close.svg');
  }
});