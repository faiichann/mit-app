import React from 'react'
import {ChromePicker} from "react-color";
import ButtonProperties from './ButtonProperties'

import { useState } from "react";

function PropChange(params) {
    const [buttonDe, setButtonDe] = useState({
        textInput: "Text for Button1",
    });

    const myChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        setButtonDe({[nam]:val});
    };

    return(
        <>
        <ButtonProperties
        textInput={buttonDe.textInput}
        onChangeinput={myChange}
        /*colorBG={buttonDe.colorBG}**/ />
        </>
    );
}

export default PropChange;
