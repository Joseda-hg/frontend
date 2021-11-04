import React from "react";
import { FetchList } from "./FetchList";
import { useEffect, useState } from "react";



export function Blog() {
  const [BlogList, setBlogList] = useState(null);
  useEffect(() => {
    fetch("https://joseda-backend.herokuapp.com/api/blogs/")
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
    <div>
{BlogList && <FetchList list={BlogList} />}
    </div>
  );
}