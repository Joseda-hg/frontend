import React from "react";

function gameLoop(){

}

function generate(){
  alert("GENERATED WHATEVER")
}

export function Clicker() {
  return (
    <>
    <p>Entro en Clicker</p>
    <h1>Whatever Counter</h1>
    <button onClick={generate}>Generate Whatever</button>
    </>
  );
}