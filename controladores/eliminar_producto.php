<?php 
require("../conexion/abrir_conexion.php");
$Codigo_Barras = $_POST['Codigo_Barras'];
$resultado = mysqli_query($conexion,"DELETE FROM producto WHERE Codigo_Barras = '$Codigo_Barras'");
echo "1";
?>