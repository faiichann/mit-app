import './App.css';
import View from './component/View'
import history from  './history'
import Textfield from './component/Textfield'
import Propers from './component/Propers'




function App() {
  
 
  return (
    <div className="App">
        <button onClick={() => history.push('/Dev')}>Developer</button>
        <View name="faii"/>
       <Textfield/>
       <Propers/>
     
     


    </div>
  )
}

export default App;
