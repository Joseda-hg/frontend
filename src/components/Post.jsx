import React from "react";
import { useParams } from "react-router";
import useFetch from "./useFetch"


export function Post({ type }) {
  let { id } = useParams();
  const { data: post } = useFetch(
    `https://joseda-backend.herokuapp.com/api/blogs/${id}`
  );
  return (
    <div>
      Now showing post {id}
      <hr></hr>
      data: {console.log(post)}
      {post.title}
      {post.content}
      <hr></hr>
      Post type = {type}
    </div>
  );
}
