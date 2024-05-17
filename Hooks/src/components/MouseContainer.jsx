import React,{useState} from 'react'
import HookMouse from './HookMouse';

const MouseContainer = () => {
    const[display,setDisplay]=useState(false);
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>toggle display</button>
      {display&& <HookMouse></HookMouse>}
    </div>
  )
}

export default MouseContainer
