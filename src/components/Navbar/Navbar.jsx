import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":{
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur":{
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "inr":{
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      case "mxn":{
        setCurrency({name: "mxn", symbol: "$"});
        break;
      }
      default:{
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  };

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt="" className='logo' />
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/pricing'}><li>Pricing</li></Link>
        <Link to={'/blog'}><li>Blog</li></Link>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
          <option value="mxn">MXN</option>
        </select>
        <button onClick={() => navigate('/signup')}>Sign Up <img src={arrow_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar