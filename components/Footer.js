import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Footer({ footer }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.footer-item').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-container" id='contact'>
      <div className="footer-wave"></div>
      
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand footer-item">
            <Link href="#home" className="logo-container">
              <Image
                src={footer.logo}
                width={120}
                height={60}
                alt="Company Logo"
                className="hover-glow"
              />
            </Link>
            <p className="brand-motto">{footer.motto}</p>
            <div className="social-links">
              {footer.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  aria-label={social.name}
                >
                  <svg className="icon-hover" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d={social.iconPath} />
</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
      {footer.sections.map((section, index) => (
  <div key={index} className="footer-section footer-item">
    <h4 className="section-title">{section.title}</h4>
    <ul className="list-group">
      {section.links.map((link, linkIndex) => (
        <li key={linkIndex} className="list-group-item">
          <Link href={link.id} className="hover-underline">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))}

        </div>

        {/* Copyright */}
        <div className="footer-bottom footer-item">
          <div className="scrolling-text-container">
            <div className="scrolling-text">
              {Array(4).fill(footer.copyright).join(' • ')}
            </div>
          </div>
          <p className="animated-text">{footer.legal}</p>
        </div>
      </div>

      <style jsx global>{`
        .footer-container {
          position: relative;
          background: linear-gradient(135deg, #0f0828 0%, #1a0c3a 100%);
          color: white;
          padding-top: 8rem;
          margin-top: 5rem;
          overflow: hidden;
        }

        .footer-wave {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' d='M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,85.3C672,96,768,160,864,165.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'/%3E%3C/svg%3E");
          animation: wave 20s linear infinite;
        }
a{
text-decoration:none
}
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        .icon-hover svg {
  width: 20px;
  height: 20px;
  fill: white;
  transition: fill 0.3s ease;
}

.social-icon:hover .icon-hover svg {
  fill: var(--neon-primary); /* or any visible hover color */
}


        .footer-brand {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .footer-brand.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .logo-container {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .hover-glow {
          filter: drop-shadow(0 0 8px rgba(109, 40, 217, 0));
          transition: filter 0.3s ease;
        }

        .logo-container:hover .hover-glow {
          filter: drop-shadow(0 0 12px rgba(109, 40, 217, 0.4));
        }

        .brand-motto {
          margin: 1rem 0;
          font-size: 0.9rem;
          opacity: 0.8;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }
        .social-icon:hover .icon-hover {
  color: var(--neon-primary);
}
.icon-hover {
  width: 20px;
  height: 20px;
  fill: white;
  transition: fill 0.3s ease;
}

.social-icon:hover .icon-hover {
  fill: var(--neon-primary); /* or another visible hover color */
}


        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--neon-primary);
          transform: translateY(-3px);
        }

        .icon-hover {
          width: 18px;
          height: 18px;
          fill: white;
          transition: fill 0.3s ease;
        }

        .social-icon:hover .icon-hover {
          fill: white;   
        }

        .footer-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .footer-section.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: var(--neon-primary);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .link-item {
          margin: 0.8rem 0;
        }

        .hover-underline {
          position: relative;
          padding-bottom: 3px;
        }

        .hover-underline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--neon-primary);
          transition: width 0.3s ease;
        }

        .hover-underline:hover::after {
          width: 100%;
        }

        .footer-bottom {
          margin-top: 4rem;
          padding: 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .footer-bottom.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .scrolling-text-container {
          overflow: hidden;
          position: relative;
          margin: 1rem 0;
        }

        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
          color: var(--neon-accent);
          font-weight: 500;
        }

        .animated-text {
          margin-top: 1rem;
          font-size: 0.8rem;
          opacity: 0.6;
          animation: textGlow 2s infinite alternate;
        }

        @keyframes wave {
          0% { background-position-x: 0; }
          100% { background-position-x: 100vw; }
        }

        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes textGlow {
          0% { text-shadow: 0 0 8px rgba(109,40,217,0.3); }
          100% { text-shadow: 0 0 16px rgba(109,40,217,0.6); }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .section-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .social-links {
            justify-content: center;
          }

          .scrolling-text {
            animation: scroll 15s linear infinite;
          }
        }
      `}</style>
    </footer>
  );
}