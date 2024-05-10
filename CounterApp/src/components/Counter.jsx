import React,{Component} from "react";

class count extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increMent(){
        if(this.state.count==20){
            return;
        }
        this.setState({
            count:this.state.count + 1
        })
    }
    decreMent(){
        if(this.state.count==0){
            return;
        }
        this.setState({
            
            count:this.state.count-1
        })
    }
    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <div>
                    <button onClick={()=>this.increMent()}>Increment-{this.state.count}</button>
                    
                    <button onClick={()=>this.decreMent()}>Decrement-{this.state.count}</button>
                </div>
            </div>
        )
    }
}

export default count;