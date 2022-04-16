import React from "react";
import ContactHandler from "./contactHandler";
// import useState from "react"

export function Contact() {
  const handleContactSubmit = (event) => {
    event.PreventDefault();
    console.log("Ran");
  };
  return (
    <>
      <div>
        <h1 id="PageTitle">Contact</h1>
        <h1>
          Este formulario de contacto de momento no es funcional, tener cuidado;
          mientras es finalizado, te invito a contactarme a traves de cualquiera
          de mis redes sociales
        </h1>
      </div>
      <form onSubmit={handleContactSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email"
            className="form-control"
            id="direccionMail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
        </div>

        <label for="exampleInputEmail1">Name</label>
        <input
          type="email"
          className="form-control"
          id="nombre"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
        ></input>
        <label for="exampleInputEmail1">Message</label>
        <input
          type="text"
          className="form-control"
          id="mensaje"
          aria-describedby="emailHelp"
          placeholder="Enter your message"
        ></input>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        {/* Fix Controlled vs Uncontrolled; https://reactjs.org/docs/forms.html#controlled-components, related to the value tag */}
        <input
          type="button"
          className="btn btn-primary btn-block"
          id="formButton"
          onClick={ContactHandler}
          value={"Enviar"}
        />
      </form>
    </>
  );
}
