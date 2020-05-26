import React, { useState } from 'react';
import './global.css';
import Routes from "./routes";

function App() {
  const [ counter, setCounter ] = useState(0);

  function Increment(){
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>
      <Routes></Routes>
    </div>
  );
}

export default App;
