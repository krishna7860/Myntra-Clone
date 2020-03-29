import React from 'react';

const Catalog = props => {
  return (
    <div className='container mt-5'>
      <div className='row my-2'>
        <img
          src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/2/26/f296d611-bb8b-440a-8cf0-f1fd0c0c91931551190268018-slicing-file-discover-nav_02.jpg'
          alt=''
          className='img-fluid'
        />

        <div className='col-lg-10 col-sm-10 mt-5'>
          <h2 className='lead' style={{ fontSize: '2rem' }}>
            {props.title}
          </h2>
          <div className='row'>
            {props.item.map(item => {
              return (
                <div
                  className='card p-0 col-lg-3 col-sm-2 m-4'
                  style={{ width: '250px' }}
                >
                  <img
                    className='card-img-top'
                    src={item.img_url}
                    alt='Card image cap'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <p className='card-text'>{item.price} Rs</p>
                    <a href='#' className='btn btn-primary btn-block'>
                      Add to Cart
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-lg-2 col-sm-4 p-2 pl-4 mt-5'>
          <h4 className='lead'>Clothing</h4>
          <ul style={{ listStyle: 'none', padding: '0px' }}>
            <li className='lead' style={{ fontSize: '16px' }}>
              T-shirts
            </li>
            <li className='lead' style={{ fontSize: '16px' }}>
              Casual shirts
            </li>
            <li className='lead' style={{ fontSize: '16px' }}>
              Formal shirts
            </li>
            <li className='lead' style={{ fontSize: '16px' }}>
              Suits
            </li>
            <li className='lead' style={{ fontSize: '16px' }}>
              Jeans
            </li>
            <li className='lead' style={{ fontSize: '16px' }}>
              Casual Trousers
            </li>
            <li className='lead' style={{ fontSize: '16px' }}>
              Formal Trouser
            </li>
            <li className='lead' style={{ fontSize: '16px' }}>
              Shorts
            </li>
            <li className='lead' style={{ fontSize: '16px' }}>
              Track Pant
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
