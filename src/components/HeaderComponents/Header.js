import React, { Component } from 'react';
import logo from '../../images/logo.png';

class Headers extends Component {
    render() {
      return (       
        <div className = "header-fixed"> 
        <header>
        <div className = "fixed-header">
        <div className = "top-header">
        <div className = "header-top-left">
                <p className = "info-tab">Toll Free</p>
                <p className = "info-tab">email</p>
        </div>
        <div className = "header-top-right">
                <p className = "info-tab-right ">Store</p>
                <p className = "info-tab-right ">Offers</p>
        </div>
        </div>
        <div className="header">
            <span><a href= "Home" className="logo" ><img src = {logo} alt = "logo" height = "90" width = "90"/></a>
            <div className="header-right">
                {/* <a class="active" href="#home">Home</a> */}
                <a href="Home">Home</a>
                <a href="Contact">Contact</a>
                <a href="Aboutus">About</a>
                <a href="Login">Login/Signup</a>
                {/* <a href= "Register">Register</a> */}
            </div></span>
          </div>
          </div>
        </header>
        </div>
      );
    }
  }
  
  export default Headers;