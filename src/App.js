import './App.css';
import View from './component/View'
import history from  './history'
import Vertical from './component/Layout/Vertical/Vertical'
import Horizontal from './component/Layout/Horizontal/Horizontal'

function App() {
  return (
    <div className="App">
        <button onClick={() => history.push('/Dev')}>Developer</button>
        <View name="faii"/>
        <Vertical />
        <Horizontal />
    </div>
  )
}

export default App;
