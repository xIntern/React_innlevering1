'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const movieSchema = new mongoose.Schema({
	title: String,
	year: Number,
	watched: Boolean,
	added: Date
});

class DB {
	constructor(dbName) {
		const conn = mongoose.createConnection(`mongodb://localhost/${dbName}`);
		this.Movie = conn.model('Movie', movieSchema);
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
