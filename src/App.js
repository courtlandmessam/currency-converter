import React from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow.js'

function App() {
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <span className="equals">=</span>
      <CurrencyRow />
    </>
  );
}

export default App;
