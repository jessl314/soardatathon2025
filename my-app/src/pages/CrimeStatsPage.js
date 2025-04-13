import React from 'react';
import './CrimeStatsPage.css';
import incomeCrime from '../images/income_vs_crime_plot.png';

function CrimeStatsPage() {
  return (
    <div className="crime-stats-page">
      <section className="content-section">
        <h1>Median Household Income & Violent Crime Rates Datasets Relationship</h1>

        <div className="dataset-container">
          <h2 className="dataset-title">Income vs. Crime Data</h2>

          <div className="dataset-content">
            <div className="image-container">
              <img
                src={incomeCrime}
                alt="brainimage"
                className="dataset-image"
              />
            </div>

            <div className="text-container">
              <h3>Analysis</h3>
              <ul>
                <li><strong>Serious Crime Definition:</strong> </li>
                <p>“Serious violent crimes consist of Part 1 offenses as defined by the U.S. Department of Justice’s Uniform Reporting Statistics. These include murders, nonnegligent homicides, rapes (legacy and revised), robberies, and aggravated assaults.” </p>

              </ul>
              <ul>
                <li><strong>Relationship:</strong> </li>
                <p>
                For the relationship between serious crime and income we found that with a correlation coefficient of -0.57986 (r value) that there is a moderately strong negative correlation as the coefficient is between -0.5 and -0.7. This suggests somewhat that as median income of a city in LA county increases the amount of serious crime committed as defined above decreases. Based on the determination coefficient (R^2) of 0.336 we found that approximately 33.6% of the variation can be explained by median income. This implies that a substantial portion of the variation (about 67%) can be explained by other factors of serious crime such as low education. 
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CrimeStatsPage;