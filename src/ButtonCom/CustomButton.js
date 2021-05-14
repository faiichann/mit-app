import React, { useState } from "react"

const CustomButton = (props) => {


return <>
    <button style={props.previewStyle}>
        {props.nametext}
        </button>
    </>

}

export default CustomButton;