import React from 'react';
import { Link } from 'react-router-dom';

const Actress = (props) => {

    return (

        <div className="main-content">
            <div><Link className="back" to="/actresses">back</Link></div>

            <div className="container">
                <div className="actor-profile-image" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
                <h2>{props.name}</h2>
                <p>{props.details}</p>
            </div>
        </div>
    );
};

export default Actress;