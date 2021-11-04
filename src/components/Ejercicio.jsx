import React from "react";
import { EjercicioList } from "./EjercicioList";
import {useEffect, useState} from "react"



export function Ejercicio() {
  const [Ejercicios, setEjercicios] = useState(null);
  useEffect(() => {
    fetch("https://joseda-backend.herokuapp.com/api/ejercicios/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setEjercicios(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
  }, [])
  const handleEjercicioAdd = () => {};
  
  const handleEjercicioRand = () => {};
  return (
    <div>
{Ejercicios && <EjercicioList ejercicios={Ejercicios} />
}      <input
        className="form-control"
        type="text"
        placeholder="Nuevo Ejercicio"
        ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Descripcion"
        ></input>
      <button className="btn btn-primary" onClick={handleEjercicioAdd}>
        Añadir Ejercicio
      </button>

      <p>Mas ejercicios</p>
      <input
        className="form-control"
        type="text"
        placeholder="Numero de Ejercicios"
        ></input>
      <button className="btn btn-primary" onClick={handleEjercicioRand}>
        Otros Ejercicios
      </button>
    </div>
  );
}