import { useState, useEffect } from 'react'
import { Col, Table } from 'react-bootstrap';

import Buscador from './Buscador';

function MiApi() {
    const [info, setInfo] = useState([]);
    const [search, setSearch] = useState('');

    //Consumo de API
    const url = 'https://mindicador.cl/api';

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const listaIndicadores = Object.keys(data).filter(key => key !== 'version' && key !== 'autor' && key !== 'fecha').map(key => {
            return {
            ...data[key],
            tipo: key
            };
        });
        setInfo(listaIndicadores);
    };

    useEffect(() => {
        getData();
    }, []);

    //Filtrado de datos
    let results = [];
    if (!search) {
        results = info;
    } else {
        results = info.filter((inf) =>
        inf.name.toLowerCase().includes(search.toLowerCase())
        );
    } 

    return ( 
        <Col>
            <Buscador search={search} onFilterChange={setSearch} />
            <Table striped bordered className='mt-2'>
                <thead>
                    <tr>
                        <th>Moneda</th>
                        <th>Unidad de Medida</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((elem, index)=> (
                        <tr key={elem.codigo}>
                            <td>{elem.nombre}</td>
                            <td>{elem.unidad_medida}</td>
                            <td>{elem.valor}</td>
                        </tr>
                    ))}                     
                </tbody>
            </Table>
            {console.log(results)}
            
        </Col>
     );
}

export default MiApi;