<?php 
	$host = "localhost";  
	$basededatos = "fashion_moda_mary_monrroy";
	$usuariodb = "mary";    
	$clavedb = "mary9874123563";   
	$conexion = mysqli_connect($host,$usuariodb,$clavedb,$basededatos);

	$tabla_db1 = "ciudad";
	$tabla_db2 = "cliente";
	$tabla_db3 = "cliente_compra_producto";
	$tabla_db4 = "correo";
	$tabla_db5 = "descuento";
	$tabla_db6 = "direccion";
	$tabla_db7 = "empleado";
	$tabla_db8 = "empresa";
	$tabla_db9 = "estado";
	$tabla_db10 = "factura";
	$tabla_db11 = "municipio";
	$tabla_db12 = "pago";
	$tabla_db13 = "parroquia";
	$tabla_db14 = "persona";
	$tabla_db15 = "producto";
	$tabla_db16 = "producto_tiene_descuento";
	$tabla_db17 = "producto_tiene_factura";
	$tabla_db18 = "producto_tiene_promocion";
	$tabla_db19 = "promocion";
	$tabla_db20 = "recuperar_password";
	$tabla_db21 = "telefono";
	$tabla_db22 = "usuario";
	$tabla_db23 = "usuario_emite_factura";
	$tabla_db24 = "usuario_vende_producto";
?>