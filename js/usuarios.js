addEventListener("load", (event) => {
    $.ajax({
        async: true,
        url: "../controladores/tabla__usuarios.php",
        beforesend: function(result) {
            $('#mostrar').html("Cargando datos ...")
        },
        success: function(result) {   
            
            $('#usuario').html(result)
            const tabla = document.getElementById('tabla');
            filas = tabla.getElementsByTagName('tr');
            
            for (let index = 1; index < filas.length; index++) {
                
                botonEliminar = filas[index].lastElementChild.lastChild
                botonEliminar.addEventListener('click', (e)=>{
                    e.stopPropagation();
                    var usuario = filas[index].children[2].textContent;
                    eliminar(usuario)
                })
            
            }            
        },error: function(request, status, error){

        }
    });
});
/* MODAL ELIMINAR USUARIO */
function eliminar(U_Name){

    $('#confirmacion').text(`Seguro que desea eliminar el usuario: ${U_Name}`)
   $('#cssmodal').attr('href','../css/eliminar.css')
   $('#eliminar').removeClass('oculto')

   document.getElementById('eliminar_usuario').addEventListener('click',()=>{
    let confirmarEliminar = Object.fromEntries(
        new FormData(Eliminar));
        confirmarEliminar.U_Name = U_Name;
        $.ajax({
            data:confirmarEliminar,
            type:"POST",    
            url: "../controladores/eliminar_usuario.php",
            dataType:'json',
            success: function datos(recieved) {
                if (recieved == 1) {
                    alert('El Usuario ha sido eliminado');
                    volver();
                }
    
            },
        });
    })
        
}

document.getElementById('cerrarEliminar').addEventListener('click',volver)
function volver(){
    $('#eliminar').addClass('oculto');
    $('#cssmodal').attr('href','../css/nuevo_empleado.css')
}