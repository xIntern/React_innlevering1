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
        return this.Movie.find().exec();
    }

    getMovie(id) {
        return this.Movie.findById(id).exec();
    }

    addMovie(movieObj) {
        movieObj.added = new Date();
        return this.Movie(movieObj).save();
    }

    deleteMovie(id) {
        return this.Movie.findByIdAndRemove(id).exec();
    }
}

module.exports = DB;
