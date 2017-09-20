import React from 'react';
import MovieRow from './MovieRow';

const MovieList = props => {
    return (
        <div id="movie-list">
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
        </div>
    );
}

export default MovieList;
