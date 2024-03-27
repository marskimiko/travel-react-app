import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import './NavbarStyles.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2>BEACHES.</h2>
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li> 
      </ul>
      <div className='nav-icons'>
        <BiSearch className='icon'/>
        <BsPerson className='icon'/>
      </div>
      <div className='hamburger'>
        <HiOutlineMenuAlt4 className='icon'/>
      </div>
      
      <div className='mobile-menu'>
        <ul className='mobile-nav'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li> 
        </ul>
        <div className='mobile-menu-bottom'>
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook class="icon"/>
            <FaInstagram class="icon"/>
            <FaTwitter class="icon"/>
            <FaPinterest class="icon"/>
            <FaYoutube class="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar