import React from 'react';

/**
 * FruitList component renders a list of fruits.
 *
 * @param {object} props - Component properties.
 * @param {Array<string>} props.fruits - Array of fruit names.
 */
const FruitList = ({ fruits }) => {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        // Using the index as key for simplicity (acceptable for static lists).
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;
