<?php 
require("../conexion/abrir_conexion.php");
$U_Name = $_POST['U_Name'];
$resultado = mysqli_query($conexion,"DELETE FROM $tabla_db22 WHERE U_Name LIKE '$U_Name'");
echo "1";
?>