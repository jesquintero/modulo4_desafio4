import { useState, useEffect } from 'react'

function Buscador({ search, onFilterChange }) {

    return ( 
        <>
            <input
                type="text"
                placeholder="search"
                className="form-control"
                value={search}
                onChange={e => onFilterChange(e.target.value)}
            />
        </>
     );
}

export default Buscador;