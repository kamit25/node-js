import React, { Component } from 'react';
import Carouselimage from '../components/BodyComponents/Carouselimage';
import CustomerTestimonial from '../components/BodyComponents/CustomerTestimonial';
import visit_1 from '../images/QA.png';
import visit_2 from '../images/satisfaction.jpg';
class Body extends Component {
    render() {
      return (
          <div>
          <div className = "body-position">
          <div className = "body-block">
              <div className="main">
           
                  
                  <Carouselimage />
                  <div className = "visit-us-position">
                  <p className = "visit-us">Why Visit Us</p>
                  <div className = "visit-us-pic">
                      <img className = "visit-us-menu" src={visit_1} alt = "QA" height="50" width="50" />
                      <img className = "visit-us-menu" src={visit_2} alt = "QA" height="50" width="50" />
                  </div>
                  </div>
                <p className = "visit-us">Customer Testimonial</p>
                <CustomerTestimonial />
              </div>
          </div>
          </div>
          </div>
      );
    }
  }
  
  export default Body;