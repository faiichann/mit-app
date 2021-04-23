import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function Textfield(){
const [data, setData] = useState({width:'',height:''})
const iniData = 0;
const divStyle = {
  width:'{width}',
  height:'{height}'
}; 
 
    return <>
    <Container>
        <Button>
            Textfield
        </Button>
        <br></br>
        <br></br>
        <div>
       <input style={divStyle} type='text'></input>
       </div>
       <br></br>
       <Container>
       <label for="txtpro">Properties</label>
       <br></br>
       <label for="txtwidth">Width:</label>
       <input type='number' id='wid' value={data.number} onChange={e => setData ({...data, width: e.target.value})}></input>
       <br>
       </br>
       <label for="txtheight">Height:</label>
       <input type='number' id='hei' value={data.number} onChange={e => setData ({...data, height: e.target.value})}></input>
       <br>
       </br>
       <label for="txtcolor">Color:</label>
       <input type="color" class="form-control"  id="txtcolor" name="txtColor"></input>
       <br>
       </br>
       <Button type="submit">Submit</Button>
       <Button onClick={()=> setData(iniData)}>Delete</Button></Container>
        <p >
         Width : {data.width}
         height : {data.height}

       </p> 
       </Container>
    </>
    
  
}
  export default Textfield