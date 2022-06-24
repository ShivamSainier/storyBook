import Input from "./Input";
import React from "react";


export default{
  title:"form/Input",
  component:Input
};

const Small=()=><Input size="small" placeholder="Small Input" />
const Medium=()=><Input size="medium" placeholder="Medium Input" />
const Large=()=><Input size="large" placeholder="Large Input" />

export {Small,Medium,Large}
