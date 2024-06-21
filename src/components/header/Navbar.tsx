import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-full flex justify-between items-center mx-10">
      <a
        href="/"
        className="font-nunito font-extrabold text-2xl max-md:text-xl"
      >
        Where in the world?
      </a>
    </nav>
  );
};

export default Navbar;
