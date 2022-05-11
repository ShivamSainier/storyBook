import Input from "./Input";
import React from "react";


export default{
  title:"Input",
  component:Input
};

const small=()=><Input size="small" text="Small Input" />
const medium=()=><Input size="medium" text="Medium Input" />
const large=()=><Input size="large" text="Large Input" />

export {small,medium,large}
