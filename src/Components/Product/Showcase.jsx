import React from 'react';
import { Link } from 'react-router-dom';

const Showcase = () => {
  return (
    <div className='container mt-5'>
      <div className='row my-2'>
        <div className='col-lg-10 col-sm-8'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 text-center'>
              <Link to='/product/shoes'>
                <img
                  src='https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/13/82de6354-e16c-4810-82b8-1536bf44501d1576228956846-Woodland-_DMPB_B.jpg'
                  alt=''
                  className='img-fluid'
                />
              </Link>
            </div>
            <div className='col-lg-6 col-sm-12'>
              <Link to='/product/floaters'>
                <img
                  src='https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/13/68374aad-26a4-4b2c-954b-7b1f58633f701576256393879-MFB-FW-Desktop-Brand-Banner.jpg'
                  alt=''
                  className='img-fluid'
                />
              </Link>
            </div>
          </div>
          <div className='row my-2'>
            <div className='col-lg-6 col-sm-12 text-center'>
              <Link to='/product/t-shirt'>
                <img
                  src='https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/13/0a8a24cd-3e07-42c8-85e0-77aeb9a2c3c11576237348364-The-Tshirt-collection-_DMPB_B.jpg'
                  alt=''
                  className='img-fluid'
                />
              </Link>
            </div>
            <div className='col-lg-6 col-sm-12'>
              <Link to='/product/suits'>
                <img
                  src='https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/13/f4cbc3fb-592b-4273-ab88-a9ce959101161576237539905-Deyaan-OCC_DMPB_B.jpg'
                  alt=''
                  className='img-fluid'
                />
              </Link>
            </div>
          </div>
          <div className='row my-2'>
            <div className='col-lg-6 col-sm-12 text-center'>
              <Link to='/product/pants'>
                <img
                  src='https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/17/bbb82628-3b0d-467f-b3ba-d7ab9d743ecb1576582525067-Paco-Rabanne-_DMPB_B.jpg'
                  alt=''
                  className='img-fluid'
                />
              </Link>
            </div>
            <div className='col-lg-6 col-sm-12'>
              <Link to='/product/watches'>
                <img
                  src='https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/16/69d3f499-665d-4257-b6fb-705cc55cf0581576486346352-Guess_Fastrack_DMPB_B7.jpg'
                  alt=''
                  className='img-fluid'
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-lg-2 col-sm-4 p-2 pl-4'>
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

export default Showcase;
