import React, {useEffect, useState } from "react";

// Anonima
let Generador = class {
  constructor(nombre, cantidad, descripcion, emoji) {
    this.nombre = nombre;
    this.cantidadGenerada = cantidad;
    this.descripcion = descripcion;
    this.emoji = emoji;
  }
};

let madera = new Generador("madera",1,"Descripcion generador de Madera","🪓") 
console.log(`Este es un generador de ${madera.nombre}, genera ${madera.cantidad} por segundo, ${madera.descripcion} y este es el logo ${madera.emoji}`)



let whateverAmount = 0
// function GameLoop(){
//   const [whateverAmount, setWhateverAmount] = useState(0)
// useEffect(() => {

// }
// )
// }

function generate(){
  alert("GENERATED WHATEVER")
  whateverAmount = whateverAmount + 1
  console.log(whateverAmount)
  let counter = document.getElementById("Counter")
  counter.innerText= `Whatever Counter ${whateverAmount}`
}

export function Clicker() {
  return (
    <>
    <p>Entro en Clicker</p>
    <h1 id="Counter">Whatever Counter {whateverAmount}</h1>
    <button onClick={generate}>Generate Whatever</button>
    <div>
    <i>{madera.emoji}</i>
    <h1>{madera.nombre}</h1>
    <p>{madera.descripcion}</p>
    <p>{madera.cantidadGenerada}</p>
    </div>
    </>
  );
}