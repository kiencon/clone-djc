import React from 'react';
import './CounterControl.css';

const counterControl = props => (
  <div className="CounterControl" aria-hidden="true" onClick={props.clicked}>
    {props.label}
  </div>
);

export default counterControl;
