$(window).on('load',producto)

function producto(){
    $.ajax({
        async: true,
        url: "../controladores/tabla__producto.php",
        beforesend: function(result) {
            $('#mostrar').html("Cargando datos ...")
        },
        success: function(recieved) {            
            $('#producto').html(recieved)
        },error: function(request, status, error){

        }
    });
}

function eliminar(Rotulado, Codigo_Barras){
    consulta = {
        "Rotulado": Rotulado,
        "Codigo_Barras": Codigo_Barras 
    };
    result = confirm("¿Desea eliminar el producto: "+Rotulado+Codigo_Barras+"?");

    if (result == true) {
        $.ajax({
            data:consulta,
            type:"POST",    
            url: "../controladores/eliminar_producto.php",
            success: function(result1) {

                if (result1 == 1) {
                    alert("Producto eliminado");
                    location.reload();
                }
            },
            error: function(request, status, error){

            }
        });
    }
}

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
            console.log(JSON.stringify(editar))
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
                error: function(request, status, error){
    
                }
            });
        }
    
})


$('#cerrar').on('click', volver)

function volver(){
    $('#mostrar').addClass('oculto');
    $('#cssmodal').attr('href','../css/nuevo_producto.css')
    click = false;
}
var input = document.getElementById('input_buscar');
var table = document.getElementById('tabla');
var tr = table.getElementsByTagName('tr');

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