import React,{useEffect,useState} from 'react'

const HookMouse = () => {

    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
    const logmouseposition=e=>{
        console.log("longmouse called!")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("use effect called")
        window.addEventListener('mousemove',logmouseposition)
        return()=>{
            console.log("component unmounting");
            window.removeEventListener('mousemove',logmouseposition)
        }
    },[])
  return (
    <div>
      Hooks - X- {x} Y- {y}
    </div>
  )
}

export default HookMouse
