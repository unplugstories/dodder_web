import React from 'react'
import Title from './Title';
import CartColumns from './Cart/CartColumns';
import EmptyCart from './Cart/EmptyCart';
import CartList from './Cart/CartList';
import CartTotals from './Cart/CartTotals';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types'
import { ButtonContainer } from './Button';
import PayPalButton from './Cart/PayPalButton';
import Credit from './Credit';


export default function Checkout() {
  return (
    
      <div className ="col-9 mx-auto col-md-6 col-lg-6 ">
      <Title name ="Your" title="Payments" />  

      <div className ="card">
      <div className ="row">
      <div className="col-6 mx-auto col-md-9 my-9 text-uppercase text-muted mt-3 mb-2">
      <h2>Payment option</h2>
      
      <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
       Choose your payment mode</h5>
      <ButtonContainer>
      Cash on delivery
      </ButtonContainer><br/>
      <ButtonContainer>
      NetBanking
      </ButtonContainer><br/>
      <ButtonContainer>
      Credit Card/Debit Card
      </ButtonContainer>
      <PayPalButton />
      
      
      </div>
      </div>
      </div>
</div>
      
      
      
);
}




