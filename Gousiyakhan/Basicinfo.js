import React, { Component } from "react";
import { MDBInput, MDBCardText,MDBCardTitle,MDBBtn,MDBIcon } from "mdbreact";
import Manageaddress from './Manageaddress';
import Imageupload from './Imageupload';
import Profile from './Profile';
import { Link } from "react-router-dom";
import Childprof from './Childprof';
//import './index.css';

const styles={
border:"none",
width:"300px"
}

export default class Basicinfo extends Component{
constructor() 
{
    super();
    this.state = {
        parentFname: '',
        parentLname: '',
        parentGender: false,
        parentDob: '',
        parentEmail: '',
        parentPhone:'',
        disabled:true,
        shown1: true,
        shown2: true,
        childFname: '',
        childLname: '',
        childGender: false,
        childDob: '',
        
        name: '',
        mobno: '',
        pincode: '',
        locality: '',
        address:'',
        city:'',
        state:'',

        addressdet:[
        {
            name: 'Aishwarya',
            mobno: '7892250423',
            pincode: false,
            locality: 'Vidyanagar',
            address:'Near saibaba temple vidyanagar',
            city:'Hubli',
            state:'Karnataka',
            
        }
        ],
       
        childprofiledet: [
        {
            childFname: 'Aishwarya',
            childLname: 'K',
            childGender: false,
            childDob: '12/12/1997'
        },
        {
            childFname: 'Gousia',
            childLname: 'B',
            childGender: false,
            childDob: '13/1/1995'
        }
        ]
    
        
    };
}

handleSubmit = () => {
this.state.parentprofiledet=[
    {
        parentFname:this.state.parentFname,
        parentGender:this.state.parentGender,
        parentDob : this.state.parentDob,
        parentEmail:this.state.parentEmail,
        parentPhone : this.state.parentPhone 
    }
];
/*this.state.parentprofiledet.push(this.state.parentprofiledet)
    this.setState(
      this.state
    )*/   
alert(this.state.parentprofiledet[0].parentFname);
console.log(this.state.parentprofiledet[0]) 
};

handleChildSubmit=()=>{
    this.setState({
        childprofiledet: this.state.childprofiledet.concat([
            {
                childFname: this.state.childFname,
                childLname: this.state.childLname,
                childGender: this.state.childGender,
                childDob:this.state.childDob
            }
        ])
      });
}

handleAddressSubmit=()=>{
    this.setState({
        addressdet: this.state.addressdet.concat([
            {
                name: this.state.name,
                mobno: this.state.mobno,
                pincode: this.state.pincode,
                locality: this.state.locality,
                address:this.state.address,
                city:this.state.city,
                state:this.state.state
            }
        ])
      });
}


  

