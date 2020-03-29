import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
import Product from './Components/Product';
import About from './Components/About';
import Support from './Components/Support';
import Pricing from './Components/Pricing';
import Home from './Components/Home';
import Footer from './Components/Footer';
import product from './assets/product';
import Catalog from './Components/Product/items/Catalog';
class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className='border-bottom'>
          <div className='container'>
            <Navbar />
          </div>
        </div>
        <Route path='/' exact component={Home} />
        <Route
          path='/product/t-shirt'
          exact
          render={() => <Catalog item={product.Shirts} title='Shirts' />}
        />
        <Route
          path='/product/shoes'
          exact
          render={() => <Catalog item={product.Shoes} title='Shoes' />}
        />
        <Route
          path='/product/watches'
          exact
          render={() => <Catalog item={product.Watches} title='Watches' />}
        />
        <Route
          path='/product/pants'
          exact
          render={() => (
            <Catalog item={product.Pants} title='Trousers & Pants' />
          )}
        />
        <Route
          path='/product/suits'
          exact
          render={() => (
            <Catalog item={product.Suits} title='Suits & Blazers' />
          )}
        />
        <Route path='/about' component={About} />
        <Route path='/product' exact component={Product} />
        <Route path='/support' component={Support} />
        <Route path='/pricing' component={Pricing} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
