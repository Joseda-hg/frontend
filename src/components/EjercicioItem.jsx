import React from "react";

export function EjercicioItem({ ejercicio }) {
  return (
    // <li >
    //     {ejercicio.id} -
    //     {ejercicio.nombre}  -
    //     {ejercicio.descripcion}
    // </li>
    <div className="card">
      <div className="card-header">{ejercicio.nombre}</div>
      <div className="card-body">
        <h3 className="card-title"> ID del Ejercicio: {ejercicio.id} </h3>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="/" className="btn btn-primary">
          Comprobar Ejercicio
        </a>
      </div>
    </div>
  );
}
