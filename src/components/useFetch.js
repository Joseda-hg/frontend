import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
    }, [url])
    return { data }
}

export default  useFetch;