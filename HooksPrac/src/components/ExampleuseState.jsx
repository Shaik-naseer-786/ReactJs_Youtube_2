import React, { useState } from 'react';

function ExampleuseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(count + 5)}>
        Click me +5
      </button>
    </div>
  );
}
export default ExampleuseState;