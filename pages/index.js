import React from 'react';
import data from '../data/data.json';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

import HeroPage from '@/components/HeroPage';
import ProductCard from '@/components/productCard';
import Services from '@/components/Services';// if used
import Footer from '@/components/Footer';
import News from '@/components/News';

export default function HomePage({ navbar, footer, products, services,news, carousel, about, contact, features }) {
  return (
    <div>
      <Navbar navbar={navbar} />
      <HeroPage carousel={carousel} features={features} />
      <About about={about} />
      <ProductCard products={products} />
<News news={news} />      
      <Services services={services} />

      <Footer footer={footer} />
       {/* Optional */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navbar: data.navbar || null,
      footer: data.footer || null,
      carousel: data.carousel || null,
      about: data.about || null,
      contact: data.contact || null,
      features: data.features || null,
      products: data.products || null,
      services: data.services || null,
      news:data.newsData || null
    }
  };
}
