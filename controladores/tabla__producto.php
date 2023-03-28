<?php
	require("../conexion/abrir_conexion.php");
	$resultado = mysqli_query($conexion, "SELECT producto.Nom_Producto, producto.Precio, categoria.Categoria, linea.Linea, CONCAT(linea_tiene_categoria.Rotulado, producto.Codigo_Barras) AS Codigo_Barras, SUM(producto_tiene_talla.Cantidad) AS Cantidad
	FROM producto
    JOIN categoria ON producto.ID_Categoria = categoria.ID_Categoria
    JOIN linea ON producto.ID_Linea = linea.ID_Linea
    JOIN linea_tiene_categoria ON linea_tiene_categoria.ID_Linea = linea.ID_Linea AND linea_tiene_categoria.ID_Categoria = categoria.ID_Categoria
    JOIN producto_tiene_talla WHERE producto_tiene_talla.Codigo_Barras = producto.Codigo_Barras;
");
	while ($recibido = mysqli_fetch_array($resultado)) {
		echo '<tr> <td style="text-align: center">'.$recibido['ID_U'].'</td> <td style="text-align: center">'.$recibido['U_Name'].'</td> <td style="text-align: center">'.$recibido['U_Tipo'].'</td> <td style="text-align: center">'.$recibido['CI_E'].'</td> <td style="text-align: center"><button type="button" onclick="eliminar('."'".$recibido['U_Name']."'".')">Eliminar</button></td> </tr>';
	};
?>