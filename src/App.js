import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';
import Table from './table.js';

function App() {
  return (
    <div className="App">
    <Dinner dishname="yogurt" sweetdish="mithai"/>
    <Table Number="5"/>
    </div>
      );
}

export default App;
