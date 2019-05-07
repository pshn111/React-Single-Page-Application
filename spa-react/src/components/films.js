import React from 'react';
import { Link } from 'react-router-dom';
import { FilmsList } from '../data/films';

const Films = (props) => {

    let films = FilmsList.map((film) => {
        return (
            <div className="actor-container">
                <Link to={`/films/${film.url}`}>
                    <div className="film-image" style={{ backgroundImage: "url(" + film.img_src + ")" }}></div>
                </Link>
                <h3>{film.name}</h3>
            </div>
        );
    });

    return (

        <div className="main-content">
            <div><Link className="back" to="/">back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                {films}

            </div>
        </div>
    );
};

export default Films;