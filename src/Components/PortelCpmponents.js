import React from 'react';
import ReactDOM from 'react-dom';

function PortelComponents() {
  return (
  ReactDOM.createPortal(
  <>
    <h1>PortelComponents</h1>
  </>,document.getElementById('root-portal'))
  )
}

export default PortelComponents;