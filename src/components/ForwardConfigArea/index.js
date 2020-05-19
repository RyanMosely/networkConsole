import React from "react";
import "./style.css";
import  ForwardConfig  from "../ForwardConfig";
import { Header,Divider } from 'semantic-ui-react';

function ForwardConfigArea() {
  return (
    <div>
     <Header as='h1'>Forward Configuration</Header>
     <Divider/>
     <ForwardConfig/>  
    </div>
  );
}

export default ForwardConfig;