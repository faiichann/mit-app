import { useState } from "react";

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
      <button className="buttonDefault">{PropButton.nametext}</button>
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
    </div>
  );
}

export default Buttontest;
