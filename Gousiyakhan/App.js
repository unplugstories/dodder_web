import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

import Productlist from './components/Productlist';
import Products from './components/Productlist';
import Details from './components/Details';
import Contact from './components/Contact';
import Cart from './components/Cart';

import Default from './components/Default';
import Mydetails from './components/Profile/Mydetails';
import Childprof from './components/Profile/Childprof';
import Profile from './components/Profile/Profile';
import Manageaddress from './components/Profile/Manageaddress';
import Myorder from './components/Profile/Myorder';

import Checkout from './components/Checkout';

import PropTypes from 'prop-types' ;


class App extends Component {
 
  render() {

    return (
      
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route  exact path="/" component={Productlist} />
          <Route path="/details" component={Details} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/Checkout" component={Checkout}/>
          <Route path="/myorder" component={Myorder}/>
       <Route path="/mydetails" component={Mydetails}/>
       
       <Route path="/profile" component={Profile}/>
       <Route path="/childprof" component={Childprof}/>
       
       
       <Route path="/manageaddress" component={Manageaddress}/> 
          <Route component={Default} />
            </Switch>
       </React.Fragment>


    );
  }
}

export default App;

    