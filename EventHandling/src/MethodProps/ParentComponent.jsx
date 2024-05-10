import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"parent"
        }
        this.greet=this.greet.bind(this)
    }
    greet(_childName){
        alert(`Hello ${this.state.message} from ${_childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greet}></ChildComponent>
      </div>
    )
  }
}
export default ParentComponent
