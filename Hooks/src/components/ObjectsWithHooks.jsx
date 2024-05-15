import React,{useState} from 'react'

function ObjectsWithHooks() {
    const[name,setName]=useState({firstname:'',lastname:''})
  return (
    <div>
      <form>
      <input type='text' value={name.firstname} onChange={(e)=>setName({...name,firstname:e.target.value})}/>
      <input type='text' value={name.lastname} onChange={(e)=>setName({...name,lastname:e.target.value})}/>
      <h1>firsstname-{name.firstname}</h1>
      <h1>lastname-{name.lastname}</h1>
      </form>
    </div>
  )
}

export default ObjectsWithHooks
