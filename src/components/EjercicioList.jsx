import React from "react";
import { EjercicioItem } from "./EjercicioItem";

export function EjercicioList({ ejercicios }) {
  return (
    <ul id="ejerciciolist">
      {ejercicios.map((ejercicio) => (
        <EjercicioItem ejercicio={ejercicio} />
      ))}
    </ul>
  );
}
