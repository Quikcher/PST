const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal.classList.add('show');

})

close.addEventListener('click', () => {
  modal.classList.remove('show');

})

modal.addEventListener('click', (e) => {
  if(e.target == modal){
    modal.classList.remove('show');
  }

})