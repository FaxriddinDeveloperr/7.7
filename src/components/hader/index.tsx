import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          My<span className="text-yellow-300">Shop</span>
        </h1>

        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white font-medium transition duration-300 hover:text-yellow-300 ${
                isActive ? 'border-b-2 border-yellow-300 pb-1' : ''
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-white font-medium transition duration-300 hover:text-yellow-300 ${
                isActive ? 'border-b-2 border-yellow-300 pb-1' : ''
              }`
            }
          >
            Shop
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
