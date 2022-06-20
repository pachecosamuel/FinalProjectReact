import './App.css';
import React from 'react';
import { Root } from "./components/routes/root"
import { Context } from "./components/context/data"

function App() {

  return (
    
    <Context>
      <Root/>
    </Context>
  );
}

export default App;
