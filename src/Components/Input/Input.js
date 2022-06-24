import React from "react";
import "./Input.css";

function Input(props){
  const {size="medium",text,...rest}=props;
  console.log("Props of Input ",props);

  return(
    <input type="text" className={`input ${size}`} {...rest} />
  )
}

export default Input;
