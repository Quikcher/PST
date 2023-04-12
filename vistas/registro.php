<?php
session_start();

if($_SESSION['U_Tipo'] != 'Administrador'){
  header('location: empleados/inicio.php');
}

require("layouts/header.php"); 
?>

<link rel="stylesheet" href="../css/registro.css">
<title>Registro</title>
</head>
<?php include("layouts/barra.html") ?>
<div class="contenido">
    <div class="buscar">
        <div class="buscar__buscador">
            <input type="search" class="buscar__buscador-input" name="input_buscar" id="input_buscar" placeholder="Buscar">
        </div>
        <div class="buscar__botones">
            <button class="boton_activo" type="button" name="clientes" id="cliente"><img  src="../img/mostrar_clientes.png" alt="Clientes"></button>
            <button type="button" name="empleados" id="empleado"><img src="../img/mostrar_empleados.png" alt="Empleados"></button>
        </div>
    </div>

    <div class="tabla1">
        <table id="clientes" class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <div class="tabla2">
        <table id="empleados" class="table oculto">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                    <th></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</div>
<script src="../js/registro.js"></script>
<?php
require("layouts/footer.html");
?>