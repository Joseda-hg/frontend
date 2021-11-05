import React from "react";
import { useParams } from "react-router";
import useFetch from "./useFetch";

export function Post({ type }) {
  let { id } = useParams();
  const { data: post } = useFetch(
    `https://joseda-backend.herokuapp.com/api/blogs/${id}`
  );

  return (
    <div>
      Now showing post {id}
      <hr></hr>
      {/* data: {console.log(post)} */}
      {post.title}
      {post.content}
      <hr></hr>
      Post type = {type}
    </div>
  );
}

// In theory, this should be enough to render a mdx database input into react for the post
// check once I have the proper input in the DB

// var mdx = require('@mdx-js/mdx')

// const content = `
// # Hello, world!
// `

// const transpile = async () => {
//   const jsx = await mdx(content)
//   return jsx
// }

// transpile().then(console.log)
