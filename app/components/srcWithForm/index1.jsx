import React from 'react'
import ReactDOM from 'react-dom'

class NameField extends React.Component{
    constructor(props){
        super(props);
        const name = props.name;
        this.state = {
            name: name,
            valid: this.validated(name)
            
        }
        this.onNameChange = this.onNameChange.bind(this);
    }
    validated(valName){
        return valName.length >3;
    }
    onNameChange(e) {
        let valName = e.target.value;
        let valid = this.validated(valName);
        this.setState({name: valName, valid: valid});
    }
    render() {
        const Color = this.state.valid === true ? "green" : "red";
        return(
            <p>
                <label>Name: </label>
                <input type="text"
                    placeholder="Name..."
                    value={this.state.name}
                    onChange={this.onNameChange}
                    style={{borderColor: Color}}
                    />
            </p>
        );
    }
}

class AgeField extends React.Component{
    constructor(props){
        super(props);
        const age = props.age;
        this.state = {
            age: age,
            valid: this.validated(age)
        }
        this.onAgeChange = this.onAgeChange.bind(this);
    }
    validated(valAge) {
        return valAge >= 12;
    }
    onAgeChange(e){
        let valAge = e.target.value;
        let valid = this.validated(valAge);
        this.setState({age: valAge, valid: valid});
    }
    render() {
        const Color = this.state.valid === true ? "green" : "red";
        return (
            <p>
                <label>Age: </label>
                <input type="number"
                    value={this.state.age}
                    onChange={this.onAgeChange}
                    style={{borderColor: Color}}
                    />
            </p>
        );
    }
}

class FormSubmit extends React.Component{
    handleSubmit(e) {
        const name = this.refs.NameField.state.name;
        const age = this.refs.AgeField.state.age;
        if(this.refs.NameField.state.valid && this.refs.AgeField.state.valid){
            alert("Your name: " + name + " and age: " + age);
        }
        e.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <NameField name="" ref="NameField"/>
                <AgeField age="12" ref="AgeField"/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
    
export default FormSubmit;