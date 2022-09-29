import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Seachbar';
import { searchPokemon } from './api'


function App() {

  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="App">
      </div>
    </div>
  );
}

export default App;
