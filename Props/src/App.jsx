import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parentcomp from './components/Parent'
import Message from './components/Message'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h1>Hello world!</h1> */}
        {/* <Parentcomp name="Naseer"></Parentcomp> */}
        <Message></Message>
        </div>
    </>
  )
}

export default App
