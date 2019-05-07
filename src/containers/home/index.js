import React from 'react';
import BestSellersSection from './BestSellersSection';
import MostPopulerSection from './MostPopulerSection';
import BrandsGridSection from './BrandsGridSection';

import './style.css'

export function HomePage() {

  return (
    <article>
      <div className="container">

        <div className="row featured"> 

        <BestSellersSection />

        <MostPopulerSection />
        
        <BrandsGridSection />
        </div>

      </div>
    </article>
  );
}

export default HomePage
