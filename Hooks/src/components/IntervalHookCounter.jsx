import React,{useState,useEffect} from 'react'

const IntervalHookCounter = () => {
    const[count,setCount]=useState(0);

    const trick=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
       const interval= setInterval(trick,1000)
       return()=>{
        clearInterval(interval)
       }
    },[count])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
