import React from "react";

function Comando(e) {
    e.preventDefault()

    let terminal = document.getElementById("terminal")
    console.log(terminal.value)
    let comando = terminal.value
    let terminalLog = document.getElementById("terminalLog")
    let br = document.createElement("br")
    terminalLog.append(terminal.value, br)
    terminal.value = ""

    switch (comando) {
        case "test":
            // console.log("Entro en test")
            break;
        case "clear":
            terminalLog.innerHTML = "terminal"
            terminalLog.append(br)
            break;
        case "github":
            // convertir en link
            let mensajeGithub = " Mi Github es https://github.com/Joseda-hg/"
            terminalLog.append(mensajeGithub, br)
            break;
        case "rrss":
            let redesSociales = ` Twitter
            Instagram
            YouTube
            `
            terminalLog.append(redesSociales, br)
            break; 
        case "cv":
            break;
        case "about":
            break;
        case "projects":
            break;
        case "help":
            let mensajeAyuda = `Los comandos disponibles son los siguientes
                            clear
                            github
                            rrss
                            games
                            cv
                            about
                            projects
                            help`
            // console.log(mensajeAyuda)
            terminalLog.append(mensajeAyuda, br)

            break;
        case "games":
            break;
        default:
            console.log("Comando no reconocido, escribe help para recibir una lista de los comandos disponibles")
            break;
    }
}


export function Terminal() {
    return (
        <div id="terminalContainer">
            <p id="terminalLog">TERMINAL<br></br></p>
            <form onSubmit={Comando} id="terminale">
                <input id="terminal" placeholder="INSERTAR COMANDO AQUI" cols="30" rows="10" type={"textarea"}></input>
            </form>
        </div>
    )
}

