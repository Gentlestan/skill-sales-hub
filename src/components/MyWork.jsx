// Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import naijadiaspora from '../assets/images/naijadiaspora.jpg';
import bellawonder from '../assets/images/bellawonder.jpg';
import hallifas from '../assets/images/hallifas.jpg'
import './MyWork.css';


const projects = [
  {
    id: 1,
    title: 'Naija Diaspora Magazine 🇨🇮',
    client: 'Naija Diaspora Magazine',
    tagline: 'Copy-led entry campaign boosted engagement & partnerships by 68%',
    role: 'Headline concept, magnetic hook, outreach copy',
    image: naijadiaspora,
    metrics: { partnerships: '68%', base: 'from 0%' },
    testimonial: '“Your message opened doors for us we didn’t think possible.”',
    testimonialBy: 'Editor-in-Chief, Naija Diaspora Magazine',
    story: {
      problem: 'Needed to inspire Nigerian community in Cote D\'Ivoire to welcome the brand.',
      strategy: 'Developed a compelling cultural hook and action-oriented messaging sent to community stakeholders.',
      outcome: 'Campaign was warmly received, resulting in a 68% increase in conversions and partnerships.',
    },
  },
  {
    id: 2,
    title: 'BellaWonder Digitech 🚀',
    client: 'BellaWonder Digitech',
    tagline: 'Targeted strategy attracted high-paying clients with 120% ROAS',
    role: 'Market research, offer creation, Meta ads',
    //image: '/projects/bellawonder/hero.jpg',
    image: bellawonder,
    metrics: { roas: '120%', status: 'profitable' },
    testimonial: '“The results surpassed our expectations. Worth every kobo.”',
    testimonialBy: 'CEO, BellaWonder Digitech',
    story: {
      problem: 'Struggled to attract premium clients for digital marketing services.',
      strategy: 'Researched competitors, defined ideal client persona, crafted irresistible offer, ran Meta ads.',
      outcome: 'Achieved 120% return on ad spend with higher-value client acquisitions.',
    },
  },
  {
    id: 3,
    title: 'Haliffas High-Ticket Funnel 💰',
    client: 'Haliffas Global Resources',
    tagline: 'Sold ₦2.5M machine with a refined sales funnel',
    role: 'Funnel audit, new messaging, CTA rework',
    image: hallifas,
    metrics: { revenue: '₦2.5 M', product: 'High-ticket machine' },
    testimonial: '“We sold our most expensive item faster than ever before.”',
    testimonialBy: 'Mrs. Halima Sadiya',
    story: {
      problem: 'Struggled to sell premium products with outdated funnel and messaging.',
      strategy: 'Studied current offer, redefined audience, rewrote messaging and CTA for clarity and urgency.',
      outcome: 'Sold their most expensive product — a ₦2.5M health machine — using the new strategy.',
    },
   
  }
];


export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();


  return (
    <div className="portfolio-page">
      <header className="portfolio-hero">
        <h1>Featured Work & Case Studies</h1>
       <button
        className="cta-button"
        onClick={() => navigate('/contact')}
  >
        Let’s Talk Strategy & Copy
    </button>

      </header>

      <section className="projects-grid">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            className="project-card"
            onClick={() => setSelected(p)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.5 } }}
          >
            <div className="project-image-wrapper">
              <img src={p.image} alt={`${p.title} by ${p.client}`} />
              <div className="metrics-overlay">
                {Object.entries(p.metrics).map(([k, v]) => (
                  <span key={k}>{k}: {v}</span>
                ))}
              </div>
            </div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p className="project-client">{p.client}</p>
              <p>{p.tagline}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { type: 'spring' } }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelected(null)}>×</button>
              <h2>{selected.title}</h2>
              <p><em>Client sent quote:</em> “{selected.testimonial}” — {selected.testimonialBy}</p>

              <div className="story">
                <p><strong>Problem:</strong> {selected.story.problem}</p>
                <p><strong>Strategy:</strong> {selected.story.strategy}</p>
                <p><strong>Outcome:</strong> {selected.story.outcome}</p>
              </div>

              {selected.moreImages?.length > 0 && (
                <div className="more-images">
                {selected.moreImages.map((src, i) => (
              <img key={i} src={src} alt={`${selected.title} additional screenshot ${i + 1}`} />
                  ))}
                </div>
                  )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="portfolio-cta">
        <h2>Ready for results-driven strategy, and copy that sell?</h2>
        <Link to="/contact" className="cta-button">
          Let's Build Your Next Case Study
        </Link>
      </footer>
    </div>
  );
}
