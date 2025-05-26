import React from 'react';
import Image from 'next/image';

export default function HeroPage({ carousel, features }) {
  return (
    <div className="hero-section" id='home'>
      <div id="heroCarousel" className="carousel slide carousel-cover" data-bs-ride="carousel">
        {/* Parallax background elements */}
        <div className="parallax-bg">
          <div className="particle-layer"></div>
          <div className="geometric-overlay"></div>
        </div>

        <div className="carousel-inner">
          {carousel.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="image-frame">
                <div className="dynamic-overlay"></div>
              {item.image ? (
  <Image
    src={item.image}
    alt={item.alt || 'Carousel image'}
    width={1080}
    height={720}
    className="cover-image"
    priority
  />
) : null}

                <div className="content-wrapper">
                  <div className="text-container">
                    <h2 className="dynamic-heading">
                      <span className="gradient-text">New Collection</span>
                      <span className="reveal-text">Summer Refreshment</span>
                    </h2>
                    <div className="meta-tags">
                      <span className="tag">#NaturalIngredients</span>
                      <span className="tag">#ZeroSugar</span>
                    </div>
                  </div>
                  <div className="cta-container">
                    <button className="neo-button">
                      <span>Explore Now</span>
                      <div className="hover-effect"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern controls */}
        <div className="carousel-controls">
          <button
            className="control-btn prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
            aria-label="Previous Slide"
          >
            <span className="arrow">&#10094;</span> {/* Left arrow */}
          </button>

          <div className="indicator-dots">
            {carousel.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={index}
                className={`dot ${index === 0 ? 'active' : ''}`}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="control-btn next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
            aria-label="Next Slide"
          >
            <span className="arrow">&#10095;</span> {/* Right arrow */}
          </button>
        </div>
      </div>

      <style jsx global>{`
     
        .hero-section {
          position: relative;
          overflow: hidden;
          padding: 4rem 0;
        }

        .carousel-cover {
          perspective: 2000px;
        }

        .carousel-inner {
          transform-style: preserve-3d;
        }

        .carousel-item {
          transition: transform 1s ease, opacity 1s ease;
          transform: scale(0.9) translateZ(-100px);
          opacity: 0.5;
          filter: blur(2px);
        }

        .carousel-item.active {
          transform: scale(1) translateZ(0);
          opacity: 1;
          filter: blur(0);
          z-index: 1;
        }
@media (max-width: 768px) {
  .cover-image {
    height: 60vh; /* Increased from 50vh */
    min-height: 500px; /* Increased from 400px */
    width: 100vw; /* Ensure full width */
    position: relative; /* Add positioning */
    left: 50%;
    transform: translateX(-50%); /* Center the image */
  }

  .image-frame {
    transform: none !important; /* Remove 3D transforms */
    border-radius: 0; /* Full-width image */
    margin: 0 -15px; /* Remove side margins */
    width: 100vw; /* Full viewport width */
  }

  .carousel-item {
    transform: none !important; /* Remove 3D transforms */
    filter: none !important; /* Remove blur effect */
  }

  .content-wrapper {
    bottom: 15%; /* Adjust content position */
    left: 5%;
    right: 5%;
  }

  .dynamic-heading {
    font-size: 2.5rem;
    text-align: center; /* Center align text */
  }

  .meta-tags {
    text-align: center; /* Center tags */
  }
  
  .cta-container {
    width: 100%;
    text-align: center; /* Center button */
  }
  
}
        .image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          transform: rotateX(5deg) rotateY(-5deg);
          transition: transform 0.5s ease;
        }

        .cover-image {
          object-fit: cover;
          height: 70vh;
          min-height: 600px;
        }

        .dynamic-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(109,40,217,0.4) 0%,
            rgba(139,92,246,0.2) 100%
          );
          mix-blend-mode: multiply;
        }

        .content-wrapper {
          position: absolute;
          bottom: 10%;
          left: 5%;
          right: 5%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .dynamic-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4.5rem;
          line-height: 1;
          text-transform: uppercase;
          margin: 0;
        }

        .gradient-text {
          background: linear-gradient(45deg, #fff, #C4B5FD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          animation: textGlow 2s infinite alternate;
        }

        .reveal-text {
          color: #fff;
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .reveal-text::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          background: #8B5CF6;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.8s ease;
        }

        .active .reveal-text::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .meta-tags {
          margin-top: 1rem;
        }

        .tag {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(5px);
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          margin-right: 1rem;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .neo-button {
          position: relative;
          padding: 1.2rem 2.5rem;
          border: none;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          color: #fff;
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .neo-button .hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #6D28D9, #8B5CF6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .neo-button:hover .hover-effect {
          opacity: 1;
        }

        .carousel-controls {
          position: absolute;
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .control-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(215, 21, 170, 0.1);
          backdrop-filter: blur(5px);
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          color: white;
          font-size: 2rem;
          line-height: 1;
        }

        .control-btn:hover {
          background: #8B5CF6;
          transform: scale(1.1);
          color: white;
        }

        .indicator-dots {
          display: flex;
          gap: 1rem;
        }

        .dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #8B5CF6;
          transform: scale(1.5);
        }

        @keyframes textGlow {
          0% { text-shadow: 0 0 10px rgba(139,92,246,0.3); }
          100% { text-shadow: 0 0 20px rgba(139,92,246,0.6); }
        }

        @media (max-width: 768px) {
          .cover-image {
            height: 50vh;
            min-height: 400px;
          }
          
          .dynamic-heading {
            font-size: 2.5rem;
          }
          
          .content-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
