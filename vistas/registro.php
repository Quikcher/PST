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
            <button type="button" name="clientes" id="cliente"><img  src="../img/mostrar_clientes.png" alt="Clientes"></button>
            <button type="button" name="empleados" id="empleado"><img src="../img/mostrar_empleados.png" alt="Empleados"></button>
        </div>
    </div>

    <div class="tabla1">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="text-center">#</th>
                    <th scope="col" class="text-center">Cedula</th>
                    <th scope="col" class="text-center">Nombre</th>
                    <th scope="col" class="text-center">Telefono</th>
                    <th scope="col" class="text-center"></th>
                </tr>
            </thead>
            <tbody id="clientes"></tbody>
        </table>
    </div>

<!--     <div class="tabla2">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="text-center">#</th>
                    <th scope="col" class="text-center">Cedula</th>
                    <th scope="col" class="text-center">Nombre</th>
                    <th scope="col" class="text-center">Cargo</th>
                    <th scope="col" class="text-center">Telefono</th>
                    <th scope="col" class="text-center"></th>
                </tr>
            </thead>
            <tbody id="empleados"></tbody>
        </table>
    </div> -->
</div>
<?php
require("layouts/footer.html");
?>