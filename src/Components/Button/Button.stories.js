import React from "react";
import Button from "./Button";
import Center from "../Center/Center"

export default{
  title:"form/Button",
  component:Button,
  decorators:[story=><Center>{story()}</Center>]
}

const Primary=()=><Center><Button variant="primary" >Primary</Button></Center>
const Secondary=()=><Button variant="secondary">Secondary</Button>
const Danger=()=><Button variant="danger">Danger</Button>
const Success=()=><Button variant="success">Success</Button>

export {Primary,Secondary,Danger,Success}
