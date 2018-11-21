import React from 'react'
import ReactDOM from 'react-dom'


class BlurButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            
        }
        this.timeOutId = null;
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }
    onClickHandler(){
        this.setState(curState => ({
            isOpen: !curState.isOpen
        }))
    } 
  
 
    onBlurHandler(){
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
        });
      });
    }
    onFocusHandler(){
        clearTimeout(this.timeOutId);
    }
    render(){
        return(
            <div onBlur={this.onBlurHandler}
                onFocus={this.onFocusHandler}>
                <button onClick={this.onClickHandler}
                    aria-haspopup="true"
                    aria-expended={this.state.isOpen}>
                
                Select an option
                </button><br/>
                <button>
                Simple button
                </button>
               
                {this.state.isOpen ? (
                <ul>
                    <li>choice 1</li>
                    <li>choice 2</li>
                    <li>choice 3</li>
                </ul>
                ) : null}
            </div>
        
        )
    }
}
export default BlurButton;