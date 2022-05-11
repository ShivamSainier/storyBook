import React from "react";
import Button from "./Button";

export default{
  title:"Button",
  component:Button
}

const primary=()=><Button variant="primary">Primary</Button>
const secondary=()=><Button variant="secondary">Secondary</Button>
const danger=()=><Button variant="danger">Danger</Button>
const success=()=><Button variant="success">Success</Button>

export {primary,secondary,danger,success}
