import './App.css';
import React from 'react';
import Navbar from './navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="welcome-to-mindmetrics">
        <p>
          This is the begining of the page <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
