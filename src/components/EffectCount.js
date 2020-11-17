import React, { useState, useEffect } from "react";

function MathRand() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add a{count} number</button>
    </div>
  );
}

export default MathRand;
