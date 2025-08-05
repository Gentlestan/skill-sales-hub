import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Let's Work Together</h1>
        <p>Whether you're launching, scaling, or just exploring your next move — I’m here to help make it a winning one.</p>
      </section>

      <section className="testimonial-highlight">
        <blockquote>
          “Victor's creative strategy helped us sell a ₦2.5M product. Easy to work with and results-driven.”
        </blockquote>
        <footer>— Mrs. Halima Sadiya, Haliffas Global Resources</footer>
      </section>

      <section className="contact-methods">
        <h2>Reach Me Directly</h2>
        <div className="contact-grid">
          <a href="mailto:Salesskillshub@gmail.com" className="contact-card">
            📧 Email Me  
            <span>okoronkwo@example.com</span>
          </a>

          <a href="tel:+2348012345678" className="contact-card">
            📞 Call Me  
            <span>+234 813 215 2804</span>
          </a>

          <a
            href="https://wa.me/2348132152804"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            💬 WhatsApp  
            <span>Click to Chat</span>
          </a>

          <a
            href="https://calendly.com/sohazulike/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            📅 Schedule a Call  
            <span>Calendly Booking</span>
          </a>
        </div>
      </section>

      <section className="social-section">
        <h2>Follow or Connect</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/okoronkwo-victor-bb17ba267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/share/15nd5PJm1s/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </section>

      <footer className="response-time">
        <p>⏱️ I usually respond within 24 hours, Monday–Friday.</p>
      </footer>
    </div>
  );
}
