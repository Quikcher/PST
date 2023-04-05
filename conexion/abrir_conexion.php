<?php 
	$host = "localhost";  
	$basededatos = "fashion_moda_mary_monrroy";
	$usuariodb = "mary";    
	$clavedb = "mary9874123563";   
	$conexion = mysqli_connect($host,$usuariodb,$clavedb,$basededatos);

	if ($conexion->connect_errno){
		echo "No se pudo conectar con MYSQL: ".$conexion->connect_error;
		exit();
	}

	$conexion->set_charset("utf8");
?>