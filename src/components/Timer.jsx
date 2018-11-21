import React from 'react';
import ReactDOM from 'react-dom';

const INTERVAL = 100;


export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 0};
    }
    increment(){
        this.setState({value: this.state.value + 1});
    }
    componentDidMount(){
     
        this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
        
    }
    componentWillUnmount(){
       
        clearInterval(this.timerID);
        
    }
    render() {
      const value = this.state.value;
      return(
        <div>
         <p> Timer:</p>
         <p>
            <span>{Math.floor(value/INTERVAL/60/60)} : </span>
            <span>{Math.floor(value/INTERVAL/60)} : </span>
            <span>{Math.floor(value/INTERVAL%60)} . </span>
            <span>{value % INTERVAL}</span>
         </p>
        </div>
    );
  }
}
    
      

   
