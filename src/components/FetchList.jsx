import React from "react";
import { Card } from "./Card";

function FetchItem() {
  return <Card />;
}
// @ts-ignore
export function FetchList({ list }) {
  return (
    <>

      {list.map((post) => (
        <FetchItem post={post} />
      ))}
    </>
  );
}
