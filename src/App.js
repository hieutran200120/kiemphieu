
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sample from './pages/Sample';
import Vote from './pages/Vote';
import Votecounting from './pages/Votecounting';

function App() {
  return (
    <>
      < BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Sample />} />
          <Route path='/Vote' element={<Vote />} />
          <Route path='/Votecounting' element={<Votecounting />} />
        </Routes>
      </ BrowserRouter >
    </>
  );
}

export default App;