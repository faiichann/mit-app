import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function Propers(){
const [data, setData] = useState({width:'',height:'',color:'',txt:''})
const iniData = 0;
const divStyle = {
  width:'{width}px',
  height:'{height}px',
  txt:'txt'
}; 
 
    return <>
  
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
       <input type="color" class="form-control"  id="txtcolor" name="txtColor" value={data.color} onChange={e => setData ({...data, color: e.target.value})}></input>
       <br>
       </br>
       <label for="placehoder">Placehoder</label>
       <input type="text" id="placeholder" name="placeholder" value={data.txt} onChange={e => setData ({...data, txt: e.target.value})}></input>
       <br>
       </br>
       <Button type="submit">Submit</Button>
       <Button onClick={()=> setData(iniData)}>Delete</Button>
      
       </Container>
        <p >
         Width : {data.width}
         height : {data.height}
         Color : {data.color}
         Placeholder : {data.txt}
       </p> 
    
  </>
}
  export default Propers