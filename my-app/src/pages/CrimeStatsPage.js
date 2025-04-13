import React from 'react';
import './CrimeStatsPage.css';
import incomeCrime from '../images/income_vs_crime_plot.png';

function CrimeStatsPage() {
  return (
    <div className="crime-stats-page">
      <section className="content-section">
        <h1>Crime Statistics</h1>

        <div className="dataset-container">
          <h2 className="dataset-title">Dataset 1</h2>

          <div className="dataset-content">
            <div className="image-container">
              <img
                src={incomeCrime}
                alt="brainimage"
                className="dataset-image"
              />
            </div>

            <div className="text-container">
              <h3>Image 1</h3>
              <p>
                Our comprehensive analysis reveals key patterns in criminal activities
                across different regions. This dataset showcases important trends in:
              </p>
              <ul>
                <li>Temporal distribution of crimes</li>
                <li>Geographic hotspots</li>
                <li>Type and frequency of incidents</li>
                <li>Demographic correlations</li>
              </ul>
              <p>
                These insights help law enforcement agencies and policymakers make
                informed decisions about resource allocation and prevention strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CrimeStatsPage;