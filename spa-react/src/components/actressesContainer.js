import React from 'react';
import { ActressList } from '../data/actress';
import Actress from './actress';
import Actresses from './actresses';
import { Route } from 'react-router-dom';

const ActressesContainer = (props) => {
    let actressUrl = ActressList.map((actor, i) => {
        return (
            <Route key={i} path={`/actresses/${actor.url}`} render={() => <Actress name={actor.name} image={actor.profile_img} details={actor.description} />} />
        );
    });

    return (
        <React.Fragment>
            <Route exact path="/actresses" render={() => <Actresses title="Best Actresses" />} />
            {actressUrl}
            {/* <Route path="/actors/hello" render={() => <Actor />} /> */}
        </React.Fragment>
    );
}

export default ActressesContainer;