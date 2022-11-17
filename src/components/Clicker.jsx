import React from "react";
import { Generator } from "./generator"
// import {useEffect, useState } from "react"

let Generador = class {
  constructor(nombre, cantidad, descripcion, emoji) {
    this.nombre = nombre;
    this.cantidadGenerada = cantidad;
    this.descripcion = descripcion;
    this.emoji = emoji;
  }
};
let genList = []

const data = require("./generators.json")
// console.log(data.generadores)
data.generadores.forEach(element => {
  // console.log(`${element.Nombre}`)
  genList.push(new Generador(element.Nombre, element.Cantidad,element.Descripcion,element.Icono))
});

let whateverAmount = 0

// Crear una funcion que solo guarde whateveramount despues de que ya este inicializado
// function save(){
//   let whateverAmount = parseInt(localStorage.getItem("whateveramount")) 
// }
// function load(){
//   let whateverAmount = parseInt(localStorage.getItem("whateveramount")) 
// }


function generate() {
  whateverAmount = whateverAmount + 1
  console.log(whateverAmount)
  let counter = document.getElementById("Counter")
  counter.innerText = `Whatever Counter ${whateverAmount}`
  localStorage.setItem("whateveramount", whateverAmount);
  whateverAmount = parseInt(localStorage.getItem("whateveramount"))
  
}

export function Clicker() {
  return (
    <>
      <h1>Entro en Clicker</h1>
      <p id="Counter">Whatever Counter {whateverAmount}</p>
      <button className="btn btn-primary" onClick={generate}>Generate Whatever</button>
      {genList.map((element, index) => (
        <Generator key={index} nombre={element.nombre} cantidadGenerada={element.cantidadGenerada} descripcion={element.descripcion} emoji={element.emoji} />
      ))}
    </>
  );
}

