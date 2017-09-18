import React from 'react';

// class MovieRow extends Component {

//     render() {
//         return (
//             <tr>
//                 <td>{this.props.title}</td>
//                 <td>{this.props.year}</td>
//                 <td
//                     onClick={(e) => {
//                         console.log(this.props);
//                         this.props.deleteFn(this.props.id);
//                 }}>
//                     <i className="material-icons clickable">delete_forever</i>
//                 </td>
//             </tr>
//         )
//     }
// }

const MovieRow = props => (
    <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td
            onClick={(e) => {
                console.log(props);
                props.deleteFn(props.id);
        }}>
            <i className="material-icons clickable">delete_forever</i>
        </td>
    </tr>
);

export default MovieRow;
