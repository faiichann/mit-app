import "./App.css";
import Buttontest from './ButtonCom/ButtonComponent'
import CustomButton from './ButtonCom/CustomButton'
import ButtonProperties from './ButtonCom/ButtonProperties'
import { useState } from "react";

/*import View from './component/View'
import history from  './history'*/

function App() {
  const [buttonDe, setButtonDe] = useState(
    {textInput:"textButton01",colorBG:"#e7e7e7",fontSize:"14px",heightBut:"auto",widthBut:"auto"}
  );



/*{<button onClick={() => history.push('/Dev')}>Developer</button>}
        {<Test1 name="faii"/>}*/
  return (
    <>
    <Buttontest/>
    <CustomButton nametext="testbutton"/>
    <ButtonProperties
    textInput={buttonDe.textInput}
    colorBG={buttonDe.colorBG} />
    </>
  );
}

export default App;
