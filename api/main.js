'use strict';

const express = require('express');
const mongooseDB = require('./db');
const jsonParser = require('body-parser').json();

const app = express();
app.use(jsonParser);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const prodDB = new mongooseDB('a01');
const testDB = new mongooseDB('a01-test');
let db;

const middlewareTest = (req, res, next) => {
    db = (req.originalUrl.indexOf('/test') > -1) ? testDB : prodDB;
    next();
};
app.use(middlewareTest);


app.get('/movies/:test*?', (req, res) => {
    let moviesPromise = db.getMovies();
    moviesPromise.then(movies => {
        res.send(movies);
    });
});

app.post('/movie/:test*?', (req, res) => {
    db.addMovie(req.body).then(movie => {
        res.status(201).send(movie);
    }).catch(err => {
        res.sendStatus(500);
    });
});

app.route('/movie/:id/:test*?')
.get((req, res) => {
    let moviePromise = db.getMovie(req.params.id);
    moviePromise.then(movie => {
        if (movie !== null) {
            res.send(movie);
        } else {
            res.sendStatus(404);
        }
    });
})
.delete((req, res) => {
    db.deleteMovie(req.params.id).then(result => {
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

app.listen(3000, () => console.log('Listening on port 3000'));
