import React from 'react'
import PostItem from './PostItem'
//Make it reusable by adding a list variable
export function PostList(List) {
    const exampleList = [
        {title: "title 1", body:"Example Body 1", author:"Example Author 1" },
        {title: "title 1", body:"Example Body 1", author:"Example Author 1" },
        {title: "title 1", body:"Example Body 1", author:"Example Author 1" }, 
        {title: "title 1", body:"Example Body 1", author:"Example Author 1" }
    ]
    console.log(List)
    
  return (
    <>
      {exampleList.map((post) => (
        <PostItem post={post} />
      ))}
    </>
  );
}
