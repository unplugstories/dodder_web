import React, { Component } from 'react'
//import FormUserDetails from './FormUserDetails'
import Mydetails from './Mydetails';
import Profile from './Profile';
import Childprof from './Childprof';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol ,MDBRow} from "mdbreact";
import { MDBListGroup, MDBListGroupItem, MDBContainer,MDBInput } from "mdbreact";
import BasicInfo from './Basicinfo';
import FormAddressDetails from './FormAddressDetails';


export default class Manageaddress extends Component{
  count=0;   
    render(){
        //{Manageaddress.count=1}   
        return(      
            <React.Fragment >
                 <br/> <br/> <br/>
                <div className="row">
                <div className="col-sm-4">

                <Mydetails/>  
                </div>
                
              
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">
                        <FormAddressDetails/>
                            {/* <p class="card-text">Here are the top resources for all things related to the Sun.</p>*/}
                            
                        </div>
                    </div>
                </div>
                </div>


                {/*
                <Mydetails/>  
                 <MDBContainer  className="ml-auto" >
                     <MDBRow >
                         <MDBCol>
                            <MDBCard class="w-responsive text-center ml-auto p-3 mt-2" style={{ float:"right",width: "50rem",top:"-394px"}} >
                                <MDBCardBody> 
                                    <BasicInfo/> 
                                    <FormAddressDetails/>
                                </MDBCardBody>
                            </MDBCard> 
                         </MDBCol>
                     </MDBRow> 
                 </MDBContainer>*/}
                
             </React.Fragment>
        )
    }
}
