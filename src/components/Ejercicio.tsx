import React from "react";
import { EjercicioList } from "./EjercicioList";
import useFetch from "./useFetch";

export function Ejercicio() {
  const { data: ejercicios } = useFetch(
    "https://joseda-backend.herokuapp.com/api/ejercicios/"
  );

  const handleEjercicioAdd = () => {};

  const handleEjercicioRand = () => {};
  return (
    <div>
      {ejercicios && <EjercicioList ejercicios={ejercicios} />}
      <input
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
