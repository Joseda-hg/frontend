import React from "react";

function Comando(e,comando){
    e.preventDefault()
    alert("PUTA")
    switch(comando){
        case "valor1":
            break;
        default:

    }
}


export function Terminal(){
    // add listener to the submit
    // retrieve value on submit

    return(
        <>
            <h1>TERMINAL</h1>
            <form id="terminale">
                <textarea placeholder="INSERTAR COMANDO AQUI" name="" id="" cols="30" rows="10"></textarea>
                <input type={"submit"} onSubmit={Comando}></input>
            </form>
        </>
    )
}

