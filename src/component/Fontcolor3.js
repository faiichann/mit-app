import React, { useState } from "react";
import { ChromePicker } from "react-color";

function Fontcolor3() {
  const [background, setBackground] = useState({
    h: 250,
    s: 0,
    l: 0.2,
    a: 1
  });
  const [opacityBg, setOpacityBg] = useState("1");
  const [colorPreview, setColorPreview] = useState("#333333");

  const handleChangeComplete = data => {
    if (data.hsl !== background) {
      setColorPreview(data.hex);
      setBackground(data.hsl);
      setOpacityBg(data.hsl.a);
    }
  };

  const previewStyle = {
    background: colorPreview,
    opacity: opacityBg,
    width: "50px",
    height: "50px"
  };
  const previewfont = {
    color: colorPreview,
  };

  console.log(background);

  return (
    <div className="q">
      <ChromePicker color={background} onChange={handleChangeComplete} />

      <br />
      <p>Color Preview</p>
      <div style={previewStyle} />
      <h2 style={previewfont}>Hello pls</h2>
    </div>
  );
}

export default Fontcolor3