import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Actors from './components/actors';
import Actress from './components/actress';
import Films from './components/films';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
                <Navbar title="Oscars 2019" />
                <Route exact path="/" render={() => <Home title="Oscars Winners" />} />
                <Route path="/actors" render={() => <Actors />} />
                <Route path="/actress" render={() => <Actress />} />
                <Route path="/films" render={() => <Films />} />
                {/*<Route to="/" component={Home} />*/}
                {/*<Home title="Oscars Winners" />*/}

        </div>
      </BrowserRouter>
  );
}

export default App;
