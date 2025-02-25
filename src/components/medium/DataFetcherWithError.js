import React, { useState, useEffect } from 'react';

/**
 * DataFetcherWithError component simulates fetching data with error handling.
 * It displays error text if the API call fails.
 */
const DataFetcherWithError = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a failed API call by throwing an error.
        await new Promise((resolve, reject) => setTimeout(() => reject(new Error('Fetch failed')), 500));
      } catch (err) {
        // Set the error state when catching an error.
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? <p>Error: {error}</p> : <p>Data loaded successfully!</p>}
    </div>
  );
};

export default DataFetcherWithError;
