import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Update the data state
      })
      .catch((err) => {
        setError(err.message); // Update the error state
      })
      .finally(() => {
        setLoading(false); // Loading is done
      });
  }, [url]);
  return { data, loading, error }; // Return the states
};


export default useFetch