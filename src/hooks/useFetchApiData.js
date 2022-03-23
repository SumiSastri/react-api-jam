import { useState, useEffect } from "react";

const useFetchApiData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrors, setHasErrors] = useState(null);

  useEffect(() => {
    // setTimeout(() => {
    const fetchApiData = async () => {
      await fetch(url)
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
        .then((responseData) => {
          setData(responseData);
          setIsLoading(false);
          setHasErrors(null);
        })
        .catch((serverError) => setHasErrors(serverError.message));
      setIsLoading(false);
      setHasErrors(null);
    };
    fetchApiData();
  });
  // }, 1000);

  return { data, isLoading, hasErrors };
};

export default useFetchApiData;
