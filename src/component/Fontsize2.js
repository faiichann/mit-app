import React, { useState } from "react";

function Fontsize2() {
  const [size, setSize] = useState(12);
  const big = { padding: "10px", margin: "2px" };
  return (
      <div>
    <div style={{ fontSize: size }}>

      <button style={big} onClick={() => setSize(size + 2)}>
        A+ Font Size: {size + 2}
      </button>
      <button style={big} onClick={() => setSize(size - 2)}>
        A- Font Size: {size - 2}
      </button>
    </div>

    <h2 style={{ fontSize: size }}>Hello Test Font Size Changer</h2>
    </div>
  );
}

export default Fontsize2 