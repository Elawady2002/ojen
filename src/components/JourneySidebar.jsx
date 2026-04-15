import React from 'react';
import { X, Clock, Users, Target, Layers, TrendingUp } from 'lucide-react';

const JourneySidebar = ({ journey, onClose }) => {
  if (!journey) return null;

  const { title, tagline, color, duration, goals = [], sections = {} } = journey;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sidebarFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes sidebarSlideIn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }

        .jsb-wrap {
          width: 480px;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          height: 100vh;
          z-index: 5000;
          animation: sidebarSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
          pointer-events: auto;
        }

        .jsb-card {
          background: #0D0E12;
          border-right: 1px solid var(--border);
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          box-shadow: 25px 0 50px rgba(0,0,0,0.6);
          border-radius: 0;
        }

        .jsb-topbar {
          height: 3px;
          flex-shrink: 0;
        }

        .jsb-close {
          position: absolute;
          top: 16px;
          left: 16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid var(--border);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
          z-index: 2;
        }
        .jsb-close:hover {
          background: rgba(255,255,255,0.14);
          color: var(--white);
          transform: rotate(90deg);
        }

        .jsb-header {
          padding: 28px 24px 20px;
          flex-shrink: 0;
          direction: rtl;
        }
        .jsb-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .jsb-tag-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .jsb-tag-text {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--secondary);
        }
        .jsb-title {
          font-size: 1.75rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .jsb-duration {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 4px 12px;
          font-size: 0.8rem;
          color: var(--secondary);
        }

        .jsb-divider {
          height: 1px;
          margin: 0 24px;
          flex-shrink: 0;
        }

        .jsb-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          direction: rtl;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }
        .jsb-body::-webkit-scrollbar { width: 4px; }
        .jsb-body::-webkit-scrollbar-track { background: transparent; }
        .jsb-body::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

        .jsb-section-label {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 8px;
        }
        .jsb-section-label span {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--secondary);
        }
        .jsb-section-text {
          font-size: 0.9rem;
          color: var(--white);
          line-height: 1.7;
          opacity: 0.85;
        }

        .jsb-goals {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 0;
        }
        .jsb-goal-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--white);
          opacity: 0.85;
          line-height: 1.55;
        }
        .jsb-goal-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .jsb-cta {
          padding: 16px 24px 20px;
          flex-shrink: 0;
          direction: rtl;
        }
        .jsb-cta-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--black);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .jsb-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
      `}} />

      <div className="jsb-wrap">
        <div className="jsb-card">
          <div
            className="jsb-topbar"
            style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          />

          <button className="jsb-close" onClick={onClose} aria-label="إغلاق">
            <X size={16} />
          </button>

          <div className="jsb-header">
            <div className="jsb-tag">
              <span className="jsb-tag-dot" style={{ background: color }} />
              <span className="jsb-tag-text">{tagline}</span>
            </div>
            <h2 className="jsb-title" style={{ color }}>{title}</h2>
            <div className="jsb-duration">
              <Clock size={13} />
              <span>{duration}</span>
            </div>
          </div>

          <div
            className="jsb-divider"
            style={{ background: `linear-gradient(90deg, transparent, ${color}44, transparent)` }}
          />

          <div className="jsb-body">
            {sections?.target && (
              <div className="jsb-section">
                <div className="jsb-section-label">
                  <Users size={13} />
                  <span>{sections.target.title}</span>
                </div>
                <p className="jsb-section-text">{sections.target.content}</p>
              </div>
            )}

            {goals.length > 0 && (
              <div className="jsb-section">
                <div className="jsb-section-label">
                  <Target size={13} />
                  <span>الأهداف</span>
                </div>
                <ul className="jsb-goals">
                  {goals.map((goal, i) => (
                    <li key={i} className="jsb-goal-item">
                      <span className="jsb-goal-dot" style={{ background: color }} />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {sections?.pillars && (
              <div className="jsb-section">
                <div className="jsb-section-label">
                  <Layers size={13} />
                  <span>{sections.pillars.title}</span>
                </div>
                <p className="jsb-section-text">{sections.pillars.content}</p>
              </div>
            )}

            {sections?.outcomes && (
              <div className="jsb-section">
                <div className="jsb-section-label">
                  <TrendingUp size={13} />
                  <span>{sections.outcomes.title}</span>
                </div>
                <p className="jsb-section-text">{sections.outcomes.content}</p>
              </div>
            )}
          </div>

          <div className="jsb-cta">
            <button
              className="jsb-cta-btn"
              style={{
                background: color,
                boxShadow: `0 6px 20px rgba(0,0,0,0.35)`,
              }}
            >
              سجّل الآن في البرنامج
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneySidebar;
