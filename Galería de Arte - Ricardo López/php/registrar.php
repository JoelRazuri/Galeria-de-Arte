<?php

include 'conexion.php';

$mail = $_POST['mail'];

if(!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    echo '<script>
            window.history.go(-1);
            alert("El email no es válido");
            </script>';
    exit;
} 

$insertar = "INSERT INTO `mails_de_clientes`(`mail`) VALUES ('$mail' )";

$resultado = mysqli_query($conexion, $insertar);

if(!$resultado) {
    echo  '<script> 
                alert("Correo no registrado");
                window.history.go(-1);
            </script>'; 
}
else {
    echo '<script> 
                alert("Correo registrado"); 
                window.history.go(-1);
            </script>'; 
}

mysqli_close($conexion);
?>