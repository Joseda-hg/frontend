import React from "react";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <Link to="/ejercicios">
        <button> Llevame a los ejercicios</button>
      </Link>
    </>
  );
}
