let clienteNoFrencuente = document.querySelector('#check_nuevo_cliente');
let nuevo_cliente = document.getElementById('nuevo_cliente');
clienteNoFrencuente.addEventListener('click', (e) => {
        let status = clienteNoFrencuente.checked;
        switch (status) {
            case true:
                nuevo_cliente.classList.remove('oculto');
                break;
            case false:
                nuevo_cliente.classList.add('oculto');
                break;
        
            default: console.log("no se cambio la clase");
                break;
        }
  })

let agregar_cliente = document.querySelector('#agregar_cliente');
let correo = document.getElementById('correo');

agregar_cliente.addEventListener('click', (e) => {
        let status = agregar_cliente.checked;
        switch (status) {
            case true:
                correo.classList.remove('oculto');
                break;
            case false:
                correo.classList.add('oculto');
                break;
        
            default: console.log("no se cambio la clase");
                break;
        }
  })
