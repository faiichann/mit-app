import './App.css';
import View from './component/View'
import history from  './history'
// import Textfield from './component/Textfield'
import Fontsize from './component/Fontsize'



function App() {
  
 
  return (
    <div className="App">
        <button onClick={() => history.push('/Dev')}>Developer</button>
        <View name="faii"/>
       {/* <Textfield/> */}
       <Fontsize/>
     


    </div>
  )
}

export default App;
