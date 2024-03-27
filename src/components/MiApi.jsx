import { useState, useEffect } from 'react'
import { Col, Table } from 'react-bootstrap';

import Buscador from './Buscador';

function MiApi() {
    const [indicadores, setIndicadores] = useState([])
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
        setIndicadores(listaIndicadores);
        setInfo(listaIndicadores);
    };

    useEffect(() => {
        getData();
    }, []);
    
    useEffect(()=> {
        const results = indicadores.filter((indicador) =>
        indicador.nombre.toLowerCase().includes(search.toLowerCase())
        );
        setInfo(results)
    }, [search, indicadores])

    return ( 
        <Col>
            <Buscador setSearch={setSearch} />
            <Table striped bordered className='mt-2'>
                <thead>
                    <tr>
                        <th>Moneda</th>
                        <th>Unidad de Medida</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((elem)=> (
                        <tr key={elem.codigo}>
                            <td>{elem.nombre}</td>
                            <td>{elem.unidad_medida}</td>
                            <td>{elem.valor}</td>
                        </tr>
                    ))}                     
                </tbody>
            </Table>
            {console.log(info)}
            
        </Col>
     );
}

export default MiApi;