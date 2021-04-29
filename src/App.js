import './App.css';
import Head from './component/Head'
import { Container,Row,Col ,Card ,Accordion} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import Design from './component/Design'
import Block from './component/Block'
import ListTool from './component/ListTool'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


const Designcol = styled(Col)`
  text-align : center;
  margin: 1em;
  padding : 1em;
  background: papayawhip;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height : 500px;
  `
const Viewcol = styled(Col)`
  text-align : center;
  margin: 1em;
  padding : 1em;
  background: skyblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height : 500px;
`

function App() {
  return (
    
        <Container>
          <DndProvider backend={HTML5Backend}>
          <Row>
              <Head/>
          </Row>
          <hr/>
          <Row>
            <Designcol>
              <h6>Container Tool</h6>
              <hr/>
              <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                User Interface
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><ListTool/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Layout
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Container</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
            </Designcol>
            <Viewcol xs={6}>
            <h6>Viewer</h6>
            <hr/>
              <Route  path="/design" component={Design}/>
              <Route path="/block" component={Block}/>
            </Viewcol>
            <Designcol>
            <h6>Container property</h6>
              <hr/>
              </Designcol>
           </Row>
           </DndProvider>
        </Container>
  )
}

export default App;
