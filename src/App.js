import './App.css';
import Head from './component/Head'
import { Container,Row,Col } from 'react-bootstrap';
import {Route} from 'react-router-dom'
import Design from './component/Design'
import Block from './component/Block'

function App() {
  return (
    
        <Container>
          <Row>
            <Col xs={{ span: 10, offset: -1 }}>
              <Head/>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>Container Tool</Col>
            <Col xs={6}><p>Viewer</p>
              <Route  path="/design" component={Design}/>
              <Route path="/block" component={Block}/>
            </Col>
            <Col>Container property</Col>
           </Row>
        </Container>
  )
}

export default App;
