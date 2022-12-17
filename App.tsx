import * as React from 'react';
import './style.css';

export default function App() {
  function onHandlerKeyPress(event) {
    if (
      event.keyCode === 65 ||
      event.keyCode === 69 ||
      event.keyCode === 73 ||
      event.keyCode === 79 ||
      event.keyCode === 85
    ) {
      event.preventDefault();
    }
  }
  return (
    <input
      placeholder="actividad"
      onKeyDown={(e) => onHandlerKeyPress(e)}
    ></input>
  );
}
