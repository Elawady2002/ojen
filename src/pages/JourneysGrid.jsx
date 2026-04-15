import React, { useState } from 'react';
import { motion } from 'framer-motion';
import JourneyCard from '../components/JourneyCard';
import JourneySidebar from '../components/JourneySidebar';
import { journeysData } from '../data/journeys';

const JourneysGrid = () => {
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleSelectJourney = (journey) => {
    setSelectedJourney(journey);
  };

  const handleCloseSidebar = () => {
    setSelectedJourney(null);
  };

  const handleToggleFlip = (cardId) => {
    setFlippedCardId(flippedCardId === cardId ? null : cardId);
  };

  // Body scroll lock
  React.useEffect(() => {
    if (selectedJourney) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedJourney]);

  return (
    <div className="journeys-page">

      {/* Backdrop */}
      {selectedJourney && (
        <motion.div
          className="jg-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          onClick={handleCloseSidebar}
        />
      )}

      {/* Sidebar (Drawer) */}
      {selectedJourney && (
        <JourneySidebar
          journey={selectedJourney}
          onClose={handleCloseSidebar}
        />
      )}

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

      {/* ────────── CONTENT AREA ────────── */}
      <section className="jg-grid-section">
        <div className="jg-content-layout">

          {/* Cards Grid */}
          <div className="jg-cards-area">
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
                  <JourneyCard
                    {...journey}
                    isFlipped={flippedCardId === journey.id}
                    onToggleFlip={() => handleToggleFlip(journey.id)}
                    onSelect={handleSelectJourney}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── BASE ── */
        .journeys-page {
          background: var(--primary);
          overflow-x: hidden;
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
        
        @media (max-width: 768px) {
          .jg-orbital { opacity: 0.3; }
        }

        @keyframes orbSpin    { to { transform: rotate(360deg); } }

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

        /* Backdrop Overlay */
        .jg-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          z-index: 4000;
          cursor: pointer;
        }

        /* ── CONTENT LAYOUT ── */
        .jg-grid-section {
          padding: 0 0 120px;
        }
        .jg-content-layout {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: flex-start;
          gap: 28px;
          direction: rtl;
        }

        /* Cards area */
        .jg-cards-area {
          flex: 1;
          min-width: 0;
        }
        .jg-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .jg-cards-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .jg-hero-title { font-size: 3rem; }
          .jg-content-layout { padding: 0 20px; }
          .jg-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .jg-hero { min-height: 480px; }
          .jg-hero-title { font-size: 2.3rem; }
          .jg-cards-grid { grid-template-columns: 1fr; gap: 30px; }
          .jg-content-layout { padding: 0 16px; }
          /* Fix for drawer animation on mobile */
          .jsb-wrap { 
            width: 100vw !important; 
            max-width: 100% !important; 
          }
        }
      `}} />
    </div>
  );
};

export default JourneysGrid;
