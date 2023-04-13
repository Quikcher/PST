<?php
	require("../conexion/abrir_conexion.php");
	$resultado = mysqli_query($conexion, "SELECT CONCAT(persona.Nombre, ' ', persona.Apellido) AS Nombre, usuario.ID_U, usuario.U_Name, usuario.U_Tipo, usuario.CI_E
	FROM persona
	JOIN usuario WHERE ID_U > 0 AND persona.CI = usuario.CI_E ORDER BY Nombre, CI_E");
	while ($recibido = mysqli_fetch_array($resultado)) {
		echo '<tr> <td>'.$recibido['ID_U'].'</td> <td>'.$recibido['Nombre'].'</td> <td>'.$recibido['U_Name'].'</td> <td>'.$recibido['U_Tipo'].'</td> <td>'.$recibido['CI_E'].'</td> <td><button type="button">Eliminar</button></td> </tr>';
	};
?>