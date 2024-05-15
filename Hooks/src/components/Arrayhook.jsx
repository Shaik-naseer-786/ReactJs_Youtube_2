import React, { useState } from "react";

function Arrayhook() {
  const [items, setItems] = useState([]);
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItems}>add item</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>; // Added return statement here
        })}
      </ul>
    </div>
  );
}

export default Arrayhook;
