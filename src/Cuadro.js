import React, { Component } from 'react';
import  ReactDOM from 'react-dom';

function Cuadro(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default Cuadro;