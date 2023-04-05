window.addEventListener("load", (event) => {
    usuario = sessionStorage.getItem('usuario');
    datos = {
        "U_Name": usuario
    }
    $.ajax({
        data: datos,
        url: "../controladores/perfil.php",
        dataType:"json",
        success: function(dato) {    
            console.log(dato);

            if (dato.Sexo == 'M') {
                $('#Sexo').attr('src','../img/masculino.png')
            }else{
                $('#Sexo').attr('src','../img/femenino.png')
            }
            $('#usuario').html(`${usuario}`);
            $('#Nombre').html(`${dato.Nombre}`);
            $('#S_Nombre').html(`${dato.S_Nombre}`);
            $('#Apellido').html(`${dato.Apellido}`);
            $('#S_Apellido').html(`${dato.S_Apellido}`);
            $('#CI').html(`${dato.CI}`);
            $('#Correo_Electronico').html(`${dato.Correo_Electronico}`);
            $('#Fecha_Ingreso').html(`${dato.Fecha_Ingreso}`);
            $('#Nombre_Estado').html(`${dato.Nombre_Estado}`);
            $('#Nombre_Ciudad').html(`${dato.Nombre_Ciudad}`);
            $('#Direccion').html(`${dato.Direccion}`);
            $('#Numero').html(`${dato.Numero}`);
            $('#U_Tipo').html(`${dato.U_Tipo}`);
            editar = dato
        },error: function(request, status, error){

        }
    });
});

$('#editar').on('click', ()=>{
    $('#Numero').html(`<input type="text" value="${editar.Numero}">`);
});