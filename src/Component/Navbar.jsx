import React, { useState } from 'react';
import "./NavbarStyle.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // const toggleSearch = () => {
  //   setIsSearchActive((prevState) => !prevState);
  // };

  return (
    <>
      <nav>
        <div className="nav-data">
          <div className="logo">
            <Link to= '/'> <h2>RRooms</h2></Link>
          </div>

          {/* Navbar List */}
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li className="list-data">Home</li>
            <li className="list-data">About</li>
            <li className="list-data">Rooms</li>

            {/* Log In and Sign Up Buttons in Dropdown for smaller screens */}
            <div className="btns">
              <Link to='/login'><button className="login-btn">Log In</button></Link>
              <Link to='/signup'><button className="signup-btn">Sign Up</button></Link>
            </div>
          </ul>

          {/* Search Box */}
          <div className='search'>
            <input type="search" placeholder="Search.." className="search-data" />
            <p>
              <IoSearchOutline className="search-icon" />
            </p>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
