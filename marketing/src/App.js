import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

import './app.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default App;
