// Importar la librería de SendGrid
const sgMail = require('@sendgrid/mail');

// Importar dotenv para cargar las variables de entorno
require('dotenv').config();

// Configurar la clave API de SendGrid desde la variable de entorno
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sender = '180522@iberopuebla.mx'

// Función para enviar un código de verificación
function sendVerificacion(email, codigo, index_url) {
  const msg = {
    to: email,
    from: sender, // Debe ser una dirección verificada en SendGrid
    templateId: 'd-7af7ec957cc648f5a3af2ffa73fcccbf', 
    dynamicTemplateData: {
      codigo_verificacion: codigo,
      url: index_url
    } 
    };

  sgMail
    .send(msg)
    .then(() => console.log('Código de verificación enviado'))
    .catch(error => console.error(error.toString()));
}

// Función para enviar un link de cambio de contraseña
function sendCambioContrasena(email, nombreUsuario, link) {
  const msg = {
    to: email,
    from: sender, 
    templateId: 'd-78f6e56f07064a48b15a0a53700c6f71',
    dynamicTemplateData:{
        nombre_usuario: nombreUsuario,
        url: link
    }
  };

  sgMail
    .send(msg)
    .then(() => console.log('Email para cambio de contraseña enviado'))
    .catch(error => console.error(error.toString()));
}

// Función para enviar confirmación de creación de cuenta
function sendConfirmacionUsuario(email, nombreUsuario, index_url) {
    const msg = {
      to: email,
      from: sender, 
      templateId: 'd-d4e094e625874b6abcae49ae342b4f4b',
      dynamicTemplateData:{
          nombre_usuario: nombreUsuario,
          url: index_url
      }
    };
  
    sgMail
      .send(msg)
      .then(() => console.log('Confirmación de creación de cuenta enviada'))
      .catch(error => console.error(error.toString()));
  }

  function sendConfirmacionOrden(email, nombreUsuario, idOrden, index_url) {
    const msg = {
      to: email,
      from: sender, // Debe ser una dirección verificada en SendGrid
      templateId: 'd-ede4b8f64d4a4e27b59502c7e13c640d', 
      dynamicTemplateData: {
        nombre_usuario: nombreUsuario,
        id_orden: idOrden,
        url: index_url
      },
    };
  
    sgMail
      .send(msg)
      .then(() => console.log('Confirmación de orden enviada'))
      .catch(error => console.error(error.toString()));
    }
// Ejemplo de uso: 
    // sendVerificacion('sistemasdist2024@gmail.com')
sendConfirmacionOrden('sistemasdist2024@gmail.com', 'Perrito', '12345')