import React from "react";
import { PostList } from "./PostList";
import { useEffect, useState } from "react";

export function Podcast() {
  const [BlogList, setBlogList] = useState(null);
  useEffect(() => {
    fetch("http://www.joseda.xyz/api/podcasts/")
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
{BlogList && <PostList list={BlogList} />}
    </>
  );
}