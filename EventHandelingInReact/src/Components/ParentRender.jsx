import React from 'react'
import ChildRender from './ChildRender';

function ParentRender() {
  return (
    <div>
        <h1>Hello </h1>
      <ChildRender render={(data)=><h1>{data}</h1>}></ChildRender>
    </div>
  )
}
export default ParentRender;
