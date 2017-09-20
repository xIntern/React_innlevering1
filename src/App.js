import React, { Component } from 'react';
import MovieWatchlist from './MovieWatchlist';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <MovieWatchlist />
      </div>
    );
  }
}

export default App;
