import React ,{useState} from 'react';


function Textfield(){
const [data, setData] = useState({number:''})
const divStyle = {
  width:'{data.number}',
  height:'{data.number}'
}; 
 
    return <>
        <button>
            Textfield
        </button>
        <div >
       <input style={divStyle} type='text'></input>
       </div>
       <input type='number' id='nums' value={data.number} onChange={e => setData ({...data, number: e.target.value})}></input>
       <p >
         Num : {data.number}
       </p>
    </>
    
  
}
  export default Textfield