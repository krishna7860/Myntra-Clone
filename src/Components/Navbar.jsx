import React from 'react';
import { Link } from 'react-router-dom';
let style = {
  width: '150px'
};
let cartIcon = {
  width: '45px'
};
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light py-2 '>
      <Link to='/' className='navbar-brand' href='#'>
        <img
          src='https://logos-download.com/wp-content/uploads/2016/09/Myntra_logo.png'
          className='img-fluid'
          alt=''
          style={style}
        />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto justify-content-center align-items-center'>
          <li className='nav-item  mx-3'>
            <Link to='/about' className='nav-link' href='#'>
              About <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/product' className='nav-link'>
              Product
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/pricing' className='nav-link'>
              FAQ
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/support' className='nav-link '>
              Contact
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/cart'>
              <img
                src='https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png'
                alt=''
                className='img-fluid'
                style={cartIcon}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
