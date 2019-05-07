import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
    <nav>
        <h2 className="logo"><a href="#" className="logo-link">{props.title}</a></h2>
        <ul className="nav-menu">
            <li><NavLink className="nav-menu__link" activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName="active" to="/actors">Best Actors</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName="active" to="/actresses">Best Actress</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName="active" to="/films">Best Films</NavLink></li>
        </ul>
    </nav>
);

export default Navbar;