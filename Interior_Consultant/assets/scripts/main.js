const hamburger = document.getElementById('hamburger');
const hamburgerImg = document.getElementById('hamburger__img');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
  if (hamburgerImg.src.includes('menu_FILL0_wght400_GRAD0_opsz24.svg')) {
    hamburgerImg.src = './assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';
  } else {
    hamburgerImg.src = './assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg';
  }

  navigation.classList.toggle('navigation--open');
  document.body.classList.toggle('body--hide-overflow-y');
});
