import React from 'react';

const ParentComponent = () => {
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleButtonClick = (event) => {
    console.log('Button clicked');
    event.stopPropagation();
  };

  return (
    <div onClick={handleParentClick}>
      <h1>Parent Component</h1>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default ParentComponent;
