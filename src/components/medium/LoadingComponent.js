import React, { useState, useEffect } from 'react';

/**
 * LoadingComponent shows a spinner until data is loaded.
 */
const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    // Cleanup timer on unmount.
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <div role="status">Spinner...</div> : <p>Data Loaded</p>}
    </div>
  );
};

export default LoadingComponent;
