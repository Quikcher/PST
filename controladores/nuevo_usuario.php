<?php
    require("../conexion/abrir_conexion.php");

    $U_Tipo = $_POST['U_Tipo'];
    $CI_E = $_REQUEST["CI_E"];

    $Usuario = $_POST['U_Name'];
    $Password = $_POST['Password'];
    $Pregunta_1 = $_POST['Pregunta_1'];
    $Pregunta_2 = $_POST['Pregunta_2'];
    $Pregunta_3 = $_POST['Pregunta_3'];
    $Respuesta_1 = $_POST['Respuesta_1'];
    $Respuesta_2 = $_POST['Respuesta_2'];
    $Respuesta_3 = $_POST['Respuesta_3'];
    $PasswordEncriptada = md5($Password);
    $Encriptada_1 = md5($Respuesta_1);
    $Encriptada_2 = md5($Respuesta_2);
    $Encriptada_3 = md5($Respuesta_3);

    $usuario = "INSERT INTO usuario(U_Name, U_Tipo, U_Password, CI_E) VALUES ('$Usuario', '$U_Tipo', '$PasswordEncriptada', '$CI_E')";
    $query1 = mysqli_query($conexion, $usuario);
    $ID_U = mysqli_insert_id($conexion);

    $recuperar = "INSERT INTO recuperar_password(ID_U) VALUES ('$ID_U')";
    $query2 = mysqli_query($conexion, $recuperar);
    $ID_Recuperar = mysqli_insert_id($conexion);

    $respuesta1 = "INSERT INTO respuesta(Respuesta, ID_Pregunta, ID_Recuperar) VALUES ('$Encriptada_1', '$Pregunta_1', '$ID_Recuperar')";
    $query3 = mysqli_query($conexion, $respuesta1);
    $respuesta2 = "INSERT INTO respuesta(Respuesta, ID_Pregunta, ID_Recuperar) VALUES ('$Encriptada_2', '$Pregunta_2', '$ID_Recuperar')";
    $query4 = mysqli_query($conexion, $respuesta2);
    $respuesta3 = "INSERT INTO respuesta(Respuesta, ID_Pregunta, ID_Recuperar) VALUES ('$Encriptada_3', '$Pregunta_3', '$ID_Recuperar')";
    $query5 = mysqli_query($conexion, $respuesta3);

    if($query1 && $query2 && $query3 && $query4 && $query5){
        if(mysqli_affected_rows($conexion) > 0){
            echo "1";
        }
    }

    mysqli_close($conexion);
?>