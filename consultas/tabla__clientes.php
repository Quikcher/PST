
$consulta = "SELECT c.Num_Afiliacion, p.CI, p.Nombre, p.Apellido, co.Correo_Electronico FROM $tabla_db2 AS c
    INNER JOIN persona AS p
    INNER JOIN correo AS co
    WHERE c.CI_C = p.CI";
    $resultados = mysqli_query($conexion,$consulta);