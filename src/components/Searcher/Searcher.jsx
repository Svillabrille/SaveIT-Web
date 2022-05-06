import React from 'react';
import './Searcher.scss'

const Searcher = ({setSearch}) => {
    return (
        <div className="search">
            <form className="search-form">
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Look for your favourite articles"/>
            </form>
        </div>
    );
};

export default Searcher;