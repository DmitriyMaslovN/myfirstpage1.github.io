import React from 'react'
import ReactDOM from 'react-dom'

class PersonForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sex: 'male',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''        
        }
        this.onPersonChange = this.onPersonChange.bind(this);
    }
    
    onPersonChange(event) {
        const {target: {name, value}} = event;
        this.setState({[name]: value})
    }
    render(){
        return(
            <form>
                <label>First name: <input type="text" name="firstName" 
                                       value={this.state.firstName}
                                       onChange={this.onPersonChange}/>
                </label>
                <label>Last name: <input type="text" name="lastName" 
                                      value={this.state.lastName}
                                      onChange={this.onPersonChange}/>
                </label>
                <label>Email: <input type="email" name="email" 
                                  value={this.state.email}
                                  onChange={this.onPersonChange}/><br/>
                </label>
                <label>Phone:&nbsp; &nbsp;&nbsp;&emsp;<input type="tel" name="phone"
                                  value={this.state.phone}
                                  onChange={this.onPersonChange}/>
                </label>
                <label>Sex: <select name="sex" value={[this.state.sex]}
                                onChange={this.onPersonChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                </label>
            
            </form>
        );
    }
}
export default PersonForm;