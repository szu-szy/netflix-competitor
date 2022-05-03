import React from 'react'
import './Logo.scss';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';

const Logo = () => (
  <Link to='/'>
    <img
      className='logo'
      src={logo}
      alt='logo image'
    />
  </Link>
);

export default Logo;