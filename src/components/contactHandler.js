export default function  ContactHandler(){
    console.log("Click en Enviar")
    // alert("THANK YOU FOR CONTANTING ME, THIS IS A TEST HANDLER, IT DID NOT SEND ANYTHING FYI")
    let direccionCorreo = document.getElementById("direccionMail").value;
    let Nombre = document.getElementById("nombre").value;
    let Mensaje = document.getElementById("mensaje").value;

    console.log(`Direccion:${direccionCorreo}, ${Nombre}, ${Mensaje}`)
}