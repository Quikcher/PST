<?php
  session_start();
  if($_SESSION['U_Tipo'] != 'Administrador'){
    header('location: empleados/inicio.php');
  }

  require("layouts/header.php"); ?> <!-- Contiene el cabecero de html y los estilos generales para todos los documentos -->
  <link rel="stylesheet" href="../css/precio_dolar.css">
  <link rel="stylesheet" href="../css/inicio.css">
  <title>Inicio</title>
</head>
<body>
<?php
require("layouts/barra.html") ?> <!-- Barra de navegación -->

<!--Contenido de cada página-->
  <div class="contenido">
    <div class="botones">
      <div class="botones__ventas">
        <button id="ventas">Ventas</button>
      </div>
      <div class="botones__dolar">
        <input type="number" name="dolar" id="dolar" placeholder="Bs" readOnly="false">
      </div>
    </div>

    <div class="tabla">
      <table class="tabla__tabla">
        <thead>
          <tr>
            <th scope="col">Cliente</th>
            <th scope="col">Numero de factura</th>
            <th scope="col">Monto</th>
          </tr>
        </thead>
        <tbody id="mostrar"></tbody>
      </table>
    </div>
  </div>

<script src="../js/inicio.js"></script>
<?php require("layouts/footer.html") ?>