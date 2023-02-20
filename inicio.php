<?php require("layouts/header.html"); ?> <!-- Contiene el cabecero de html y los estilos generales para todos los documentos -->
  <link rel="stylesheet" href="css/inicio.css">
  <title>Inicio</title>
</head>
<body>
<?php
  session_start();
  if(!isset($_SESSION["usuario"])){
   header("location: index.html");
  }
?>

<?php require("layouts/barra.html") ?> <!-- Barra de navegación -->

<!--Contenido de cada página-->
  <div class="contenido">
    <div class="contenido__img">
      <img id="logo" src="img/logo.png" alt="Logo">
    </div>  
  </div>

<?php require("layouts/footer.html") ?>