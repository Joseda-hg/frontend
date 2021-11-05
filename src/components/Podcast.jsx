import React from "react";
import { FetchList } from "./FetchList";
import useFetch from "./useFetch";

export function Podcast() {
  const { data: BlogList } = useFetch(
    "https://joseda-backend.herokuapp.com/api/podcasts/"
  );

  return <>{BlogList && <FetchList list={BlogList} />}</>;
}
