import React from 'react';
import Header from './Product/Header';
import Showcase from './Product/Showcase';
class Product extends React.Component {
  render() {
    return (
      <div>
        <img
          src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/10/9aec8503-81af-4173-8eb6-58de56a195e91575961609276-New-Brand-Launches_DKPB_SB.jpg'
          alt=''
          className='img-fluid'
        />
        <Header />
        <Showcase />
      </div>
    );
  }
}

export default Product;
