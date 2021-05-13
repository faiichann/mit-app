import React from 'react'
import {useState} from "react"
import ButtonBG from './ButtonBG';

function ButtonProper () {
    let [style, setStyle] = useState({
        buttonColor: ' ',
        buttonHei: '50px',
        buttonWid: '100px'
    });
    
    return<>
    
        Text:
    <input
          type="text"
          name="textInput"
          value={formData['buttonName']}
          onChange={}
        />
        <br /> 
        backgroundColor:
        <input 
        type="color"
        name="colorBG"
        value={colorBG}
        />
        <br/>
        fontSize:
        <input
        type="text"
        name="fontSize"
        value={fontSize}/>
        <br/>
        Height:
        <input
        type="text"
        name="heightBut"
        value={heightBut}/>
        <br/>
        Width:
        <input
        type="text"
        name="widthBut"
        value={widthBut}/>
        <br/>
    
    </>
}  
export default ButtonProper;