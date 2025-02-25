import React from "react";

const ColoredBox = ({ active }) => {
  const boxClass = active ? "box active" : "box inactive";

  return (
    <div className={boxClass}>I am a {active ? "Active" : "Inactive"} Box</div>
  );
};

export default ColoredBox;
