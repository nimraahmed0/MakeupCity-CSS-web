import Image from 'next/image';
import React from 'react';

const Makeup = () => {
  const Data = [
    { id: 1, name: 'Rice Pulp Mask', price: 1200, description: 'mask', image: '/mask.png' },
    { id: 2, name: 'Missrose Compact', price: 800, description: 'compact', image: '/compact.jpg' },
    { id: 3, name: 'Foundation', price: 2500, description:'foundation', image: '/foundation.jpg' },
    { id: 4, name: 'J.perfume', price: 500, description: 'pen j.perfume', image: '/j.perfume.jpg' },
    { id: 5, name: 'Paint Stick', price: 700, description: 'krylon pain stick', image: '/paint.jpg' },
    { id: 6, name: 'Bundle deal', price: 100, description: 'skin care deals', image: '/skincare.jpg' },
  ];

  return (
    <div>
      <div className="makeup">
        {Data.map((makeup) => (
          <div key={makeup.id} className="makeup-card">
            <Image src={makeup.image} alt={makeup.name} />
            <h3>{makeup.name}</h3>
            <p>{makeup.description}</p>
            <div className="price">${makeup.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Makeup;