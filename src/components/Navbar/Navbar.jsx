import React, { useState, useEffect } from "react";
import Logo from "../../images/logo-modified.png";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "About us", link: "/about" },
  { id: 4, name: "Contact us", link: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the location changes (new page navigation)
    window.scrollTo(0, 0);
    // Close the menu on navigation
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md bg-gray-100">
      <div className="container mx-auto max-w-screen-lg py-2 px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-orange-600 flex items-center gap-2 no-underline hover:no-underline hover:text-orange-600"
        >
          <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
          <span className="font-bold text-xl sm:text-2xl">Veggiesphere</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="py-2 px-2 md:px-4 hover:text-orange-600 no-underline"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="no-underline hover:no-underline">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded-full flex items-center gap-2 md:gap-3 duration-200 hover:scale-105">
              Order <FaShoppingCart className="text-lg md:text-xl text-white" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl text-orange-600" />
            ) : (
              <FaBars className="text-2xl text-orange-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100 shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="py-2 px-4 hover:text-orange-600 no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              <Link to="/contact" className="no-underline hover:no-underline">
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-4 rounded-full flex items-center gap-3 duration-200 hover:scale-105"
                  onClick={() => setMenuOpen(false)}
                >
                  Order <FaShoppingCart className="text-lg text-white" />
                </button>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
