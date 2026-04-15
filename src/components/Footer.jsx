import React from 'react';
import { Send, Instagram, Linkedin, Twitter, Facebook, MessageSquare, Phone, Mail, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        {/* Top Row: Contact & Logo */}
        <div className="footer-top-row">
          <div className="contact-item left">
            <span className="label">إرسال بريد إلكتروني</span>
            <a href="mailto:info@theojen.com" className="value">info@theojen.com</a>
          </div>
          
          <div className="footer-logo-center">
            <img src="/assets/logo.png" alt="Ojen Logo" className="footer-logo-img" />
          </div>

          <div className="contact-item right">
            <span className="label">هل لديك أي سؤال؟</span>
            <a href="tel:00971553033998" className="value">00971553033998</a>
          </div>
        </div>

        <div className="divider"></div>

        {/* Middle Row: Grid */}
        <div className="footer-grid-container">
          {/* Newsletter Column */}
          <div className="footer-col newsletter-col">
            <h4>النشرة الإخبارية</h4>
            <p className="footer-subtext">اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات</p>
            <div className="newsletter-wrapper">
              <input type="email" placeholder="أدخل بريدك الإلكتروني" className="newsletter-input" />
              <button className="newsletter-submit-btn">اشتراك</button>
            </div>
            
            <div className="payment-section">
              <h5 className="payment-title">طرق الدفع</h5>
              <div className="payment-icons-list">
                <img src="/assets/payments.webp" alt="Visa" className="pay-icon" />
              </div>
            </div>
          </div>

          {/* Legal Column */}
          <div className="footer-col">
            <h4>قانوني</h4>
            <ul className="footer-links">
              <li><a href="/privacy">سياسة الخصوصية</a></li>
              <li><a href="/terms">الشروط والاحكام</a></li>
              <li><a href="/faq">الأسئلة الشائعة</a></li>
              <li><a href="/contact">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul className="footer-links">
              <li><a href="/journeys">رحلات التطور</a></li>
              <li><a href="/platform">عن المنصة</a></li>
              <li><a href="/solutions">الحلول</a></li>
              <li><a href="/blog">المدونة</a></li>
            </ul>
          </div>

          {/* About Us Column */}
          <div className="footer-col about-col">
            <h4>من نحن</h4>
            <p className="about-text">
              أوجن - خبراء جودة الحياة المؤسسية - هي مؤسسة خدمات مهنية مقرها الإمارات، متخصصة في جودة الحياة المؤسسية، والتطوير المؤسسي، وتنمية رأس المال البشري.
            </p>
            <div className="social-links-row">
              <a href="#" className="social-icon-circle"><Instagram size={18} /></a>
              <a href="#" className="social-icon-circle"><Linkedin size={18} /></a>
              <a href="#" className="social-icon-circle"><Twitter size={18} /></a>
              <a href="#" className="social-icon-circle"><Facebook size={18} /></a>
              <a href="#" className="social-icon-circle">𝕏</a>
              <a href="#" className="social-icon-circle"><MessageSquare size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="footer-copyright-row">
          <p>جميع الحقوق محفوظة © Ojen 2026</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .main-footer {
          background: var(--linearSection);
          padding: 80px 0 40px;
          border-top: 1px solid rgba(217, 185, 89, 0.1);
          color: var(--white);
          direction: rtl;
          position: relative;
          overflow: hidden;
        }
        .main-footer:before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(217, 185, 89, 0.3), transparent);
        }
        
        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .contact-item.left { text-align: right; }
        .contact-item.right { text-align: left; }
        
        .contact-item .label {
          color: var(--secondary);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .contact-item .value {
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--white);
          transition: color 0.3s;
        }
        .contact-item .value:hover {
          color: var(--accent);
        }
        
        .footer-logo-img {
          height: 50px;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(217, 185, 89, 0.2));
        }
        
        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin-bottom: 60px;
        }

        .footer-grid-container {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-col h4 {
          font-size: 1.25rem;
          margin-bottom: 30px;
          font-weight: 800;
          color: var(--white);
          position: relative;
          display: inline-block;
        }
        .footer-col h4:after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: 0;
          width: 30px;
          height: 2px;
          background: var(--accent);
        }

        .footer-subtext {
          font-size: 0.95rem;
          color: var(--secondary);
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .newsletter-wrapper {
          display: flex;
          background: var(--gray);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 30px;
          border: 1px solid var(--border);
          transition: border-color 0.3s, box-shadow 0.3s;
          backdrop-filter: blur(10px);
        }
        .newsletter-wrapper:focus-within {
          border-color: var(--accent);
          box-shadow: var(--shadow-glow);
        }
        .newsletter-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--white);
          padding: 16px 20px;
          outline: none;
          font-size: 0.95rem;
          text-align: right;
        }
        .newsletter-submit-btn {
          background: var(--accent);
          color: var(--black);
          padding: 0 30px;
          font-weight: 800;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
        }
        .newsletter-submit-btn:hover {
          background: var(--accentHover);
          transform: scale(1.05);
        }

        .payment-section .payment-title {
          font-size: 0.9rem;
          color: var(--secondary);
          margin-bottom: 15px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .payment-icons-list .pay-icon {
          height: 32px;
          object-fit: contain;
          opacity: 0.9;
          transition: opacity 0.3s, transform 0.3s;
        }
        .pay-icon:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        .footer-links {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 14px;
        }
        .footer-links li a {
          color: var(--secondary);
          font-size: 1rem;
          transition: all 0.3s;
          display: inline-block;
        }
        .footer-links li a:hover {
          color: var(--accent);
          transform: translateX(-5px);
        }

        .about-text {
          font-size: 1rem;
          color: var(--secondary);
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .social-links-row {
          display: flex;
          gap: 15px;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
        .social-icon-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--gray);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .social-icon-circle:hover {
          background: var(--accent);
          color: var(--black);
          border-color: var(--accent);
          transform: translateY(-5px) rotate(8deg);
          box-shadow: var(--shadow-glow);
        }

        .footer-copyright-row {
          text-align: center;
          padding: 40px 0;
          border-top: 1px solid var(--border);
          font-size: 0.9rem;
          color: var(--secondary);
        }
        .footer-copyright-row p b {
          color: var(--accent);
          font-weight: 700;
        }

        @media (max-width: 1200px) {
          .footer-grid-container {
            grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
            gap: 30px;
          }
        }

        @media (max-width: 992px) {
          .footer-grid-container {
            grid-template-columns: 1fr 1fr;
          }
          .footer-top-row {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }
          .contact-item.right, .contact-item.left { text-align: center; }
        }

        @media (max-width: 576px) {
          .footer-grid-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .social-links-row {
            justify-content: center;
          }
          .about-text, .footer-col h4 {
            text-align: center;
          }
          .footer-links { text-align: center; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
