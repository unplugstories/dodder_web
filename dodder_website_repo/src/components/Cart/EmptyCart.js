import React from 'react'
import { ButtonContainer } from '../Button';
import { Link } from 'react-router-dom'; 

export default function EmptyCart() {
  return (
    <div className="container mt-5">
    <div className="row">
    <div className="col-10 mx-auto text-center text-title">
    <br></br><br></br><br></br><h3>Your cart is currently empty</h3><br/>
    <Link to="/">
    <ButtonContainer>
      Keep Shopping
    </ButtonContainer>
    </Link>
    </div>
    </div>  
    </div>
  )
}
