import './App.css';
// import View from './component/View'
import history from  './history'
import Somo from './component/somo'

function App() {
  return (
    <div className="App">
        <button onClick={() => history.push('/Dev')}>Developer</button>
        <Somo name='somoo'/>

    </div>
  )
}

export default App;
