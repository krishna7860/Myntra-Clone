import React from 'react';
import Header from './Home/Header';
import Description from './Home/Description';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Description />
      </div>
    );
  }
}

export default Home;
