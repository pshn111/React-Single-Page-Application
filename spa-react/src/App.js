import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';
import ActressesContainer from './components/actressesContainer';
import FilmsContainer from './components/filmsContainer';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
                <Navbar title="Oscars 2019" />
                <Route exact path="/" render={() => <Home title="Oscars Winners" />} />
                <Route path="/actors" render={() => <ActorsContainer title="Best Actors" />} />
                <Route path="/actresses" render={() => <ActressesContainer title="Best Actresses" />} />
                <Route path="/films" render={() => <FilmsContainer title="Best Films"/>} />
                {/*<Route to="/" component={Home} />*/}
                {/*<Home title="Oscars Winners" />*/}

        </div>
      </BrowserRouter>
  );
}

export default App;
