import React from 'react';
import WatchItem from './WatchItem';

const watches = [
  { id: 1, name: 'Classic Watch', price: 150, image: 'link_to_image1' },
  { id: 2, name: 'Sport Watch', price: 250, image: 'link_to_image2' },
  // Add more watches here
];

const WatchList = () => {
  return (
    <div className="watch-list">
      {watches.map(watch => (
        <WatchItem key={watch.id} watch={watch} />
      ))}
    </div>
  );
};

export default WatchList;