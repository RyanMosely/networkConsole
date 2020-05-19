import React, { Component, useState, useEffect} from 'react'

//CUSTOM CSS
import "./style.css";
import { Row } from "../Grid";

//TOP SECTION NAVBAR
import Nav from "../Nav";

//MAIN CONTENT COMPONENTS
import Home from "../Home";
import AllConfigs from "../AllConfigs";
import Mode from "../Mode"
import UserSettings from "../UserSettings"
import DeviceSettings from "../DeviceSettings"
import Osiris from "../OsirisIP"
import LogOut from "../LogOut"
import Login from "../Login/login"


import ForwardConfigArea from "../ForwardConfigArea"
import ModemConfig from "../ModemConfig"
import NetworkConfig from "../NetworkConfigArea"

//BOOTSTRAP AND SEMANTIC
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Menu } from 'semantic-ui-react'

//SWITCH ROUTING
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useHistory
  } from "react-router-dom";
  
 
 
  

export default function MenuExampleHeadewrVertical() {
    
    const [, forceUpdate] = useState();
    const [authorized, setAuthorized] = useState();
    const [activeItem, setActiveItem] = useState("Home");
    
    const [activeItemDir, setactiveItemDir] = useState("/home");
    const [ready, setReady] = useState(false);
    

    const PrivateRoute = ({component: Component, ...rest}) => (
  
        <Route {...rest} render={(props)=>(
            authorized === true ? 
            <Component {...props}/>
            :<Redirect to = {{pathname:'./login',
        state:{from: props.location}}}/>
        )}/>
      )





      const handleItemClick = (event, name, dir)=>{
        //event.preventDefault();
            console.log(name)
        setActiveItem(name)
        setactiveItemDir(dir)
        
        
      }
      


    useEffect(()=>{
        console.log(activeItem)
        console.log(authorized)
        setReady(true);
        
    },[authorized, activeItem])

   
    

  

  const authenticate = {
      
    
    authenticate(cb){
        setAuthorized(true);
        setTimeout(cb, 100)
        
        
    },
    signout(cb) {
        setAuthorized(false);
        setTimeout (cb, 100)
    }
}



    return (
    <div>

    {/*//////////////////// BEGINNING OF NAVBAR ////////////////////*/}

        <Nav />
        <Container className="navContain">
            <Row>
                <Router>
                    
                    <Menu vertical>
                        <div>
                            <nav>
                                <Link to="/home">
                                    <Menu.Item className="homeLinkTwo homeLinkThree">
                                        <Menu.Menu className="homeArea">
                                            <Menu.Item
                                                name='Home'
                                                active={activeItem === 'Home'}
                                                onClick={(event)=>handleItemClick(event, 'Home')}
                                                className="homeLink"
                                                ><i class="fas fa-home"></i> Home
                                            </Menu.Item>
                                        </Menu.Menu>
                                    </Menu.Item>
                                </Link>
                                <Menu.Item>
                                    <Menu.Header>System Config</Menu.Header>
                                    <Menu.Menu>
                                        <Link to="/forwardconfig">
                                            <Menu.Item
                                            name='Forward Config'
                                            active={activeItem === 'Forward Config'}
                                            onClick={event => handleItemClick(event, 'Forward Config', '/forwardconfig')}
                                            ><i class="fas fa-list"></i> Forward Config</Menu.Item>
                                        </Link>
                                        <Link to="/modemconfig">
                                            <Menu.Item
                                                name='Modem Config'
                                                active={activeItem === 'Modem Config'}
                                                onClick={event => handleItemClick(event, 'Modem Config', '//modemconfig')}
                                            ><i class="fas fa-server"></i> Modem Config</Menu.Item>
                                        </Link>
                                        <Link to="/networkconfig">
                                            <Menu.Item
                                                name='Network Config'
                                                active={activeItem === 'Network Config'}
                                                onClick={event => handleItemClick(event, 'Network Config', '/networkconfig')}
                                            ><i class="fas fa-network-wired"></i> Network Config</Menu.Item>
                                        </Link>
                                        <Link to="/mode">
                                            <Menu.Item
                                                name='Mode'
                                                active={activeItem === 'Mode'}
                                                onClick={event => handleItemClick(event, 'Mode', '/mode')}
                                            ><i class="fas fa-check-circle"></i>  Mode</Menu.Item>
                                        </Link>
                                    </Menu.Menu>
                                </Menu.Item>
                                <Menu.Item>
                                    <Menu.Header>Admin</Menu.Header>
                                    <Menu.Menu>
                                        <Link to="/usersettings">
                                            <Menu.Item
                                                name='Username and Password'
                                                active={activeItem === 'Username and Password'}
                                                onClick={event => handleItemClick(event, 'Username and Password', '/usersettings')}
                                                ><i class="fas fa-user"></i>User Settings
                                            </Menu.Item>
                                        </Link>
                                        <Link to="/devicesettings">
                                            <Menu.Item
                                                name='Change Device Settings'
                                                active={activeItem === 'Change Device Settings'}
                                                onClick={event => handleItemClick(event, 'Change Device Settings', '/devicesettings')}
                                                ><i class="fas fa-cog"></i> Osiris IP
                                            </Menu.Item>
                                        </Link>
                                    </Menu.Menu>
                                </Menu.Item>
                                <Link to="/logout">
                                    <Menu.Item className="homeLinkTwo logOutContainer">
                                        <Menu.Menu>
                                            <Menu.Item
                                                name='Log Out'
                                                active={activeItem === 'Log Out'}
                                                onClick={event => handleItemClick(event,"" ,'/logout')}
                                                className="homeLink logOut">
                                                <i class="fas fa-sign-out-alt"></i> Log Out
                                            </Menu.Item>
                                        </Menu.Menu>
                                    </Menu.Item>
                                </Link>
                            </nav>
                        </div>
                    </Menu>
                    {/* </Col> */}
                    {/*//////////////////// END OF NAVBAR ////////////////////*/}
                    {/*////////// v PUT COMPONENTS HERE v ////////// */}
                    <Col>
                        <Switch>      
                            <Redirect exact from="/" to="/home" />
                            <Route path="/home" component = {Home}>
                                
                                {/*COMPONENT*/}
                            </Route>
                            <Route path="/login" render={(props)=> <Login {...props} authenticate={authenticate} data = {activeItemDir}/>}/>
                                {/*COMPONENT*/}
                            
                            <PrivateRoute path="/forwardconfig" component = {ForwardConfigArea}/>
                                {/*COMPONENT*/}
                            
                            <PrivateRoute path="/modemconfig" component = {ModemConfig }/>
                                {/*COMPONENT*/}
                            
                            <PrivateRoute path="/networkconfig" component = {NetworkConfig }/>
                                {/*COMPONENT*/}
                            
                            <PrivateRoute path="/mode" component = {Mode }/>
                                {/*COMPONENT*/}
                            
                            <PrivateRoute path="/usersettings" component = {UserSettings }/>
                                {/*COMPONENT*/}
                            
                            <PrivateRoute path="/devicesettings" component = {DeviceSettings }/>
                                {/*COMPONENT*/}
                            
                            {/* Adding Login Path */}
                            
                            <Route path="/logout" component = {LogOut }/>
                                {/*COMPONENT*/}
                            
                        </Switch>   
                        </Col>

                </Router>
            </Row>
        </Container>
    </div>

    )
  
}

