import { useState } from "react";
import reactCSS from "reactcss";
import { ChromePicker } from "react-color";
import { render } from "@testing-library/react";

function ButtonBG(params) {
  const [background, setBackground] = useState(
    {h: 240,s: 0,l: 91,a: 1,});
  const [opacityBg, setOpacityBg] = useState("1");
  const [colorPreview, setColorPreview] = useState("#e8e8e8");

  const [height, setHeight] = useState("auto");
  const [width, setWidth] = useState("auto");
  const [borderRadius, setBorderRadius] = useState("4px");

  const handleChangeComplete = (data) => {
    {
      setColorPreview(data.hex);
      setBackground(data.hsl);
      setOpacityBg(data.hsl.a);
    }
  };

  const myChangeRadius = (e) => {
    const selectedRadius = e.target.value;
    setBorderRadius(selectedRadius);
  };
  const myChangeHeight = (e) => {
    const selectedHeight = e.target.value;
    setHeight(selectedHeight);
  };
  const myChangeWidth = (e) => {
    const selectedWidth = e.target.value;
    setWidth(selectedWidth);
  };

  const previewStyle = {
    background: colorPreview,
    opacity: opacityBg,
    padding: "10px 10px",
    height: height,
    width:width,
    borderRadius:borderRadius,
  };
  
  console.log(background);

  return (
    <div className="q">
      <button style={previewStyle}>Text for Button1</button>
      <p>Color Preview</p>
      <ChromePicker color={background} onChange={handleChangeComplete}/>
      Height : <input value={height} onChange={myChangeHeight}/>
      <br />
      Width : <input value={width} onChange={myChangeWidth}/>
      <br />
      Shape: 
      <select value={borderRadius} onChange={myChangeRadius}>
        <option value="4px">default</option>
        <option value="50px">rounded</option>
        <option value="0px">rectangular</option>
        <option value="100%">oval</option>
      </select>
      <br />
    </div>
  );
}
export default ButtonBG;
