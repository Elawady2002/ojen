import React from 'react';
import { motion } from 'framer-motion';
import JourneyCard from '../components/JourneyCard';
import { journeysData } from '../data/journeys';

const JourneysGrid = () => {
  return (
    <div className="journeys-page">

      {/* ────────── HERO ────────── */}
      <section className="jg-hero">
        <div className="jg-hero-bg" />

        {/* Animated orbital rings */}
        <div className="jg-orbital" aria-hidden="true">
          <div className="orb-ring orb-r1" />
          <div className="orb-ring orb-r2" />
          <div className="orb-ring orb-r3" />
          <div className="orb-core" />
          <div className="orb-streak s1" />
          <div className="orb-streak s2" />
          <div className="orb-streak s3" />
        </div>

        <div className="jg-hero-overlay" />

        <div className="container jg-hero-inner">
          <motion.h1
            className="jg-hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75 }}
          >
            رحلات التطور
          </motion.h1>

          <motion.p
            className="jg-hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
          >
            اكتشف رحلتك نحو القمة من خلال برامجنا التدريبية المكثفة والمصممة خصيصاً لتطوير مهاراتك القيادية.
          </motion.p>

          <motion.div
            className="jg-hero-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.65, duration: 1.1, ease: 'easeInOut' }}
          />
        </div>
      </section>

      {/* ────────── CARDS GRID ────────── */}
      <section className="jg-grid-section">
        <div className="container">
          <div className="jg-cards-grid">
            {journeysData.map((journey, index) => (
              <motion.div
                key={journey.id}
                className="jg-card-slot"
                initial={{ opacity: 0, y: 55, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: '-40px' }}
                style={{ perspective: 1000 }}
              >
                <JourneyCard {...journey} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── BASE ── */
        .journeys-page {
          background: var(--primary);
        }

        /* ── HERO ── */
        .jg-hero {
          position: relative;
          min-height: 540px;
          display: flex;
          align-items: center;
          overflow: hidden;
          margin-bottom: 70px;
        }
        .jg-hero-bg {
          position: absolute;
          inset: 0;
          background: url('/assets/imgi_13_page_header_1.jpg') center/cover no-repeat;
          filter: saturate(0.5) brightness(0.45);
        }
        .jg-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(10,11,15,0.55) 0%, rgba(10,11,15,0.92) 100%);
          z-index: 1;
        }

        /* Orbital rings */
        .jg-orbital {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          pointer-events: none;
        }
        .orb-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(217,185,89,0.07);
        }
        .orb-r1 { width: 280px; height: 280px; border-color: rgba(217,185,89,0.14); animation: orbSpin 14s linear infinite; }
        .orb-r2 { width: 480px; height: 480px; animation: orbSpin 24s linear infinite reverse; }
        .orb-r3 { width: 680px; height: 680px; border-color: rgba(217,185,89,0.04); animation: orbSpin 38s linear infinite; }
        .orb-core {
          position: absolute;
          width: 100px; height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(217,185,89,0.18) 0%, transparent 70%);
          animation: corePulse 3.5s ease-in-out infinite;
        }
        .orb-streak {
          position: absolute;
          width: 1px;
          background: linear-gradient(to bottom, rgba(217,185,89,0.5), transparent);
          transform-origin: top center;
          opacity: 0.3;
        }
        .s1 { height: 140px; transform: rotate(0deg);   animation: streakPulse 4s ease-in-out infinite; }
        .s2 { height: 140px; transform: rotate(120deg); animation: streakPulse 4s ease-in-out infinite 1.3s; }
        .s3 { height: 140px; transform: rotate(240deg); animation: streakPulse 4s ease-in-out infinite 2.6s; }

        @keyframes orbSpin    { to { transform: rotate(360deg); } }
        @keyframes corePulse  { 0%,100% { transform: scale(1); opacity:.7; } 50% { transform: scale(1.5); opacity:1; } }
        @keyframes streakPulse{ 0%,100% { opacity:.2; } 50% { opacity:.55; } }

        .jg-hero-inner {
          position: relative;
          z-index: 3;
          text-align: center;
          padding-top: 40px;
          padding-bottom: 60px;
        }
        .jg-hero-title {
          font-size: 4.2rem;
          font-weight: 900;
          margin-bottom: 22px;
          background: linear-gradient(160deg, var(--white) 0%, var(--accent) 55%, var(--white) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.15;
        }
        .jg-hero-sub {
          font-size: 1.08rem;
          color: var(--secondary);
          max-width: 680px;
          margin: 0 auto 32px;
          line-height: 1.82;
        }
        .jg-hero-rule {
          width: 90px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          margin: 0 auto;
          transform-origin: center;
        }

        /* ── CARDS GRID ── */
        .jg-grid-section {
          padding: 0 0 120px;
        }
        .jg-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .jg-card-slot {
          transform-style: preserve-3d;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .jg-cards-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .jg-hero-title { font-size: 3rem; }
          .jg-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .jg-hero-title { font-size: 2.3rem; }
          .jg-cards-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default JourneysGrid;
