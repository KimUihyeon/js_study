import React, { useState } from 'react';
import logo from './logo.svg';
import Control from "./components/Control";
import './App.css';

let App = () => {

  const [number, setNumber] = useState(1);

  return (
    <div>
      <Control value={number}/>
    </div>
  );
}

export default App;
