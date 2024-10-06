import React, { useState } from 'react';
import "./NavbarStyle.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleSearch = () => {
    setIsSearchActive((prevState) => !prevState);
  };

  return (
    <>
      <nav>
        <div className="nav-data">
          <div className="logo">
            <h2>RRooms</h2>
          </div>

          {/* Navbar List */}
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li className="list-data">Home</li>
            <li className="list-data">About</li>
            <li className="list-data">Rooms</li>

            {/* Log In and Sign Up Buttons in Dropdown for smaller screens */}
            <div className="btns">
              <button className="login-btn">Log In</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </ul>

          {/* Search Box */}
          <div className={`search ${isSearchActive ? "active" : ""}`}>
            <input type="search" placeholder="Search.." className="search-data" />
            <p onClick={toggleSearch}>
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
