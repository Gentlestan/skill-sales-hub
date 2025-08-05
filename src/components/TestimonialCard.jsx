import React from 'react';
import './TestimonialCard.css';

export default function TestimonialCard({ name, role, image, quote }) {
  return (
    <blockquote className="testimonial-card">
      <div className="testimonial-img-wrapper">
        <img src={image} alt={`${name}, ${role}`} className="testimonial-photo" />
      </div>
      <div className="testimonial-body">
        <p className="testimonial-quote">“{quote}”</p>
        <footer className="testimonial-meta">
          <strong className="testimonial-name">{name} </strong>
          <span className="testimonial-role">{role}</span>
        </footer>
      </div>
    </blockquote>
  );
}
