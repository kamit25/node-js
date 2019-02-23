import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel_1 from '../../images/1.png';
import carousel_2 from '../../images/2.png';

class Carousel_image extends Component {
    render() {
      return (
        <Carousel>
                <div>
                    <img src={carousel_1} alt = "carousel_1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={carousel_2} alt = "carousel_2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={carousel_1} alt = "carousel_1"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      );
    }
  }
  
  export default Carousel_image;