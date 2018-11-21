import React from 'react'
import ReactDOM from 'react-dom'

export default class LanguageForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            language: 'JavaScript'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onLanguageChange = this.onLanguageChange.bind(this);
    }
    onSubmit(event){
        alert(`You choosed language: ${this.state.language}`)
        event.preventDefault();
    }
    onLanguageChange(event){
        this.setState({language: event.target.value})
    }
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    <select  value={[this.state.language]} onChange={this.onLanguageChange}>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Scala">Scala</option>
                    </select>
                    
                </label><br/>
                <input type="submit" value="Choose"/>
            </form>
            
        );
    }
}
