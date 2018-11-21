import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink} from 'react-router-dom';


export default class Examples extends React.Component{
    render() {
        return(
            <div>
                
                <h3>Examples</h3>
                <Navigations />
                
            </div>
        );
    }
}

class Navigations extends React.Component{
    render(){
        return(
            <nav>
                <NavLink  to="/examples/conditioner">
                    Conditioner<br/>
                </NavLink>
                <NavLink  to="/examples/timer">
                    Timer<br/>
                </NavLink>
                <NavLink  to="/examples/list">
                    List Language<br/>
                </NavLink>
                <NavLink to="/examples/button">
                    Button<br/>
                </NavLink>
                <NavLink to="/examples/lp">
                    Form<br/>
                </NavLink>
                <NavLink to="/examples/form">
                    Form Submit<br/>
                </NavLink>
                <NavLink to="/examples/perform">
                    Person Form<br/>
                </NavLink>
                <NavLink to="/examples/searchf">
                    Filter Product
                </NavLink>
                    
            
            </nav>
        )
    }
}
