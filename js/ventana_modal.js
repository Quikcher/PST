const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal.classList.remove('oculto');
})

close.addEventListener('click', () => {
  modal.classList.add('oculto');
})

function ventas(){
  window.location.href='pop-up/ventas.html';
}