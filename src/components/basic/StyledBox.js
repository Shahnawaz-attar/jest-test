import React from 'react';

/**
 * StyledBox component renders a div with inline styles.
 */
const StyledBox = () => {
  // Define inline style object.
  const boxStyle = {
    backgroundColor: 'lightblue', // Set background color.
    padding: '20px',              // Set padding.
    borderRadius: '5px'           // Set border radius.
  };

  // Render a div with the applied styles.
  return <div style={boxStyle}>I am a styled box!</div>;
};

export default StyledBox;
