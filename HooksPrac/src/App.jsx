import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onIncrement=(e)=>{
    setCount((e)=>e+1)
  }
  const onDel=(e)=>{
    setCount((e)=>e-1)
  }
  useEffect(()=>{
    console.log("Hello Naseer");
  },[])
  return (
    <>
      <h1>Count :{count}</h1>
      <button onClick={onIncrement}>add</button>
      <button onClick={onDel}>del</button>
    </>
  )
}

export default App
