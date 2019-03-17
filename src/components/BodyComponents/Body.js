import React, { Component } from 'react';
import Aboutus from '../../pages/Aboutus';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Navigation from '../HeaderComponents/Navigation';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
class Body extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
          <Navigation />
            <Switch>
              <Route path = "/" component = {Home} exact />
              <Route path = "/Home" component = {Home}  />
              <Route path = "/Aboutus" component = {Aboutus} />
              <Route path = "/Contact" component = {Contact} />
              <Route path = "/Login" component = {Login} />
              <Route path = "/Register" component = {Register} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default Body;