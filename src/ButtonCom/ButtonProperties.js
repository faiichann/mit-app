import React from 'react'

const ButtonProperties = ({textInput,onChaneinput,colorBG,fontSize,heightBut,widthBut}) => {
    return<>
    
        Text:
    <input
          type="text"
          name="textInput"
          value={textInput}
          onChange={onChaneinput}
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
export default ButtonProperties