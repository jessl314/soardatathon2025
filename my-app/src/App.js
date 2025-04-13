import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';
import CrimeStatsPage from './pages/CrimeStatsPage';
import DemographicsPage from './pages/DemographicsPage';
import TrendsPage from './pages/TrendsPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  const [isDataHovered, setIsDataHovered] = useState(false);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Fault Lines</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <div 
              className="dropdown"
              onMouseEnter={() => setIsDataHovered(true)}
              onMouseLeave={() => setIsDataHovered(false)}
            >
              <Link to="/data">Data</Link>
              {isDataHovered && (
                <div className="dropdown-content">
                  <Link to="/data/crime-stats">Crime Statistics</Link>
                  <Link to="/data/demographics">Demographics</Link>
                  <Link to="/data/trends">Trends Analysis</Link>
                </div>
              )}
            </div>
            <Link to="/resources">Resources</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/data/crime-stats" element={<CrimeStatsPage />} />
          <Route path="/data/demographics" element={<DemographicsPage />} />
          <Route path="/data/trends" element={<TrendsPage />} />
          <Route path="/resources" element={<ResourcesPage/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;