import React, { Component } from 'react'
import Input from './input';


export class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef=React.createRef()
    }
    changeHandler=()=>{
        this.componentRef.current.focusInput();
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.changeHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
