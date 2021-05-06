import React, { useState } from "react"

/*const CustomButton = (props) => {
    const [Propsnew,setProsnew] = useState( {
    border: "none",
    color: "#e7e7e7",
    nametext: "Button",
    height: " ",
    radius: "  ",
    width: " "
});*/

const CustomButton = (props) => {

/*const openstyle  = {
    backgroundColor: "#e7e7e7",
    border: React.ReactNode,
    borderRadius: "4px",
    height: "auto+100px",
    width: "auto+10px",
    
}*/


return <>
    <button /*style={openstyle}*/>
        {props.nametext}
        </button>
    </>

}


/*const Button: React.FC<Props> =({
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width
}) => {
    return (
        
      );
}*/

export default CustomButton;