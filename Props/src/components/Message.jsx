import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super();
        this.state={
            message:'Hello Visotors!'
        }
    }
    changeMessage(){
       this.setState({
        message:'thank for Like!'
       })
    }
    render(){
        return (
            <div>
                <h1 >{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Like</button>
            </div>
        )
    }
}

export default Message;