import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link id="logo" className="navbar-brand" to="/">
          HG
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
            <li className="nav-item dropdown disabled">
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
                <a className="dropdown-item disabled" href="/">
                  StudyApp
                </a>
                <Link className="dropdown-item" to="/terminal">
                  Terminal
                </Link>
                <Link className="dropdown-item disabled" to="/alimentos">
                  HealthApp
                </Link>
                <a className="dropdown-item disabled" href="/">
                  SalesApp
                </a>
                <Link className="dropdown-item" to="/Clicker">
                  Clicker Game
                </Link>
                <Link className="dropdown-item disabled" to="/Blog">
                  Blog
                </Link>
                <a className="dropdown-item disabled" href="/">
                  Document Generator
                </a>
                <a className="dropdown-item disabled" href="/">
                  WebOS
                </a>
                <a className="dropdown-item disabled" href="/">
                  Rustic Game House
                </a>
                <a className="dropdown-item disabled" href="/">
                  File Sorter
                </a>
                <a className="dropdown-item disabled" href="/">
                  Control Center
                </a>
                <a className="dropdown-item disabled" href="/">
                  Auto Content Generator
                </a>
                <Link className="dropdown-item" to="/Totem">
                  Totem de Autoatencion
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                Sobre mi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contactame
              </Link>

            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}
