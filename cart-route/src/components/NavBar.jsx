import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cartCount }) {
  return (
    <nav className="bg-gray-400 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-lg font-semibold hover:underline">
        All-in-One Store
      </Link>
      <Link
        to="/cart"
        className="text-lg font-semibold bg-gray-600 px-4 py-2 rounded-full hover:bg-black"
      >
        Cart: {cartCount}
      </Link>
    </nav>
  );
}

export default NavBar;
