import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from '../Components/MovieList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const movies = [{
  	_id: parseInt(Math.random() * (new Date()).getTime()),
  	title: 'Inception',
  	year: 2010
  }];
  ReactDOM.render(<MovieList movies={movies} />, div);
});
