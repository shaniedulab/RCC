import { useState } from 'react';
import React from 'react';
import Components3 from './Components3';
import Model from './Model';


function Components2() {
  let[showModal,updateshowModal]=useState(false);
  function displaymodel(){
    updateshowModal(true)
  }
  
  function hideModel(){
    updateshowModal(false)
  }
  return (<div style={{width:300,position:"relative"}}>
    <h1>Components2</h1>
    <Components3></Components3>
    <button onClick={displaymodel}>Show Model</button>
    <Model showModal={showModal} hideModel={hideModel}></Model>
  </div>)
}

export default Components2;