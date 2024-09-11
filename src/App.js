import React from 'react';
import Header from './components/Header';
import './App.css'; // Ensure the correct CSS is imported
import image from './assets/image.webp'; // Path to your .webp image

function App() {
  return (
    <div className="App">
      <Header />
      <div className="image-container">
        <img src={image} alt="Fashion ad" className="main-image" />
        <div className="text-overlay">
          <h1>Retro Watches Collection</h1>
          <button className="buy-now-button">Köp nu</button>
        </div>
      </div>
       {/* Add the scrolling text below the image */}
       <span className="scrolling-text">
       Waterproof jewelry & Women's watches &nbsp;
       </span>
    </div>
  );
}

export default App;