import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>click</button>
      <br />
      <br />
      <br />
      count2 - {count2}
      <button onClick={() => setCount2(count2 + 1)}>click2</button>
    </div>
  );
};

export default Parent;