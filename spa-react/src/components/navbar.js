import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
    <nav>
        <h2 className="logo"><a href="#" className="logo-link">{props.title}</a></h2>
        <ul className="nav-menu">
            <li><Link className="nav-menu__link" to="/">Home</Link></li>
            <li><Link className="nav-menu__link" to="/actors">Best Actors</Link></li>
            <li><Link className="nav-menu__link" to="/actress">Best Actress</Link></li>
            <li><Link className="nav-menu__link" to="/films">Best Films</Link></li>
        </ul>
    </nav>
);

export default Navbar;