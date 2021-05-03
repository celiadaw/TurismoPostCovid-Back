
const { doQuery } = require('../utilities/doQuery');

const nodemailer = require('nodemailer');
//Endpoint que recibe los datos de contacto y los envía al email del hotel (front nos envía este dato o algún dato para buscar el mail del hotel)
exports.contact = async (req, res) => {}




// exports.mailer = (email, link) => {
//   const transporter = nodemailer.createTransport({
//     service: process.env.SMTP_SERVICE,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });
// /* const htmlMail 
//  aquí podemos enviar la respuesta en formato html 

// */
//   let mailOptions = {
//     from: '@gmail.com', //email de destino
//     to: email, //email del cliente
//     subject: `Nueva Reserva `, 
//     text: ``,//datos de la reserva(fecha, habitaciones etc) 
//     //datos del cliente
//     html: htmlMail,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       throw error;
//     } else {
//       console.log('Email sent: ' + info.response);
//       return true;
//     }
//   });
// };