import './App.css';
import View from './component/View'
import history from  './history'
import Textfield from './component/Textfield'
import React ,{useState} from 'react'


function App() {
  const [data, setData] = useState({num:''})
  const divStyle = {
    width:'{data.number}',
    height:'{data.number}'
  }; 
  return (
    <div className="App">
        <button onClick={() => history.push('/Dev')}>Developer</button>
        <View name="faii"/>
       <Textfield/>
       <div >
       <input style={divStyle} type='text'></input>
       </div>
       <input type='number' id='nums' value={data.number} onChange={e => setData ({...data, number: e.target.value})}></input>
       <p >
         Num : {data.number}
       </p>

    </div>
  )
}

export default App;
