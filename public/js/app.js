const div_user = document.getElementById('div_user');
const div_password = document.getElementById('div_password');

const label_user = document.getElementById('label_user');
const user = document.getElementById('user');

const label_password = document.getElementById('label_password');
const password = document.getElementById('password');

div_user.addEventListener('click', () => {
    label_user.classList.toggle('label_color');
    div_user.classList.toggle('div_color');
    // div_user.style.borderBottomColor = '#1b95e0';
});