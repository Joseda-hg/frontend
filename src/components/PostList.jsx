import React from 'react'
import PostItem from './PostItem'


export function PostList({ list }) {
  return (
    <>
      {list.map((post) => (
        <PostItem post={post} />
      ))}
    </>
  );
}
