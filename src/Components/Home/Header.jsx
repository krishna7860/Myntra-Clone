import React from 'react';
let style = {
  width: '400px'
};
const Header = () => {
  return (
    <div>
      <div
        id='carouselExampleIndicators'
        class='carousel slide'
        data-ride='carousel'
      >
        <ol class='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            class='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img
              class='d-block w-100'
              src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/13/5bcb435d-808b-4d13-9d93-5daf31cf6d3c1576256753239-Dressberry-Desktop-Squqre-Banner.jpg'
              alt='First slide'
            />
          </div>
          <div class='carousel-item'>
            <img
              class='d-block w-100'
              src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/19/e8f3d68e-bcad-47a2-aa13-7b79140038911576696827387-Desktop-Main.jpG'
              alt='Second slide'
            />
          </div>
          <div class='carousel-item'>
            <img
              class='d-block w-100'
              src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/10/6c01b7ff-2d70-4d95-bedc-569cefb99db71575963522966-Desktop-Main-Banner-WINTER.jpg'
              alt='Third slide'
            />
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
