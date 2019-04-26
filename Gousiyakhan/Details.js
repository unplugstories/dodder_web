import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
         const{
           id,
           company,
           price,
           img,
           info,
           title,
           inCart
          }= value.detailProduct;
         return(
           <div className="container py-5">
           <div className="row">
           <div className="col-10 mx-auto
           text-center text-slanted text-blue my-5">
           <br></br>
           <h1>{title}</h1>
           </div>
           </div>

          { /*Product information*/}
          <div className="row">
            <div className="col-3 mx-auto col-md-6 my-3">
              <img src={img} className="img-fluid" alt="product"/>
            </div>
            <div className="col-3 mx-auto col-md-6 my-3 text-capitalize">
            <h4 className="text-blue">
              <h2>Name: {title}</h2>
              </h4>
              
              

              <h4 className="text-blue">
              <p className="text-capitalize font-weight-bold mt-3 mb-1">
              Published by : <span className="text-uppercase">
                {company}</span>
                </p>
              </h4>


            



              
              <h4 className="text-blue">
              <strong>
              price:<span>₹</span>{price-(price*0.3)} 
         <div className ="text-blue font-italic mb-0" ><span>₹<del>{price}</del></span> 30%off </div> 
        
               
              </strong>
         </h4>

              <h4 className="text-blue">
              <p className="text-capitalize font-weight-bold mt-3 mb-1">
              Product information:
              </p>
              </h4>
              <p className="text-muted lead">{info}</p>
              
              {/* Button */}
              <Link to="/">
              <ButtonContainer>Back to Books</ButtonContainer>
              </Link>
              <ButtonContainer cart
              disabled={inCart?true:false}
              onClick={()=>{
                value.addToCart(id);
                {/*value.openModal(id);*/}

              }}
              >
                {inCart ? "inCart" : "add to cart"}
              </ButtonContainer>

            </div>
          </div>
           </div>
         )
        }}
      </ProductConsumer>
    );
  }
}

