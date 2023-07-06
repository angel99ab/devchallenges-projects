const hamburger = document.getElementById('hamburger');
const hamburgerImg = document.getElementById('hamburger__img');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
  if (hamburgerImg.src.includes('menu_FILL0_wght400_GRAD0_opsz24.svg')) {
    hamburgerImg.src = './assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';
  } else {
    hamburgerImg.src = './assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg';
  }

  if (navigation.classList.contains('navigation--open')) {
    navigation.classList.add('navigation--close');

    setTimeout(() => {
      navigation.classList.remove('navigation--open');
      navigation.classList.remove('navigation--close');
    }, 300);
  } else {
    navigation.classList.add('navigation--open');
  }
});
