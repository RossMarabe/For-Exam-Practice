import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home'
import Movies from './Components/Movies'
import Movie from './Components/Movie'
import AddMovie from './Components/AddMovie'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Movie App</h1>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/movies" component={Movies} />
            <Route exact={true} path="/movie/:_id" component={Movie} />
            <Route exact={true} path="/movies/add" component={AddMovie} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
