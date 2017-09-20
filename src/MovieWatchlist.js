import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchMovies from './SearchMovies';

const apiBaseUrl = 'http://localhost:3000';

class MovieWatchlist extends Component {
    constructor(props) {
        super(props);

        this.deleteMovie = this.deleteMovie.bind(this);

        this.state = {
            movies: [],
            search: ''
        };
    }

    addMovie(childState) {
        if (childState.title === '') {
            console.log('No title');
            return;
        }
        fetch(`${apiBaseUrl}/movie`, {
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
        fetch(`${apiBaseUrl}/movie/${id}`, {
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

    searchMovies(keyword) {
        this.setState({
            search: keyword
        });
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate() {
        // console.log(this.state);
    }

    render() {
        let movieList = <MovieList
            deleteFn={this.deleteMovie}
            movies={this.state.movies.filter(movie => movie.title.toLowerCase().search(this.state.search.toLowerCase()) > -1)}
        />
        if (!this.state.movies) {
            movieList = <p className="center">Loading...</p>
        }
        if (!this.state.movies.length) {
            movieList = <p className="center">No movies, please add a one above</p>
        }
        return (
            <div id="movie-watchlist" className="row">
                <div className="col s12">
                    <AddMovie
                        addFn={this.addMovie.bind(this)}
                    />
                    <SearchMovies
                        searchFn={this.searchMovies.bind(this)}
                    />

                    {movieList}
                </div>
            </div>
        );
    }
}

export default MovieWatchlist;
