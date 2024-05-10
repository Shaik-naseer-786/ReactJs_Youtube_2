import React, { Component } from 'react'

class Bind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:'Hello Naseer'
        }
        this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            message:"Bye, Naseer!"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me!</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click Me!</button> */}
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    )
  }
}

export default Bind
