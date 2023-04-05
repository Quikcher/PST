<?php
	require("../conexion/abrir_conexion.php");
	$resultado = mysqli_query($conexion, "SELECT producto.Codigo_Barras, producto.Nom_Producto, producto.Precio, categoria.Categoria, linea.Linea, linea_tiene_categoria.Rotulado, SUM(producto_tiene_talla.Cantidad) AS Cantidad
	FROM producto
    JOIN categoria ON producto.ID_Categoria = categoria.ID_Categoria
    JOIN linea ON producto.ID_Linea = linea.ID_Linea
    JOIN linea_tiene_categoria ON linea_tiene_categoria.ID_Linea = linea.ID_Linea AND linea_tiene_categoria.ID_Categoria = categoria.ID_Categoria
    JOIN producto_tiene_talla WHERE producto_tiene_talla.Codigo_Barras = producto.Codigo_Barras GROUP BY producto.Codigo_Barras ORDER BY linea.Linea, producto.Nom_Producto");
	while ($recibido = mysqli_fetch_array($resultado)) {
		echo '<tr ondblclick="mostrar('."'".$recibido['Codigo_Barras']."'".')"> <td style="text-align: center">'.$recibido['Rotulado'].$recibido['Codigo_Barras'].'</td> <td style="text-align: center">'.$recibido['Nom_Producto'].'</td> <td style="text-align: center">'.$recibido['Linea'].'</td> <td style="text-align: center">'.$recibido['Categoria'].'</td> <td style="text-align: center">'.$recibido['Cantidad'].'</td> <td style="text-align: center">'.$recibido['Precio'].'$</td> <td style="text-align: center"><button type="button" onclick="eliminar('."'".$recibido['Rotulado']."',"."'".$recibido['Codigo_Barras']."'".')">Eliminar</button></td> </tr>';
	};
?>