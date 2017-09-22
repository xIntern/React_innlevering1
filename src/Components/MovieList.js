import React from 'react';
import MovieRow from './MovieRow';

const MovieList = props => {
    return (
        <div id="movie-list">
        {props.movies.length ? (
            <table className="bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map(movie => {
                        return <MovieRow deleteFn={props.deleteFn} key={movie._id} id={movie._id} title={movie.title} year={movie.year} />
                    })}
                </tbody>
            </table>
        ) : (
            <h4 className="center">No movies</h4>
        )}
        </div>
    );
}

export default MovieList;
