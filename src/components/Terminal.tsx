import * as React from "react";

function getComando(e: { preventDefault: () => void; }) {
    // var comando = ""
    e.preventDefault()
    let terminal = document.getElementById("terminal") as HTMLInputElement
    if (terminal === null){
        alert("Something's gone wrong")
    }
    else{
        console.log(terminal.value)
        var comando = terminal.value.toLowerCase()
    }
    
    
    let terminalLog = document.getElementById("terminalLog") as HTMLInputElement;
    let br = document.createElement("br");
    terminalLog.append(terminal.value, br);
    terminal.value = "";
    
    
    
// @ts-ignore
    switch (comando) {
        case "test":
            // console.log("Entro en test")
            break;
        case "clear":
            terminalLog.innerHTML = "Terminal"
            terminalLog.append(br)
            break;
        case "github":
            // convertir en link
            let mensajeGithub = " Mi Github es https://github.com/Joseda-hg/"
            terminalLog.append(mensajeGithub, br)
            break;
        case "rrss":
            let redesSociales = ` Twitter: https://twitter.com/JoseDH29
            Instagram: https://www.instagram.com/joseda.hg/
            YouTube: https://www.youtube.com/channel/UChMlKA_6f2mNJRRbB7RXzkw
            `
            terminalLog.append(redesSociales, br)
            break; 
        case "cv":
            let cv = `PENDIENTE AGREGAR PAGINA LANDING CV`
            terminalLog.append(cv, br)
            break;
        case "help":
            let mensajeAyuda = `Los comandos disponibles son los siguientes
                            clear
                            github
                            rrss
                            games
                            cv
                            help`
            // console.log(mensajeAyuda)
            terminalLog.append(mensajeAyuda, br)

            break;
        case "games":
            break;
        default:
            // console.log("Comando no reconocido, escribe help para recibir una lista de los comandos disponibles")
            terminalLog.append("Comando no reconocido, escribe help para recibir una lista de los comandos disponibles", br)
            break;
    }
}


export function Terminal() {
    return (
        <div id="terminalContainer">
            <p id="terminalLog">Terminal<br></br></p>
            <form onSubmit={getComando} id="terminale">
                <input id="terminal" placeholder="$" type={"textarea"}></input>
            </form>
        </div>
    )
}

