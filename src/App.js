import './App.css';
import {useState} from "react";

/*import View from './component/View'
import history from  './history'*/


function App() {
  const [textButton, settextButton] = useState({
    username: 'Text for Button1'
  });
  
  const myChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    settextButton({[nam]: val});
    }
      

return (
        <form>
        <button>{textButton.username}</button>
        <input type='text' name='username' 
        value={textButton.username}
        onChange={myChange}/>
      </form>
        );
}

export default App;
