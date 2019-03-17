import React,{Component} from 'react';


class Register extends Component{
    render(){
        return (
        <div className = "body-position">
        <div className = "body-block">
        <div className="main">
        <div className ="registration-form">
        <div className = "text" ><span className = "sign" >Registration</span></div>
        <form>
        <div className = "username-field" ><input type ="text" name ="username" className = "username" placeholder = "USERNAME" /></div>
        <div className = "name-field">
        <input type ="text" name ="fname" className = "firstname" placeholder = "FIRST NAME" />
        <input type ="text" name ="lname" className = "lastname" placeholder = "LAST NAME" />
        </div>
        <div className = "email-field" ><input type ="email" name ="username" className = "email" placeholder = "EMAIL ADDRESS" /></div>
        <div className = "gender-field" >
        <div className = "radio-field"><input type ="radio" name ="gender" value = 'M' /><span className= "gender" >Male</span></div>
        <div className = "radio-field"><input type ="radio" name ="gender" value = 'F' className= "gender" /> <span className= "gender" >Female</span></div>
        </div>	
        <div className = "mobile-field" ><input type ="email" name ="username" className = "mobile" placeholder = "MOBILE NUMBER" /></div>
        <div className = "password-field">
        <input type ="password" name ="password1" className = "password" placeholder="PASSWORD"/>	
        <input type ="password" name ="password2" className = "password" placeholder="CONFIRM PASSWORD"/>
        </div>
        <div className = "register-button"  ><input type="submit" value = "Register" className = "button" /></div>    
        </form> 
        </div>
        </div>
        </div>
        </div>
        )
    }

}

export default Register;
