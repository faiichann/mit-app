import './App.css';
// import View from './component/View'
// import Test1 from './component/Tet'
// import DragDropLabel from './component/DragDropL'
import LabelCreate from './component/LabelCreate'
import history from  './history'

function App() {
  return (
    <div className="App">
        <button onClick={() => history.push('/Dev')}>Developer</button>
        {/* <Test1 name="faii"/> */}
        <LabelCreate/>
    </div>
  )
}

export default App;
