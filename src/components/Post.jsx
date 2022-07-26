import React from "react";
// import { useParams } from "react-router";
// import useFetch from "./useFetch"

// In theory, this should be enough to render a mdx database input into react for the post
// check once I have the proper input in the DB
let htmlPost = require("../posts/LoremIpsum.md")
export function Post({ type }) {
  // let { id } = useParams();
  
  // const { data: post } = useFetch(`https://joseda-backend.herokuapp.com/api/blogs/${id}`);

    return (<>
    <iframe src={htmlPost}> </iframe>
    </>
  );
}


// import React from "react";
// import { FetchList } from "./FetchList";
// import useFetch from "./useFetch";

// export function Podcast() {
//   const { data: BlogList } = useFetch(
//     "https://joseda-backend.herokuapp.com/api/podcasts/"
//   );

//   return <>{BlogList && <FetchList list={BlogList} />}</>;
// }



// export function Post({ type }) {
//   let { id } = useParams();
  
//   const { data: post } = useFetch(`https://joseda-backend.herokuapp.com/api/blogs/${id}`);

//     return (
//       <div>
//       Now showing post {id}
//       <hr></hr>
//       data: {console.log(post)}
//       {post.title} 
//       {post.content} 
//       <hr></hr>
//       Post type = {type}
//     </div>
//   );
// }
