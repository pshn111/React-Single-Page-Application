import React from 'react';
import { Link } from 'react-router-dom';
import { ActressList } from '../data/actress';
const Actress = (props) => {

    let actress = ActressList.map((person) => {
        return (
            <div className="actor-container">
                <Link to={`/actresses/${person.url}`}>
                    <div className="actor-image" style={{ backgroundImage: "url(" + person.img_src + ")" }}></div>
                </Link>
                    
                <h3>{person.name}</h3>
                
            </div>
        );
    });

    return (

        <div className="main-content">
            <div><Link className="back" to="/">back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                {actress}

            </div>
        </div>
    );
};

export default Actress;