'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/a01');

const movieSchema = new mongoose.Schema({
	title: String,
	year: Number,
	watched: Boolean,
	added: Date
});

const Movie = mongoose.model('Movie', movieSchema);

class DB {
	constructor() {
		this.Movie = Movie;
	}

	getMovies() {
		// return this.Movie.find((err, movies) => {
		// 	if (err) {
		// 		console.log(err);
		// 		return false;
		// 	}
		// 	return movies;
		// });
		return this.Movie.find().exec();
	}

	getMovie(id) {
		return this.Movie.findById(id).exec();
	}

	addMovie(movieObj) {
		// TODO: Save returns promise
		// return new Promise((resolve, reject) => {
			movieObj.added = new Date();
		// 	const movie = new this.Movie(movieObj);
		// 	movie.save((err, saved) => {
		// 		if (err) {
		// 			console.log(err);
		// 			return reject(err);
		// 		}
		// 		return resolve(saved);
		// 	});
		// });
		return this.Movie(movieObj).save();
	}

	deleteMovie(id) {
		return this.Movie.findByIdAndRemove(id).exec();
	}
}

module.exports = DB;
