import React, { Component } from 'react';
import logo from '../../images/logo.png';

class Headers extends Component {
    render() {
      return (
        <header>
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
            <span><a href="#default" className="logo" ><img src = {logo} alt = "logo" height = "90" width = "90"/></a>
            <div className="header-right">
                {/* <a class="active" href="#home">Home</a> */}
                <a href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#contact">Login</a>
                <a href="#about">Register</a>
            </div></span>
          </div>
        </header>
      );
    }
  }
  
  export default Headers;