import React,{useState,useEffect} from "react";
import Radio from "../Radio";
import TextField from "../TextField";
import API from "../../utils/API"
import { Header, Container, Form } from 'semantic-ui-react'
import "./style.css"

function SubFlow({i,arr,reset,sError,f}){
    const [radio,setRadio]=useState({
        status:false,//checked
        label:"disabled"
    
     });
     const [IPSettings,setIPSettings]=useState({name:"",gatewayIP:"",IP:"",proxyIP:""});//connectionName
     const [error,setError]=useState({nameError:"",gatewayIPError:"",IPError:"",proxyIPError:""});

     useEffect(() => {
        loadIPs();
        
       
      }, [])

      useEffect(()=>{
          //arr[i]={name:IPSettings.name,gatewayIP:IPSettings.gatewayIP,IP:IPSettings.IP,proxyIP:IPSettings.proxyIP,status:radio.status}//connectionName,status
          f(i,{name:IPSettings.name,gatewayIP:IPSettings.gatewayIP,IP:IPSettings.IP,proxyIP:IPSettings.proxyIP,status:radio.status});
      },[IPSettings,radio.status]);

      useEffect(()=>{
       if(reset&&(radio.status)){   
         setIPSettings({...IPSettings,name:"",gatewayIP:"",IP:"",proxyIP:""});  
         reset=false;
       } 
       else{
        setIPSettings({...IPSettings});
       } 
    },[reset]);

    useEffect(()=>{
      if(error.nameError===""&&error.gatewayIPError===""&&error.IPError===""&&error.proxyIPError===""){
        sError(false,i);
      }
      else{
        sError(true,i);
      }
    },[error]);
     // Loads all IP's and set them to IPSettingd
     function loadIPs() {
       API.getIPs(i)
        .then(res => {
            //arr[i]=res;
            f(i,res);
           // console.log(res);
          if (res){
            setIPSettings({...IPSettings,name:res.name,gatewayIP:res.gatewayIP,IP:res.IP,proxyIP:res.proxyIP});
            (res.status)?setRadio({status:true,label:"enabled"}):setRadio({status:false,label:"disabled"});
            
          } 
        } 
        )
        .catch(err => console.log(err));
    };
     
    function toggle(){ setRadio((prevState) => {return ({status: !prevState.status,
                        label: (prevState.label==="disabled")? "enabled"
                        : "disabled"
    });});} 

    function handleInputChange(event){

        const { name, value } = event.target;
        //console.log("name:"+value);
        if (name==="name"){
           // if (isValidName(value)){
              console.log("Name is valid");
               
          
            //}
        }
        else{
          if (isValidIP(name,value)){
           console.log("IP is valid")
          
          }
          
        }
       
        setIPSettings({...IPSettings, [name]: value});
       
    }
    function isValidIP(name,value){
      //IP address validation
      //without port: const regxIP=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      //with port
      const regxIP=/^((?:2[0-5]{2}|1\d{2}|[1-9]\d|[1-9])\.(?:(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d)\.){2}(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d))(:(\d|[1-9]\d|[1-9]\d{2,3}|[1-5]\d{4}|6[0-4]\d{3}|654\d{2}|655[0-2]\d|6553[0-5]))?$/;
      
      if(regxIP.test(value)){
          setError({...error,[name+"Error"]:""}); 
          return true

      }
      const temp=name+"Error";
      setError({...error,[temp]:"Invalid IP"});
      return false;
      
      
    }

                   
    
    return (
        <Container className="containerm" >
        <Header as='h2' style={{ paddingLeft: '0.7rem' }}>SubFlow {i}</Header>
        <Radio status={radio.status} label={radio.label} toggle={toggle}/>
        <Form>
        <TextField label="Connection Name" name="name" onChange={handleInputChange} disabled={radio.status?false:true}
       className="inp" fluid value={IPSettings.name} />  
       <span style={{color: "red"}}>{error.nameError}</span>
        <TextField label="Gateway IP Address" name="gatewayIP" onChange={handleInputChange} disabled={radio.status?false:true} className="inp" fluid value={IPSettings.gatewayIP}  />
        <span style={{color: "red"}}>{error.gatewayIPError}</span>
        <TextField label="IP Address" name="IP" onChange={handleInputChange} disabled={radio.status?false:true} className="inp" fluid value={IPSettings.IP} />
        <span style={{color: "red"}}>{error.IPError}</span>
        <TextField label="Proxy IP Address" name="proxyIP" onChange={handleInputChange} disabled={radio.status?false:true} className="inp"  fluid value={IPSettings.proxyIP} />
        <span style={{color: "red"}}>{error.proxyIPError}</span>
        </Form>
       </Container> 
    );

}

export default SubFlow;

//error={{ content: 'Please enter valid IP', pointing: 'below' }}