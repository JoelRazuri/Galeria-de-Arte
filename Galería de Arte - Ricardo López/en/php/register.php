<?php

include 'conect.php';

$mail = $_POST['email'];

if(!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    echo '<script>
            window.history.go(-1);
            alert("The email is not valid");
            </script>';
    exit;
} 

$insertar = "INSERT INTO `mails_de_clientes`(`mail`) VALUES ('$mail' )";

$resultado = mysqli_query($conect, $insertar);

if(!$resultado) {
    echo  '<script> 
                alert("Unregistered mail");
                window.history.go(-1);
            </script>'; 
}
else {
    echo '<script> 
                alert("Registered mail"); 
                window.history.go(-1);
            </script>'; 
}

mysqli_close($conect);
?>