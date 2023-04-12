$('#cliente').on('click', ()=>{
    $('#cliente').addClass('boton_activo')
    $('#empleado').removeClass('boton_activo')
    $('#clientes').removeClass('oculto')
    $('#empleados').addClass('oculto')
})
$('#empleado').on('click', ()=>{
    $('#empleado').addClass('boton_activo')
    $('#cliente').removeClass('boton_activo')
    $('#empleados').removeClass('oculto')
    $('#clientes').addClass('oculto')
})
$(document).on('load', clientes);
$(document).ready(empleados);

function clientes(){
    $.ajax({
        async: true,
        url: "../controladores/tabla__clientes.php",
        success: function(recieved) {            
            $('#clientes > tbody').html(recieved)
        }
    });
}
function empleados(){
    $.ajax({
        async: true,
        url: "../controladores/tabla__empleados.php",
        success: function(recieved) {            
            $('#empleados > tbody').html(recieved)
        }
    });
}

