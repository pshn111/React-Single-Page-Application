import React from 'react';

const Navbar = (props) => (
    <nav>
        <h2 className="logo"><a href="#" className="logo-link">{props.title}</a></h2>
        <ul className="nav-menu">
            <li><a href="#" className="nav-menu__link">Home</a></li>
            <li><a href="#" className="nav-menu__link">Best Actors</a></li>
            <li><a href="#" className="nav-menu__link">Best Actress</a></li>
            <li><a href="#" className="nav-menu__link">Best Films</a></li>
        </ul>
    </nav>
);

export default Navbar;