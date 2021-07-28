import React from 'react'

export function EjercicioItem({ejercicio}) {
    
    return (
        // <li >
        //     {ejercicio.id} - 
        //     {ejercicio.nombre}  -  
        //     {ejercicio.descripcion}
        // </li>
        <div class="card">
  <div class="card-header">
    {ejercicio.nombre}
  </div>
  <div class="card-body">
    <h3 class="card-title"> ID del Ejercicio: { ejercicio.id } </h3>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Comprobar Ejercicio</a>
  </div>
</div>
    )
}
