import * as React from "react";
import ColorPicker from "material-ui-color-picker";

function Fontcolor2() {
  return (
    <div className="App">
      <ColorPicker
        name="color"
        defaultValue="#000"
        // value={this.state.color} - for controlled component
        onChange={color => console.log(color)}
      />
      <h2 className="HHH" onChange={color => console.log(color)} name="color" >Hello</h2>
    </div>
  );
}

export default Fontcolor2