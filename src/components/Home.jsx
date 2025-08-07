import React from 'react';
import portrait from '../assets/images/portrait.jpg';
import imageIsmaila from '../assets/images/ismaila.jpg';
import imageBlessing from '../assets/images/blessing.jpg';
import imageHalima from '../assets/images/halima.jpg';

import TestimonialCard from './TestimonialCard';
import './Home.css';


const testimonials = [
  {
    name: 'Mr. Ismaila Adegbola',
    role: 'CEO, Naija Diaspora Magazine',
    image: imageIsmaila,
    quote: "Okoronkwo's ad copy boosted our conversion rate by 68% within 4 weeks—truly transformative.",
  },
  {
    name: 'Mrs Blessing Ogochukwu',
    role: 'Founder, Bellawonder Digitech',
    image: imageBlessing,
    quote: 'His strategy delivered a 120% ROI on our first regional campaign. Highly strategic.',
  },
  {
    name: 'Mrs Halima Sadiya Abdulsalam',
    role: 'CEO, Haliffas Global Resources',
    image: imageHalima,
    quote: "Victor's creative sales strategy has helped us sell off our most expensive product, a health machine that costs ₦2.5M",
    
  }
];

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="intro-text">
          <h1 className="greeting"><span className="highlight">Hello</span>, I'm</h1>
          <h2 className="name">Okoronkwo Victor</h2>
          <p>
            I am a creative sales strategist & Ads <br />copywriter who make sales work for you!
          </p>
          <a href="mailto:Salesskillshub@gmail.com" className="cta-btn cta-before-img">Get In Touch</a>
        </div>
        <div className="image-wrapper">
          <img src={portrait} alt="Okoronkwo Chijioke" className="profile-image" />
        </div>
         <a href="mailto:Salesskillshub@gmail.com" className="cta-btn cta-before-img cta-after-img">Get In Touch</a>
      </div>
       {/* ——— Testimonials Section ——— */}
      <section className="testimonial-section">
        <h3 className="testimonial-heading">What Clients Say</h3>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>
    </div>
  );
}
