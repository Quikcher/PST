$('#agregar_empleado').on('click', nuevo_empleado);

function nuevo_empleado() {
    const data_empleado = Object.fromEntries(
        new FormData(Empleado)
    )

    if (data_empleado.Nombre == "" || data_empleado.S_Nombre == "" || data_empleado.Apellido == "" || data_empleado.S_Apellido == "" || data_empleado.CI == "" || data_empleado.Sexo == "" || data_empleado.Telefono == "" || data_empleado.Cargo == "" || data_empleado.Estado == null || data_empleado.Ciudad == null || data_empleado.Direccion == "") {
        alert("Hay campos vacios");
    }else{
        $.ajax({
            data:data_empleado,
            type:"POST",    
            url: "../controladores/nuevo_empleado.php",
            success: function(recieved) {
                switch (recieved) {
                    case '':
                        alert('validado')
                        break;
                
                    default:
                        break;
                }
            },
            error: function(request, status, error){

            }
        });
    }
}

const nombre = document.getElementById("nombre");
const s_nombre = document.getElementById("s_nombre");
const apellido = document.getElementById("apellido");
const s_apellido = document.getElementById("s_apellido");
const ci = document.getElementById("ci");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");

const maxLength_nombre = 12;
const maxLength_s_nombre = 12;
const maxLength_apellido = 12;
const maxLength_s_apellido = 12;
const maxLength_ci = 8;
const maxLength_telefono = 11;
const maxLength_direccion = 60;
const letras = /^[a-zA-Z]+$/;
const numeros = /^[0-9]+$/;

function Caracteres(event){
    const valorInput = event.target.value;
    if(!letras.test(valorInput)){
        event.target.value = valorInput.slice(0, -1);
    }    
}

function Numeros(event){
    const valorInput = event.target.value;
    const codigoInput = event.charCode;
    if(!numeros.test(valorInput)){
        event.target.value = valorInput.slice(0, -1);
    }
   if(codigoInput == 45 || codigoInput == 43 || codigoInput == 46) {
      event.target.value = valorInput.slice(0, -1);
   }
}

nombre.addEventListener("input", (event) => {
    Caracteres(event);
    if(event.target.value.length > maxLength_nombre) {
        event.target.value = event.target.value.slice(0, maxLength_nombre);
    }
});
s_nombre.addEventListener("input", (event) => {
    Caracteres(event);
    if (event.target.value.length > maxLength_s_nombre) {
        event.target.value = event.target.value.slice(0, maxLength_s_nombre);
    }
});
apellido.addEventListener("input", (event) => {
    Caracteres(event);
    if (event.target.value.length > maxLength_apellido) {
        event.target.value = event.target.value.slice(0, maxLength_apellido);
    }
});
s_apellido.addEventListener("input", (event) => {
    Caracteres(event);
    if (event.target.value.length > maxLength_s_apellido) {
        event.target.value = event.target.value.slice(0, maxLength_s_apellido);
    }
});
ci.addEventListener("input", (event) => {
    Numeros(event);
  if (event.target.value.length > maxLength_ci) {
    event.target.value = event.target.value.slice(0, maxLength_ci);
  }
});
telefono.addEventListener("input", (event) => {
    Numeros(event);
  if (event.target.value.length > maxLength_telefono) {
    event.target.value = event.target.value.slice(0, maxLength_telefono);
  }
});
direccion.addEventListener("input", (event) => {
  if (event.target.value.length > maxLength_direccion) {
    event.target.value = event.target.value.slice(0, maxLength_direccion);
  }
});

// cargar datos para la seleccion de estados 
    $.ajax({
        type:"POST",    
        url: "../controladores/estados.php",
        success: function(recieved) {
            estado= document.getElementById('estado');
            estado.insertAdjacentHTML("beforeend", recieved)
          
        },
        error: function(request, status, error){

        }
    });

$('#estado').on('change', ciudad);

function ciudad(){
    dato = document.getElementById('estado').value;
    datos = {"estado": dato};

    $.ajax({
        data: datos,
        type:"POST",    
        url: "../controladores/ciudad.php",
        success: function(recieved) {
            let ciudad= document.getElementById('ciudad');
            $('#ciudad').html(recieved)
        },
    });
}