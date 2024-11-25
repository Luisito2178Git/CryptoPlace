import React, { useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className='burger-menu'>
    <button onClick={toggleMenu} className='menu'>
      Menu
    </button>
    {isOpen && (
    <ul className={`burger-menu-list ${isOpen ? 'isOpen' : ''}`}>
      <Link to={'/'}><li>Home</li></Link>
      <Link to={'/pricing'}><li>Pricing</li></Link>
      <Link to={'/blog'}><li>Blog</li></Link>
      </ul>
    )}
    </div>
  )
}

export default Menu