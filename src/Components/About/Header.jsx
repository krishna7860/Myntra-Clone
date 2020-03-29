import React from 'react';

const Header = () => {
  return (
    <div
      className='d-flex justify-content-center border-bottom flex-column align-items-center container'
      style={{ padding: '6rem 8rem' }}
    >
      <h1
        className='mt-5 '
        style={{ fontSize: '2.2rem', fontWeight: 'normal' }}
      >
        Myntra is an Indian fashion e-commerce company headquartered in
        Bengaluru, Karnataka, India. The company was founded in 2007 to sell
        personalized gift items. In May 2014, Myntra.com was acquired by
        Flipkart.
      </h1>
    </div>
  );
};

export default Header;
