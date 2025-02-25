import React, { useState, useEffect } from 'react';

/**
 * AsyncDataFetcher component simulates fetching data from an API.
 * It shows a "Loading..." message while fetching, then displays the data.
 */
const AsyncDataFetcher = () => {
  // Local state for data and loading status.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to simulate fetching data when the component mounts.
  useEffect(() => {
    // Simulate an asynchronous API call with setTimeout.
    const fetchData = async () => {
      // Wait for 500ms to simulate network delay.
      await new Promise((resolve) => setTimeout(resolve, 500));
      // Set the fetched data.
      setData('Fetched Data');
      // Turn off the loading flag.
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array means this runs once after mount.

  // Render loading message or fetched data.
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
};

export default AsyncDataFetcher;
