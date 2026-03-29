import React from 'react';

const PagePlaceholder = ({ title }) => {
  return (
    <div className="placeholder-page" style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '120px 20px 60px'
    }}>
      <h1 style={{ color: 'var(--accent-gold)', fontSize: '3rem', marginBottom: '20px' }}>{title}</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>هذه الصفحة قيد التطوير حالياً. ترقبوا الإطلاق قريباً.</p>
      
      <div style={{ 
        marginTop: '40px', 
        width: '100px', 
        height: '2px', 
        background: 'linear-gradient(to right, transparent, var(--accent-gold), transparent)' 
      }}></div>
    </div>
  );
};

export const About = () => <PagePlaceholder title="عن المنصة" />;
export const Solutions = () => <PagePlaceholder title="الحلول الذكية" />;
export const Blog = () => <PagePlaceholder title="المدونة" />;
export const Contact = () => <PagePlaceholder title="تواصل معنا" />;
export const Login = () => <PagePlaceholder title="تسجيل الدخول" />;
export const Register = () => <PagePlaceholder title="إنشاء حساب" />;

export default PagePlaceholder;
