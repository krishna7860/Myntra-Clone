import React from 'react';

const Header = () => {
  return (
    <div
      className='d-flex justify-content-center border-bottom flex-column align-items-center container'
      style={{ padding: '6rem 8rem' }}
    >
      <h1 className='mt-5 ' style={{ fontSize: '3rem', fontWeight: 'normal' }}>
        Frequently Asked Questions
      </h1>
      <p className='lead'>You can track your orders in 'My Orders'</p>
    </div>
  );
};

export default Header;
