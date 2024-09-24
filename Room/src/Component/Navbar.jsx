import React from 'react'
import "./NavbarStyle.css"
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
        <div className="nav-data">
            <div className="logo">
                <h2>RRooms</h2>
            </div>
            <ul className="nav-list">
                <li className="list-data">Home</li>
                <li className="list-data">About</li>
                <li className="list-data">Rooms</li>
                
            </ul>


            <div className="search">
                <input type="Search" placeholder='Search..' className='search-data' />
              <p><IoSearchOutline className='search-icon'/> 
              </p>
            </div>
            <div className=".btns">
               <button className="login-btn">
                Log In
               </button>
               <button className='signup-btn'>
                    Sign Up
                </button>
            </div>
          
        </div>
    </nav>
  )
}

export default Navbar