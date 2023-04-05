function filtro(string){//solo letras y numeros
  var out = '';
  //Se añaden las letras validas
  var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890';//Caracteres validos

  for (var i=0; i<string.length; i++)
     if (filtro.indexOf(string.charAt(i)) != -1) 
     out += string.charAt(i);
  return out;
}

$( '#formulario' ).submit(function( event ) {
  usuario = document.getElementById('usuario').value;
  password = document.getElementById('password').value;

  consulta = {
   "U_Name": usuario,
   "U_Password": password 
    };
  
  $.ajax({
   data:consulta,
       type:"POST",    
       url: "controladores/login.php",
       dataType:"json",
       success: function(received) {
       
           switch (received.U_Tipo) {
            case 'Administrador':
                window.location.href='vistas/inicio.php'
                sessionStorage.setItem('usuario',`${received.U_Name}`)
              break;
            case 'Empleado':
                window.location.href='vistas/empleados/inicio.php'
              break;
            case 'noData':
                mostrar();
                setTimeout(oculto, 5000);
              break;
           
            default:
              console.log(received)
              break;
           }
       }
   });
  event.preventDefault();
});

function mostrar() {
const oculto = document.getElementById('oculto');
  oculto.classList.remove('oculto')
}

function oculto() {
const oculto = document.getElementById('oculto');
  oculto.classList.add('oculto')
}