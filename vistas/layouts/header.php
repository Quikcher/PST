<?php
  if(empty($_SESSION['active'])){
    header("location: ../index.html");
  }
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="../img/favicon.ico">
  <link rel="stylesheet" href="../css/estilo.css">
  <link rel="stylesheet" href="../css/ventana_modal.css">
  <script src="../js/jquery/jquery-3.6.3.min.js"></script>