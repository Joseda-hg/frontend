import React from "react";
import { Link } from "react-router-dom";


export function Home() {
  return (
    <>
      <Link to="/ejercicios">
        <button> Llevame a los ejercicios</button>
        {/* <button type="button" class="btn btn-primary btn-lg input-block-level ">Block level button</button> */}

      </Link>
    </>
  );
}
