<?php
 require("../conexion/abrir_conexion.php");
 $resultado = mysqli_query($conexion, "SELECT * FROM estado");
 while ($recibido = mysqli_fetch_array($resultado)) {
     echo '<option value="'.$recibido['ID_Estado'].'">'.$recibido['Nombre_Estado'].'</option> ';
     
 };
 
?>