import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import { useEffect } from "react";
require("bootstrap");

export function Home() {
  useEffect(() => console.log("Use effect ran"), []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div id="landingText">
              <h1 className="atx" id="hola-bienvenid_">
                Hola, Bienvenid@_
              </h1>
              <h2
                className="atx"
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
          <div className="col-sm">
            <div className="row">
              {/* <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
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
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="http://placekitten.com/100/300"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="http://placekitten.com/200/300"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="http://placekitten.com/300/300"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            */}
            <iframe width="1264" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <Link to="/ejercicios">
        <button type="button" className="btn btn-primary btn-lg input-block-level ">
          Llevame a los ejercicios
        </button>
      </Link>
    </>
  );
}
