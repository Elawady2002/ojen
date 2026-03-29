import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Target, CheckCircle, ArrowRight, Users, Award, BookOpen, Compass } from 'lucide-react';
import { journeysData } from '../data/journeys';

/* ── Helpers ── */
const hexToRgb = (hex) => {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`
    : '197, 160, 89';
};

const SECTION_ICONS = {
  target:   <Users    size={21} />,
  outcomes: <Award    size={21} />,
  content:  <BookOpen size={21} />,
  pillars:  <Compass  size={21} />,
};

/* ── Animated section block for the narrative path ── */
const PathBlock = ({ sectionKey, title, children, color, colorRgb, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="pb-block"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div
        className="pb-icon"
        style={{ color, borderColor: `rgba(${colorRgb},0.35)` }}
      >
        {SECTION_ICONS[sectionKey] || <BookOpen size={21} />}
      </div>

      <div className="pb-body">
        <h3 className="pb-title"             style={{ color: 'var(--accent)' }}>{title}</h3>
        <div className="pb-text">{children}</div>
      </div>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════ */
const JourneyDetail = () => {
  const { id } = useParams();
  const [activePackage, setActivePackage] = useState('individual');

  const journey =
    journeysData.find((j) => j.id === id) ||
    journeysData.find((j) => j.id === 'speak-to-lead');

  if (!journey) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h1>الرحلة غير موجودة</h1>
        <Link
          to="/"
          className="premium-btn"
          style={{ marginTop: '20px', display: 'inline-flex' }}
        >
          <ArrowRight size={18} /> العودة للرئيسية
        </Link>
      </div>
    );
  }

  const { title, tagline, description, img, goals, sections, color } = journey;
  const colorRgb = hexToRgb(color);

  return (
    <div className="detail-lp">
      {/* ══════ DESCRIPTION ══════ */}
      <div className="container lp-container">
        <section className="lp-desc">
          {/* Visual side */}
          <motion.div
            className="lp-desc-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="lp-dv-frame"
              style={{ '--c': colorRgb }}
            >
              <img src={img} alt={title} className="lp-dv-img" />
              <div
                className="lp-dv-tint"
                style={{
                  background: `linear-gradient(145deg, rgba(${colorRgb},0.1) 0%, rgba(10,14,20,0.2) 100%)`,
                }}
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="lp-desc-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="lp-desc-badge"
              style={{
                background: `rgba(${colorRgb},0.13)`,
                color: `rgb(${colorRgb})`,
                borderColor: `rgba(${colorRgb},0.3)`,
              }}
            >
              وصف البرنامج
            </div>
            <p className="lp-desc-body">{description}</p>
            <div
              className="lp-desc-rule"
              style={{ background: `linear-gradient(90deg, rgba(${colorRgb},0.65), transparent)` }}
            />
            <p className="lp-desc-meta">
              <span style={{ color: `rgb(${colorRgb})` }}>⬥</span>{' '}
              مدة البرنامج: <strong>30 يوماً</strong> من التدريب المكثف
            </p>
          </motion.div>
        </section>
      </div>

      {/* ══════ GOALS ══════ */}
      <section className="lp-goals-wrap">
        <div className="container">
          <motion.div
            className="lp-goals-header"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Target size={26} style={{ color: `rgb(${colorRgb})` }} />
            <h2 className="lp-goals-title">الأهداف</h2>
          </motion.div>

          <div className="lp-goals-grid">
            {goals.map((goal, i) => (
              <motion.div
                key={i}
                className="lp-goal-item"
                style={{ '--c': colorRgb }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09, duration: 0.55 }}
                viewport={{ once: true }}
              >
                <span className="lp-goal-n">{String(i + 1).padStart(2, '0')}</span>
                <CheckCircle size={16} style={{ color: `rgb(${colorRgb})`, flexShrink: 0 }} />
                <span className="lp-goal-text">{goal}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ NARRATIVE PATH (sections) ══════ */}
      <div className="container lp-container">
        <section className="lp-path-section">
          {/* No horizontal line needed for this specific grid look */}

          {Object.keys(sections).map((key, idx) => (
            <PathBlock
              key={key}
              sectionKey={key}
              title={sections[key].title}
              color={color}
              colorRgb={colorRgb}
              index={idx}
            >
              <p>{sections[key].content}</p>
            </PathBlock>
          ))}
        </section>

        {/* ══════ PRICING ══════ */}
        <section className="lp-pricing">
          <motion.h2
            className="lp-pricing-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            اختر مستواك
          </motion.h2>

          {/* Package type tokens */}
          <div className="lp-pkg-tokens">
            <button
              className={`lp-pkg-token ${activePackage === 'individual' ? 'lp-pkg-active' : ''}`}
              onClick={() => setActivePackage('individual')}
              style={{ '--c': colorRgb }}
            >
              الأفراد
            </button>
            <button
              className={`lp-pkg-token ${activePackage === 'corporate' ? 'lp-pkg-active' : ''}`}
              onClick={() => setActivePackage('corporate')}
              style={{ '--c': colorRgb }}
            >
              المؤسسات
            </button>
          </div>

          {/* Crystal columns — Basic LEFT, Premium RIGHT */}
          <div className="lp-cols">

            {/* ── BASIC (left) ── */}
            <motion.div
              className="lp-col lp-col-basic"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              viewport={{ once: true }}
            >
              <div className="lp-col-header">
                <h3 className="lp-col-name">الأساسية</h3>
                <span className="lp-col-gem">◇</span>
              </div>
              <p className="lp-col-desc">
                تطوير مهارات التواصل للقيادة الفعالة خلال 30 يوماً.
              </p>
              <ul className="lp-col-list">
                <li>
                  <span className="lp-dot" />
                  مستوى الوصول: أساسي
                </li>
                <li>
                  <span className="lp-dot" />
                  يشمل: البطاقات اليومية والتمارين
                </li>
                <li style={{ opacity: 0.45 }}>
                  <span className="lp-dot" />
                  جلسات تدريبية خاصة: لا يوجد
                </li>
              </ul>
              <button className="lp-col-btn lp-btn-basic">
                <span>اشترك الآن</span>
                <span className="lp-btn-gem">◈</span>
              </button>
            </motion.div>

            {/* ── PREMIUM (right) ── */}
            <motion.div
              className="lp-col lp-col-premium"
              style={{ '--c': colorRgb }}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.65 }}
              viewport={{ once: true }}
            >
              {/* Ambient glow */}
              <div
                className="lp-col-glow"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, rgba(${colorRgb},0.22) 0%, transparent 68%)`,
                }}
              />
              <div className="lp-premium-badge">المنارة</div>

              <div className="lp-col-header">
                <h3 className="lp-col-name lp-col-name-gold">الممتازة</h3>
                <span className="lp-col-gem" style={{ color: `rgb(${colorRgb})` }}>◆</span>
              </div>
              <p className="lp-col-desc">
                تطوير مهارات التواصل للقيادة الفعالة خلال 30 يوماً.
              </p>
              <ul className="lp-col-list">
                <li>
                  <span className="lp-dot lp-dot-gold" />
                  مستوى الوصول: بريميوم
                </li>
                <li>
                  <span className="lp-dot lp-dot-gold" />
                  يشمل: كل محتوى الباقة الأساسية + جلسة تدريب خاصة كل 10 أيام
                </li>
                <li>
                  <span className="lp-dot lp-dot-gold" />
                  الدعم: أولوية في الدعم
                </li>
              </ul>
              <button
                className="lp-col-btn lp-btn-premium"
                style={{
                  background: `linear-gradient(135deg, rgba(${colorRgb},0.85), var(--accent))`,
                  boxShadow: `0 8px 28px rgba(${colorRgb},0.35)`,
                }}
              >
                <span>اشترك الآن</span>
                <span className="lp-btn-gem">◈</span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ══════ STYLES ══════ */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* BASE */
        .detail-lp {
          background: var(--primary);
        }

        /* ── HERO ── */
        .lp-hero {
          position: relative;
          min-height: 580px;
          display: flex;
          align-items: center;
          overflow: hidden;
          margin-bottom: 0;
        }
        .lp-hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 25%;
          filter: saturate(0.5) brightness(0.4);
        }
        .lp-hero-dark {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(10,11,15,0.45) 0%, rgba(10,11,15,0.97) 100%);
        }
        .lp-hero-beam {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .lp-hero-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          padding-top: 70px;
          padding-bottom: 90px;
        }
        .lp-breadcrumb {
          font-size: 0.85rem;
          color: var(--accent);
          letter-spacing: 5px;
          text-transform: uppercase;
          font-family: var(--font-english);
          margin-bottom: 22px;
        }
        .lp-hero-title {
          font-size: 4.8rem;
          font-weight: 900;
          line-height: 1.12;
          margin-bottom: 18px;
          background: linear-gradient(180deg, var(--white) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lp-hero-tagline {
          font-size: 1.25rem;
          color: var(--accent);
          letter-spacing: 7px;
          margin-bottom: 32px;
        }
        .lp-hero-rule {
          width: 170px;
          height: 2px;
          background: var(--linearAccent);
          margin: 0 auto;
          transform-origin: right center;
        }

        /* ── SHARED CONTAINER WRAPPER ── */
        .lp-container { padding-top: 90px; }

        /* ── DESCRIPTION ── */
        .lp-desc {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 70px;
          align-items: center;
          margin-bottom: 0;
          padding-bottom: 100px;
        }
        .lp-desc-visual { position: relative; }
        .lp-dv-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 7 / 10;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .lp-dv-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .lp-dv-frame:hover .lp-dv-img { transform: scale(1.02); }
        .lp-dv-tint {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .lp-desc-badge {
          display: inline-block;
          padding: 5px 14px;
          border: 1px solid;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .lp-desc-body {
          font-size: 1.1rem;
          color: var(--secondary);
          line-height: 1.88;
          margin-bottom: 28px;
        }
        .lp-desc-rule {
          height: 1px;
          max-width: 180px;
          margin-bottom: 18px;
        }
        .lp-desc-meta {
          font-size: 0.93rem;
          color: var(--secondary);
        }
        .lp-desc-meta strong { color: var(--white); }

        /* ── GOALS ── */
        .lp-goals-wrap {
          background: var(--gray);
          padding: 80px 0 90px;
          margin-bottom: 0;
        }
        .lp-goals-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 48px;
        }
        .lp-goals-title {
          font-size: 2.1rem;
          font-weight: 800;
          color: var(--accent);
        }
        .lp-goals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 16px;
        }
        .lp-goal-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          background: var(--gray);
          padding: 18px 20px;
          border-radius: 12px;
          border: 1px solid rgba(var(--c), 0.12);
          transition: border-color 0.3s, background 0.3s;
        }
        .lp-goal-item:hover {
          background: rgba(var(--c),0.06);
          border-color: rgba(var(--c),0.32);
        }
        .lp-goal-n {
          font-size: 1.9rem;
          font-weight: 900;
          color: rgba(217,185,89,0.07);
          font-family: var(--font-english);
          line-height: 1;
          min-width: 36px;
          align-self: center;
        }
        .lp-goal-text {
          font-size: 0.93rem;
          color: var(--secondary);
          line-height: 1.6;
        }

        /* ── NARRATIVE PATH (Horizontal Grid) ── */
        .lp-path-section {
          position: relative;
          padding: 80px 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .pb-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          position: relative;
        }
        .pb-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gray);
          border: 1px solid;
          border-radius: 10px;
          flex-shrink: 0;
          opacity: 0.85;
        }
        .pb-body { flex: 1; }
        .pb-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .pb-text p {
          font-size: 0.98rem;
          color: var(--secondary);
          line-height: 1.78;
        }

        /* ── PRICING ── */
        .lp-pricing {
          padding-bottom: 120px;
        }
        .lp-pricing-title {
          font-size: 2.4rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 38px;
          background: linear-gradient(135deg, var(--white), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Package tokens */
        .lp-pkg-tokens {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 50px;
        }
        .lp-pkg-token {
          padding: 10px 28px;
          font-size: 0.93rem;
          font-weight: 600;
          color: var(--secondary);
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 30px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .lp-pkg-active {
          color: var(--accent);
          background: var(--accentSoft);
          border-color: var(--accent);
          box-shadow: var(--shadow-glow);
          transform: translateY(-3px);
        }

        /* Crystal columns grid: left = basic, right = premium */
        .lp-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          max-width: 920px;
          margin: 0 auto;
          direction: ltr; /* ensure left=basic stays left in RTL page */
        }
        .lp-col {
          position: relative;
          padding: 44px 34px;
          background: var(--gray);
          border-radius: 24px;
          border: 1px solid var(--border);
          overflow: hidden;
          text-align: right;
          direction: rtl;
        }
        .lp-col-premium {
          border-color: var(--accent);
          background: var(--linearBackgroundCard);
        }
        .lp-col-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .lp-premium-badge {
          position: absolute;
          top: 0;
          left: 0;
          background: var(--accent);
          color: var(--black);
          font-size: 0.76rem;
          font-weight: 800;
          padding: 5px 16px;
          border-radius: 0 0 0 12px;
          letter-spacing: 1px;
          direction: rtl;
        }
        .lp-col-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .lp-col-name {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--white);
        }
        .lp-col-name-gold { color: white; }
        .lp-col-gem {
          font-size: 1.7rem;
          color: var(--secondary);
        }
        .lp-col-desc {
          font-size: 0.9rem;
          color: var(--secondary);
          line-height: 1.65;
          margin-bottom: 26px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--border);
        }
        .lp-col-list {
          list-style: none;
          margin-bottom: 34px;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .lp-col-list li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          font-size: 0.9rem;
          color: var(--secondary);
          line-height: 1.5;
        }
        .lp-dot {
          width: 6px;
          height: 6px;
          min-width: 6px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.35;
          margin-top: 6px;
        }
        .lp-dot-gold { background: var(--accent); }
        .lp-col-btn {
          width: 100%;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.98rem;
          font-weight: 700;
          font-family: inherit;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          border: none;
        }
        .lp-btn-basic {
          background: transparent;
          border: 1px solid var(--accent);
          color: var(--accent);
        }
        .lp-btn-basic:hover {
          background: var(--accentSoft);
          border-color: var(--accentHover);
        }
        .lp-btn-premium {
          color: var(--black);
          font-weight: 800;
          transition: filter 0.3s, transform 0.3s;
        }
        .lp-btn-premium:hover {
          filter: brightness(1.12);
          transform: translateY(-2px);
        }
        .lp-btn-gem { font-size: 1.05rem; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .lp-hero-title  { font-size: 3.2rem; }
          .lp-desc        { grid-template-columns: 1fr; }
          .lp-desc-visual { display: none; }
          .lp-cols        { grid-template-columns: 1fr; }
          .lp-goals-grid  { grid-template-columns: 1fr; }
          .lp-path-section { grid-template-columns: 1fr; }
          .lp-path-line   { display: none; }
          .pb-block       { padding-right: 0; }
        }
        @media (max-width: 560px) {
          .lp-hero-title  { font-size: 2.4rem; }
          .lp-hero-tagline{ letter-spacing: 3px; }
        }
      `}} />
    </div>
  );
};

export default JourneyDetail;
