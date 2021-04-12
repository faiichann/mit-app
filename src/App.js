import './App.css';
import Head from './component/Head'
import { Container,Row,Col } from 'react-bootstrap';
import {Route} from 'react-router-dom'
import Design from './component/Design'
import Block from './component/Block'
import styled from 'styled-components'

const Designcol = styled(Col)`
  padding: 4em;
  background: papayawhip;
  `
const Viewcol = styled(Col)`
padding: 4em;
background: skyblue;
`

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
            <Designcol>Container Tool</Designcol>
            <Viewcol xs={6}><p>Viewer</p>
              <Route  path="/design" component={Design}/>
              <Route path="/block" component={Block}/>
            </Viewcol>
            <Designcol>Container property</Designcol>
           </Row>
        </Container>
  )
}

export default App;
