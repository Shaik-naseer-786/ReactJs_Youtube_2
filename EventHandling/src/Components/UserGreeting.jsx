import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    if(this.state.isLoggedIn){
        return<div>Hello Naseer!</div>
    }else{
        return <div>Bye Naseer</div>
    }
  }
}

export default UserGreeting
