import './App.css';
import React, { useState } from 'react';
// import Refsdemo from './Components/ReafDemo';
// import Components1 from './Components/Components1';
// import PortelComponents from './Components/PortelCpmponents';
import Demo from './ReducerDemo/Demo';
import AuthContext from './Context/AuthContext';

function App() {
  let[setb,updateb]=useState('manish')
  console.log("app",setb);
  function clicklog(){
    console.log("clicklog")
  }
  function updatelog(){
    updateb("vish")
  }
  return (
    <React.Fragment>
    <button onClick={updatelog}></button>
      {/* <Refsdemo></Refsdemo> */}
      {/* <Components1></Components1> */}
      {/* <PortelComponents></PortelComponents> */}
      <AuthContext.Provider value={{isLogin:setb,isLogout:clicklog}}>
        <Demo></Demo>
      </AuthContext.Provider>
    </React.Fragment> 
  );
}

export default App;
