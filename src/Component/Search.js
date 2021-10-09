import React, { useState } from 'react';


const Search = (props) => {


    const handelChange = (e) => {
        // e.preventDefault();

        props.searchHandler(e.target.value);

    }

    return (
        <div className="container">
            <input type="text" className="w-100 mt-3 rounded-pill border-2 pb-2" placeholder="Search By Rocket Name" value={props.keyword} onChange={handelChange} />

        </div>
    );
};

export default Search;