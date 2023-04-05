<?php
    require("../conexion/abrir_conexion.php");

$array = $_REQUEST['U_Name'];
$datos = "SELECT persona.CI, persona.Nombre, persona.S_Nombre, persona.Apellido, persona.S_Apellido, persona.Sexo, empleado.Fecha_Ingreso, telefono.Numero, correo.Correo_Electronico, direccion.Direccion, ciudad.Nombre_Ciudad, estado.Nombre_Estado, usuario.U_Tipo
FROM persona
JOIN empleado ON persona.CI = empleado.CI_E
JOIN telefono ON persona.CI = telefono.CI
JOIN correo ON persona.CI = correo.CI
JOIN direccion ON persona.ID_Direccion = direccion.ID_Direccion
JOIN ciudad ON direccion.ID_Ciudad = ciudad.ID_Ciudad
JOIN estado ON ciudad.ID_Estado = estado.ID_Estado
JOIN usuario WHERE usuario.U_Name = '$array' 
AND usuario.CI_E = empleado.CI_E";

$query = mysqli_query($conexion, $datos);
$resultado = mysqli_fetch_assoc($query);
echo json_encode($resultado);
?>