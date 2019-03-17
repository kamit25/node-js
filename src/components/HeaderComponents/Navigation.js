import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component{
    render(){
        return (
            <div>
                <NavLink to = '/Home'>Home</NavLink>
                <NavLink to = '/Aboutus'>Aboutus</NavLink>
                <NavLink to = '/Contact'>Contact</NavLink>
                <NavLink to = '/Login'>Login</NavLink>
                <NavLink to = '/Register'>Register</NavLink>
            </div>
        )
    }

}

export default Navigation;
