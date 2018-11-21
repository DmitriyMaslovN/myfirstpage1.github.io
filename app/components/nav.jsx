import React from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom';

export default class Navigate extends React.Component{
    render() {
        return(
            <div>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/examples">
                    Examples
                </NavLink>
                <NavLink to="/author" >
                    Author
                </NavLink>
            </div>
        );
    }
}