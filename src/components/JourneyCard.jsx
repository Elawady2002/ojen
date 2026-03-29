import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Target, Zap } from 'lucide-react';

const hexToRgb = (hex) => {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`
    : '197, 160, 89';
};

const JourneyCard = ({ id, title, img, color, duration, tagline, goals = [], sections = {} }) => {
  const colorRgb = hexToRgb(color);
  const outcomeText = sections?.outcomes?.content ?? '';
  const focusText = goals[0] ?? tagline ?? '';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── OUTER WRAPPER ── */
        .tc-outer {
          position: relative;
          cursor: pointer;
          perspective: 1100px;
        }

        /* ── FLIPPER ── */
        .tc-flipper {
          position: relative;
          width: 100%;
          aspect-ratio: 7 / 10;
          transform-style: preserve-3d;
          transition: transform 0.72s cubic-bezier(0.4, 0.2, 0.2, 1);
          border-radius: 20px;
        }
        .tc-outer:hover .tc-flipper {
          transform: rotateY(180deg);
        }

        /* ── SHARED FACE STYLES ── */
        .tc-face {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
        }

        /* ──────────────────────────────
           BACK FACE  (visible on hover)
           ────────────────────────────── */
        .tc-back {
          transform: rotateY(180deg);
          background: #111418;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Spinning gradient strip that creates the border glow */
        .tc-back::before {
          position: absolute;
          content: '';
          display: block;
          width: 140px;
          height: 160%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(var(--c), 0.9) 30%,
            rgba(197,160,89,0.85) 50%,
            rgba(var(--c), 0.9) 70%,
            transparent 100%
          );
          animation: tcSpin 5s infinite linear;
          z-index: 0;
        }

        /* Inner content panel sits on top of the spinning ring */
        .tc-back-inner {
          position: absolute;
          width: 98.5%;
          height: 98.5%;
          border-radius: 18px;
          background: #0d1118;
          display: flex;
          flex-direction: column;
          z-index: 1;
          overflow: hidden;
        }

        /* Spinning animation */
        @keyframes tcSpin {
          0%   { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }


        /* Back top accent bar */
        .tc-back-topbar {
          height: 2px;
          flex-shrink: 0;
        }

        /* Tag pill */
        .tc-tag-wrap {
          display: flex;
          justify-content: center;
          padding: 25px 20px 5px;
          flex-shrink: 0;
        }
        .tc-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 4px 12px;
        }
        .tc-tag-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .tc-tag-text {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        /* Back title */
        .tc-back-title {
          font-size: 1.25rem;
          font-weight: 900;
          text-align: center;
          padding: 8px 20px 12px;
          line-height: 1.35;
          flex-shrink: 0;
        }

        /* Back divider */
        .tc-back-divider {
          height: 1px;
          margin: 0 25% 10px;
          flex-shrink: 0;
        }

        /* Stats panel */
        .tc-stats {
          padding: 10px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 12px;
        }
        .tc-stat-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .tc-stat-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .tc-stat-value { 
          font-size: 0.82rem; 
          font-weight: 600; 
          color: white;
          line-height: 1.4;
        }
        .tc-value-text {
          color: rgba(255,255,255,0.7);
          font-size: 0.8rem;
          line-height: 1.5;
        }

        /* CTA button */
        .tc-back-cta {
          padding: 0 20px 20px;
          flex-shrink: 0;
        }
        .tc-cta-btn {
          width: 100%;
          padding: 10px;
          border-radius: 12px;
          text-align: center;
          font-size: 0.88rem;
          font-weight: 800;
          color: #0a0e14;
          letter-spacing: 0.4px;
          transition: transform 0.2s;
        }
        .tc-cta-btn:hover {
          transform: translateY(-2px);
        }

        /* ──────────────────────────────
           FRONT FACE  (visible by default)
           ────────────────────────────── */
        .tc-front {
          background: #0d1118;
        }
        .tc-front-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}} />

      <Link to={`/journey/${id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          className="tc-outer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
          style={{ '--c': colorRgb, '--color': color }}
        >
          {/* Flip container */}
          <div className="tc-flipper">

            {/* ── BACK FACE (revealed on hover) ── */}
            <div className="tc-face tc-back">
              <div className="tc-back-inner">
                <div
                  className="tc-back-topbar"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${colorRgb},0.8), transparent)` }}
                />

                <div className="tc-tag-wrap">
                  <div className="tc-tag">
                    <span className="tc-tag-dot" style={{ background: color }} />
                    <span className="tc-tag-text">{tagline}</span>
                  </div>
                </div>

                <div className="tc-back-title" style={{ color }}>
                  {title}
                </div>

                <div
                  className="tc-back-divider"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${colorRgb},0.3), transparent)` }}
                />

                <div className="tc-stats">
                  <div className="tc-stat-row">
                    <span className="tc-stat-label">المدة</span>
                    <span className="tc-stat-value">{duration}</span>
                  </div>

                  <div className="tc-stat-row">
                    <span className="tc-stat-label">التركيز</span>
                    <span className="tc-stat-value">{focusText}</span>
                  </div>

                  <div className="tc-stat-row">
                    <span className="tc-stat-label">الأثر</span>
                    <span className="tc-value-text">{outcomeText}</span>
                  </div>
                </div>

                <div className="tc-back-cta">
                  <div
                    className="tc-cta-btn"
                    style={{
                      background: color,
                      boxShadow: `0 4px 18px rgba(${colorRgb},0.35)`,
                    }}
                  >
                    اكتشف الرحلة
                  </div>
                </div>
              </div>
            </div>

            {/* ── FRONT FACE (default visible) ── */}
            <div className="tc-face tc-front">
              <img src={img} alt={title} className="tc-front-img" />
            </div>

          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default JourneyCard;
