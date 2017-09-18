import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import MovieWatchlist from './MovieWatchlist';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieWatchlist />
      </div>
    );
  }
}

export default App;
