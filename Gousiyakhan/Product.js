import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types';
import {ButtonContainer} from './Button';

const data =[
{'id':'1','src':'img2/book1.png'},
{'id':'2','src':'img2/book2.png'},
{'id':'3','src':'img2/book3.png'}

];
 export default class Product extends Component {
  render() {
    const {id, title, img, img1,img2, price, inCart}=this.props.product;
    return (
      <PrductWrapper className ="col-10 mx-auto col-md-4 col-sm-9 col-lg-4 my-4 ">
         <div className="card">
         <ProductConsumer>
          {(value) =>(
            <div className="img-container p-12" 
                onClick={() => value.handleDetail(id)
                }>
                <Link to="/Details">
                
                { /* <img src={img} alt="product" className="card-img-top"/>*/}
                
                <div class="container">
                
                
                <img src={img} alt="product" className="card-img-top"></img>
                    <div className="overlay">
                        <img src={img1} alt="product" style={{overflow:"hidden"}} className="card-hover" />
                    </div>
                
                
                </div>                  
                

                </Link>

{/* Button */}
<br></br>
<div className ="text-blue text-center font-weight-bold mb-0">
              
              {/* Button */}
              <Link to="/Details">
              <ButtonContainer font-weight-bold class="col-lg-12" id="button">View Details</ButtonContainer>
              </Link>
              <ButtonContainer id="button" cart
              disabled={inCart?true:false}
              onClick={()=>{
                value.addToCart(id);
                {/*value.openModal(id);*/}

              }}
              >
                {inCart ? "inCart" : "AddToCart"}
              </ButtonContainer>

              </div>



               </div>)}
               
               
         </ProductConsumer>
          {/*card footer*/}
         {/* <div className ="card-footer d-flex
          justify-content-between">*/}
          <br></br><br></br>
<div className ="text-blue text-center font-weight-bold mb-0">
<font size="5">
        { /* <div className ="text-black text-center font-weight-bold font-italic mb-30 ">*/}
           
                                         {title}
            </font>
          </div>
          
          <br></br>
          <div className ="text-blue font-weight-bold font-italic mb-0" >
          <font size="4">
          price:<span>₹</span>{price-(price*0.3)} </font>
          </div> 
          <div className ="text-blue font-italic mb-0" >
           <font size="4"><span>₹<del>{price}</del></span> (30%off)  </font>
            </div>
            
          </div>
          
          
      </PrductWrapper> 
      
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired

};

const PrductWrapper = styled.div`
.card{
  border-color:transparent;
  transition:all 1s linear;

}
.card-footer{
  background:transparent;
  border-top: transparent;
  transition:all 1s linear;
}

  .card-footer{
    background:rgba(247,247,247);
  }
}
.img-container {
  position: relative;
  overflow:hidden;
}
.card-img-top{
  
  transition:all 1s linear;
}
#button
{
  font-size:18px;
}

.card-hover{
  
  padding:5.3rem 0.1rem;
 
  
  
}

.cart-btn {
  position: absolute;
  bottom:0;
  right:0;
  padding:0.8rem 0.6rem;
  background: var(--lightBlue);
  border:none;
  color:var(--mainWhite);
  font-size:1.4rem;
  border-radius:0.5rem 0 0 0;
  transform:translate(100%, 100%);
  transition: all 1s linear;
}
<style>
.container {
  position: absolute;
  
}

.image {
  display: block;
  position: absolute;
  overflow:hidden;
  
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 100%;
  right: 0;
  overflow:hidden;
  

 
  transition: .5s ease;
}


.container:hover .overlay {
  width: 20;
  height: 20;
   left: 0;
 }
.card{
  border-color:transparent;
  transition:all 1s linear;

}
.card-footer{
  background:transparent;
  border-top: transparent;
  transition:all 1s linear;
}

  .card-footer{
    background:rgba(247,247,247);
  }
}
.img-container {
  position: relative;
  overflow:hidden;
  animation: 30s slidy infinite;

}
.card-img-top{
  height:50;
  width:50;
  line-height: 1;
  opacity: 0.75;
  
  
}

</style>



`;