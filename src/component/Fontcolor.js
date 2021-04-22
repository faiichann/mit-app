import React, { useState } from 'react'  
import { ChromePicker } from 'react-color'

function Fontcolor () {
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)
    
    return (
        <div>
            <button onclick={() =>  setShowColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker ? ' Close color Picker' : 'Pick Color'}
                </button>
                {showColorPicker && (
                    <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>
                    )}
            
            <h2>This is your Color pick {color}</h2>
        </div>
    )
}

export default Fontcolor