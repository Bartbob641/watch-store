import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css'; // Ensure the correct CSS is imported
import image from './assets/image.webp'; // Path to your .webp image

function App() {
  const [repeatedText, setRepeatedText] = useState('');

  // The text you want to repeat
  const text = "Waterproof jewelry & Women's watches ";

  useEffect(() => {
    // Calculate how many times to repeat the text based on the screen width
    const screenWidth = window.innerWidth;
    const textWidth = text.length * 8; // Approximate width of one character
    const repeatCount = Math.ceil(screenWidth / textWidth) + 20; // +2 for extra repetitions to ensure smooth scrolling

    // Create the repeated text with spacing
    const textWithSpace = text + '\u00A0'.repeat(6); // Add non-breaking spaces (~50px width)
    setRepeatedText(textWithSpace.repeat(repeatCount));
  }, [text]);

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

      {/* Dynamically generated scrolling text */}
      <div className="scrolling-text">
        <span>{repeatedText}</span>
      </div>
    </div>
  );
}

export default App;
