import React, { Component } from 'react';
import './css/Imageupload.css';

import {MDBCol} from "mdbreact";
import Image from 'react-bootstrap/Image';
const BASE_URL = 'http://localhost:3000/';
export default class ImageUpload extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: '',
          buttonsdisabled:true,
          count:0
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        
      }
    
      handledisablebuttons() {
        this.setState( {buttonsdisabled: !this.state.buttonsdisabled} )
      }

      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    
      render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (
          //<Image src={imagePreviewUrl} />
          <div></div>
         );
        }
        this.state.imagePreviewUrl=this.props.Source;
        var temp=this.props.Source;
        if(this.state.count==0)
        {
          var temp2=temp;
        }
        else{
          var temp2=imagePreviewUrl;
        }
        
    
        return (
         <div>
            <form onSubmit={this._handleSubmit}>
            <div>
            
                <MDBCol>
                    <Image  style={{overflow:"hidden",width:"200px",height:"200px",backgroundImage:"url('https://scontent.fblr4-1.fna.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_ht=scontent.fblr4-1.fna&oh=a50cbe3e644aad584d5ce0fbd25f8a99&oe=5D1C5AE9')",borderBlockEndColor:"white"}} src={temp2} roundedCircle></Image>
                </MDBCol>  
                
                <br/><br/>
                <div> 
                <label style={
                  {height:"46px"}} class="btn btn-outline-primary btn-rounded waves-effect" id="#bb" > Choose Picture
                <input type="file" onChange={this._handleImageChange} disabled = {(this.state.buttonsdisabled)? "disabled" : ""}/>
                &nbsp;&nbsp;&nbsp; {this.state.count=1}
                </label>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button  onClick = {this.handledisablebuttons.bind(this)} style={{color:"blue",backgroundColor:"transparent",border:"transparent"}}> Edit </button>
                 </div>
                 
    </div>
    <br/>
               
            </form>
           {/* {$imagePreview}*/}
            
           </div>
          
        )
      }
    
    
      
    
}
  