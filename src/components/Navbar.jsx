import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Mercurial Design
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto nav-fill w-100">
            <li class="nav-item active">
              <Link class="nav-link active" to="/">
                Home{" "}
              </Link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Proyectos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  StudyApp
                </a>
                <a class="dropdown-item" href="#">
                  FitApp
                </a>
                <a class="dropdown-item" href="#">
                  HealthApp
                </a>
                <a class="dropdown-item" href="#">
                  SalesApp
                </a>
                <a class="dropdown-item" href="#">
                  Clicker Game
                </a>
                <a class="dropdown-item" href="#">
                  Document Generator
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cursos y Libros
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Alfabetizacion Digital
                </a>
                <a class="dropdown-item" href="#">
                  Ingles
                </a>
                <a class="dropdown-item" href="#">
                  Metodo de estudios
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Programacion en Python
                </a>
                <a class="dropdown-item" href="#">
                  Programacion Web
                </a>
                <a class="dropdown-item" href="#">
                  Programacion en Rust
                </a>
                <a class="dropdown-item" href="#">
                  Programacion en C#
                </a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Podcast
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Sobre Nosotros
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
