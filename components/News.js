// components/News.js
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

export default function News({ news }) {
  return (
    <section className="news-section py-5" id='section'>
      <Container>
        <h2 className="section-title text-center mb-5">{news.title}</h2>
        
        <Row className="g-4 row-cols-1 row-cols-lg-2">
          {news.items.map((item, index) => (
            <Col key={index} className="mb-4">
              <div className="glass-card h-100 overflow-hidden">
                <div className="position-relative" style={{ height: '250px' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="hover-zoom"
                  />
                </div>
                
                <div className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <FaCalendarAlt className="text-primary me-2" />
                    <small className="text-muted">{item.date}</small>
                  </div>
                  
                  <h3 className="h5 mb-3">{item.title}</h3>
                  <p className="text-secondary mb-4">{item.excerpt}</p>
                  
                  <a href={item.link} className="text-primary text-decoration-none hover-underline">
                    Read More
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .news-section {
         color:white;
          padding: 4rem 0;
        }

        .hover-zoom {
          transition: transform 0.3s ease;
        }

        .glass-card:hover .hover-zoom {
          transform: scale(1.05);
        }

        .hover-underline {
          position: relative;
          padding-bottom: 2px;
        }

        #section{
         background: linear-gradient(135deg, #0f0828 0%, #1a0c3a 100%);
        }

        .hover-underline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }

        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </section>
  );
}