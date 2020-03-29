import React from 'react';

const User = () => {
  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center p-5'>
        <h1>People</h1>
        <div className='d-flex col-lg-12 mt-5'>
          <div className='col-lg-4 col-sm-12 text-center'>
            <img
              src='https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-Bill_grande.jpg?v=1522803869'
              alt=''
              className='img-fluid'
            />
            <h3 className='lead mt-4'>Bill Mastre</h3>
            <span className='mt-3 d-block'>Founder, CEO</span>
          </div>
          <div className='col-lg-8 ml-5 col-sm-12'>
            <p className='my-3 lead'>
              Myntra is a boutique product design studio based in Melbourne,
              Australia, focused on simplifying everyday interactions with
              technology in a beautiful and minimal fashion.
            </p>
            <p className='my-3 lead'>
              Founded on the principal that good design should be seamless; we
              designed a range of mounts, stands, and accessories that fit
              cohesively in every use case with Apple devices.
            </p>
            <p className='my-3 lead'>
              Myntra currently offers mounting solutions for the iPhone, iPad,
              and Apple Watch; featuring desk stands, travel accessories, wall
              mounts, and more. As well as a range of specialised Business
              Solutions designed to simplify point of sale experiences and
              create seamless customer interactions in retail, hospitality, and
              large enterprise.
            </p>
            <p className='my-3 lead'>
              Connect on <span className='text-info'>TradingQnA / Twitter</span>
            </p>
          </div>
        </div>
        <div className='col-lg-12 d-flex justify-content-around mt-5'>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img
              src='https://cdn.shopify.com/s/files/1/0173/8828/files/Team-Proper-Alon_grande_baef5ad9-8328-41ed-ac7a-18669f4146f9_600x600.png?v=1575425648'
              alt=''
              className='img-fluid '
            />
            <h3 className='lead mt-4'>Alon Tamir</h3>
            <span className='mt-3 d-block'>Co-founder & CIO</span>
          </div>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img
              src='https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-James_grande.jpg?v=1522803885'
              alt=''
              className='img-fluid'
            />
            <h3 className='lead mt-4'>James Kennedy</h3>
            <span className='mt-3 d-block'>CTO</span>
          </div>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img
              src='https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-Aidan_grande.jpg?v=1522803770'
              alt=''
              className='img-fluid'
            />
            <h3 className='lead mt-4'>Aidan Pattinson</h3>
            <span className='mt-3 d-block'>Director - Strategy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
