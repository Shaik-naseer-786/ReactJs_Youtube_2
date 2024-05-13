import React from "react";
 function OnlickEvent() {
  function changeHandler (){
    console.log('Button clicked!');
  };
  return (
    <div>
        <h1>Hello naseer</h1>
      <button onClick={()=>changeHandler()}>click Me</button>
    </div>
  )
}
export default OnlickEvent;
