<?php
require("abrir_conexion.php");
$U_Name=$_POST['U_Name'];
$U_Password=$_POST['U_Password'];
$consulta="SELECT * FROM $tabla_db22 WHERE U_Name = '$U_Name' AND U_Password = BINARY '$U_Password'";
$resultado=mysqli_query($conexion, $consulta);
$filas=mysqli_num_rows($resultado);

if($filas > 0){
    session_start();
    $_SESSION["usuario"]=$_POST["U_Name"];
    echo '1';
}
else{
    echo '0';
}
mysqli_close($conexion);
?>