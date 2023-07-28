<?php 
require("../conexion/abrir_conexion.php");
$hash = md5($_POST['password']);
$usuario = $_POST['usuario'];

$query = "SELECT U_Password FROM usuario WHERE U_Password = '$hash' AND U_Tipo = 'Administrador' AND U_Name = '$usuario'";
$resultado = mysqli_query($conexion, $query);
if($resultado > 0){
    eliminar($conexion);
}else {
    echo 0;
}

function eliminar($conexion){
    if (isset($_POST['U_Name'])) {
        $U_Name = $_POST['U_Name'];
        mysqli_query($conexion, "DELETE FROM usuario WHERE U_Name = '$U_Name'");
        echo "1";
        mysqli_close($conexion);
    }else if(isset($_POST['Codigo_Barras'])){
        $Codigo_Barras = $_POST['Codigo_Barras'];
        mysqli_query($conexion,"DELETE FROM producto WHERE Codigo_Barras = '$Codigo_Barras'");
        echo "1";
        mysqli_close($conexion);
    }else if(isset($_POST['Num_Carnet'])){
        $Num_Carnet = $_POST['Num_Carnet'];
        mysqli_query($conexion,"DELETE FROM empleado WHERE Num_Carnet = '$Num_Carnet'");
        echo "1";
        mysqli_close($conexion);
    }else{
        echo 404;
        mysqli_close($conexion);
    }/* Las variables no estan definidas */
}
?>