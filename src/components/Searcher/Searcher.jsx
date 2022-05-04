import React from 'react';
import './Searcher.scss'

const Searcher = ({setSearch}) => {
    return (
        <div className="search">
            <form className="search-form">
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Busca tus productos favoritos"/>
            </form>
        </div>
    );
};

export default Searcher;