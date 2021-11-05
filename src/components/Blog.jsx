import React from "react";
import { FetchList } from "./FetchList";
import useFetch from "./useFetch";

export function Blog() {
  const { data: BlogList } = useFetch(
    "https://joseda-backend.herokuapp.com/api/ejercicios/"
  );

  return <div>{BlogList && <FetchList list={BlogList} />}</div>;
}
