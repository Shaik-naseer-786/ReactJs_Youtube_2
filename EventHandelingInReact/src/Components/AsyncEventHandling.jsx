import React from 'react';

function InputComponent() {
  const handleChange = (event) => {
    event.persist();
    setTimeout(() => {
      console.log('Input value:', event.target.value);
    }, 1000);
  };

  return <input type="text" onChange={handleChange} />;
}

export default InputComponent;
