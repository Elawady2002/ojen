import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="main-header">
      <div className="container header-content">
        {/* Right Section: Logo and Nav (Rightmost visually) */}
        <div className="header-right">
          <Link to="/" className="logo-link">
            <img src="/assets/logo.png" alt="Ojen Logo" className="logo" />
          </Link>

          <nav className="nav-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>الرئيسية</Link>
            <Link to="/about" className="nav-link">عن المنصة</Link>
            <Link to="/solutions" className="nav-link">الحلول</Link>
            <Link to="/journeys" className={`nav-link ${location.pathname === '/journeys' ? 'active' : ''}`}>رحلات التطور</Link>
            <Link to="/blog" className="nav-link">المدونة</Link>
            <Link to="/contact" className="nav-link">تواصل معنا</Link>
          </nav>
        </div>

        {/* Left Section: Auth, Lang, Support (Leftmost visually) */}
        <div className="header-left">
          <div className="auth-links">
            <Link to="/register" className="auth-link-alt">تسجيل</Link>
            <span className="auth-slash">/</span>
            <Link to="/login" className="auth-link-alt">تسجيل الدخول</Link>
          </div>

          <div className="lang-switcher">
            <Globe size={18} />
            <span>EN</span>
          </div>

          <div className="support-section">
            <div className="support-text">
              <span className="support-label">هل تحتاج مساعدة؟ اتصل بنا:</span>
              <a href="tel:00971553033998" className="phone-number">00971553033998</a>
            </div>
            <div className="phone-icon-svg">
              <svg width="32" height="33" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_81_254)">
                  <path d="M18.1846 18.6831C18.1846 19.0607 17.8786 19.3667 17.501 19.3667C17.1234 19.3667 16.8174 19.0607 16.8174 18.6831C16.8174 18.3055 17.1234 17.9995 17.501 17.9995C17.8786 17.9995 18.1846 18.3055 18.1846 18.6831Z" fill="#d9b959"></path>
                  <path d="M28.9669 19.1887C28.2043 18.4264 26.9696 18.425 26.2069 19.1885L23.9057 21.4892C23.4576 21.9378 22.7657 22.0294 22.2608 21.7065C21.5959 21.282 20.9029 20.7818 20.2015 20.2197C19.9067 19.9837 19.4765 20.0312 19.2404 20.3257C19.0044 20.6205 19.0519 21.0507 19.3467 21.2868C20.0861 21.879 20.8188 22.408 21.5246 22.8588C22.566 23.5242 23.9743 23.3549 24.8726 22.4558L27.1741 20.1551C27.3989 19.93 27.7672 19.9225 28.0022 20.1575L33.4626 25.5697C33.6904 25.7974 33.6901 26.1683 33.4626 26.3961L32.0615 27.7975C30.0521 29.8061 26.8756 30.3396 24.3361 29.0944C13.2881 23.6775 7.80304 13.9181 6.38512 11.0561C5.12742 8.51667 5.64999 5.44317 7.68555 3.40761L9.05487 2.03722C9.28292 1.80944 9.65382 1.80944 9.88159 2.03695L15.2964 7.45176C15.5244 7.6798 15.5247 8.04937 15.2964 8.27741L12.9954 10.5787C12.0963 11.4777 11.927 12.8858 12.5925 13.9267C13.212 14.8965 13.9687 15.9037 14.8414 16.9206C15.0873 17.2068 15.5188 17.24 15.8056 16.994C16.0919 16.7481 16.125 16.3166 15.8791 16.0298C15.0478 15.0615 14.3298 14.1064 13.7444 13.1902C13.4219 12.6858 13.5135 11.9942 13.9623 11.5453L16.2633 9.24432C17.0257 8.48195 17.0259 7.24748 16.2633 6.48511L10.8482 1.07004C10.088 0.310076 8.85006 0.309809 8.08823 1.07031L6.71837 2.44096C4.26812 4.89149 3.64167 8.59731 5.15999 11.6628C6.62625 14.6225 12.2995 24.7154 23.7342 30.322C24.8373 30.8627 26.0344 31.1383 27.2555 31.1383C27.2694 31.1383 27.2833 31.1375 27.2972 31.1372C27.0993 32.8214 25.6641 34.1325 23.9278 34.1325H19.5117C18.218 34.1325 17.0551 33.4136 16.4767 32.2563L15.5648 30.4333C15.4489 30.2015 15.2123 30.0555 14.9533 30.0555C14.6945 30.0555 14.4577 30.2018 14.342 30.4333L12.9148 33.2876L11.4878 30.4333C11.3719 30.2015 11.1353 30.0555 10.8763 30.0555C10.6175 30.0555 10.3807 30.2018 10.265 30.4333L8.83778 33.2876L7.41078 30.4333C7.29489 30.2015 7.0583 30.0555 6.79928 30.0555C6.54053 30.0555 6.30368 30.2018 6.18805 30.4333L4.76079 33.2876L3.33379 30.4333C3.21789 30.2015 2.98131 30.0555 2.72229 30.0555C2.46354 30.0555 2.22668 30.2018 2.11106 30.4333L0.072297 34.5106C-0.0964651 34.8481 0.0402536 35.2588 0.378045 35.4276C0.717171 35.5971 1.12706 35.4583 1.29529 35.1218L2.72229 32.2678L4.14929 35.1218C4.26518 35.3536 4.50177 35.4996 4.76079 35.4996C5.0198 35.4996 5.25639 35.3533 5.37228 35.1218L6.79928 32.2678L8.22628 35.1218C8.34217 35.3536 8.57876 35.4996 8.83778 35.4996C9.0968 35.4996 9.33339 35.3533 9.44928 35.1218L10.8763 32.2678L12.3033 35.1218C12.4192 35.3536 12.6558 35.4996 12.9148 35.4996C13.1738 35.4996 13.4104 35.3533 13.5263 35.1218L14.9535 32.2675L15.2537 32.8678C16.0649 34.4913 17.6965 35.4996 19.5117 35.4996H23.9278C26.4609 35.4996 28.5376 33.5111 28.6801 31.013C30.3435 30.7222 31.846 29.9457 33.0282 28.7641L34.4298 27.3622C35.19 26.6012 35.1898 25.3632 34.4274 24.6006L28.9669 19.1887Z" fill="#d9b959"></path>
                </g>
                <defs>
                  <clipPath id="clip0_81_254">
                    <rect width="35" height="35" fill="white" transform="translate(0 0.5)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 110px;
          background: rgba(10, 11, 15, 0.9);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-bottom: 1px solid rgba(217, 185, 89, 0.15);
          z-index: 2000;
          display: flex;
          align-items: center;
          direction: rtl;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .logo {
          height: 85px;
          object-fit: contain;
          flex-shrink: 0;
          margin-right: 15px;
        }
        .nav-links {
          display: flex;
          gap: 25px;
          white-space: nowrap;
        }
        .nav-link {
          font-weight: 500;
          color: var(--secondary);
          font-size: 1.05rem;
          transition: all 0.3s;
          position: relative;
          padding: 5px 0;
          white-space: nowrap;
        }
        .nav-link:after {
          content: '';
          position: absolute;
          bottom: -4px;
          right: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover:after, .nav-link.active:after {
          width: 100%;
        }
        .nav-link:hover, .nav-link.active {
          color: white;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 25px;
        }
        .auth-links {
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }
        .auth-link-alt {
          color: var(--white);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s;
        }
        .auth-link-alt:hover {
          color: var(--accent);
        }
        .auth-slash {
          color: var(--secondary);
          font-size: 1rem;
        }

        .lang-switcher {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--white);
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .lang-switcher:hover {
          color: var(--accent);
        }

        .support-section {
          display: flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
        }
        .phone-icon-svg {
          flex-shrink: 0;
        }
        .support-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.1;
        }
        .support-label {
          font-size: 0.72rem;
          color: var(--secondary);
          white-space: nowrap;
          margin-bottom: 2px;
        }
        .phone-number {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--white);
          white-space: nowrap;
        }

        @media (max-width: 1280px) {
          .nav-links { gap: 18px; }
          .header-right { gap: 20px; }
          .support-section { display: none; }
        }

        @media (max-width: 992px) {
          .nav-links { display: none; }
          .main-header { height: 90px; }
          .logo { height: 60px; }
        }
      `}} />
    </header>
  );
};

export default Header;
