const click = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const header = document.querySelector('.main-header');

click.addEventListener('click', () => {
  click.classList.toggle('active');
  menu.classList.toggle('active');
  header.classList.toggle('active');
});

document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
  click.classList.remove('active');
  menu.classList.remove('active');
  header.classList.remove('active');
}));
