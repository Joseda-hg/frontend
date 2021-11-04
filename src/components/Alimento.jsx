import React from "react";
import { AlimentoList } from "./AlimentoList";
import {useEffect, useState} from "react"



export function Alimento() {
  const [Alimentos, setAlimentos] = useState(null);
  useEffect(() => {
    fetch("http://www.joseda.xyz/api/alimentos/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setAlimentos(data);
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
{Alimentos && <AlimentoList alimentos={Alimentos} />
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
        Añadir Alimento
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