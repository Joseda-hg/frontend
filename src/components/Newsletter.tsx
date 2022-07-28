import React from "react";
import { Editor } from "./Editor";

export function Newsletter() {
  return (
    <>
      <div>
        <h1 id="PageTitle">Newsletter</h1>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
        </div>

        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
        ></input>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block" id="formButton">
          Submit
        </button>
      </form>
      <Editor />


    </>
  );
}
