import React from 'react';
import './TrendsPage.css'; // Import your CSS file for styling
import brainImage from '../images/income_vs_depression_plot.png';

function TrendsPage() {
    return (
      <div className="crime-stats-page">
        <section className="content-section">
          <h1>Median Household Income & Adult with Diagnosed Depression Relationship</h1>
  
          <div className="dataset-container">
            <h2 className="dataset-title">Income vs. Diagnosed Depression</h2>
  
            <div className="dataset-content">
              <div className="image-container">
                <img
                  src={brainImage}
                  alt="brainimage"
                  className="dataset-image"
                />
              </div>
  
              <div className="text-container">
                <h3>Analysis</h3>
                <ul>
                  <li><strong>Source information:</strong></li>
                  <p>
                    Percentage of Adults (Ages 18 Years and Older) with Diagnosed Depression. Data provided by Los Angeles County Department of Public Health (DPH) for the Community Health Profiles (CHP) Data Initiative. Adults included in this indicator are those who reported ever being diagnosed with depression AND either currently being treated for depression or currently having symptoms of depression.
                  </p>
                  <li><strong>Relationship:</strong></li>
                  <p>
                    For this relationship, we found a correlation coefficient (R-value) of 0.346568. This indicates a moderately weak correlation between income and depression in adults. The R-Squared value is 0.12—in other words, only 12% of the variation can be explained by median income per household. The other 88% can be explained by other factors, such as social isolation, housing conditions, etc.
                  </p>
                  <li><strong>Note:</strong></li>
                  <p>
                    However, we must note that there is a weakness in our data; we don’t know the veracity of the data due to the fact that depression diagnoses are usually given to those with access to healthcare and funds to pay for such clinical readings. There are likely many underprivileged individuals across LA county that do indeed have depression without a proper diagnosis.
                  </p>
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
  
  export default TrendsPage;