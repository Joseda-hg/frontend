import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
require("bootstrap");

export function Home() {
  useEffect(() => console.log("Use effect ran"), []);
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div id="landingText">
              <h1 class="atx" id="hola-bienvenid_">
                Hola, Bienvenid@_
              </h1>
              <h2
                class="atx"
                id="soy-jose-hernandez-programador-youtuber-y-ocasionalmente-blogger"
              >
                Soy Jose Hernandez, Programador, Youtuber y ocasionalmente
                Blogger
              </h2>
              <p>
                En esta pagina dedico mi tiempo a crear nuevas aplicaciones para
                resolver problemas, ocasionalmente escribir algunos{" "}
                <em>insights</em> y exponer mis servicios y productos a quien
                sea que este interesado.
              </p>
              <p>
                Esta pagina fue construida con React y Django, y en ella puedes
                encontrar algunos de mis proyectos, mi blog y otras creaciones
                que pueden ser de tu interes
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div className="row">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="http://placekitten.com/100/300"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="http://placekitten.com/200/300"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="http://placekitten.com/300/300"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-danger"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
        Lee esto antes de navegar el sitio
      </button>{" "}
      <div
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
    </>
  );
}
