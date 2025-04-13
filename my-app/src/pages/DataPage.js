import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DataPage.css';

function DataPage() {
  const navigate = useNavigate();

  return (
    <div className="data-page">
      <h1>Data Analysis</h1>
      <div className="navigation-buttons">
        <button 
          className="nav-button"
          onClick={() => navigate('/data/crime-stats')}
        >
          Crime Statistics
        </button>
        <button 
          className="nav-button"
          onClick={() => navigate('/data/trends')}
        >
          Trends Analysis
        </button>
        <button 
          className="nav-button"
          onClick={() => navigate('/data/conclusion')}
        >
          Conclusion
        </button>
      </div>
    </div>
  );
}

export default DataPage; 