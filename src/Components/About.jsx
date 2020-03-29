import React from 'react';
import Header from './About/Header';
import Description from './About/Description';
import User from './About/User';

class About extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <Header />
        <Description />
        <User />
      </div>
    );
  }
}

export default About;
