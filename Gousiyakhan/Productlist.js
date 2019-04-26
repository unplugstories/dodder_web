import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import ScrollableAnchor from 'react-scrollable-anchor'
import {ProductConsumer} from '../Context';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
export default class Products extends Component {

  render() {
   
    return (
    
      <React.Fragment>
      <div>
      <ScrollableAnchor id={'Home'}>
      
      <div className="py-5">
      <div className="container">
      <br/>
      <br/>
      <br/>
      <br/><br/>
      <br/><br/>
      <Title name="Unplug" title="Stories"/>
      <div className="col-lg-12"  >
          
    <Carousel autoPlay >

    <div  >
    

      <img src="img2/book5.png"  />
      
    </div>

    <div>
    
      <img src="img2/book5.png"  />
  
    </div>
    <div>
      <img src="img2/book5.png"  />
    
    </div>
    </Carousel>
        
    </div>
      </div>
      </div>
    
      </ScrollableAnchor>
     </div>

      <div>
      <ScrollableAnchor id={'Product'}>
      <div className="py-5">
      <div className="container">
      <Title name="Our" title="Products"/>
      <div className="row">
      <ProductConsumer>
      {value=> {
        return value.productList.map(product =>{
          return <Product key={product.id} product=
          {product}/>;
        })

      }}
  
      </ProductConsumer>
      </div>
      </div>
      </div>
      </ScrollableAnchor>
      </div>
      <br></br><br></br>

      <div>
      <div className="py-5">
      <div className="container">
      <br></br><br></br>
      <ScrollableAnchor id={'Contact'}>
      
        <div><Title name="Contact" title="Us"/>
        <div className="row">
        <h1> 
           <br></br><br></br>
        Contact us if you have any query.
        </h1>
        </div>
        <h1>
        <span class="glyphicon glyphicon-map-marker"></span> Hubballi, Karnataka<br/>
        </h1>



        
        <h1>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        <span class="glyphicon glyphicon-phone"></span> +91 9867567848><br/>
        </h1>

        <h1>
        <i className="fa fa-envelope" aria-hidden="true"/>
        <span class="glyphicon glyphicon-envelope"></span> contact@unplugstories.com<br/>
        </h1>
        
        
        </div>
        
      </ScrollableAnchor>
      </div>
      </div>
      </div>


      <div className="py-5" text-slanted text-black >
      <div className="container">
      <ScrollableAnchor id={'About'}>
      <div><Title name="About" title="Us"/>
      <div className="row" > 
      <p id="para" style={{textAlign:"justify",fontSize:"28px" }}>  Haven’t we all wondered where we could get our favourite celebrity or fashion icons’ latest looks? Sure, they have an entourage of personal stylists, makeup artists and hair dressers to look the way they do but with Myntra, you will understand that you do not have to spend a fortune to look great. There is something for the whole family and you can engage in online shopping for women, men and kids. Choose from the widest spread of western wear, traditional clothing, casual wear, lounge or sleep wear, sports or active wear, formal wear, lingerie and more in the clothing section. Footwear of numerous kinds, watches, sunglasses, bags, jewellery, scarves and stoles, beauty, skin and hair care products, fragrances, and so much more are just some of the other items you can grab hold of here. </p>
      
      </div>
      </div>
      
      </ScrollableAnchor>
    </div>
    </div>
    
    
      </React.Fragment>

      
      //<Product/>
      
    )
  }
}



const NavWrapper = styled.nav`

#para
{
  font-size:50px;
}



`;
