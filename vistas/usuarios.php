<?php
session_start();

if($_SESSION['U_Tipo'] != 'Administrador'){
  header('location: empleados/inicio.php');
}

require("layouts/header.php"); 
?>

<link rel="stylesheet" href="../css/usuarios.css">
<link id= "cssmodal" rel="stylesheet" href="../css/nuevo_usuario.css">

<title>Administrador De Usuarios</title>
</head>
<?php include("layouts/barra.html") ?>
<div class="contenido">
    <div class="buscar">
        <div class="buscar__buscador">
            <input type="search" class="buscar__buscador-input" name="input_buscar" id="input_buscar" placeholder="Buscar">
        </div>
        <div class="buscar__botones">
            <button type="button" name="empleado" id="open"><img src="../img/empleado.png" alt=""></button>
        </div>
    </div>

    <div class="tabla">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Usuario</th>
                    <th>Tipo de Usuario</th>
                    <th>Cédula</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="usuario"></tbody>
        </table>
    </div>
</div>

<div class="modal oculto" id="modal">
    <?php
        require("pop-up/nuevo_usuario.html"); 
    ?>
</div>
<?php
require("layouts/footer.html");
?>

<script src="../js/usuarios.js"></script>
<script src="../js/ventana_modal.js"></script>