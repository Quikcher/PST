const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal.classList.remove('oculto');
})

close.addEventListener('click', () => {
  modal.classList.add('oculto');
})

/* modal.addEventListener('click', (e) => {
  if(e.target == modal){
    modal.classList.remove('show');
  }
}) */

function ventas(){
  window.location.href='pop-up/ventas.html';
}