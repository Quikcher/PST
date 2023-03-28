$('#agregar_producto').on('click', enviarProducto)

function enviarProducto(){
    let datos_producto = Object.fromEntries(
        new FormData(Producto)
    )
    console.log(JSON.stringify(datos_producto))

    if (datos_producto.Nombre_Producto == "" || datos_producto.Precio == "") {
        alert('Hay campos vacios')
    }else if (datos_producto.Linea == "") {
        alert('Selecciones una LINEA')
    }else if (datos_producto.Categoria == "") {
        alert('Selecciones una CATEGORIA')
    }else if (datos_producto.Cantidad_XS != "" ||datos_producto.Cantidad_S != "" ||datos_producto.Cantidad_XL != "" ||datos_producto.Cantidad_L != "" ||datos_producto.Cantidad_XM != "" ||datos_producto.Cantidad_M != "" ||datos_producto.Cantidad_Unica != "") {
        $.ajax({
            data:datos_producto,
            type:"POST",    
            url: "../controladores/nuevo_producto.php",
            success: function(recieved) {

                switch (recieved) {
                    case '1':
                        alert('El producto ha sido añadido al inventario')
                    break;
                
                    default:
                        alert(recieved);
                        break;
                }
            },
            error: function(request, status, error){

            }
        });
    }else {
        alert('Ingrese la cantidad de productos que desea añador')
    }
}

function validarNumero(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
  
    // Verificar si la tecla presionada es un número o los caracteres especiales permitidos
    if (tecla >= 48 && tecla <= 57 || tecla == 8 || tecla == 13 || tecla == 37 || tecla == 39 || tecla == 9) {
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
    input.addEventListener("keypress", validarNumero);
});