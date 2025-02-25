import React from "react";

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        // Use the array index as a key (acceptable for static lists).
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
