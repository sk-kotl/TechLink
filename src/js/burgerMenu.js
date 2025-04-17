const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBM = document.getElementById('close-btn');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeBM.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});