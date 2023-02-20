addEventListener("load", (event) => {
            
            
            $.ajax({
         
                url: "consultas/tabla__usuarios.php",
                
                beforesend: function(result) {
                    $('#mostrar').html("Cargando datos ...")
                },
                success: function(result) {
                    
                    $('#mostrar').html(result)
                }
            });
});


function eliminar(U_Name){
   
   consulta = {
    "U_Name": U_Name 
   };
   result = confirm("¿Desea eliminar el usuario: "+U_Name+"?");

   if (result == true) {

    quest = prompt("Ingrese la contraseña del usuario administrador:");

        if (quest != "") {
            
            $.ajax({
                data:consulta,
                type:"POST",    
                url: "consultas/eliminar_usuario.php",
                beforesend: function(result1) {
                    $('#DATOS').html("Mensaje antes de enviar")
                },
                success: function(result1) {
                    
                    if (result1 == 1) {

                    alert("Usuario eliminado");
                    location.reload();
                    }
                }
            });
        }
    }
}

document.getElementById('empleado').addEventListener('click', estados());

function estados(){
    let Estados = ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Caracas", "Cojedes", "Delta Amacuro", "Dependencias Federales", 
                    "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", 
                    "Trujillo", "Vargas", "Yaracuy", "Zulia"]
    for (var i = 0; i <Estados.length ; i++) {
        InsertarEstados(Estados[i])
    }
}

function InsertarEstados(estado){
    const selectElement = document.getElementById("estados");
    let htmlToInsert = `<option value="${estado}">${estado}</option>`
    selectElement.insertAdjacentHTML("beforeend", htmlToInsert)
}