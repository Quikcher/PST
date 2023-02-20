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

/*               Empleado                    */
const open2 = document.getElementById('open2');
const modal2 = document.getElementById('modal2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
  modal2.classList.add('show');

})

close2.addEventListener('click', () => {
  modal2.classList.remove('show');

})

modal2.addEventListener('click', (e) => {
  if(e.target == modal2){
    modal2.classList.remove('show');
  }

})

