import React from 'react';

const MovieRow = props => (
    <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td>
            <i
                onClick={(e) => {
                    props.deleteFn(props.id);
                }}
                className="material-icons clickable">
                delete_forever
            </i>
        </td>
    </tr>
);

export default MovieRow;
