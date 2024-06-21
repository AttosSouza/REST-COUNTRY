import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full h-20 shadow-md bg-white fixed top-0 left-0 z-10">
      <Navbar />
    </header>
  );
};

export default Header;
