import React, { Component } from 'react'

class ClassOnClick extends Component {
    clickHandler(){
        console.log("button clicked!")
    }
  render() {
    return (
      <div>
        <h1>Hello naseer</h1>
        <button onClick={()=>this.clickHandler()}>Click Me!</button>
      </div>
    )
  }
}

export default ClassOnClick;
