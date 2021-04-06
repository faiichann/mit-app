import './App.css';
import View from './component/View'
import history from  './history'

function App() {
  return (
    <div className="App">
        <button onClick={() => history.push('/Dev')}>Developer</button>
        <View name="faii"/>
    </div>
  )
}

export default App;
