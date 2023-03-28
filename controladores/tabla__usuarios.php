<?php
	require("../conexion/abrir_conexion.php");
	$resultado = mysqli_query($conexion, "SELECT ID_U, U_Name, U_Tipo, CI_E FROM usuario WHERE ID_U > 0");
	while ($recibido = mysqli_fetch_array($resultado)) {
		echo '<tr> <td style="text-align: center">'.$recibido['ID_U'].'</td> <td style="text-align: center">'.$recibido['U_Name'].'</td> <td style="text-align: center">'.$recibido['U_Tipo'].'</td> <td style="text-align: center">'.$recibido['CI_E'].'</td> <td style="text-align: center"><button type="button" onclick="eliminar('."'".$recibido['U_Name']."'".')">Eliminar</button></td> </tr>';
	};
?>