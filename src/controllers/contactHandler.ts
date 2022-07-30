// import "Axios" from Axios
const Axios = require("axios").default

// @ts-ignore
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
    let data = {"nombre":Nombre,
"correo":Mensaje,
"mensaje":direccionCorreo}
let url = "https://josedaxyz-backendjs.herokuapp.com/" 
Axios.post(url, data, {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",   
    }
})
// @ts-ignore
.then(({data}) => {console.log(data)})
}

