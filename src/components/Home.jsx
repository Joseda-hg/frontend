import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Link to="/ejercicios">
        <button type="button" class="btn btn-primary btn-lg input-block-level ">Llevame a los ejercicios</button>
      </Link>
      <p>Soy Jose Hernandez</p>
      <p>Bienvenido a mi pagina web</p>
      <p>
        Soy un desarrollador Junior con conocimientos de Python y Javascript
      </p>
      <p>
        Esta pagina esta construida con React para el frontend y Django para el
        backend
      </p>
      <p>Puedes ver algunos de los proyectos en los que he trabajado aqui</p>
      <p>Mantengo un blog aqui</p>
      <p>Algunas de las apps que he publicado estan aqui</p>
      <p>Y puedes ver mi currriculum aqui</p>
      <p>Poner un carrusel con las aplicaciones destacas que he construido</p>
      <p>
        Hay un formulario de contacto en caso de que quieras dar conmigo o
        puedes hacerlo a traves de las redes sociales fijadas en el footer de la
        pagina
      </p>
    </>
  );
}
