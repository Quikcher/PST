<?php
    include("../conexion/abrir_conexion.php");
    $Nombre = $_POST['Nombre'];
    $S_Nombre = $_POST['S_Nombre'];
    $Apellido = $_POST['Apellido'];
    $S_Apellido = $_POST['S_Apellido'];
    $CI = $_POST['CI'];
    $Sexo = $_POST['Sexo'];
    $Telefono = $_POST['Telefono'];
    $Cargo = $_POST['Cargo'];
    $Ciudad = $_POST['Ciudad'];
    $Direccion = $_POST['Direccion'];
    $Correo = $_POST['Correo'];

    $consulta = "SELECT CI FROM persona WHERE CI = '$CI'";
    $resultado = mysqli_query($conexion, $consulta);
    $filas = mysqli_fetch_row($resultado);

    if($filas == 0){
        mysqli_autocommit($conexion, false);
        mysqli_begin_transaction($conexion);
        $direccion = "INSERT INTO direccion (Direccion, ID_Ciudad) VALUES ('$Direccion', '$Ciudad')";
        $sql1 = mysqli_query($conexion, $direccion);
        $ID_Direccion = mysqli_insert_id($conexion);
        $persona = "INSERT INTO persona (CI, Nombre, S_Nombre, Apellido, S_Apellido, Sexo, ID_Direccion) VALUES ('$CI', '$Nombre', '$S_Nombre', '$Apellido', '$S_Apellido', '$Sexo', '$ID_Direccion')";
        $sql2 = mysqli_query($conexion, $persona);
        $empleado = "INSERT INTO empleado (CI_E, Fecha_Ingreso, Cargo) VALUES ('$CI', now(), '$Cargo')";
        $sql3 = mysqli_query($conexion, $empleado);
        $telefono = "INSERT INTO telefono (Numero, CI) VALUES ('$Telefono', '$CI')";
        $sql4 = mysqli_query($conexion, $telefono);
        $correo = "INSERT INTO correo(Correo_Electronico, CI) VALUES ('$Correo', '$CI')";
        $sql5 = mysqli_query($conexion, $correo);
        if($sql1 && $sql2 && $sql3 && $sql4 && $sql5){
            mysqli_commit($conexion);
            echo "1";
        }else{
            mysqli_rollback($conexion);
            echo "0";
        }
    }
    else{
        echo "El empleado ya existe.";
    }

    mysqli_close($conexion);
?>