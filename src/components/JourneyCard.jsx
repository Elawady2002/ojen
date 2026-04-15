import React from 'react';
import { motion } from 'framer-motion';

const hexToRgb = (hex) => {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`
    : '197, 160, 89';
};

const JourneyCard = ({ 
  title, img, color, duration, tagline, goals = [], sections = {}, 
  onSelect, isFlipped, onToggleFlip 
}) => {
  const colorRgb = hexToRgb(color);
  const outcomeText = sections?.outcomes?.content ?? '';
  const focusText = goals[0] ?? tagline ?? '';

  const handleSelect = (e) => {
    e.stopPropagation(); // Prevent toggling flip back when clicking the button
    if (onSelect) onSelect({ title, img, color, duration, tagline, goals, sections });
  };

  const handleClick = () => {
    if (onToggleFlip) onToggleFlip();
  };

  return (
    <motion.div
      className="jc-outer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={handleClick}
      style={{
        '--theme-color': color,
        '--theme-rgb': colorRgb,
        cursor: 'pointer'
      }}
    >
      <div className={`jc-flipper ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front */}
        <div className="jc-face jc-front">
          <img src={img} alt={title} className="jc-img" />
          <div className="jc-shine" />
        </div>

        {/* Back */}
        <div className="jc-face jc-back">
          <div className="jc-back-inner">
            <div className="jc-back-header">
              <span className="jc-back-tag">{tagline}</span>
              <h3 className="jc-back-title" style={{ color: 'var(--theme-color)' }}>{title}</h3>
            </div>

            <div className="jc-back-stats">
              <div className="jc-stat-item">
                <span className="jc-stat-label">المدة</span>
                <span className="jc-stat-value">{duration}</span>
              </div>
              <div className="jc-stat-item">
                <span className="jc-stat-label">التركيز</span>
                <span className="jc-stat-value">{focusText}</span>
              </div>
              <div className="jc-stat-item">
                <span className="jc-stat-label">الأثر</span>
                <span className="jc-stat-value" style={{ fontSize: '0.75rem', opacity: 0.7 }}>{outcomeText}</span>
              </div>
            </div>

            <div className="jc-back-cta">
              <button 
                className="jc-cta-btn" 
                onClick={handleSelect}
              >
                اكتشف الرحلة
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JourneyCard;
