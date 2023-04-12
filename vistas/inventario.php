<?php
session_start();

if($_SESSION['U_Tipo'] != 'Administrador'){
  header('location: empleados/inventario.php');
}

require("layouts/header.php"); 
?>

<link rel="stylesheet" href="../css/inventario.css">
<link id="cssmodal" rel="stylesheet" href="../css/nuevo_producto.css">


<title>Inventario</title>
</head>
<?php include("layouts/barra.html") ?>
<div class="contenido">
    <div class="buscar">
        <div class="buscar__buscador">
            <input type="search" class="buscar__buscador-input" name="input_buscar" id="input_buscar" placeholder="Codigo de Barras">
        </div>
        <div class="buscar__botones">
            <button title="Agregar producto" type="button" name="producto" id="open"><img src="../img/producto.png" alt=""></button>
        </div>
    </div>

    <div class="tabla">
        <table class="table" id="tabla">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Producto</th>
                    <th>Linea</th>
                    <th>Categoria</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="producto">
                
            </tbody>
        </table>
    </div>
</div>

<div class="modal oculto" id="modal">
    <?php require("pop-up/nuevo_producto.html"); ?>
</div>
<div class="modal oculto" id="mostrar">
    <?php require('pop-up/producto.html');?> 
</div>
<?php
require("layouts/footer.html");
?>
<script src="../js/inventario.js"></script>