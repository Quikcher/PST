<?php
    require_once("../conexion/abrir_conexion.php");
    require_once("../controladores/cifrado.php");

    session_start();

    $U_Name = $_POST['U_Name'];
    $U_Password = $_POST['U_Password'];
    $consulta = "SELECT ID_U, U_Name, U_Tipo FROM $tabla_db22 WHERE U_Name = '$U_Name' AND U_Password = BINARY '$U_Password'";
    $resultado = mysqli_query($conexion,$consulta);
    $filas = mysqli_num_rows($resultado);

    if($filas > 0){
        $datos = $resultado->fetch_assoc();

        $_SESSION['active'] = true;
        $_SESSION['ID_U'] = $datos['ID_U'];
        $_SESSION['U_Name'] = $datos['U_Name'];
        $_SESSION['U_Tipo'] = $datos['U_Tipo'];

        switch ($_SESSION['U_Tipo']){
            case 'Administrador':
                header('location: ../vistas/inicio.php');
                break;
            case 'Empleado':
                header('location: ../vistas/empleados/inicio.php');
                break;
        }
    }else{
        session_destroy();
        header("location: ../index.html");
    }

    mysqli_close($conexion);  
?>