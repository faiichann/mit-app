import React ,{useState} from 'react';


function Textfield(){
const [data, setData] = useState({width:'',height:''})
const iniData = 0;
const divStyle = {
  width:'{width}',
  height:'{height}'
}; 
 
    return <>
        <button>
            Textfield
        </button>
        <div >
       <input style={divStyle} type='text'></input>
       </div>
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
       <button type="submit">Submit</button>
       <button onClick={()=> setData(iniData)}>Delete</button>
        <p >
         Width : {data.width}
         height : {data.height}

       </p> 
    </>
    
  
}
  export default Textfield