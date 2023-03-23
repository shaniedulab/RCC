import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import React from 'react';



function Refsdemo() {
    console.log("u")
    let [val,updateval]=useState('Home')
    useEffect(()=>{
        console.log("update")
    },[val])
    let nameInputref=useRef();
    function Submit(){
        console.log(nameInputref.current.value);
    }
    // console.log(nameInputref);
  return (
  <>
    {/* <span></span>
    <input type='text' ref={nameInputref}/>
    <button onClick={Submit}>Show Name</button> */}
    <button onClick={()=>{updateval('Home')}}>Home</button>
    <button onClick={()=>{updateval('About')}}>About</button>
    <button onClick={()=>{updateval('Profile')}}>Profile</button>
    <h1>{val}</h1>
  </>
  )
}

export default Refsdemo;