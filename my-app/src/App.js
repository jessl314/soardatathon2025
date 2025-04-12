import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Crime Rates</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/data">Data</Link>
            <Link to="/resources">Resources</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/data2" element={<DataPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
