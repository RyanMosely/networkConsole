import React, {useState, useEffect} from "react";
import "./style.css";
import { Container, Button, Divider} from 'semantic-ui-react';
import TextField from "../TextField"
//import API from "../../utils/API"
import Col from 'react-bootstrap/Col';
import { Row } from "../Grid";

import API from "../../utils/adminAPI";


const DividerExampleDivider = () => <Divider />


function DeviceSettings() {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [changeUsername, setChangeUsername] = useState('');
  const [changePassword, setChangePassword] = useState('');

  
 

 
   API.test()
   .then((res) => {
    console.log(res.data);
    setPassword(res.data.administrator.password);
    setUsername(res.data.administrator.username);

    
   })
  

   console.log(changeUsername)

   function changeUsernameFunc(){

    API.usernameChange(changeUsername)
    .then((res) => {
      console.log(res)
    })

   }
   
   function changePasswordFunc(){

    API.passwordChange(changePassword)
    .then((res) => {
      console.log(res.data.administrator.password)
    })

   }  
   
   const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Name ${changeUsername}`)
}

   console.log(changeUsername)
   console.log(password)
    



  return (
  
    <div className="userContatiner userContent">
 <div className="userSettingsTitle userContent">User Settings</div>

 <Divider />
       
 <div className="userRows"><Row>
   <span className="userLabel userRowOne">Username Change:</span>
    <TextField className="deviceContent" defaultValue={username} type="text" onChange={e => setChangeUsername(e.target.value)}/>
    <Button className="button userButton" attached="right" onClick={changeUsernameFunc}>Submit</Button>
   </Row>
  </div>


 <form onSubmit={handleSubmit}>
   <div className="userRows"><Row> <span className="userLabel userRowTwo">Password Change:</span>
    <TextField className="deviceContent" type="text" onChange={e => setChangePassword(e.target.value)} />
    <Button className="button userButton" attached="right" onClick={changePasswordFunc}>Submit</Button>
    </Row></div>
   </form>
 
 <Divider />


 



        </div>
     
  );
}

export default DeviceSettings;