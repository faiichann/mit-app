import React from 'react'

const ButtonProperties = ({textInput,colorBG,fontSize,heightBut,widthBut}) => {
    return<>
    <form>
        Text:
    <input
          type="text"
          name="nametext"
          value={textInput}
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
    </form>
    </>
}
export default ButtonProperties