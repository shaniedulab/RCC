import React from "react";

function Input(props){
    return <>
        <label>{props.children}</label>
        <input type={props.type}/>
    </>
}

export default Input