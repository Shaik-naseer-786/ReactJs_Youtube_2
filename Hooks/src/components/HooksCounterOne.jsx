import React,{useState,useEffect} from 'react'

const HooksCounterOne = () => {
    const[count,setCount]=useState(0);
    const[name,setName]=useState('');
    useEffect(()=>{
        console.log("updating!");
        document.title=`you clicked ${count} times`
    },[count]);
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>click {count} times</button>
    </div>
  )
}

export default HooksCounterOne
