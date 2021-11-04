import React from 'react'
import {Card} from "./Card"
 
function FetchItem() {
  return (
      <Card />
  )
}


export function FetchList({ list }) {
  return (
    <>
      {list.map((post) => (
        <FetchItem post={post} />
      ))}
    </>
  );
}
