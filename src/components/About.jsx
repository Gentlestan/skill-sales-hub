import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutPortrait from '../assets/images/aboutPortrait.jpg'; // adjust path as needed

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-image-wrapper">
          <img src={aboutPortrait} alt="Okoronkwo Chijioke" className="about-image" />
        </div>
        <div className="about-intro">
          <h1 className="about-title">I Turn Sales Funnels Into Profit Machines</h1>
          <p className="about-tagline">With Psychology-Driven Ad Copy That Converts</p>
        </div>
      </section>

      <section className="about-story">
        <h2 className="section-heading">My Story</h2>
        <p>
          I didn’t grow up dreaming of writing ads. But I’ve always been obsessed with what makes people say “yes.” 
          After helping a small business triple their sales with one Facebook campaign, I realized the power of words—and I never looked back.
        </p>
        <p>
          Today, I help brands craft strategic, high-converting copy that drives real revenue. No fluff. Just ROI.
        </p>
      </section>

      <section className="about-values">
        <h2 className="section-heading">What I Believe In</h2>
        <ul className="values-list">
          <li>🎯 Strategy before slogans</li>
          <li>📊 Psychology over guesswork</li>
          <li>🤝 People first, always</li>
        </ul>
      </section>

      <section className="about-results">
        <h2 className="section-heading">Proven Results</h2>
        <div className="results-grid">
          <div className="result-card">
            <h3>+68%</h3>
            <p>Conversion rate boost in 4 weeks</p>
          </div>
          <div className="result-card">
            <h3>120% ROI</h3>
            <p>Regional ad campaign returns</p>
          </div>
          <div className="result-card">
            <h3>₦2.5M Product</h3>
            <p>Sold via one persuasive sales strategy</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Let’s Build Your Next Breakthrough</h2>
        <p>Ready to scale with powerful, persuasive strategy? Let's connect.</p>
        <Link to="/contact" className="cta-button">Work With Me</Link>
      </section>
    </div>
  );
}
