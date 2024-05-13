import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalClick from './Components/FunctionalClick'
import ClassClick from './Components/ClassClick'
import Bind from './Components/Bind'
import ParentComponent from './MethodProps/ParentComponent'
import ChildComponent from './MethodProps/ChildComponent'
import UserGreeting from './Components/UserGreeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <FunctionalClick></FunctionalClick>
        <ClassClick></ClassClick> */}
        {/* <Bind></Bind> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <UserGreeting></UserGreeting> */}
      </div>
    </>
  )
}

export default App
