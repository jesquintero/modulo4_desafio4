import {Container, Row, Col} from 'react-bootstrap';
import './App.css'
import MiApi from './components/MiApi';

function App() {

  const year = new Date().getFullYear();

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-center mb-5 mt-2'>Indicadores Económicos | tipos de cambio del día</h1>        
        </Col>
      </Row>
      <Row>
        <Col> 
          <MiApi />    
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='text-center'>Todos los derechos reservados JMQR {year}</p>       
        </Col>
      </Row>
    </Container>
  )
}

export default App
