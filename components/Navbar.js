import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Navbar({ navbar, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const animateBlobs = (e) => {
      const { clientX, clientY } = e;
      blob1.current.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: 'forwards' });
      
      blob2.current.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 4000, fill: 'forwards' });
    };

    window.addEventListener('mousemove', animateBlobs);
    return () => window.removeEventListener('mousemove', animateBlobs);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <div className="logo-container">
              <Image 
                src={navbar.brand}   
                height={60} 
                width={120} 
                alt="Brand Logo" 
                className="logo-hover"
                priority
              />
              <div className="logo-afterglow"></div>
            </div>
          </Link>

          <button 
            className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="animated-hamburger">
              <span className="hamburger-line top"></span>
              <span className="hamburger-line middle"></span>
              <span className="hamburger-line bottom"></span>
            </span>
          </button>

          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-links">
              {navbar.links.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link 
                    className="nav-link" 
                    href={link.id}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="link-text" data-text={link.title}>
                      {link.title}
                    </span>
                    <div className="link-after"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nav-background">
          <div ref={blob1} className="nav-blob"></div>
          <div ref={blob2} className="nav-blob"></div>
        </div>
      </nav>

      <main>{children}</main>

      <style jsx global>{`
        :root {
          --neon-primary: #6d28d9;
          --neon-secondary: #8b5cf6;
          --neon-accent: #c4b5fd;
          --cyber-gradient: linear-gradient(
            45deg,
            #6d28d9 0%,
            #8b5cf6 25%,
            #c4b5fd 50%,
            #8b5cf6 75%,
            #6d28d9 100%
          );
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(16, 16, 24, 0.95);
          backdrop-filter: blur(16px);
          padding: 1rem 0;
          z-index: 1000;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          position: relative;
          transition: transform 0.3s ease;
        }

        .logo-hover {
          filter: drop-shadow(0 0 8px var(--neon-primary));
          transition: filter 0.3s ease;
        }

        .logo-afterglow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--cyber-gradient);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .logo-container:hover .logo-afterglow {
          opacity: 0.3;
        }

        .navbar-toggler {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .animated-hamburger {
          display: block;
          position: relative;
          width: 30px;
          height: 20px;
        }

        .hamburger-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
        }

        .top { top: 0; }
        .middle { top: 9px; }
        .bottom { top: 18px; }

        .navbar-toggler.active .top {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .navbar-toggler.active .middle {
          opacity: 0;
        }

        .navbar-toggler.active .bottom {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .navbar-menu {
          display: flex;
          gap: 2rem;
        }

        .navbar-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          padding: 0.5rem 1rem;
          color: white;
          text-decoration: none;
          overflow: hidden;
        }

        .link-text {
          position: relative;
          z-index: 2;
          color: transparent;
          background: var(--cyber-gradient);
          background-clip: text;
          -webkit-background-clip: text;
          font-weight: 600;
        }

        .link-after {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--cyber-gradient);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .nav-link:hover .link-after {
          transform: scaleX(1);
        }

        .nav-blob {
          position: absolute;
          width: 400px;
          height: 400px;
          background: var(--cyber-gradient);
          filter: blur(80px);
          opacity: 0.1;
          border-radius: 50%;
          z-index: -1;
        }

        @media (max-width: 768px) {
          .navbar-toggler {
            display: block;
          }

          .navbar-menu {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(16, 16, 24, 0.98);
            flex-direction: column;
            padding: 2rem;
            transition: right 0.3s ease;
          }

          .navbar-menu.active {
            right: 0;
          }

          .navbar-links {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .nav-link {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}