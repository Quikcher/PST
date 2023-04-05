<?php
    require("../conexion/abrir_conexion.php");

    if (!isset($_POST['editar'])) {
        
        $Nombre_Producto = $_POST['Nombre_Producto'];
        $Precio = $_POST['Precio'];
        $Categoria = $_POST['Categoria'];
        $Linea = $_POST['Linea'];
        $Cantidad_XS = $_POST['Cantidad_XS'];
        $Cantidad_S = $_POST['Cantidad_S'];
        $Cantidad_XL = $_POST['Cantidad_XL'];
        $Cantidad_L = $_POST['Cantidad_L'];
        $Cantidad_XM = $_POST['Cantidad_XM'];
        $Cantidad_M = $_POST['Cantidad_M'];
        $Cantidad_Unica = $_POST['Cantidad_Unica'];
        
        $producto = "INSERT INTO producto(Nom_Producto, Precio, ID_Categoria, ID_Linea) VALUES ('$Nombre_Producto', '$Precio', '$Categoria', '$Linea')";
        $query1 = mysqli_query($conexion, $producto);
        $Codigo_Barras = mysqli_insert_id($conexion);

        if($Cantidad_XS){
            $cantidad = "INSERT INTO producto_tiene_talla(Codigo_Barras, ID_Talla, Cantidad) VALUES ('$Codigo_Barras', '1', '$Cantidad_XS')";
            $query = mysqli_query($conexion, $cantidad);
        }
        if($Cantidad_S){
            $cantidad = "INSERT INTO producto_tiene_talla(Codigo_Barras, ID_Talla, Cantidad) VALUES ('$Codigo_Barras', '2', '$Cantidad_S')";
            $query = mysqli_query($conexion, $cantidad);
        }
        if($Cantidad_XM){
            $cantidad = "INSERT INTO producto_tiene_talla(Codigo_Barras, ID_Talla, Cantidad) VALUES ('$Codigo_Barras', '3', '$Cantidad_XM')";
            $query = mysqli_query($conexion, $cantidad);
        }
        if($Cantidad_M){
            $cantidad = "INSERT INTO producto_tiene_talla(Codigo_Barras, ID_Talla, Cantidad) VALUES ('$Codigo_Barras', '4', '$Cantidad_M')";
            $query = mysqli_query($conexion, $cantidad);
        }
        if($Cantidad_XL){
            $cantidad = "INSERT INTO producto_tiene_talla(Codigo_Barras, ID_Talla, Cantidad) VALUES ('$Codigo_Barras', '5', '$Cantidad_XL')";
            $query = mysqli_query($conexion, $cantidad);
        }
        if($Cantidad_L){
            $cantidad = "INSERT INTO producto_tiene_talla(Codigo_Barras, ID_Talla, Cantidad) VALUES ('$Codigo_Barras', '6', '$Cantidad_L')";
            $query = mysqli_query($conexion, $cantidad);
        }
        if($Cantidad_Unica){
            $cantidad = "INSERT INTO producto_tiene_talla(Codigo_Barras, ID_Talla, Cantidad) VALUES ('$Codigo_Barras', '7', '$Cantidad_Unica')";
            $query = mysqli_query($conexion, $cantidad);
        }
        echo 1;
    }else if($_POST['editar'] == 1){
        $Codigo_Barras = $_POST['Codigo_Barras'];
        $Nom_Producto = $_POST['Nom_Producto'];
        $Precio = $_POST['Precio'];
        $editar = "UPDATE producto SET Nom_Producto = '$Nom_Producto', Precio = '$Precio' WHERE Codigo_Barras = $Codigo_Barras";
        $query = mysqli_query($conexion, $editar);
        echo '2';
    } 
    mysqli_close($conexion);
?>