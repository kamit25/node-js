import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import ItemsCarousel from 'react-items-carousel';
import Carousel from 'nuka-carousel';
import Carousel_1 from '../../images/1.jpeg';
import Carousel_2 from '../../images/2.jpeg';
import Carousel_3 from '../../images/3.png';
import Carousel_4 from '../../images/4.jpeg';
import Carousel_5 from '../../images/5.jpeg';

class Carouselimage extends Component {
    render() {
      return (
        <div className = "carousel-position">
        <Carousel autoplay = {true} stopOnHover = {true} wrapAround = {true} showArrows = {false} framePadding = "20" renderBottomCenterControls={false}> 
        <img src= {Carousel_1} alt = "Carousel_1" height="400" />
        <img src= {Carousel_2} alt = "Carousel_2" height="400" />
        <img src= {Carousel_3} alt = "Carousel_3" height="400" />
        <img src= {Carousel_4} alt = "Carousel_4" height="400" />
        <img src= {Carousel_5} alt = "Carousel_5" height="400" />
      </Carousel>
      </div>
      );
    }
  }
  
  export default Carouselimage;