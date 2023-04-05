$('#agregar_producto').on('click', enviarProducto)

function enviarProducto(){
    let datos_producto = Object.fromEntries(
        new FormData(Producto)
    );

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
                        producto();
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
        alert('No ha ingresado la cantidad del producto')
    }
};