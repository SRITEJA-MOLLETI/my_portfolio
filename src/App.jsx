
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import profileImage from './assets/profile.jpg';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = !darkMode ? 'dark' : '';
  };

  return (
    <main className={darkMode ? 'container dark-container' : 'container'}>
      <header className="header" data-aos="fade-down">
        <img src={profileImage} alt="Sri Teja" className="profile-pic" />
        <h1>Sri Teja Molleti</h1>
        <p className="subtitle">Turning Data Into Decisions</p>
        <div className="actions">
          <button className="btn" onClick={toggleTheme}>
            {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
          <a href="/SriTeja_Resume.pdf" className="btn" download>
            📄 Download Resume
          </a>
        </div>
      </header>

      <section className="section" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          Motivated professional with analytical and problem-solving skills, aiming to build better predictive models
          and contribute to organizational goals through data science and engineering.
        </p>
      </section>

      <section className="section" data-aos="fade-up">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Python</li><li>SQL</li><li>Excel</li><li>Pandas</li><li>Numpy</li><li>Flask</li>
          <li>Scikit-learn</li><li>Seaborn</li><li>Machine Learning</li><li>Statistics</li>
          <li>Linear Algebra</li><li>Probability</li><li>OOP</li><li>Data Visualization</li>
        </ul>
      </section>

      <section className="section" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>🏠 House Price Prediction</h3>
            <p>Flask + Linear Regression model for Bangalore housing dataset with clean UI and interactive output.</p>
            <p><strong>Tools:</strong> Python, Pandas, Flask, Scikit-learn</p>
          </div>
          <div className="project-card">
            <h3>🌉 Suspension Bridge Analysis</h3>
            <p>3D Structural modeling and simulation using STAAD.Pro based on real-world design standards.</p>
            <p><strong>Tools:</strong> STAAD.Pro, AutoCAD, Civil Engineering Codes</p>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2>Experience</h2>
        <p><strong>KEC International Ltd (2021 - Present)</strong><br/>Engineering Leadership Trainee – Chennai Metro Rail Project</p>
      </section>

      <section className="section" data-aos="fade-up">
        <h2>Education</h2>
        <p><strong>B.Tech - NIT Arunachal Pradesh</strong> (2017-2021) – 8.85 CGPA</p>
      </section>
    </main>
  );
};

export default App;
