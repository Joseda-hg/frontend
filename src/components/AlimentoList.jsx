import React from "react";

function AlimentoItem({ ejercicio }) {
  return (
    <div className="card">
      <div className="card-header">{ejercicio.nombre}</div>
      <div className="card-body">
        <h3 className="card-title"> ID del Ejercicio: {ejercicio.id} </h3>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="/" className="btn btn-primary">
          Comprobar Alimento
        </a>
      </div>
    </div>
  );
}

export function AlimentoList({ alimentos }) {
  return (
    <ul id="ejerciciolist">
      {alimentos.map((ejercicio) => (
        <AlimentoItem ejercicio={ejercicio} />
      ))}
    </ul>
  );
}
