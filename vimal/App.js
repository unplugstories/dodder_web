import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
     <React.Fragment>
      <Navbar />
      <Switch>
      
       <Route exact path="/" component={Products}/>
       <Route path="/Details" component={Details}/>
       <Route path="/Cart" component={Cart}/>
       <Route component={Default}/>
       </Switch>
      <Modal />
     </React.Fragment>
    );
  }
}

export default App;
