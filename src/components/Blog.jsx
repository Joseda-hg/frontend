import React from "react";
import { FetchList } from "./FetchList";
import useFetch from "./useFetch";


export function Blog() {
  const { data: BlogList } = useFetch(
    "https://joseda-backend.herokuapp.com/api/ejercicios/"
  );

  // const [BlogList, setBlogList] = useState(null);
  // useEffect(() => {
  //   fetch("https://joseda-backend.herokuapp.com/api/blogs/")
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     setBlogList(data);
  //   })
  //   .catch(function (err) {
  //     // There was an error
  //     console.warn("Something went wrong.", err);
  //   });
  // }, [])
  return (
    <div>
{BlogList && <FetchList list={BlogList} />}
    </div>
  );
}