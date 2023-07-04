document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Obtener los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var ciudad = document.getElementById('ciudad').value;
    var tipoSeguro = document.getElementById('tipoSeguro').value;
    var horario = document.getElementById('horario').value;
    var mensaje = document.getElementById('mensaje').value;
  
    // Validar los campos del formulario
    if (nombre.trim() === '' || correo.trim() === '' || telefono.trim() === '' || ciudad.trim() === '' || tipoSeguro === '' || horario === '') {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }
  
    if (!validarCorreo(correo)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }
  
    if (!validarTelefono(telefono)) {
      alert('Por favor, ingresa un número de teléfono válido (10 dígitos).');
      return;
    }
  
    // Enviar los datos del formulario al archivo PHP utilizando Ajax
    var data = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      ciudad: ciudad,
      tipoSeguro: tipoSeguro,
      horario: horario,
      mensaje: mensaje
    };
  
    $.ajax({
      url: '../php/contacto.php', // Ruta al archivo PHP que procesará los datos y enviará el correo
      method: 'POST',
      data: data,
      success: function(response) {
        // La solicitud se completó con éxito
        alert('¡Cita agendada con éxito!');
        document.getElementById('appointment-form').reset(); // Limpiar el formulario
      },
      error: function(error) {
        // Hubo un error en la solicitud
        alert('Error al agendar la cita. Inténtalo de nuevo más tarde.');
      }
    });
  
    // Función para validar el formato del correo electrónico
    function validarCorreo(correo) {
      // Expresión regular para validar el correo electrónico
      var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regexCorreo.test(correo);
    }
  
    // Función para validar el formato del número de teléfono
    function validarTelefono(telefono) {
      // Expresión regular para validar el número de teléfono (10 dígitos)
      var regexTelefono = /^\d{10}$/;
      return regexTelefono.test(telefono);
    }
  });
  