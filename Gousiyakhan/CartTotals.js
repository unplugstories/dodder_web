import React from 'react';
import { Link } from 'react-router-dom';

import {ButtonContainer} from '../Button';


export default function CartTotals({ value, history }) {
    const {cartSubTotal, cartTax, cartTotal, clearCart, shipping}=value;
      return <React.Fragment>
      <div className="container">
      <div className="row">
      <div className="col-6 mt-2 ml-sm ml-md-auto col-sm-8 text-capitalize text-right">
      <Link to="/">
      <button
        className="btn btn-outline-danger text-uppercase mb-3 px-5"
        type="button"
        onClick={() => clearCart()}
        >
         Clear Cart
        </button>
      </Link>

      <h5>
      <span className="text-title">
      Subtotal :
      </span>
      <strong>₹ {cartSubTotal} </strong>
      </h5>
      <h5>
      <span className="text-title">
       Tax :
      </span>
      <strong>₹ {cartTax} </strong>
      </h5>
      <h5>
      <span className="text-title">
       Shipping Charge:
      </span>
      <strong>₹ {shipping} </strong>
      </h5>
      <h5>
      <span className="text-title">
       Total :
      </span>
      <strong>₹ {cartTotal} </strong>
      </h5>
      <Link to="/">
      <ButtonContainer>Continue Shopping</ButtonContainer>
      </Link>
      <Link to="/Checkout">
      <ButtonContainer cart> Proceed to checkout</ButtonContainer>
      </Link>

      
      </div>
      </div>
      </div>
      
      </React.Fragment>
    
  
}
