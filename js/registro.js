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

            tablaEmpleados = document.getElementById('empleados')
            filas = tablaEmpleados.getElementsByTagName('tr');

            for (let index = 1; index < filas.length; index++) {
                filas[index].addEventListener('dblclick', (e)=>{
                    e.stopPropagation();
                    let Num_Carnet = filas[index].children[0].textContent;
                    mostrar(Num_Carnet)
                })

                botonEliminar = filas[index].lastElementChild.lastChild;
                botonEliminar.addEventListener('click', (e)=>{
                    e.stopPropagation();
                    let Num_Carnet = filas[index].children[0].textContent;
                    let Nom_Empleado = filas[index].children[2].textContent;
                    eliminar(Num_Carnet,Nom_Empleado)
                })
            
            }
        }
    });
}

function mostrar(Num_Carnet){
    data={
        "Num_Carnet": Num_Carnet
    }
    $.ajax({
        data:data,
        type:"POST",    
        url: "../controladores/mostrar_empleado.php",
        dataType:'json',
        success: function datos(recieved) {
                
                $('#Nombre_Completo').text(`${recieved[0].Nombre_Completo}`);
                $('#Sexo').text(`${recieved[0].Sexo}`);
                $('#Cargo').text(`${recieved[0].Cargo}`);
                $('#Cedula').text(`${recieved[0].CI}`);
                $('#Telefono').text(`${recieved[0].Numero}`);
                $('#Estado').text(`${recieved[0].Nombre_Estado}`);
                $('#Ciudad').text(`${recieved[0].Nombre_Ciudad}`);
                $('#Direccion').text(`${recieved[0].Direccion}`);
                $('#Correo').text(`${recieved[0].Correo_Electronico}`);
                $('#Fecha_Ingreso').text(`${recieved[0].Fecha_Ingreso}`);
                if (recieved[0].U_Name == 'NULL') {
                    $('#Usuario').text(`${recieved[0].U_Name}`);
                }else{
                    $('#Usuario').html(`Sin usuario`);
                }

                $('#cssmodal').attr('href','../css/empleado.css')
                $('#mostrar').removeClass('oculto');
                ver = recieved;
                

        },
        error: function(request, status, error){
            alert(error)
        }
    });
}

function eliminar(Num_Carnet,Nom_Empleado){

    $('#confirmacion').text(`Seguro que desea eliminar el empleado: ${Nom_Empleado}`)
   $('#cssmodal').attr('href','../css/eliminar.css')
   $('#eliminar').removeClass('oculto')

   document.getElementById('delete').addEventListener('click',()=>{
    let confirmarEliminar = Object.fromEntries(
        new FormData(Eliminar));
        usuario = localStorage.getItem('usuario');
        confirmarEliminar.Num_Carnet = Num_Carnet;
        confirmarEliminar.usuario = usuario;

        $.ajax({
            data:confirmarEliminar,
            type:"POST",    
            url: "../controladores/eliminar.php",
            dataType:'json',
            success: function datos(recieved) {
                console.log(recieved);
                if (recieved == 1) {
                    alert('El Usuario ha sido eliminado');
                    volver();
                }else if (recieved == 0) {
                    alert('Contraseña incorrecta');
                } else if (recieved== 404) {
                    alert('Ha ocurrido un error al intentar eliminar el usuario');
                    
                }
    
            },
        });
    })
        
}

document.getElementById('cerrar').addEventListener('click',()=>{
    $('#mostrar').addClass('oculto');
})
document.getElementById('cerrarEliminar').addEventListener('click',volver)
function volver(){
    $('#eliminar').addClass('oculto');
    $('#cssmodal').attr('href','../css/empleado.css')
}