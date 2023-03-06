addEventListener("load", (event) => {
    $.ajax({
        async: true,
        url: "../controladores/tabla__usuarios.php",
        beforesend: function(result) {
            $('#mostrar').html("Cargando datos ...")
        },
        success: function(result) {            
            $('#usuario').html(result)
        },error: function(request, status, error){

        }
    });
});

function eliminar(U_Name){
   consulta = {
    "U_Name": U_Name 
   };
   result = confirm("¿Desea eliminar el usuario: "+U_Name+"?");

   if (result == true) {
        $.ajax({
            data:consulta,
            type:"POST",    
            url: "../controladores/eliminar_usuario.php",
            beforesend: function(result1) {
                $('#DATOS').html("Mensaje antes de enviar")
            },
            success: function(result1) {
                
                if (result1 == 1) {
                    alert("Usuario eliminado");
                    location.reload();
                }
            },
            error: function(request, status, error){

            }
        });
        
    }
}

document.querySelector('#agregar_empleado').addEventListener('click',(e) => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(nuevo_empleado)
    );
});

