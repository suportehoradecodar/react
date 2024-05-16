import React, { useState } from 'react';
import ComponenteA from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';
import './App.css'

function App() {
  const [state, setState] = useState(false);

  const handleStateChange = (newState) => {
    setState(newState);
  };
  return (
    <div>
      <ComponenteA state={state} />
      <ComponenteB currentState={state} onStateChange={handleStateChange} />
    </div>
  )
}

export default App
