import React from 'react';
import './HomePage.css';
import meeraImage from '../images/0.jpg'; // Adjust the path as necessary
import arenaImage from '../images/arena.jpg'; // Adjust the path as necessary
import sabiImage from '../images/IMG_5811.jpg';
import jessicaImage from '../images/IMG_9505.jpeg'; // Adjust the path as necessary

function HomePage() {
  const teamMembers = [
    {
      name: "Arena Galeana Oregon",
      role: "Arena is a first year student studying computer science and engineering, with a focus in biomedical engineering. She is a passionate reader and athlete when not developing websites.",
      image: arenaImage, // You'll need to add actual images to your public/images folder
    },
    {
      name: "Meera Phadnis",
      role: "Meera is a first year undeclared student and planning to double major in economics and data science. Outside of school, she is a skilled tennis player and robotics enthusiast.",
      image: meeraImage,
    },
    {
      name: "Jessica Liao",
      role: "Jessica is a second year majoring in computer science, with a minor in statistics. She is also an avid anime and tv enthusiast, as well as dabbling in crafting and crochet.",
      image: jessicaImage,
    },
    {
      name: "Sabella Habtemariam",
      role: "Sabi is an undeclared first year, aiming to major in data science with a minor in philosophy. She loves to read in her spare time, as well as listening to music for her radio show. ",
      image: sabiImage,
    },
    // Add more team members as needed
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Fault Lines</h1>
      </section>
      <section className="our-mission-section">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <p>LA is a beautiful city, full of cultural landmarks and natural landscapes, as well as housing one of the most diverse populations in the US. However, in all of LA’s majesty, the city still struggles with issues of poverty and wealth inequality. These then exacerbate other issues of mental health and violent crime, which propel the cycle of poverty and subpar living conditions.</p>
          <p>In Fault Lines, we aim to express these inequities with data collected by California Health Projects, and by overlaying these sets, we can find the areas most impacted by socio-economic inequity. We focus on three main datasets to assess: median income, violent crime rate per one hundred thousand, and the rate of adults with depression PER NUMBER. With these key datasets, all measured by counties in LA, we can visualise an image of how wealth and wealth gaps correlate with general life quality. Finally, we use this data to highlight communities which need more resources and support to promote economic growth and general welfare; and we link some of these grassroots efforts in order to offer help in these areas.</p>
        </div>
      </section>

      <section className="team-section">
        <h2>Who We Are</h2>
        <p className="team-intro">Fault Lines is a ragtag group of students all united by our drive to learn about data literacy. We come from all different backgrounds and levels of skill in programming, but together we were able to create this website in just 36 hours at UCI’s annual datathon. We aligned on our interests in mental health and using data as a tool to spread awareness{','} which allowed us to conceive this project.</p>
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
          <p>Through data analysis and community engagement, we're making a difference in understanding and addressing crime rates and mental health epidemics. With our website, policymakers and grassroot organizers can view which neighborhoods need more support and resources, and this could potentially allow for policy changes which could promote fairly distributed aid and welfare. In addition, we added some resources local to these zones of lower development which residents can use to get access to healthcare, food, shelter, and other basic needs. </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Methodology</h2>
        <p>Our project was made possible with datasets published by California Health Projects, who have published a master list of reputable sources delineating California health data, which is organized by county. We used their datasets on violent crime rate per one hundred thousand people, as well as information on household median income and percent of adults diagnosed with depression per county. We cleaned and processed these datasets, then used Python to visualize this information in graphs and charts. These charts, alongside research about socioeconomic conditions and perpetual loops of poverty, informed us to create our final project: Fault Lines.</p>
      </section>
    </div>
  );
}

export default HomePage; 