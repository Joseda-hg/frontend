import React from "react";

export function Contact() {
  return (
    <>
      Contact
      <form> 
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
          </input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <label for="exampleInputEmail1">Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
          >
          </input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>

          <label for="exampleInputEmail1">Message</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your mwssage"
          >
          </input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>



        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          </input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
