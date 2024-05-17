// App.jsx
import React from 'react';

import ClassComponent from './components/ClassComponent';
import Examplehook from './components/Examplehook';
import ObjectsWithHooks from '/src/components/ObjectsWithHooks';
import Arrayhook from './components/Arrayhook';
import HooksCounterOne from './components/HooksCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';


function App() {
  return (
    <>
      <div>
      <h1>Hello Naseer</h1>
      
      {/* <ClassComponent/>
      <Examplehook></Examplehook> */}
     {/* <Arrayhook></Arrayhook> */}
     {/* <HooksCounterOne></HooksCounterOne> */}
     {/* <HookMouse></HookMouse> */}
     {/* <MouseContainer></MouseContainer> */}
     <IntervalHookCounter></IntervalHookCounter>
      </div>
    </>
  );
}

export default App;
