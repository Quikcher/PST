const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal.classList.add('visible');
})

close.addEventListener('click', () => {
  modal.classList.remove('visible');
})