import React from 'react';

const SearchMovies = props => (
    <div id="search-movies">
        <input
            id="search-input"
            type="search"
            className="input-field"
            placeholder="Search..."
            onChange={e => {
                props.searchFn(e.target.value);
            }}
        />
    </div>
);

export default SearchMovies;
