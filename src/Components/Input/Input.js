import React from "react";
import "./Input.css";

function Input(props){
  const {size,text,...rest}=props;
  console.log("Props of Input ",props);

  return(
    <input type="text" className={`input ${size}`} value={`${text}`} />
  )

}

export default Input;
