import { useTypewritter } from "font-tester";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

function Fontsize()  {
  const [text, setText, fontSize, setFontSize ] = useTypewritter()
  return (
    <Container>
      <div>
   
        <input id="input-fonsize" min={12} max={200} step={1} value={fontSize} onChange={(e) => setFontSize(e.target.valueAsNumber)}
        />
      </div>

      <div editable style={{ fontSize }} onChange={(e) => setText(e.target.value)}>
        {text}
      </div>
    </Container>
  )
}
export default Fontsize