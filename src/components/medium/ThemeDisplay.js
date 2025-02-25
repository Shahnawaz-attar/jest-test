import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


/**
 * ThemeDisplay component reads a theme value from context.
 */
const ThemeDisplay = () => {
  const theme = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
};

export default ThemeDisplay;
