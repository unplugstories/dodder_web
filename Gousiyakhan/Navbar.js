import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"
import styled from "styled-components";

import 'bootstrap/dist/css/bootstrap.css';



export default class Navbar extends Component {
    render(){
      return (
        
<NavWrapper className="navbar-inverse"> 

  <div class="container-fluid">
  <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <Link to="/">
  <img src={logo} alt="store"
className="navbar-brand" />
</Link>
     
      
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
    <div class="nav navbar-nav">
      <a href ='#Home' style={{color:"white" }}> Home </a>
      </div>
      
      
      <div class="nav navbar-nav">
      <a href ='#Product' style={{color:"white" }}>Product </a>
      </div>
      
      
      <div class="nav navbar-nav">
      <a href ='#Contact' style={{color:"white" }}> Contact </a>
      </div>
      
      
      <div class="nav navbar-nav">
      <a href ='#About' style={{color:"white" }}> About </a>
      </div>
   
      <Link to='/mydetails' className="mr-2"> 

        <img src="data:image/png;base64,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"/>
  
 </Link>
      <div class="nav navbar-nav navbar-right" id="mycart">
      <span><img src = "data:image/png;base64,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"style={{color:"white" }} width="40" height="40"/>
<a href ='/cart' style={{color:"white" }}> Mycart </a></span>
      </div>
   
     
      
   
      
 




</div>
</div>


</NavWrapper>


);
 }        
}


const NavWrapper = styled.nav`
background: var(--mainBlue);
top:0;
position: fixed;
z-index:100;
width:100%;

.navbar-nav
{
  font-size:20px;
  padding:22px;
  margin-top:10px;
}

#myNavbar
{
  
}
.navbar-brand
{
  margin-top:20px;
}

#mycart
{
  margin-top:9px;
}
#myprofile
{
  margin-top:0px;
}
.nav-link{
  
  color:var(--mainWhite)!important;
  font-size:1.3rem;
  text-transform: capitalize !important;
   
}
`;
