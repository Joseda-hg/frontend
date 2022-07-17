// require('dotenv').config()

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey("")

// const msg = {
//   to: 'mikutorif@gmail.com', // Change to your recipient
//   from: 'josedhg29@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then((response) => {
//     console.log(response[0].statusCode)
//     console.log(response[0].headers)
//   })
//   .catch((error) => {
//     console.error(error)
//   })


export default function  ContactHandler(e){
    e.preventDefault()
    console.log("Click en Enviar")
    // alert("THANK YOU FOR CONTANTING ME, THIS IS A TEST HANDLER, IT DID NOT SEND ANYTHING FYI")
    // let direccionCorreo = document.getElementById("direccionMail").value;
    // let Nombre = document.getElementById("nombre").value;
    // let Mensaje = document.getElementById("mensaje").value;


    // TEST DELETE LATER
    let direccionCorreo = "mikutorif+1@gmail.com";
    let Nombre = "Jose Hernandez";
    let Mensaje = "Este es un mensaje que aparentemente es la mas absoluta de las pruebas";
    console.log(`Direccion:${direccionCorreo}, ${Nombre}, ${Mensaje}`)
}
