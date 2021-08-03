import React from "react";
import { useParams } from "react-router";

export function Post({ type }) {
  let { id } = useParams();
  return (
    <>
      Now showing post {id}
      <hr></hr>
      Post type = {type}
    </>
  );
}
