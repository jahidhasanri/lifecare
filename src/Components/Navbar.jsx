import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[rgb(176,191,194)] w-full fixed top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 ">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <img
            src="https://i.ibb.co.com/v4pKPMsP/Victoria-Life-Care-Diagnostics-Logo.jpg"
            alt="Logo"
            className="w-16 h-16"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 xl:mr-48">
          <NavLink to="/" className="text-lg font-semibold">Home</NavLink>
          <NavLink to="/about" className="text-lg font-semibold">About</NavLink>
          <NavLink to="/appointment" className="text-lg font-semibold">Appointment</NavLink>
          <NavLink to="/login" className="text-lg font-semibold btn btn-primary">Login</NavLink>
          <NavLink to="/logout" className="text-lg font-semibold btn btn-primary">Logout</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 rounded-lg shadow-md py-4 px-6 space-y-4">
          <NavLink  to="/" className="block text-lg font-semibold" onClick={toggleMenu}>Home</NavLink>
          <NavLink  to="/about" className="block text-lg font-semibold" onClick={toggleMenu}>About</NavLink>
          <NavLink  to="/appointment" className="block text-lg font-semibold" onClick={toggleMenu}>Appointment</NavLink>
          <NavLink  to="/login" className="block text-lg font-semibold btn btn-primary" onClick={toggleMenu}>Login</NavLink>
          <NavLink  to="/logout" className="text-red-600 block text-lg font-semibold btn btn-primary" onClick={toggleMenu}>Logout</NavLink>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
