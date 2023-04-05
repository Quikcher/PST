<?php
    require('../conexion/abrir_conexion.php');
    $Codigo_Barras = $_POST['codigo_barras'];

    $consulta = "SELECT producto.Codigo_Barras, producto.Nom_Producto, producto.Precio, categoria.Categoria, linea.Linea, linea_tiene_categoria.Rotulado, producto_tiene_talla.Cantidad
	FROM producto
    JOIN categoria ON producto.ID_Categoria = categoria.ID_Categoria AND producto.Codigo_Barras = '$Codigo_Barras'
    JOIN linea ON producto.ID_Linea = linea.ID_Linea
    JOIN linea_tiene_categoria ON linea_tiene_categoria.ID_Linea = linea.ID_Linea AND linea_tiene_categoria.ID_Categoria = categoria.ID_Categoria
    JOIN producto_tiene_talla ON producto_tiene_talla.Codigo_Barras = '$Codigo_Barras'"; 
    $resultado = mysqli_query($conexion,$consulta);
    $rows = array();
    while($r = mysqli_fetch_assoc($resultado)) {
        $rows[] = $r;
    }

    echo json_encode($rows);

?>