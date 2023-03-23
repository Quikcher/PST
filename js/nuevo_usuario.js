/* Seleccion de elementos */

const Usuario = document.getElementById("U_Name");
const Password = document.getElementById("Password");
const Password2 = document.getElementById("Password2");
const Pregunta_1 = document.getElementById('Pregunta_1');
const Pregunta_2 = document.getElementById('Pregunta_2');
const Pregunta_3 = document.getElementById('Pregunta_3');
const Respuesta_1 = document.getElementById("Respuesta_1");
const Respuesta_2 = document.getElementById("Respuesta_2");
const Respuesta_3 = document.getElementById("Respuesta_3");

/* Funcion para enviar datos al servidor */

document.getElementById('agregar_empleado').addEventListener('click', agregar_empleado);

function agregar_empleado(){
    const data_usuario = Object.fromEntries(
        new FormData(formUsuario)
    )
        console.log(JSON.stringify(data_usuario));
    if (Usuario.value == "" || Password.value == "" || Password2.value == "" || Respuesta_1.value == "" || Respuesta_2.value == "" || Respuesta_3.value == "") {
        alert('Hay campos vacios')
    } else if (Password.value != Password2.value) {
        alert('La contraseña no coincide')
    } else if (Pregunta_1.value == 0 || Pregunta_2.value == 0 || Pregunta_3.value == 0) {
        alert('Selecione las preguntas')
    }else{

        const data_usuario = Object.fromEntries(
            new FormData(formUsuario)
        )
        $.ajax({
            data:data_usuario,
            type:"POST",    
            url: "../controladores/nuevo_usuario.php",
            success: function(recieved) {

                switch (recieved) {
                    case '1':
                        alert('El usuario ha sido asignado correctamente')
                        break;
                
                    default:
                        alert(recieved)
                        break;
                }
            },
            error: function(request, status, error){

            }
        });
    }
}

/* Funciones para inhabilitar las preguntas */


let valor1 = Pregunta_1.value;
let valor2 = Pregunta_2.value;
let valor3 = Pregunta_3.value;

Pregunta_1.addEventListener('change',bloqueo);
Pregunta_2.addEventListener('change',bloqueo);
Pregunta_3.addEventListener('change',bloqueo);

function bloqueo(){
    let valorActual1 = Pregunta_1.value;
    let valorActual2 = Pregunta_2.value;
    let valorActual3 = Pregunta_3.value;

    let ValorAnterior1 = Pregunta_1.children[valor2];
    ValorAnterior1.removeAttribute('disabled');
    ValorAnterior1 = Pregunta_1.children[valor3];
    ValorAnterior1.removeAttribute('disabled');
    let hijo1 = Pregunta_1.children[valorActual2];
    hijo1.setAttribute('disabled','');
    hijo1 = Pregunta_1.children[valorActual3];
    hijo1.setAttribute('disabled','');

    let ValorAnterior2 = Pregunta_2.children[valor1];
    ValorAnterior2.removeAttribute('disabled');
    ValorAnterior2 = Pregunta_2.children[valor3];
    ValorAnterior2.removeAttribute('disabled');
    let hijo2 = Pregunta_2.children[valorActual1];
    hijo2.setAttribute('disabled','');
    hijo2 = Pregunta_2.children[valorActual3];
    hijo2.setAttribute('disabled','');
    
    let ValorAnterior3 = Pregunta_3.children[valor1];
    ValorAnterior3.removeAttribute('disabled');
    ValorAnterior3 = Pregunta_3.children[valor2];
    ValorAnterior3.removeAttribute('disabled');
    let hijo3 = Pregunta_3.children[valorActual1];
    hijo3.setAttribute('disabled','');
    hijo3 = Pregunta_3.children[valorActual2];
    hijo3.setAttribute('disabled','');

    valor1 = valorActual1;
    valor2 = valorActual2;
    valor3 = valorActual3;
}



/* Maxima longitud de los inputs */

const maxLength_Usuario = 15;
const maxLength_Password= 20;
const maxLength_Password2= 20;
const maxLength_Respuesta= 30;
const letras = /^[a-zA-Zñ]+$/;

/* Funciones de longitud */

Usuario.addEventListener("input", (event) => {
    if(event.target.value.length > maxLength_Usuario) {
        event.target.value = event.target.value.slice(0, maxLength_Usuario);
    }
});

Password.addEventListener("input", (event) => {
    if(event.target.value.length > maxLength_Password) {
        event.target.value = event.target.value.slice(0, maxLength_Password);
    }
});

Password2.addEventListener("input", (event) => {
    if(event.target.value.length > maxLength_Password2) {
        event.target.value = event.target.value.slice(0, maxLength_Password2);
    }
});

Respuesta_1.addEventListener("input", (event) => {
    if(event.target.value.length > maxLength_Respuesta) {
        event.target.value = event.target.value.slice(0, maxLength_Respuesta);
    }
});

Respuesta_2.addEventListener("input", (event) => {
    if(event.target.value.length > maxLength_Respuesta) {
        event.target.value = event.target.value.slice(0, maxLength_Respuesta);
    }
});

Respuesta_3.addEventListener("input", (event) => {
    if(event.target.value.length > maxLength_Respuesta) {
        event.target.value = event.target.value.slice(0, maxLength_Respuesta);
    }
});