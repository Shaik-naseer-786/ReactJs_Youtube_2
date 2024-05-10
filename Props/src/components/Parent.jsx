import React from "react";
import Childcomp from "./Child"
const Parentcomp=(props)=>{
    // // const name = 'Naseer';
    // return <Childcomp name={name} />;
    console.log(props)
    return <h1>Hello,{props.name}!</h1>
}

export default Parentcomp;