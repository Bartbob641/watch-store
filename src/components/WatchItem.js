import React from 'react';

const WatchItem = ({ watch }) => {
  return (
    <div className="watch-item">
      <img src={watch.image} alt={watch.name} />
      <h3>{watch.name}</h3>
      <p>${watch.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default WatchItem;