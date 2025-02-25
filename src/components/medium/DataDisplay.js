import React, { useState, useEffect } from 'react';
import { fetchData } from '../apis/api';

/**
 * DataDisplay component fetches data using an API module.
 */
const DataDisplay = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  return <p>{data}</p>;
};

export default DataDisplay;
