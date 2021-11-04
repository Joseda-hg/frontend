import React from "react";
// import useState from "react"


export function Contact() {
  const handleContactSubmit = (event) => {
    event.PreventDefault()
    console.log("Ran")
  }
  return (
    <>
      <div>
        <h1 id="PageTitle">Contact</h1>
      </div>
      <form onSubmit = {handleContactSubmit} >
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
        </div>

        <label for="exampleInputEmail1">Name</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
        ></input>
        <label for="exampleInputEmail1">Message</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your message"
        ></input>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <input type="submit" class="btn btn-primary btn-block" id="formButton"/>
      </form>
    </>
  );
}
