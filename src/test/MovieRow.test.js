import React from 'react';
import ReactDOM from 'react-dom';
import MovieRow from '../MovieRow';

it('renders without crashing', () => {
  const tbody = document.createElement('tbody');
  const movie = [{
  	_id: parseInt(Math.random() * (new Date()).getTime()),
  	title: 'Inception',
  	year: 2010
  }];
  ReactDOM.render(<MovieRow key={movie._id} id={movie._id} title={movie.title} year={movie.year} />, tbody);
});
