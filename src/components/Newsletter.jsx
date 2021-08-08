import React from "react";

export function Newsletter() {
  return (
    <>
      <div>
        <h1 id="PageTitle">Newsletter</h1>
      </div>
      <form>
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

        <button type="submit" class="btn btn-primary btn-block" id="formButton">
          Submit
        </button>
      </form>
    </>
  );
}