  handledisabled() {
    this.setState( {disabled: !this.state.disabled} )
  } 
  /*handledisabledgen() {
    this.setState( {gendisabled: !this.state.gendisabled} )
  } 
  handledisabledname() {
    this.setState( {namedisabled: !this.state.namedisabled} )
  }*/
  
handleChange(e){   

    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
   
}

toggle1() {
    this.setState({
        shown1: !this.state.shown1
    });
}
toggle2() {
    this.setState({
        shown2: !this.state.shown2
        
    });
   
   
    
}



render()
{

 
 if(Profile.count===1)
 {
    return (
        <React.Fragment>
        
        <div id="parentinfo">  
           
            <br/>     
            <div style={{float:"left",width:"300px",marginRight:"35px"}}>
                <label>Full Name</label><button   onClick = {this.handledisabled.bind(this)} style={{float:"right",color:"blue",backgroundColor:"transparent",border:"transparent"}}> Edit </button>
                <MDBInput type="text" name="parentFname" style={styles} value={this.state.parentFname} onChange={this.handleChange.bind(this)} disabled = {(this.state.disabled)? "disabled" : ""}/>
                {this.state.parentFname}
            </div>
    
            {/*<div style={{float:"left",width:"300px"}}>
                <label>Last Name</label>
                
                <MDBInput type="text" value={this.state.parentLname} onChange={this.handleChange('parentLname')}/>
               
            </div>*/
            }


            <br/><br/><br/><br/><br/>
            <div style={{width:"300px"}}>
            <label> Your Gender</label>
             </div>
            
            <div>  
            <div className="form-check" style={{float:"left",marginRight:"40px"}}>
                <input type="radio"  name="childGender" checked={this.state.parentGender} disabled = {(this.state.disabled)? "disabled" : ""} onChange={this.handleChange.bind(this)} className="form-check-input" id="materialUnchecked"  checked/>
                <label style={{color:"grey"}} class="form-check-label" for="materialUnchecked">Female</label>
            </div>
    
            <div className="form-check"  style={{float:"left"}}>
                <input type="radio" name="childGender" checked={this.state.parentGender}  disabled = {(this.state.disabled)? "disabled" : ""} onChange={this.handleChange.bind(this)} className="form-check-input" id="materialChecked"  checked/>
                <label style={{color:"grey"}} className="form-check-label" for="materialChecked">Male</label>
            </div>
            </div> 
            <br/><br/><br/>
            <div style={{width:"300px"}} >
                <label>Date Of Birth</label>
                <MDBInput type="date" name="parentDob" disabled = {(this.state.disabled)? "disabled" : ""} value={this.state.parentDob} onChange={this.handleChange.bind(this)} style={styles}/>
            </div>
    
            <br/><br/>
            <div >
                <MDBCardTitle >Email Address</MDBCardTitle>
                <MDBInput type="email" name="parentEmail" value={this.state.parentEmail} onChange={this.handleChange.bind(this)} style={styles} />
            </div>
            <br/><br/>
            <div >
                <MDBCardTitle >Mobile Number</MDBCardTitle>
                <MDBInput type="text" name="parentPhone" value={this.state.parentPhone} onChange={this.handleChange.bind(this)} style={styles} />
            </div>
            <button type="button" class="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Save Changes</button>
            
        </div>
        
    
        </React.Fragment>
     
      );
  
    }
    var hidden1 = {
        display: this.state.shown1 ? "none" : "block"
    }
    var shown1 = {
        display: this.state.shown1 ? "block" : "none"
    };

    var hidden2 = {
        display: this.state.shown2 ? "none" : "block"
    }
    var shown2 = {
        display: this.state.shown2 ? "block" : "none"
    };
    if(Childprof.count===1){
        return(
            <React.Fragment>
            
            <div>
               
               {
                   this.state.childprofiledet.map((rowdata)=>
                   <div>
                     {rowdata.childFname}&nbsp;
                     {rowdata.childLname}&nbsp;
                     {rowdata.childDob}&nbsp;
                     
                     <div style={shown2}>
                     <button style={{color:"blue",backgroundColor:"transparent",borderColor:"transparent"}} onClick={this.toggle2.bind(this)}>Edit</button><br/>
                    </div> 
                    </div> 
               )
               }
            </div>

            <div style={shown1}>
           
            <MDBBtn outline color="primary" style={{width:"750px"}} onClick={this.toggle1.bind(this)} >
            <MDBIcon icon="plus" /> ADD NEW CHILD</MDBBtn>
            </div>

            
              
            <div id="childinfo1" style={hidden1}>
            <br/>
            <center><Imageupload/></center>
            <div style={{float:"left",width:"300px",marginRight:"35px"}}>
                <label>First Name</label>
                <MDBInput  style={styles} type="text" name="childFname" onChange={this.handleChange.bind(this)} /*disabled = {(this.state.disabled)? "disabled" : ""}*/ />
            </div>
    
            <div style={{float:"left",width:"300px"}}>
            <label>Last Name</label>
            {/* <a   onClick = {this.handledisabled.bind(this)} style={{float:"right",color:"blue"}}> Edit </a>*/}
            <MDBInput  style={styles} type="text" name="childLname" onChange={this.handleChange.bind(this)}/*disabled = {(this.state.disabled)? "disabled" : ""}*/ />
            </div>
            <br/><br/><br/><br/><br/>
            <div style={{width:"300px"}}>
            <label> Your Gender</label>
           
            </div>
            
            <div>  
            <div className="form-check" style={{float:"left",marginRight:"40px"}}>
                <input type="radio" name="childGender"  checked={this.state.childGender} /*disabled = {(this.state.disabled)? "disabled" : ""}*/ onChange={this.handleChange.bind(this)} className="form-check-input" id="materialUnchecked" name="materialExampleRadios" checked/>
                <label style={{color:"grey"}} class="form-check-label" for="materialUnchecked">Female</label>
            </div>
    
            <div className="form-check"  style={{float:"left"}}>
                <input type="radio"  name="childGender" checked={this.state.childGender}  /*disabled = {(this.state.disabled)? "disabled" : ""}*/ onChange={this.handleChange.bind(this)} className="form-check-input" id="materialChecked" name="materialExampleRadios" checked/>
                <label style={{color:"grey"}} className="form-check-label" for="materialChecked">Male</label>
            </div>
            </div> 
    
            <br/><br/><br/>
            <div style={{width:"300px"}} >
                <label>Date Of Birth</label>
               
                <MDBInput type="date" name="childDob"/*disabled = {(this.state.disabled)? "disabled" : ""}*/ value={this.state.childDob} onChange={this.handleChange.bind(this)}  style={styles}/>
                
                <br/> <br/>
                <button type="button" class="btn btn-primary" onClick={this.handleChildSubmit.bind(this)} >Add Child</button>&nbsp;&nbsp;
                <button type="button" style={{hidden1}} onClick={this.toggle1.bind(this)} class="btn btn-primary">Cancel</button>
                <br/><br/>
            </div>
    
            <br/><br/>
    
    
        </div>

            <div id="childinfo2" style={hidden2}>
            <br/>
            <center><Imageupload/></center>
            <div style={{float:"left",width:"300px",marginRight:"35px"}}>
                <label>First Name</label>
                <MDBInput  style={styles} type="text" name="childFname" onChange={this.handleChange.bind(this)} /*disabled = {(this.state.disabled)? "disabled" : ""}*/ />
            </div>
    
            <div style={{float:"left",width:"300px"}}>
                <label>Last Name</label>
              {/*  <a   onClick = {this.handledisabled.bind(this)} style={{float:"right",color:"blue"}}> Edit </a>*/}
                <MDBInput  style={styles} type="text" name="childLname" onChange={this.handleChange.bind(this)}/*disabled = {(this.state.disabled)? "disabled" : ""}*/ />
            </div>
            <br/><br/><br/><br/><br/>
            <div style={{width:"300px"}}>
            <label> Your Gender</label>
           
            </div>
            
            <div>  
            <div className="form-check" style={{float:"left",marginRight:"40px"}}>
                <input type="radio" name="childGender"  checked={this.state.childGender} /*disabled = {(this.state.disabled)? "disabled" : ""}*/ onChange={this.handleChange.bind(this)} className="form-check-input" id="materialUnchecked" name="materialExampleRadios" checked/>
                <label style={{color:"grey"}} class="form-check-label" for="materialUnchecked">Female</label>
            </div>
    
            <div className="form-check"  style={{float:"left"}}>
                <input type="radio"  name="childGender" checked={this.state.childGender}  /*disabled = {(this.state.disabled)? "disabled" : ""}*/ onChange={this.handleChange.bind(this)} className="form-check-input" id="materialChecked" name="materialExampleRadios" checked/>
                <label style={{color:"grey"}} className="form-check-label" for="materialChecked">Male</label>
            </div>
            </div> 
    
            <br/><br/><br/>
            <div style={{width:"300px"}} >
                <label>Date Of Birth</label>
               
                <MDBInput type="date" name="childDob"/*disabled = {(this.state.disabled)? "disabled" : ""}*/ value={this.state.childDob} onChange={this.handleChange.bind(this)}  style={styles}/>
                
                <br/> <br/>
                <button type="button" class="btn btn-primary" onClick={this.handleChildSubmit.bind(this)} >Save Changes</button>&nbsp;&nbsp;
                <button type="button" style={{hidden2}} onClick={this.toggle2.bind(this)} class="btn btn-primary">Cancel</button>
                <br/><br/>
            </div>
    
            <br/><br/>
    
    
        </div>
        
        
        </React.Fragment>
        );
    }
    
    

    if(Manageaddress.count===1){
        
        return(
            <React.Fragment>

            
             <div>
               
               {
                   this.state.addressdet.map((rowdata)=>
                    <div>
                       
                     {rowdata.name}&nbsp;
                     {rowdata.mobno}&nbsp;
                     {rowdata.pincode}&nbsp;
                     {rowdata.locality}&nbsp;
                     {rowdata.address}&nbsp;
                     {rowdata.city}&nbsp;
                     {rowdata.state}<br/>
                     <button style={{color:"blue",backgroundColor:"transparent",borderColor:"transparent"}} onClick={this.toggle1.bind(this)}>Edit</button><br/>
                  
                    </div> 
               )
               
               }
               
            </div>
            <div style={shown1}>
            <MDBBtn outline color="primary" style={{width:"750px"}} onClick={this.toggle1.bind(this)} ><MDBIcon icon="plus" /> ADD NEW ADDRESS</MDBBtn>
            </div>
           
            <div  style={{background:"lightyellow"}}>
            <div id='addressinfo' style={hidden1}>
            <br/><br/>
            <div style={{paddingLeft:"40px"}}>
            <MDBCardTitle >ADD A NEW ADDRESS</MDBCardTitle><br/>
            <div style={{float:"left",width:"300px",marginRight:"35px"}}>
                <label>Name</label>
                <MDBInput  type="text" name="name" onChange={this.handleChange.bind(this)}/>
            </div>
             
            <div style={{float:"left",width:"300px"}}>
                <label>Mobile No</label>
                <MDBInput type="text" name="mobno" onChange={this.handleChange.bind(this)}/>
            </div>
            <br/><br/><br/><br/>
            <div style={{float:"left",width:"300px",marginRight:"35px"}}>
                <label>Pincode</label>
                <MDBInput type="text" name="pincode" onChange={this.handleChange.bind(this)}/>
            </div>
    
            <div style={{float:"left",width:"300px"}}>
                <label>Locality</label>
                <MDBInput type="text"  name="locality" onChange={this.handleChange.bind(this)}/>
            </div> 
            <br/><br/><br/><br/>
            
            <div class="form-group" style={{width:"635px"}}>
                <label for="exampleFormControlTextarea3">Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea3" rows="3" name="address" onChange={this.handleChange.bind(this)}></textarea>
            </div>
            <br/>
            <div style={{float:"left",width:"300px",marginRight:"35px"}}>
                <label>City</label>
                <MDBInput type="text" name="city" onChange={this.handleChange.bind(this)}/>
            </div>
    
            <div style={{float:"left",width:"300px"}}>
                <label>State</label>
                <MDBInput type="text" name="state" onChange={this.handleChange.bind(this)}/>
            </div> 
            <br/>
            {/*<MDBCardText> Address Type</MDBCardText>
            <div className="form-check" style={{float:"left",marginRight:"40px"}}>
                <input type="radio" className="form-check-input" id="materialUnchecked" name="addresstype" onChange={this.handleChange.bind(this)}/>
                <label style={{color:"grey"}} class="form-check-label" for="materialUnchecked">Home</label>
            </div>
    
            <div className="form-check"  style={{float:"left"}}>
                <input type="radio" className="form-check-input" id="materialChecked" name="addresstype" checked/>
                <label style={{color:"grey"}} className="form-check-label" for="materialChecked">Work</label>
            </div>*/
            }
            <br/><br/><br/><br/>
            <div>
            <button type="button" class="btn btn-primary" onClick={this.handleAddressSubmit.bind(this)} >Add Address</button>
            <button type="button" style={{hidden1,marginRight:"500px",float:"right"}} onClick={this.toggle1.bind(this)} class="btn btn-primary">Cancel</button>
            <br/><br/>
            </div>
            </div>
            </div>
            </div>
            </React.Fragment>
        );
    }
    }
}


  






















