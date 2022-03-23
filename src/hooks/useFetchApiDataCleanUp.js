import { useState, useEffect } from "react";

const useFetchApiData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrors, setHasErrors] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            // error coming back from server
            throw Error(
              `Check the url you have typed. Could not fetch that resource.
               If the url is correct, please contact your system adminstator for more advice.`
            );
          }
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);
          setHasErrors(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // auto catches network / connection error
            setIsLoading(false);
            setHasErrors(err.message);
          }
        });
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, hasErrors };
};

export default useFetchApiData;
