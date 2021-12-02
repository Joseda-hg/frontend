export default function  ContactHandler(){
    console.log("Click en Enviar")
    // alert("THANK YOU FOR CONTANTING ME, THIS IS A TEST HANDLER, IT DID NOT SEND ANYTHING FYI")
    let direccionCorreo = document.getElementById("direccionMail").value;
    let Nombre = document.getElementById("nombre").value;
    let Mensaje = document.getElementById("mensaje").value;

    console.log(`Direccion:${direccionCorreo}, ${Nombre}, ${Mensaje}`)

    const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_KEY)

const msg = {
  to: 'josedhg29@gmail.com', // Change to your recipient
  from: 'joseda@joseda.xyz', // Change to your verified sender
  subject: 'Contacto Desde la web',
  text: Mensaje + `Direccion:${direccionCorreo}, Nombre${Nombre}: Mensaje:${Mensaje}`,
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  }) 
  }

