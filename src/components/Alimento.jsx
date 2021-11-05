import React from "react";
import { AlimentoList } from "./AlimentoList";
import useFetch from "./useFetch";

export function Alimento() {
  const { data: Alimentos } = useFetch(
    "https://joseda-backend.herokuapp.com/api/alimentos/"
  );
  const handleEjercicioAdd = () => {};

  const handleEjercicioRand = () => {};
  return (
    <div>
      {Alimentos && <AlimentoList alimentos={Alimentos} />}{" "}
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
