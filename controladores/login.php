<?php
    require_once("../conexion/abrir_conexion.php");
    session_start();

    $U_Name = $_POST['U_Name'];
    $U_Password = $_POST['U_Password'];
    $hash = md5($U_Password);

    $consulta = "SELECT ID_U, U_Name, U_Tipo FROM usuario WHERE U_Name = '$U_Name' AND U_Password = BINARY '$hash'";
    $resultado = mysqli_query($conexion,$consulta);
    $filas = mysqli_num_rows($resultado);

    
    if($filas > 0){
        $datos = $resultado->fetch_assoc();

        $_SESSION['active'] = true;
        $_SESSION['ID_U'] = $datos['ID_U'];
        $_SESSION['U_Name'] = $datos['U_Name'];
        $_SESSION['U_Tipo'] = $datos['U_Tipo'];

        echo json_encode($_SESSION);
        
    }else{
        session_destroy();
        echo("noData");
        //header("location: ../index.html");
    }

    mysqli_close($conexion);  
?>