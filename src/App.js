import './App.css';
import Head from './component/Head'
import { Container,Row,Col } from 'react-bootstrap';
import {Route} from 'react-router-dom'
import Design from './component/Design'
import Block from './component/Block'
import ListTool from './component/ListTool'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

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
          <DndProvider backend={HTML5Backend}>
          <Row>
            <Col xs={{ span: 10, offset: -1 }}>
              <Head/>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Designcol>
              Container Tool
              <ListTool/>
            </Designcol>
            <Viewcol xs={6}><p>Viewer</p>
              <Route  path="/design" component={Design}/>
              <Route path="/block" component={Block}/>
            </Viewcol>
            <Designcol>Container property</Designcol>
           </Row>
           </DndProvider>
        </Container>
  )
}

export default App;
