import React from 'react';

const Description = () => {
  return (
    <div className='container mt-5 pb-5'>
      <div className='row'>
        <div className='col-lg-5 col-sm-12 '>
          <img
            src='https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/16/0296ad2b-b439-4ccf-9888-1178f61c2aec1576497497104-Roadster.jpg'
            alt=''
            className='img-fluid'
          />
        </div>
        <div className='col-lg-7 col-sm-12'>
          <h1>Style to Stay Active</h1>
          <p className='lead my-4'>
            Roadster is a digital retailing tool that empowers consumers to
            build deals online and at the dealership, modernizing the sales
            process and increasing efficiency
          </p>
          <div className='d-flex mt-5'>
            <div className='col-lg-6 col-sm-12'>
              <ul>
                <li className='lead my-1'>Clothing Mens</li>
                <li className='lead my-1'>Clothing Womens</li>
                <li className='lead my-1'>Winter Wear</li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li className='lead my-1'>Trouser's & Pants</li>
                <li className='lead my-1'>Sweatshirt & Shirt</li>
                <li className='lead my-1'>Sport's Wear</li>
              </ul>
            </div>
          </div>
          <div className='col-11 mt-3'>
            <img
              src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/10/31/fd6ffc62-8bd0-4554-8d2f-7555901cdc421572538641128-paypal-desktop-strips.jpg'
              alt=''
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
