let dolar = document.getElementById('dolar');
let body = document.querySelector('body');

body.addEventListener('click', (e) => {
        dolar.setAttribute("readOnly","true");
  })

dolar.addEventListener('dblclick', (event) => {
    dolar.removeAttribute("readOnly");
});


/* addEventListener("load", (event) => {
    $.ajax({
        async: true,
        url: "../controladores/tabla__inicio.php",
        beforesend: function(result) {
            $('#mostrar').html("Cargando datos ...")
        },
        success: function(result) {            
            $('#usuario').html(result)
        },error: function(request, status, error){

        }
    });
}); */

document.getElementById('ventas').addEventListener('click', (e) => {
    location.href='pop-up/ventas.html';
})
