import { useState } from "react";
import Image from "next/image";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export default function ProductCard({ products }) {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeSelect = (flavour, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [flavour]: size,
    }));
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center p-4">No products available.</p>;
  }

  return (
    <div className="product-carousel-section" id="products" >
      <MultiCarousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        containerClass="product-carousel"
        itemClass="carousel-item-padding-40-px"
        
      >
        {products.map((product) => (
          <div key={product.flavour} className="product-card-container">
            <div className="product-card">
              <div className="image-container">
                <Image
                  src={product.images[0] || ""}
                  alt={product.flavour}
                  width={300}
                  height={200}
                  className="product-image"
                  priority
                />
              </div>

              <div className="card-content">
                <h3 className="product-title">{product.flavour}</h3>
                
                <div className="size-selector">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => handleSizeSelect(product.flavour, size.size)}
                      className={`size-button ${
                        selectedSizes[product.flavour] === size.size
                          ? "selected"
                          : ""
                      }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>

                <p className="price">
                  ₹{product.sizes.find(
                    (s) => s.size === selectedSizes[product.flavour]
                  )?.price || product.sizes[0].price}
                </p>

               
              </div>
            </div>
          </div>
        ))}
      </MultiCarousel>

      <style jsx>{`
        .product-carousel-section {
          padding: 2rem 0;
          background: linear-gradient(135deg, #0f0828 0%, #1a0c3a 100%);
          
          border:1px solid white;
        }

        .product-card {
        
          border-radius: 15px;
          color:white;
          margin: 1rem;
          overflow: hidden;
          background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
          transition: transform 0.3s ease;
          
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 200px;
          
        }

        .product-image {
          object-fit: cover;
          
        }

        .card-content {
          padding: 1.5rem;
        }

        .product-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .size-selector {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .size-button {
          padding: 0.5rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .size-button.selected {
          border-color: #2563eb;
          background: #2563eb;
          color: white;
        }

        .price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2563eb;
          margin: 1rem 0;
        }

        

        @media (max-width: 768px) {
          .product-card {
            margin: 0.5rem;
          }

          .product-title {
            font-size: 1.1rem;
          }

          .price {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}