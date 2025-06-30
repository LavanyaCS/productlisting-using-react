import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-white shadow-md fixed w-full top-0 z-50 h-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='text-xl font-semibold text-blue-500'>Megify.</div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            <Link to="/" className='hover:text-blue-500'>Home</Link>
            <Link to="/products" className='hover:text-blue-500'>Products</Link>
            <Link to="/about" className=' hover:text-blue-500'>About</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white px-4 pb-4 space-y-2 shadow transition-all duration-300'>
          <Link to="/" className='block hover:text-blue-500'>Home</Link>
          <Link to="/products" className='block hover:text-blue-500'>Products</Link>
          <Link to="/about" className='block hover:text-blue-500'>About</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
