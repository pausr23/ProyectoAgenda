import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
          <div className="relative">
            <nav className="flex items-center justify-end md:pt-10 p-3 z-10 lg:pr-24 md:pr-0">
              <ul className="font-semibold hidden md:flex grid-flow-col content-center gap-12  text-[#7193E3]">
                <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu}>About us</NavLink></li>
              </ul>
              <div className="block md:hidden">
                <button onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </nav>
            {isMenuOpen && (
              <div className="md:hidden absolute top-full h-[100vh] left-0 right-0 bg-color p-4 text-[#7193E3] text-xl font-semibold z-20">
                <ul>
                  <li className="mb-5"><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                  <li className="mb-5"><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                  <li><NavLink to="/about" onClick={closeMenu}>About us</NavLink></li>
                  
                </ul>
              </div>
            )}
          </div>
  );
}
