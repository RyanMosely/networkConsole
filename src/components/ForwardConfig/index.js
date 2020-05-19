
import React,{useState,useEffect,prevState} from "react";
import { Container,Button} from 'semantic-ui-react';
import "./style.css";
import Label from "../Label";
import TextArea from "../TextArea";
import TextField from "../TextField";
import API from "../../utils/API.js"
import { isNumber } from "util";
import { isFlowBaseAnnotation } from "@babel/types";

function ForwardConfig(){
  let [data,setData]=useState([]);
  const [userPort,setUserPort]=useState({"port":""});
  const [error,setError]=useState('');

  useEffect(() => {
     loadForwardConfig();
  }, [])

function loadForwardConfig() {
  API.getForwardConfig()
   .then(res => {
       //write consecutive ports as ranges
       let data2=res.config;
       console.log(data2.length);
       let rslt=[];
       let low=data2[0];
       let high=data2[0];
       for (let i=1;i<data2.length;i++) {
          if (data2[i]===high+1){
              high=data2[i];
          }
          else{
            if(low!==high){
               rslt.push(low+"-"+high);
            }
            else{
              rslt.push(low);
            }   
            low=data2[i];
            high=data2[i];
            console.log("Hrrrr"+rslt);
          }
        
       }
       if (low!==high){
        rslt.push(low+"-"+high);
       }
       else{
         rslt.push(low);
       }
       
       //setData(data=>[...data,...res.config]);
       setData(data=>[...data,...rslt]);
      
   } 
   )
   .catch(err => console.log(err));
};

const handleInputChange=(event)=>{
  const {name,value}=event.target;
  setUserPort({...userPort,[name]:value}) 
  setError("");
 
}
function handleNew(){
  if (validPorts()){
    console.log("New:"+userPort.port);
    API.setForwardConfig(false,userPort.port).then(result=>window.location.reload(false));

  }  
  else{
    console.log(error);
  }
}
function handleAppend(){
  if (validPorts()){
   console.log("Append:"+userPort.port);
   API.setForwardConfig(true,userPort.port).then(result=>window.location.reload(false)); 
  } 
  else{
    console.log(error);
  }
}
function handleReset(){
    API.setForwardConfig(false,[]).then(result=>window.location.reload(false)); 
}
//ports should be numbers seperated by commas or number ranges designated by - and should be between 1-65535
function validPorts(){
  var isnum =  /^\d+$/;
  const prts=userPort.port.split(",")
  
  for (let i=0;i<prts.length;i++){
    
  //If not number
  
    if (!isnum.test(prts[i])){
      //is a range
      if (prts[i].indexOf("-")!==-1){
        const range=prts[i].split("-");
        //range is not a number or lower range is bigger than upper range
        if(!isnum.test(range[0])||!isnum.test(range[1])||(parseInt(range[0])>parseInt(range[1]))){
          console.log(isnum.test(range[0]));
          setError("Invalid Range of Ports");
          return false;
        }
      }
      else{
        setError("A port should be of a number type!!");
        return false;
      }
    }
    else{
      //is not between 1 and 65535
      if ((1>parseInt(prts[i])||parseInt(prts[i])>65535)){
        setError("Ports have to be in the range 1-65535");
          return false;
      }
    }
  }
  setError("");
  return true;
}

return ( 
    <Container className ="container forwardContainer">
       
        <Label message="Current List Of Ports:"/>
        <TextArea readOnly style={{ marginBottom: '2em' }} value={data}/>
        
        <Label message="Add Ports:"/>
        <TextField  style={{ marginBottom: '1em' }} onChange={handleInputChange} value={userPort.port} name="port" type="text"/>
        <span style={{color: "red", marginTop:"1em"}}>{error}</span><br/><br/>
        <Button  className="button" attached="left" onClick={handleNew} >New</Button>
        <Button className="button" attached="right" onClick={handleAppend}>Append</Button>
        <Button className="button" attached="right" onClick={handleReset}>Reset</Button>
       
    </Container>
   );
  }   

  export default ForwardConfig;
