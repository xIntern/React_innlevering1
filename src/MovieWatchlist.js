import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

const apiBaseUrl = 'http://localhost:3000';

class MovieWatchlist extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    addMovie(childState) {
        if (childState.title === '') {
            return;
        }
        fetch('http://localhost:3000/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(childState)
        }).then(response => response.json()).then(json => {
            this.setState(prevState => ({
                movies: [...prevState.movies, json]
            }));
        });
    }

    deleteMovie(id) {
        fetch(`http://localhost:3000/movie/${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                this.setState(prevState => ({
                    movies: prevState.movies.filter((movie, i) => movie._id !== id)
                }));
            }
        }).catch(err => {
            console.error(err);
        });
    }

    getMovies() {
        fetch(`${apiBaseUrl}/movies`).then(response => {
            if (!response.ok) {
                console.log(response);
            }
            return response;
        }).then(response => response.json()).then(json => {
            this.setState({ movies: json });
        });
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        if (!this.state.movies) {
            return <p>Loading...</p>
        }
        if (!this.state.movies.length) {
            return <p>Empty</p>
        }
        return (
            <div id="movie-watchlist">
                <AddMovie addFn={this.addMovie.bind(this)} />
                <MovieList deleteFn={this.deleteMovie.bind(this)} movies={this.state.movies} />
            </div>
        );
    }
}

export default MovieWatchlist;
