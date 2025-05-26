import Image from 'next/image';
import { useEffect } from 'react';

export default function About({ about }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-content, .highlight-item').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" id='about'>
      <div className="container">
        <h1 className="gradient-title text-center mb-5">
          <span className="title-text">{about.title}</span>
        </h1>
        
        <div className="row g-5 align-items-center">
          <div className="col-md-6">
            <div className="image-wrapper">
              <Image
                src={about.image}
                alt="About Camp Cola - Group participating in activities"
                width={600}
                height={400}
                className="about-image"
                priority
              />
              <div className="image-overlay">
                <div className="floating-effect"></div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="about-content">
              <p className="lead animated-text">{about.content}</p>
              
              <div className="highlights-timeline">
                {about.highlights.map((item, index) => (
                  <div key={index} className="highlight-item">
                    <div className="timeline-dot">
                      <div className="inner-glow"></div>
                    </div>
                    <div className="timeline-content">
                      <h4 className="timeline-title">{item}</h4>
                      <div className="timeline-hover-effect"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .about-section {
          padding: 6rem 0;
         background: linear-gradient(135deg, #0f0828 0%, #1a0c3a 100%);
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -10%;
          width: 120%;
          height: 200%;
          background: radial-gradient(circle, rgba(109,40,217,0.05) 0%, transparent 60%);
          transform: rotate(15deg);
          z-index: 0;
        }

        .gradient-title {
          font-family: 'Inter', sans-serif;
          font-size: 3.75rem;
          font-weight: 700;
          background: linear-gradient(45deg, #6D28D9, #8B5CF6, #4F46E5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s forwards;
          animation-delay: 0.3s;
          letter-spacing: -0.05em;
          margin-bottom: 3rem;
        }

        .image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          transform: perspective(1000px) rotateX(3deg) rotateY(-3deg);
          box-shadow: 0 25px 50px -12px rgba(109,40,217,0.25);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-wrapper:hover {
          transform: perspective(1000px) rotateX(0) rotateY(0) translateY(-5px);
        }

        .about-image {
          border-radius: 24px;
          object-fit: cover;
          width: 100%;
          height: auto;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(109,40,217,0.1), rgba(139,92,246,0.08));
          z-index: 1;
        }

        .floating-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%);
          transform: translate(-50%, -50%) rotate(45deg);
          animation: float 8s infinite linear;
        }

        .about-content {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease;
          position: relative;
          z-index: 1;
        }

        .about-content.animate {
          opacity: 1;
          transform: translateX(0);
        }

        .animated-text {
          position: relative;
          line-height: 1.8;
          font-size: 1.125rem;
          color: #4A5568;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(4px);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .animated-text.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .highlights-timeline {
          position: relative;
          margin-top: 2rem;
          padding-left: 30px;
          border-left: 3px solid rgba(109,40,217,0.2);
        }

        .highlight-item {
          position: relative;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s ease;
        }

        .highlight-item.animate {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-dot {
          position: absolute;
          left: -40px;
          top: 6px;
          width: 24px;
          height: 24px;
          background: linear-gradient(145deg, #6D28D9, #8B5CF6);
          border-radius: 50%;
          border: 4px solid #fff;
          box-shadow: 0 0 20px rgba(109,40,217,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .timeline-dot::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .inner-glow {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          animation: shimmer 2s infinite;
        }

        .timeline-content {
          padding-left: 20px;
          position: relative;
        }

        .timeline-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          color:white;
          padding: 1.25rem;
           background: linear-gradient(135deg, #0f0828 0%, #1a0c3a 100%);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(109,40,217,0.1);
        }

        .timeline-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            background: linear-gradient(45deg, rgba(109,40,217,0.05), transparent);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .timeline-title:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 15px rgba(109,40,217,0.1);
        }

        .timeline-title:hover .timeline-hover-effect {
          opacity: 1;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translate(-50%, -50%) rotate(45deg) translateY(0); }
          50% { transform: translate(-50%, -50%) rotate(45deg) translateY(-20px); }
          100% { transform: translate(-50%, -50%) rotate(45deg) translateY(0); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(109,40,217,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(109,40,217,0); }
          100% { box-shadow: 0 0 0 0 rgba(109,40,217,0); }
        }

        @keyframes shimmer {
          0% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.8; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .gradient-title {
            font-size: 2.75rem;
            margin-bottom: 2rem;
          }

          .about-section {
            padding: 4rem 1rem;
          }

          .image-wrapper {
            margin-bottom: 2rem;
            transform: none;
          }

          .highlights-timeline {
            padding-left: 20px;
          }

          .timeline-dot {
            left: -32px;
            width: 20px;
            height: 20px;
          }

          .animated-text {
            padding: 1rem;
            font-size: 1rem;
          }

          .timeline-title {
            font-size: 1rem;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}