<?php
 require("../conexion/abrir_conexion.php");
 $estado = $_POST['estado'];
 
 $resultado = mysqli_query($conexion, "SELECT * FROM $tabla_db1 WHERE ID_Estado = '$estado'");
 while ($recibido = mysqli_fetch_array($resultado)) {
     echo '<option value="'.$recibido['ID_Ciudad'].'">'.$recibido['Nombre_Ciudad'].'</option> ';
     
 };
 
?>