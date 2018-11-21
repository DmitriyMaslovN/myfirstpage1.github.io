import React from 'react'
import ReactDOM from 'react-dom'


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: '', 
            password: '',
        }
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        alert(`${this.state.login}, Welcome`);
        event.preventDefault();
    }
    onPasswordChange(event){
        this.setState({password: event.target.value})
    }
    onLoginChange(event) {
        this.setState({login: event.target.value})
    }
    render(){
      return(
        <form onSubmit={this.onSubmit}>
          <p><label>Login: <input type="text" name="login" value={this.state.login}
                               onChange={this.onLoginChange}/></label></p>
          <p><label>Password: <input type="password" name="password" value={this.state.password}
                                  onChange={this.onPasswordChange}/></label></p>
          <p><input type="submit" value="submit"/></p>
          </form>      
        
        );
    }

}
export default LoginForm;