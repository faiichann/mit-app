import './App.css';
import View from './component/View'
import Search from './component/Imageview'
import history from  './history'

function App() {
  return (
    <div className="App">
        <button onClick={() => history.push('/Dev')}>Developer</button>
        <View name="faii"/>
        <Search/>
    </div>
  )
}

export default App;
