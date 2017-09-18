import React from 'react';
import MovieRow from './MovieRow';

// const apiBaseUrl = 'http://localhost:3000';

// class MovieList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount() {
//         fetch(`${apiBaseUrl}/movies`).then(response => {
//             if (!response.ok) {
//                 console.log(response);
//             }
//             return response;
//         }).then(response => response.json()).then(json => {
//             this.setState({ movies: json });
//         });
//     }

//     render() {
//         if (!this.state.movies) {
//             return <p>Loading...</p>
//         }
//         if (!this.state.movies.length) {
//             return <p>Empty</p>
//         }
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Year</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.movies.map(movie => {
//                         return <MovieRow key={movie._id} id={movie._id} title={movie.title} year={movie.year} />
//                     })}
//                 </tbody>
//             </table>
//         );
//     }
// }

const MovieList = props => {
    return (
        <table>
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

    );
}

export default MovieList;
