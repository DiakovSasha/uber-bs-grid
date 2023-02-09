const menuBtn = document.querySelector('.header__burger');
const menuList = document.querySelector('.menu');

menuBtn.addEventListener('click', toggleBtn);

function toggleBtn(event) {
  menuBtn.classList.toggle('header__burger--active');
  menuList.classList.toggle('menu__active');
  document.addEventListener('keydown', closeOnEsc);
}

function closeOnEsc(event) {
  console.log(event);
  if (event.code === 'Escape') {
    menuBtn.classList.remove('header__burger--active');
    menuList.classList.remove('menu__active');
    document.removeEventListener('keydown', closeOnEsc);
  }
  return;
}
