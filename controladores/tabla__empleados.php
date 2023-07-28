<?php
	require("../conexion/abrir_conexion.php");
	$resultado = mysqli_query($conexion, "SELECT DISTINCT CONCAT(persona.Nombre, ' ', persona.Apellido) AS Nombre, empleado.CI_E, empleado.Cargo, empleado.Num_Carnet, telefono.Numero
    FROM persona
    JOIN empleado ON persona.CI = empleado.CI_E
    JOIN telefono ON empleado.CI_E = telefono.CI ORDER BY empleado.Cargo, Nombre");
	while ($recibido = mysqli_fetch_array($resultado)) {
		echo '<tr> <td>'.$recibido['Num_Carnet'].'</td> <td>'.$recibido['CI_E'].'</td> <td>'.$recibido['Nombre'].'</td> <td>'.$recibido['Cargo'].'</td> <td>'.$recibido['Numero'].'</td> <td><button type="button">Eliminar</button></td> </tr>';
	};
?>