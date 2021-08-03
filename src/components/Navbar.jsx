import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Mercurial Design
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto nav-fill w-100">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">
                Home{" "}
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Proyectos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  StudyApp
                </a>
                <Link className="dropdown-item" to="/ejercicios">
                  FitApp
                </Link>
                <Link className="dropdown-item" to="/">
                  HealthApp
                </Link>
                <a className="dropdown-item" href="/">
                  SalesApp
                </a>
                <a className="dropdown-item" href="/">
                  Clicker Game
                </a>
                <a className="dropdown-item" href="/">
                  Document Generator
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cursos y Libros
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Alfabetizacion Digital
                </a>
                <a className="dropdown-item" href="/">
                  Ingles
                </a>
                <a className="dropdown-item" href="/">
                  Metodo de estudios
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Programacion en Python
                </a>
                <a className="dropdown-item" href="/">
                  Programacion Web
                </a>
                <a className="dropdown-item" href="/">
                  Programacion en Rust
                </a>
                <a className="dropdown-item" href="/">
                  Programacion en C#
                </a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/Blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Podcast">
                Podcast
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/About">
                Sobre Nosotros
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
