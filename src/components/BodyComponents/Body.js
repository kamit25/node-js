import React, { Component } from 'react';
import carousel_page from './Carousel_image';

class Body extends Component {
    render() {
      return (
        <div className = ".body-block">
            <div className="left">
            <   p>Left Menu</p>
            </div>

            <div className="main">
                {/* <p>Main Content</p> */}
                <carousel_page />
            </div>

            <div className="right">
                <p>Right Content</p>
            </div>
        </div>
      );
    }
  }
  
  export default Body;