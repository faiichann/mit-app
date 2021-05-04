import React, { useState } from "react"

const CustomButton(props) => {
    const [Propsnew,setProsnew] = useState( {
    border: string,
    color: string,
    children: React.ReactNode,
    height: string,
    radius: string,
    width: string
});
}


const Button: React.FC<Props> =({
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width
}) => {
    return (
        <button 
          onClick={onClick}
          style={{
             backgroundColor: color,
             border,
             borderRadius: radius,
             height,
             width
          }}
        >
        {children}
        </button>
      );
}

export default Button;