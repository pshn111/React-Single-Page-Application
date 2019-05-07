import React from 'react';
import { FilmsList } from '../data/films';
import Film from './film';
import Films from './films';
import { Route } from 'react-router-dom';

const FilmsContainer = (props) => {
    let filmUrl = FilmsList.map((film, i) => {
        return (
            <Route key={i} path={`/films/${film.url}`} render={() => <Film name={film.name} image={film.img_src} details={film.description} />} />
        );
    });

    return (
        <React.Fragment>
            <Route exact path="/films" render={() => <Films title="Best Films" />} />
            {filmUrl}
            
        </React.Fragment>
    );
}

export default FilmsContainer;