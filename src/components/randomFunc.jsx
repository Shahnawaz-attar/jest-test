import React, { useState, useEffect } from 'react';

const RandomFunc = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!show) {
    return <div>Loading...</div>; // Placeholder while waiting
  }

  return <div>randomFunc</div>;
};

export default RandomFunc;
