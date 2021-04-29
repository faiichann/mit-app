import "./App.css";
import { useState } from "react";

/*import View from './component/View'
import history from  './history'*/

function App() {
  const [PropButton, setPropButton] = useState({
    nametext: "Text for Button1",
    textAlign: "center",
    backgroudColor: '#e7e7e7'
  });

  const myChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setPropButton({ [nam]: val });
  };

  const myChangeCSS =(e) => {
    return<>
    style={{}}
    </>
  };


  return (
    <div>
      <button className="buttonDefault">{PropButton.nametext}</button>
      <form>
        Text: 
        <input
          type="text"
          name="nametext"
          value={PropButton.nametext}
          onChange={myChange}
        />
        <br/>
        Text-Align:
        <input
        type="text"
        name="textAlign"
        value={PropButton.textAlign}
        onChange={myChange}
        />
        <br/>
        <input
        type="color"
        name="backgroudColor"
        value={PropButton.backgroudColor}
        onChange={myChange}
        />
      </form>
    </div>
  );
}

export default App;
