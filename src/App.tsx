import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import Country from './pages/Country';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:id" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
