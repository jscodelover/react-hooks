import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        style={{
          display: "inline-block",
          border: "2px solid",
          padding: "5px",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        Click Me To Increase The Count....
      </div>
      <h1>{count}</h1>
    </React.Fragment>
  );
}

export default Counter;
