import React from 'react';
import Header from './components/Header';
import WatchList from './components/WatchList';
import Cart from './components/Cart';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <WatchList />
      <Cart />
    </div>
  );
}

export default App;
