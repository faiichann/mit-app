import { useState } from "react";
import CustomButton from "./CustomButton";

function Buttontest() {
  const [PropButton, setPropButton] = useState({
    nametext: "Text for Button1"
  });

  const myChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setPropButton({ [nam]: val });
  };

  return (
    <div>
      <form>
        Text:
        <input
          type="text"
          name="nametext"
          value={PropButton.nametext}
          onChange={myChange}
        />
        <br />
      </form>
      <button className="buttonDefault">{PropButton.nametext}</button>
    </div>
  );
}

export default Buttontest;
