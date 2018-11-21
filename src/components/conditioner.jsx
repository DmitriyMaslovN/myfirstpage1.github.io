import React from 'react'
import ReactDOM from 'react-dom'

export default class Conditioner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: 0
        };
        
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }
    
    onIncrease(){
        this.setState(prevState  => ({
            temperature : prevState.temperature +1
            }))
    }
    onDecrease() {
        this.setState(prevState =>({
            temperature: prevState.temperature -1
        }))
    }
    
    render() {
        return(
         <p>
           <h2>Current temperature: {this.state.temperature}</h2>
            <button onClick={this.onDecrease}>-</button>
            <button onClick={this.onIncrease}>+</button>
        </p>
        )
    }
}

