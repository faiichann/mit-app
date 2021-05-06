import "./App.css";
import Buttontest from './ButtonCom/ButtonComponent'
import CustomButton from './ButtonCom/CustomButton'
import ButtonProperties from './ButtonCom/ButtonProperties'

/*import View from './component/View'
import history from  './history'*/

function App() {

/*{<button onClick={() => history.push('/Dev')}>Developer</button>}
        {<Test1 name="faii"/>}*/
  return (
    <>
    <Buttontest/>
    <CustomButton nametext="testbutton"/>
    <ButtonProperties/>
    </>
  );
}

export default App;
