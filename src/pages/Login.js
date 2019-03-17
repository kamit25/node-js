import React,{Component} from 'react';
// import Register from './Register';
// import header from '../components/HeaderComponents/Header';
// import body from '../components/BodyComponents/Body';
// import footer from '../components/FooterComponents/Footer';

class Login extends Component{
    render(){
        return (
            <div className = "body-position">
            <div className = "body-block">
              <div className="main">
            <div className ="login-form">
            <div className = "text" ><span className = "sign" >Login</span></div>
            <form>
                <div className = "login-username-field" ><input type ="text" name ="username" className = "login-username" placeholder = "USERNAME" /></div>
                <div className = "login-password-field" ><input type ="password" name ="password1" className = "login-password" placeholder="PASSWORD"/></div>
                <div className = "rememberme-field" ><input type = "checkbox" name = "rememberme" value="1" /><span className = "rememberme-check">Remember Me</span></div>
                <div className = "login-button"  ><input type="submit" value = "Login" className = "button" /></div>
            </form>
            <div className = "link-container">
            <a href = "/Register" className = "link">Don't have account ? create here</a>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }

}

export default Login;
