import React from "react";
import "./Button.css"

function Button(props){
  const {variant,children,...rest}=props
  console.log("props of Button",variant);
  return(
  <button className={`button secondary {...rest}`}>{children}</button>
  )
}

export default Button;
