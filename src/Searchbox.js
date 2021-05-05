import React from 'react';

const Searchbox = ({searchChange}) => {
    return(
        <input type="search" placeholder="search/city/district/state" onChange={searchChange}/>
    )
}

export default Searchbox;