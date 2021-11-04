import React from "react";
import { FetchList } from "./FetchList";
import { useEffect, useState } from "react";

export function Podcast() {
  const [BlogList, setBlogList] = useState(null);
  useEffect(() => {
    fetch("https://joseda-backend.herokuapp.com/api/podcasts/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setBlogList(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
  }, [])
  return (
    <>
{BlogList && <FetchList list={BlogList} />}
    </>
  );
}