<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    // Otros campos del formulario

    // Validar los campos del formulario (puedes agregar más validaciones según tus necesidades)
    if (empty($nombre) || empty($correo) || empty($telefono)) {
        echo 'Por favor, completa todos los campos del formulario.';
        return;
    }

    // Configurar el destinatario y el asunto del correo
    $destinatario = 'jp.figueroamoran@gmail.com';
    $asunto = 'Cita';

    // Construir el cuerpo del correo
    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Correo electrónico: $correo\n";
    $mensaje .= "Teléfono: $telefono\n";
    // Otros campos del formulario

    // Enviar el correo
    $resultado = mail($destinatario, $asunto, $mensaje);

    if ($resultado) {
        echo 'El correo se envió correctamente.';
    } else {
        echo 'Error al enviar el correo. Inténtalo de nuevo más tarde.';
    }
}
?>
