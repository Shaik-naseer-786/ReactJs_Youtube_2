import React from 'react'
import OnlickEvent from './Components/OnlickEvent'
import ClassOnClick from './Components/ClassOnClick'
import InputComponent from './Components/AsyncEventHandling'
import Ref from './Components/Ref'
import FocusInput from './Components/FocusInput'
import FRParentInput from './Components/FRParentInput'
import PortalDemo from './Components/PortalDemo'
import ParentComponent from './Components/EventBubbling'
import ErrorBoundary from './Components/ErrorBoundary'
import ParentRender from './Components/ParentRender'


function App() {
  

  return (
    <>
      
      <h1>Hello Naseer</h1>
      {/* <OnlickEvent></OnlickEvent> */}
      {/* <ClassOnClick></ClassOnClick> */}
      {/* <InputComponent></InputComponent> */}
      {/* <Ref></Ref> */}
      {/* <FocusInput></FocusInput> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <PortalDemo></PortalDemo> */}
     {/* <ParentComponent></ParentComponent> */}
     {/* <ErrorBoundary heroName="naseer"></ErrorBoundary>
     <ErrorBoundary heroName="joker"></ErrorBoundary> */}
     <ParentRender></ParentRender>
    </>
  )
}

export default App
