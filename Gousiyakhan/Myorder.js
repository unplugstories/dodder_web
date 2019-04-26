import React, { Component } from 'react';
import Mydetails from "./Mydetails";
import './css/temp.css';
import { Link } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

export default class Myorder extends Component{
      render(){
        return(
           <div>
               	 
                    

    <div className="container">
    
        <div className="card" >
           <div className="card-body">
                <h4 className="card-title">
                    <Link to="/myorder" style={{color:"blue"}}> My Orders</Link> 
                </h4> 
            </div> 
        </div>


        <div className="card" >
        <div className="card-body">
        <h4 className="card-title" style={{color:"blue"}}>Account Information</h4>    
         <MDBListGroup>
            
            <MDBListGroupItem href="profile" hover>Account Profile</MDBListGroupItem>
            <MDBListGroupItem href="childprof" hover>Child Profile</MDBListGroupItem>
            <MDBListGroupItem href="manageaddress" hover>Manage Address</MDBListGroupItem>
        </MDBListGroup>

        </div>
    </div>
    <div className="card" >
           <div className="card-body">
                <h4 className="card-title">
                    <Link to="/myorder" style={{color:"blue"}}> Payment Details </Link> 
                </h4> 
            </div> 
        </div>
        </div>
        


</div>

        )
    }
}
