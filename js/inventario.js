$(window).on('load',producto)

function producto(){
    $.ajax({
        async: true,
        url: "../controladores/tabla__producto.php",
        success: function(recieved) {            
            $('#producto').html(recieved)

            filas = table.getElementsByTagName('tr');
            for (let index = 1; index < filas.length; index++) {
                filas[index].addEventListener('dblclick', ()=>{
                    let rotulado = filas[index].children[0].textContent;
                    let codigoDeBarras = rotulado.slice(-8);
                    mostrar(codigoDeBarras)
                })
                botonEliminar = filas[index].children[6].lastChild;
                botonEliminar.addEventListener('click', (e)=>{
                    e.stopPropagation();
                    let rotulado = filas[index].children[0].textContent;
                    let codigoDeBarras = rotulado.slice(-8);
                    eliminar(rotulado,codigoDeBarras)
                })
            
            }
        }
    });
}
                                        /* ELIMINAR EL PRODUCTO DE LA BASE DE DATOS */

function eliminar(rotulado, codigoDeBarras){
    consulta = {
        "Codigo_Barras": codigoDeBarras 
    };
    result = confirm("¿Desea eliminar el producto: "+rotulado+"?");
    
    if (result == true) {
        $.ajax({
            data:consulta,
            type:"POST",    
            url: "../controladores/eliminar_producto.php",
            success: function(result1) {

                if (result1 == 1) {
                    alert("Producto eliminado");
                    producto();
                }
            },
            error: function(request, status, error){

            }
        });
    }
}
                                        /* MODAL PARA AGREGAR EL PRODUCTO A LA BASE DE DATOS */
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal.classList.remove('oculto');
})

close.addEventListener('click', cerrar = () => {
  modal.classList.add('oculto');
  limpiarFormulario();
})

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
                        cerrar();
                        limpiarFormulario();
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

const form = document.querySelector('#Producto');

function limpiarFormulario(){
// Iterate through all form elements
for (let element of form.elements) {
  // Check if element is an input field
  if (element.nodeName === 'INPUT') {
    // Set value to an empty string
    element.value = '';
  }
  if (element.nodeName === 'SELECT') {
    // Set value to an empty string
    opcion = element.options[0]
    opcion.selected = true;
  }
}
}


                                                /* MODAL QUE MUESTRA LOS DATOS DEL PRODUCTO */

function mostrar(Codigo_Barras){
    data={
        "codigo_barras": Codigo_Barras
    }
    $.ajax({
        data:data,
        type:"POST",    
        url: "../controladores/mostrar_producto.php",
        dataType:'json',
        success: function datos(array) {
                
                $('#Nom_Producto').html(`<b>${array[0].Nom_Producto}</b>`);
                $('#Codigo_Barras').html(`${array[0].Rotulado}${array[0].Codigo_Barras}`);
                $('#Categoria_').html(`${array[0].Categoria}`);
                $('#Linea_').html(`${array[0].Linea}`);
                $('#Talla_XS').html(`<span>XS: ${array[0].Cantidad}</span>`);
                $('#Talla_S').html(`<span>S: ${array[1].Cantidad}</span>`);
                $('#Talla_XM').html(`<span>XM: ${array[2].Cantidad}</span>`);
                $('#Talla_M').html(`<span>M: ${array[3].Cantidad}</span>`);
                $('#Talla_XL').html(`<span>XL: ${array[4].Cantidad}</span>`);
                $('#Talla_L').html(`<span>L: ${array[5].Cantidad}</span>`);
                $('#Talla_Unica').html(`<span>Unica: ${array[6].Cantidad}</span>`);
                $('#Precio_').html(`${array[0].Precio}$`);
                $('#cssmodal').attr('href','../css/producto.css')
                $('#mostrar').removeClass('oculto');
                ver = array;
                

        },
        error: function(request, status, error){

        }
    });
}

click = false;
$('#editar').on('click', function(){
    if (!click) {
        $('#Nom_Producto').html(`<input type="text" value="${ver[0].Nom_Producto}" name="Nom_Producto">`);
        $('#Precio_').html(`<input type="number" value="${ver[0].Precio}" name="Precio">$`);
        click = true;   
    }else{
        
        let editar = Object.fromEntries(
            new FormData(editarProducto));
            editar.Codigo_Barras = ver[0].Codigo_Barras;
            editar.editar = 1;
            if (ver[0].Nom_Producto != editar.Nom_Producto || ver[0].Precio != editar.Precio ) {
                $.ajax({
                    data:editar,
                    type:"POST",    
                    url: "../controladores/nuevo_producto.php",
                    success: function(result1) {
        
                        if (result1 == 2) {
                            alert("Producto editado");
                            volver();
                            producto();
                        }else {
                            alert(result1)
                        }
                    },
                });
            }else{
                alert('No se han realizado cambios al producto: '+ver[0].Nom_Producto);
                $('#Nom_Producto').html(`<b>${ver[0].Nom_Producto}</b>`);
                $('#Precio_').html(`${ver[0].Precio}$`);
                click = false
            }
        }
    
})


$('#cerrar').on('click', volver)

function volver(){
    $('#mostrar').addClass('oculto');
    $('#cssmodal').attr('href','../css/nuevo_producto.css')
    click = false;
}

/* BUSCADOR DE DATOS EN LA TABLA DE PRODUCTOS */

const input = document.getElementById('input_buscar');
const table = document.getElementById('tabla');
const tr = table.getElementsByTagName('tr');

input.addEventListener('input', function() {
    var filter = input.value.toUpperCase();
    
    for (var i = 0; i < tr.length; i++) {
        
        var td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            var textValue = td.innerHTML;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
        tr[i].style.display = 'none';
      }
    }
  }
});

