import React from "react";
// import ContactHandler from "../controllers/contactHandler";
// import useState from "react"

export function Contact() {
  return (
    <>
      <div>
        <h1 id="PageTitle">Formulario de contacto</h1>
      </div>
      <form action="https://formbold.com/s/3Gjv9" method="POST">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Direccion de correo electronico</label>
          <input type="email" name="Correo electronico"
            className="form-control"  
            id="direccionMail"
            aria-describedby="emailHelp"
            placeholder="Correo Electronico" required={true}
          ></input>
        </div>

        <label htmlFor="exampleInputEmail1">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="Nombre"
          aria-describedby="emailHelp"
          placeholder="Nombre" required={true}
          name="Nombre"
        ></input>
        <label htmlFor="exampleInputEmail1">Mensaje</label>
        <textarea
          className="form-control"
          id="mensaje"
          aria-describedby="emailHelp"
          placeholder="Escribe tu mensaje aqui..." required={true}
          name="Mensaje"
        ></textarea>
{/* 
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="checkbox"
          ></input>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label> 
        </div>
        */}
        {/* Fix Controlled vs Uncontrolled; https://reactjs.org/docs/forms.html#controlled-components, related to the value tag */}
        <button
          type="submit"
          className="btn btn-primary btn-block"
          id="formButton"

          // onClick={ContactHandler}
          value={"Enviar"}> Enviar formulario</button>
      </form>
    </>
  );
}
