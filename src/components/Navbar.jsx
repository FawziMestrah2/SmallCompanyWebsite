import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'
import Logo from '../assets/logo.png'
import '../styles/navbar.scss';

const Navbar = () => {
  // State to manage whether the navbar should shrink or not
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  // Effect to add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Update the state based on the scroll position
    //  if (window.scrollY > 50) {
        setShrinkNavbar(true);
      // } else {
      //   setShrinkNavbar(false);
      // }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount


  return (
    <nav className={`navbar ${shrinkNavbar ? 'shrink' : ''}`}>
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={`links ${isOpen ? 'active' : ''}`}>
        <NavLink className='navlink' to='/'>
          Home
        </NavLink>
        <Link to='services' smooth={true} duration={500} offset={-30}>
          Services
        </Link>
        <Link to='aboutUs' smooth={true} duration={500}>
          About Us
        </Link>
        <Link to='contactUs' smooth={true} duration={500}>
          Contact Us
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
          <div className='bars'>
            <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
            <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
            <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
          </div>
      </div>
      <div className={`overlay ${isOpen ? 'act' : ''}`}></div>
    </nav>
  );
};

export default Navbar;
