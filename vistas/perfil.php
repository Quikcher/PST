<?php
    session_start();
    if($_SESSION['U_Tipo'] != 'Administrador'){
        header('location: empleados/perfil.php');
    }

require("layouts/header.php"); ?> <!-- Contiene el cabecero de html y los estilos generales para todos los documentos -->
    <link rel="stylesheet" href="../css/perfil.css">
    <title>Mi perfil</title>
</head>
<body>
<?php
require("layouts/barra.html") /* Barra de navegación */
?>

<!--Contenido de cada página-->
<div class="contenido">
    <div class="perfil">
        <img id="Sexo" src="../img/masculino.png" alt="perfil">
        <p id="U_Tipo"></p>
    </div>
    <button type="button" id="editar"><img src="../img/editar.png">Editar</button>
    <h2 id="usuario" ></h2>
    <div class="datos">
        <p>Primer nombre</p>
        <span id="Nombre" ></span>
    </div>
    <div class="datos">
        <p>Segundo nombre</p>
        <span id="S_Nombre"></span>
    </div>
    <div class="datos">
        <p>Primer apellido</p>
        <span id="Apellido" ></span>
    </div>
    <div class="datos">
        <p>Segundo apellido</p>
        <span id="S_Apellido" ></span>
    </div>
    <div class="datos">
        <p>Doc. Identidad</p>
        <span id="CI" ></span>
    </div>
    <div class="datos">
        <p>Telefono</p>
        <span id="Numero"></span>
    </div>
    <div class="datos">
        <p>Correo</p>
        <span id="Correo_Electronico"></span>
    </div>
    <div class="detalles">
        <p>Detalles</p>
        <span>
            <p>Fecha de ingreso:</p>
            <p id="Fecha_Ingreso"></p>
        </span>
        <span>
            <p>Dirección:</p>
            <p id="Nombre_Estado"></p>
            <p id="Nombre_Ciudad"></p>
            <p id="Direccion"></p>
        </span>
    </div>
</div>
<script src="../js/perfil.js"></script>
<?php require("layouts/footer.html") ?>