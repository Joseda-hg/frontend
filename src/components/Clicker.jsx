import React from "react";
import { Generator } from "./generator"
// import {useEffect, useState } from "react"
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
let piedra = new Generador("piedra",1,"Descripcion generador de piedra","🥌") 
let hierro = new Generador("hierro",1,"Descripcion generador de hierro","📎") 
let oro = new Generador("oro",1,"Descripcion generador de oro","🥇") 
let diamante = new Generador("diamante",1,"Descripcion generador de diamante","💎") 
let genList =  [madera, piedra, hierro, oro, diamante]
// console.log(`Este es un generador de ${madera.nombre}, genera ${madera.cantidad} por segundo, ${madera.descripcion} y este es el logo ${madera.emoji}`)




let whateverAmount = parseInt(localStorage.getItem("whateveramount")) 
// Inicialmente era igual a cero


function generate(){
  whateverAmount = whateverAmount + 1
  console.log(whateverAmount)
  let counter = document.getElementById("Counter")
  counter.innerText= `Whatever Counter ${whateverAmount}`
  // localStorage.setItem("lastname", "Smith");
  // console.log(localStorage.getItem("lastname"));
  localStorage.setItem("whateveramount", whateverAmount);
  whateverAmount = parseInt(localStorage.getItem("whateveramount")) 
}

export function Clicker() {
  return (
    <>
    <h1>Entro en Clicker</h1>
    <p id="Counter">Whatever Counter {whateverAmount}</p>
    <button className="btn btn-primary" onClick={generate}>Generate Whatever</button>
      {genList.map((element , index) => (
      <Generator key={index} nombre={element.nombre} cantidadGenerada={element.cantidadGenerada} descripcion={element.descripcion} emoji={element.emoji}/>
      ))}
    </>
  );
}

