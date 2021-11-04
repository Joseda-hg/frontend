import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";



// function ModalAdvertencia() {
//   let modal = document.getElementById("myModal")
//   console.log(modal)
//   console.log(modal.attributes);
//   console.log("ran")
// }

export function Home() {
useEffect(() => 
    console.log("Use effect ran"),[]);
  return (
    <>
    <button type="button" class="btn btn-danger" data-toggle="modal" data-target=".bd-example-modal-lg">Lee esto antes de navegar el sitio</button>      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
        id="myModal"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            Esta pagina esta aun en desarrollo y de momento se mantiene publica
            para mero efecto demostrativo, Se espera que contenga contenido
            incompleto, botones no funcionales, solicitudes que no se envian al
            servidor, contenido plano sin estilo y opciones solo para usuarios
            de forma publica, si comprendes todo lo que esto conlleva, eres
            completamente bienvenido a revisar la pagina a placer, y si asi lo
            deseas de informar cualquier adicion que recomiendes, o fallo que
            este fuera de los parametros anteriores
          </div>
        </div>
      </div>
<hr></hr>
      

      <Link to="/ejercicios">
        <button type="button" class="btn btn-primary btn-lg input-block-level ">
          Llevame a los ejercicios
        </button>
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
