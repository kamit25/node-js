import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import testimonial_1 from '../../images/t1.jpg';
import testimonial_2 from '../../images/t2.jpg';
import testimonial_3 from '../../images/t3.jpg';
import testimonial_4 from '../../images/t4.jpg';
import testimonial_5 from '../../images/t5.jpg';

class CustomerTestimonial extends Component {
    render() {
      return (
        <div className = "CustomerTestimonial-position">
        <Carousel autoplay = {true} stopOnHover = {true} wrapAround = {true} slideWidth={0.3} cellSpacing  = {200} autoplayInterval = {100} renderBottomCenterControls={false}> 
        <img src= {testimonial_1} alt = "Carousel_1" height="200" />
        <img src= {testimonial_2} alt = "Carousel_2" height="200" />
        <img src= {testimonial_3} alt = "Carousel_1" height="200" />
        <img src= {testimonial_4} alt = "Carousel_2" height="200" />
        <img src= {testimonial_5} alt = "Carousel_1" height="200" />
        </Carousel>
        </div>
      );
    }
  }
  
  export default CustomerTestimonial;