import React from 'react';
import './HomePage.css';

function HomePage() {
  const teamMembers = [
    {
      name: "Arena Galeana Oregon",
      role: "Computer Science & Engineering UCI Student",
      image: "/images/team1.jpg", // You'll need to add actual images to your public/images folder
    },
    {
      name: "Meera Phadnis",
      role: "Undeclared Student with a passion for data science & economics",
      image: "/images/team2.jpg",
    },
    {
      name: "Jessica Liao",
      role: "CS UCI Student",
      image: "/images/team3.jpg",
    },
    {
      name: "Sabella Habtemariam",
      role: "Undeclared UCI Student with a passion for data science",
      image: "/images/team3.jpg",
    },
    // Add more team members as needed
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Fault Lines</h1>
        <p>Comprehensive insights into crime statistics and trends</p>
      </section>

      <section className="our-mission-section">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <p>LA is a beautiful city, full of cultural landmarks and natural landscapes, as well as housing one of the most diverse populations in the US. However, in all of LA’s majesty, the city still struggles with issues of poverty and wealth inequality. These then exacerbate other issues of mental health and violent crime, which propel the cycle of poverty and subpar living conditions.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Who We Are</h2>
        <p className="team-intro">Meet the dedicated students behind our mission</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-content">
          <p>Through data analysis and community engagement, we're making a difference in understanding and addressing crime rates.</p>
        </div>
      </section>

      <section className="info-section">
        <h2>About Our Data</h2>
        <p>Explore comprehensive crime statistics and analysis tools to understand safety trends in your area.</p>
      </section>
    </div>
  );
}

export default HomePage; 