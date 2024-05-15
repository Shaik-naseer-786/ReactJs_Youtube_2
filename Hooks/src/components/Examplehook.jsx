import React,{useState} from 'react'

function Examplehook() {
    const [count1,setState]=useState(0)
  return (
    <div>
      <h1>hello this from hooks!</h1>
      <button onClick={()=>setState(count1 +1)}>click {count1} </button>
    </div>
  )
}

export default Examplehook
