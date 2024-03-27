import { useState } from 'react'

function Buscador({ setSearch }) {
    const [valor, setValor] = useState('');

    const handleSearch = (e) => {
        setValor(e.target.value);
        setSearch(e.target.value);
    };

    return ( 
        <>
            <input
                type="text"
                placeholder="Buscar moneda"
                className="form-control"
                value={valor}
                onChange={handleSearch}
            />
        </>
     );
}

export default Buscador;