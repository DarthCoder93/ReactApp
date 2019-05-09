import React from 'react';
import ProductsSection from './ProductsSection';


import './style.css'

export function HomePage() {

  return (
    <article>
      <div className="container">

        <div className="row featured"> 

        <ProductsSection />

        </div>

      </div>
    </article>
  );
}

export default HomePage
