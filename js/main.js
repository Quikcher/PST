let click = true;
let divCuenta = document.getElementById('cuenta');
let dropdown = document.getElementById('dropdown');
divCuenta.addEventListener('mouseenter',()=>{
    document.getElementById('dropdown').classList.remove('oculto')
})
dropdown.addEventListener('mouseleave',()=>{
    document.getElementById('dropdown').classList.add('oculto')
})
divCuenta.addEventListener('mouseleave',()=>{
    document.getElementById('dropdown').classList.add('oculto')
})
dropdown.addEventListener('mouseenter',()=>{
    document.getElementById('dropdown').classList.remove('oculto')
})

function validarNumero(e) {
    let tecla = (document) ? e.keyCode : e.which;
    
    // Verificar si la tecla presionada es un número o los caracteres especiales permitidos
    if (e.code === "ArrowUp" || e.code ==="ArrowDown") {
        e.preventDefault();
        return false;
      } else if (tecla >= 48 && tecla <= 57 || tecla == 8 || tecla == 13 || tecla == 9) {
      return true;
    } else {
      // Si no es un número, detener la acción predeterminada
      e.preventDefault();
      return false;
    }
}
function validarTexto(e) {
    let tecla = (document) ? e.keyCode : e.which;

    // Verificar si la tecla presionada es un número o los caracteres especiales permitidos
    if (tecla >= 65 && tecla <= 91 || tecla >= 97 && tecla <= 122 || 
        tecla == 8 || 
        tecla == 13 || 
        tecla == 59 || 
        tecla == 58 || 
        tecla == 9 ||
        tecla == 225 ||
        tecla == 233 ||
        tecla == 237 ||
        tecla == 243 ||
        tecla == 250 ||
        tecla == 193 ||
        tecla == 201 ||
        tecla == 205 ||
        tecla == 211 ||
        tecla == 218 
        ) {
      return true;
    } else {
      // Si no es un número, detener la acción predeterminada
      e.preventDefault();
      return false;
    }
}
  // Agregar el evento keypress al input de tipo número

const numInputs = document.querySelectorAll('input[type="number"]');
numInputs.forEach(input => {
    input.addEventListener("keydown", event => {
        if (event.code === "ArrowUp" || event.code ==="ArrowDown") {
          event.preventDefault();
        }
      });
    input.addEventListener("keypress", validarNumero);
});
const Inputs = document.querySelectorAll('input[type="text"]:not(.not)');
Inputs.forEach(input => {
    input.addEventListener("keypress", validarTexto);
});