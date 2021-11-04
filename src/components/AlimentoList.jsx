import React from "react";
import { AlimentoItem } from "./AlimentoItem";

export function AlimentoList({ alimentos }) {
  return (
    <ul id="ejerciciolist">
      {alimentos.map((ejercicio) => (
        <AlimentoItem ejercicio={ejercicio} />
      ))}
    </ul>
  );
}
