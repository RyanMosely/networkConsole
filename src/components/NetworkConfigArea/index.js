import React from "react";
import "./style.css";
import  NetworkConf  from "../NetworkConfig";
import { Header,Divider } from 'semantic-ui-react';


function NetworkConfig() {
  return (
    <div className="networkConfigContainer">
    <Header as='h1'>Network Configuration</Header>
    <Divider />
    <NetworkConf/>
    </div>
   
       
  );
}

export default NetworkConfig;