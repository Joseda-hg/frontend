import React from "react";
import { PostList } from "./PostList";
// import { useEffect, useState } from "react";



export function Blog() {
  const BlogList = []
  return (
    <>
      <PostList List={BlogList}/>
    </>
  );
}
