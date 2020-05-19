import React, { useState, useEffect } from 'react';
// import Radio from '../Radio';
import { Header, Divider, Button, Checkbox} from 'semantic-ui-react';
import './style.css'
import API from "../../utils/API";

function Mode() {
    const [haipe,setHaipe]=useState({checked:"",label:""});    
    const [client,setClient]=useState({status:"",label:""});
    const [server,setServer]=useState({status:"",label:""});

    useEffect(() => {
        API.getHaipe()
        .then(res => {
            setHaipe({...haipe, 
                checked: res.status,
                label: (res.status===false) ? "Disabled" : "Enabled"
            });
            setClient({...client, 
                status: res.client})
            setServer({...server, 
                status: res.server})
        }).catch(err => console.log(err));
    }, []);

    function saveSettings(){
        API.setHaipe({
            "status": haipe.checked,
            "client": client.status,
            "server": server.status
        });
    }

    function toggleHaipe(){
        setHaipe((prevState) => {
            return ({
                checked: !prevState.checked,
                label: (prevState.label==="Disabled") ? "Enabled" : "Disabled"
            });
        });
    }

    function toggleClient(){
        setClient((prevState) => {
            return ({
                status: (prevState.status===true) ? false : true,
            });
        });
    } 

    function toggleServer(){
        setServer((prevState) => {
            return ({
                status: (prevState.status===true) ? false : true,
            });
        });
    } 

    return (
        <div>
            <Header as='h2'>Mode</Header>
            <Divider />
            <Header as='h3'>HAIPE</Header>
            <Checkbox toggle checked={haipe.checked} label={haipe.label} onClick={toggleHaipe}/>
            <br></br>
            <br></br>
            <Button disabled={client.status} className='button' attached="right" onClick={toggleClient}>Start Client</Button>
            <Button disabled={!client.status} className='button' attached="left" onClick={toggleClient}>Stop Client</Button>
            <br></br>
            <br></br>
            <Button disabled={server.status} className='button' attached="right" onClick={toggleServer}>Start Server</Button>
            <Button disabled={!server.status} className='button' attached="left" onClick={toggleServer}>Stop Server</Button>
            <br></br>
            <br></br>
            <Button className='button' attached="left" onClick={saveSettings}>Apply</Button>
         
        </div>
    )
}

export default Mode;