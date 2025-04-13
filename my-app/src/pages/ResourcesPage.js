import React, { useState } from 'react';
import './ResourcesPage.css';

function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('mental-health');

  return (
    <div className="resources-page">
      <section className="intro-section">
        <h1>Resources</h1>
        <p className="intro-text">
          For anyone struggling with financial stability and therefore their wellness, our great city of LA does have some resources to help people have their basic needs met. With a simple search, people can find nearby shelters, food banks, and other resources to get support from – or donate to, if one has the sufficient means. Beyond just getting basic needs met, Fault Lines hopes that greater systemic changes can be proposed and put into place to break people out of these cycles of poverty. For these reasons, we have attached some helpful links for both people in need and those wanting to help.
        </p>
      </section>

      <div className="category-tabs">
        <button 
          className={`tab ${activeCategory === 'mental-health' ? 'active' : ''}`}
          onClick={() => setActiveCategory('mental-health')}
        >
          Mental Health
        </button>
        <button 
          className={`tab ${activeCategory === 'violence-prevention' ? 'active' : ''}`}
          onClick={() => setActiveCategory('violence-prevention')}
        >
          Violence Prevention
        </button>
        <button 
          className={`tab ${activeCategory === 'economic-support' ? 'active' : ''}`}
          onClick={() => setActiveCategory('economic-support')}
        >
          Economic Support
        </button>
      </div>

      <section className="resources-section">
        {activeCategory === 'mental-health' && (
          <div className="category-content">
            <h2>Mental Health Resources</h2>
            <div className="resource-category">
              <h3>Mental Health Resources</h3>
              <ul>
                <li>
                  <strong>988 Suicide and Crisis Lifeline</strong> 24/7 support for anyone experiencing a mental health crisis
                  <br />
                  <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer">988lifeline.org</a>
                </li>
                <li>
                  <strong>Crisis Text Line</strong> Text HOME to 741741 to contact a crisis counselor
                </li>
                <li>
                  <strong>211 LA</strong> Dial 211 or text your zipcode to 898211 to access local mental health services
                </li>
                <li>
                  <strong>Trans Lifeline</strong>  877-565-8860 Peer support hotline for transgender youth
                </li>
                <li>
                  <a href="https://www.freementalhealth.us/services/los-angeles_downtown-mental-health-center" target="_blank" rel="noopener noreferrer"><strong>Downtown Mental Health Center</strong></a>  Therapy on a sliding fee scale
                </li>
                <li>
                  <a href="https://namiwla.org/find-support/free-and-low-cost-resources/" target="_blank" rel="noopener noreferrer"><strong>Kohan Foundation Counseling Center</strong></a> Affordable sliding fee based therapy
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'violence-prevention' && (
          <div className="category-content">
            <h2>Violence Prevention Resources</h2>
            <div className="resource-category">
              <h3>Shelters</h3>
              <ul>
                <li>
                  <a href="https://www.weingart.org/" target="_blank" rel="noopener noreferrer">Weingart Center</a>
                </li>
                <li>
                  <a href="https://venicefamilyclinic.org/locations" target="_blank" rel="noopener noreferrer">Venice Family Clinic</a>
                </li>
                <li>
                  <a href="https://www.midnightmission.org/" target="_blank" rel="noopener noreferrer">Midnight Mission</a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeCategory === 'economic-support' && (
          <div className="category-content">
            <h2>Economic Support Resources</h2>
            <div className="resource-category">
              <h3>Food</h3>
              <ul>
                <li>
                  <a href="https://www.gods-pantry.org/" target="_blank" rel="noopener noreferrer">God's Pantry</a>
                </li>
                <li>
                  <a href="http://www.westsidefoodbankca.org/index.php?option=com_content&task=view&id=70&Itemid=94" target="_blank" rel="noopener noreferrer">Food Pantry LAX</a>
                </li>
                <li>
                  <a href="http://www.westsidefoodbankca.org/" target="_blank" rel="noopener noreferrer">Westside Food Bank</a>
                </li>
              </ul>
            </div>

            <div className="resource-category">
              <h3>Other Resources</h3>
              <ul>
                <li>
                  <strong>What I Need Mobile App</strong>  Offers local resources through location searches
                </li>
                <li>
                  <a href="http://www.lapl.org/branches/los-feliz" target="_blank" rel="noopener noreferrer"><strong>Los Angeles Public Libraries</strong></a>  Holds a directory of resources to help guide people in need
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>

      <section className="final-notes">
        <h2>Final Notes</h2>
        <p>
          We at Fault Lines are so happy to have you reading this and offering us your time and attention – we hope that with every view this page gets, more people can become aware of the issues surrounding them and their communities. LA is the city where our hearts lie, and our passion and effort was devoted to this project so that we can help bring up the people of our communities. Systemic poverty is an all encompassing problem, and every factor of life can and is deteriorated when living in unequal conditions. Because of this, we know that it is important to share information about the epidemic of poverty, health, and crime, and we are proud to present our project as a facilitator to conversations to promote change.
        </p>
      </section>

      <section className="emergency-help">
        <h2>Need Immediate Help?</h2>
        <p className="help-intro">
          If you or someone you know is in crisis, please reach out to these emergency resources.
        </p>
        
        <div className="emergency-grid">
          <div className="emergency-card">
            <div className="emergency-icon">📞</div>
            <h3>Emergency Services</h3>
            <div className="emergency-number">911</div>
            <p>For immediate life-threatening emergencies</p>
          </div>

          <div className="emergency-card">
            <div className="emergency-icon">💭</div>
            <h3>Crisis Text Line</h3>
            <div className="emergency-number">Text HOME to 741741</div>
            <p>24/7 support for people in crisis</p>
          </div>

          <div className="emergency-card wide">
            <div className="emergency-icon">❤️</div>
            <h3>LA County Mental Health Hotline</h3>
            <div className="emergency-number">(800) 854-7771</div>
            <p>24/7 mental health support and resources</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;
