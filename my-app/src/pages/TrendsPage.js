import React from 'react';
import './TrendsPage.css'; // Import your CSS file for styling
import brainImage from '../images/brain.jpg';
import dataset2 from '../images/brain2.jpg';

function TrendsPage() {
    return (
      <div className="crime-stats-page">
        <section className="content-section">
          <h1>Trend Statistics</h1>
  
          <div className="dataset-container">
            <h2 className="dataset-title">Dataset 1</h2>
  
            <div className="dataset-content">
              <div className="image-container">
                <img
                  src={brainImage}
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
  
            {/* Start of the second dataset section */}
            <div className="dataset-content"> {/* Use dataset-content again for layout */}
              <div className="image-container">
                <img
                  src={dataset2}
                  alt="brainimage2"
                  className="dataset-image"
                />
              </div>
              <div className="text-container">
                <h3>Image 2</h3>
                <p>
                  Our second dataset provides a deeper dive into the socio-economic
                  factors influencing crime rates. It includes:
                </p>
                <ul>
                  <li>Income levels</li>
                  <li>Education statistics</li>
                  <li>Employment rates</li>
                  <li>Access to mental health resources</li>
                </ul>
                <p>
                  By understanding these correlations, we can better address the root
                  causes of crime and work towards effective prevention strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default TrendsPage;