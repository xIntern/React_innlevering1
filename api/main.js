'use strict';

const express = require('express');
const db = require('./db');
const jsonParser = require('body-parser').json();

const app = express();
app.use(jsonParser);
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/movies', (req, res) => {
	let moviesPromise = (new db()).getMovies();
	moviesPromise.then(movies => {
		res.send(movies);
	});
});

app.post('/movie', (req, res) => {
	(new db()).addMovie(req.body).then(movie => {
		res.status(200).send(movie);
	}).catch(err => {
		console.log(err);
		res.sendStatus(500);
	});
});

app.route('/movie/:id')
.get((req, res) => {
	let moviePromise = (new db()).getMovie(req.params.id);
	moviePromise.then(movie => {
		if (movie !== null) {
			res.send(movie);
		} else {
			res.sendStatus(404);
		}
	});
})
.delete((req, res) => {
	(new db()).deleteMovie(req.params.id).then(result => {
		console.log('Deleted movie:');
		console.log(result);
		if (result) {
			res.sendStatus(204);
		} else {
			res.sendStatus(404);
		}
	});
});

app.get('*', (req, res) => {
	res.status(404).send('404 Not found');
});

app.listen(3000);
