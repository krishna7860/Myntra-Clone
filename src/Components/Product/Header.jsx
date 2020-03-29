import React from 'react';

const Header = () => {
  return (
    <div
      className='d-flex justify-content-center border-bottom flex-column align-items-center container'
      style={{ padding: '6rem 4rem' }}
    >
      <h1 className='mt-5' style={{ fontSize: '2.8rem', fontWeight: 'normal' }}>
        #FEATURED
      </h1>
      <p className='lead'>Sunny days and sizzling looks are here again!</p>
    </div>
  );
};

export default Header;
