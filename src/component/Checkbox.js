
import React, {component} from 'react';
import { Component } from 'react';

class Checkbox extends Component{
   stage = {
      isCitizen : false,
      isOver21 : false
   };
   
   onChange = e =>{
     if(e.target.type === "checkbox")
          this.setState({[e.target.name] : e.target.checked});
     else
          this.setState({[e.target.name] : e.target.value});
   }

   render(){
     const {isCitizen,isOver21} = this.stage;
     return(
       <form>
          <h1> Are you a Citizen : {isCitizen ? "Yes" : "No"}</h1>
          <h1> Are you over 21 : {isOver21 ? "Yes" : "No"}</h1>
          <label>
              Are you a Citizen ?
              <input type ="checkbox"
                      checked={isCitizen}
                      name="isCitizen"
                      onChange={this.onChange}/>
          </label>        
          <br/>
          <label>
            Are you over 21 ?
            <input type="checkbox"
                    checked = {isOver21}
                    name = "isOver21"
                    onChange={this.onChange}/>
           
            </label>  
            </form> 
    
     )
   }
}
export default Checkbox