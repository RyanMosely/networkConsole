import React, { useState } from "react";
import "./style.css";
import { Container, Button, Divider} from 'semantic-ui-react';
import TextField from "../TextField"
import API from "../../utils/adminAPI";

import Col from 'react-bootstrap/Col';
import { Row } from "../Grid";
import { testNameToKey } from "jest-snapshot/build/utils";
import { AST_UnaryPostfix } from "terser";

const axios = require('axios');


function DeviceSettings() {
  const [osirisIP, setOsirisIP] = useState('');
  const [dataRefresh, setDataRefresh] = useState('');

  const [changeOsirisIP, setChangeOsirisIP] = useState('');
  const [changeDataRefresh, setChangeDataRefresh] = useState('');
  const [username, setUsername] = useState('');
 

 

   API.osirisTest()
   .then((res) => {
    console.log(res.data);
    
    setOsirisIP(res.data)
    // console.log(osirisIP)
  
   })

   API.dataTest()
   .then((res) => {
    //console.log(res.data);
  
    setDataRefresh(res.data)
    console.log(dataRefresh)
   
   })

   
   
   function osirisFunc(){

    API.osirisChange(changeOsirisIP)
    .then((res) => {
      console.log(res)
    })

   }

   function dataRefreshFunc(){

    API.dataChange(parseInt(changeDataRefresh))
    .then((res) => {
      console.log(res)
    })

   }
  
    
    

  return (
  
    <div className="deviceContatiner deviceContent">
 <div className="deviceSettingsTitle deviceContent">Intelio IP</div>

 <Divider />
       
 <div className="ipRows"><Row><span className="ipLabel rowOne">Intelio IP:</span> 
 <TextField className="deviceContent" defaultValue= { osirisIP } onChange={e => setChangeOsirisIP(e.target.value)} />
 <Button className="button buttonOne deviceButton" onClick={ osirisFunc } attached="right">Submit</Button></Row></div>



 <div className="ipRows"><Row><span className="ipLabel rowTwo">Data Refresh <br></br> Rate (ms):  </span> 
 <TextField className="deviceContent" defaultValue={ dataRefresh } onChange={e => setChangeDataRefresh(e.target.value)}/>
 <Button className="button buttonOne deviceButton" onClick={ dataRefreshFunc }  attached="right">Submit</Button></Row></div>

 <Divider />




 





        </div>
     
  );
}

export default DeviceSettings;