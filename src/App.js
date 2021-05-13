import "./App.css";
import Buttontest from './ButtonCom/ButtonComponent'
import CustomButton from './ButtonCom/CustomButton'

import ButtonBG from './ButtonCom/ButtonBG'


import { useState } from "react";

/*import View from './component/View'
import ButtonProper from './ButtonCom/ButtonProperties copy'
import PropChange from './ButtonCom/ButtonChange'
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
    <ButtonBG/>
    
    </>
  );
}

export default App;
