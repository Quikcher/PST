<?php
    require('../conexion/abrir_conexion.php');
    $Num_Carnet = $_POST['Num_Carnet'];

    $consulta = "SELECT persona.CI, CONCAT(persona.Nombre,' ', persona.S_Nombre,' ', persona.Apellido,' ', persona.S_Apellido) AS Nombre_Completo, persona.Sexo, CONCAT(empleado.Cargo, ' - #',empleado.Num_Carnet) AS Cargo, empleado.Fecha_Ingreso, telefono.Numero, direccion.Direccion, ciudad.Nombre_Ciudad , estado.Nombre_Estado, correo.Correo_Electronico, usuario.U_Name
    FROM persona
    JOIN empleado ON persona.CI = empleado.CI_E
    JOIN telefono ON persona.CI = telefono.CI
    JOIN direccion ON persona.ID_Direccion = direccion.ID_Direccion
    JOIN ciudad ON direccion.ID_Ciudad = ciudad.ID_Ciudad
    JOIN estado ON ciudad.ID_Estado = estado.ID_Estado
    JOIN correo ON persona.CI = correo.CI
    LEFT JOIN usuario ON empleado.CI_E = usuario.CI_E
    WHERE empleado.Num_Carnet = '$Num_Carnet'"; 
    $resultado = mysqli_query($conexion,$consulta);
    $rows = array();
    while($r = mysqli_fetch_assoc($resultado)) {
        $rows[] = $r;
    }

    echo json_encode($rows);
?>