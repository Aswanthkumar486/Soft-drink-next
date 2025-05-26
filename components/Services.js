import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRocket, FaCode, FaMobileAlt, FaStar } from 'react-icons/fa';

const iconMap = {
  rocket: <FaRocket className="fa-2x text-primary" />,
  code: <FaCode className="fa-2x text-success" />,
  mobile: <FaMobileAlt className="fa-2x text-info" />,
  design: <FaStar className="fa-2x text-warning" />
};

export default function Services({ services }) {
  const { title, items } = services;

  return (
    <section className="py-5 bg-light" >
      <Container>
       
        
        <Row className="g-4">
          {items.map((item, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <div className="bg-white p-4 h-100 rounded shadow-sm text-center service-card">
                <div className="mb-3 icon-wrapper">
                  {iconMap[item.icon]}
                </div>
                <h3 className="h4 mb-3">{item.title}</h3>
                <p className="text-muted mb-0">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .service-card {
          transition: all 0.3s ease;
        }
        section{
         background: linear-gradient(135deg, #0f0828 0%, #1a0c3a 100%);
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }
        .icon-wrapper {
          transition: transform 0.3s ease;
        }
        .service-card:hover .icon-wrapper {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}