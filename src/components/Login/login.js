import React, { useState, useEffect } from "react";
import "./login.css";
import { Container, Button, Divider } from 'semantic-ui-react';
import TextField from "../TextField"
//import API from "../../utils/API"
import Col from 'react-bootstrap/Col';
import { Row } from "../Grid";
import {withRouter} from 'react-router-dom';
import API from "../../utils/adminAPI";





function Login(props) {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  //const [authenticated, setAuthenticated] = useState(false);
  
  function attemptLogin(){
    API.login({username:username, password:password})
    .then((res) => {
      if(res.data === "success"){
        props.authenticate.authenticate()
        props.history.push(props.data);
      }else if(res.data === "userError"){
        console.log("There is no username by this ID")
      }else if(res.data === "passError"){
        console.log("You have entered the incorrect password")
      }
      //setPassword(res.data.administrator.password);
      //setUsername(res.data.administrator.username);
  
  
    })
  
  }



  const handleSubmit = (evt) => {
    evt.preventDefault();
   
  }





  return (

    <div className="userContatiner userContent">
      <div className="userSettingsTitle userContent">Login</div>

      <Divider />

      <div className="userRows"><Row>
        <span className="userLabel userRowOne">Username:</span>
        <TextField className="deviceContent" defaultValue={username} type="text" onChange={e => setUsername(e.target.value)} />
      </Row>
      </div>

      <div className="userRows"><Row>
        <span className="userLabel userRowTwo">Password:</span>
        <TextField className="deviceContent" type="password" onChange={e => setPassword(e.target.value)} />

      </Row></div>



      <form onSubmit={handleSubmit}>
        <Button className="button userButton" attached="right" onClick={attemptLogin}>Submit</Button>
      </form>

      <Divider />






    </div>

  );
}

export default withRouter(Login);