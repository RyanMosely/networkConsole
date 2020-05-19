import React,{useState, useEffect} from "react";
import { Container, Segment,Button,Grid } from 'semantic-ui-react';
import SubFlow from "../SubFlow";
import API from "../../utils/API";
import "./style.css";


function NetworkConfig(){
    //let arr=new Array(5);
    let [arr,setArr]=useState(new Array(5));

    const [reset,setReset]=useState({reset:false});
    const [error,setError]=useState({err1:false,err2:false,err3:false,err4:false});
    function Apply(event){
        API.setIPs(arr);
    }
    function ResetFields(){
        setReset({reset:true});
    }
    let isEnabled=(error.err1|| error.err2|| error.err3 || error.err4);
    useEffect(()=>{
       console.log("1:"+error.err1+","+"2:"+error.err2+","+"3:"+error.err3+","+"4:"+error.err4);
       isEnabled= (error.err1 || error.err2 || error.err3 || error.err4);
    },[isEnabled])
    
    function changeError(value,i){
        setError({...error,["err"+i]:value});
        isEnabled=(error.err1|| error.err2|| error.err3 ||error.err4);
        console.log(isEnabled);

    }

    function changeArrayElement(i,data){
        arr[i]=data;
    }
    return(
        <Container className="container">
          <Grid columns={2}> 
            <Grid.Column>
               <Segment className="segment" attached='top'  ><SubFlow i="1" arr={arr} reset={reset} sError={changeError} f={changeArrayElement}/></Segment>
               <Segment  className="segment" attached  ><SubFlow i="3" arr={arr} reset={reset}  sError={changeError} f={changeArrayElement}/></Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment attached='top' className="segment" ><SubFlow i="2" arr={arr} reset={reset}  sError={changeError} f={changeArrayElement}/></Segment>
                <Segment attached className="segment" ><SubFlow i="4" arr={arr} reset={reset}  sError={changeError} f={changeArrayElement} /></Segment>
            </Grid.Column>
            <Grid.Column>
                <Button  className="button" attached="left"  onClick={Apply} disabled={!isEnabled?false:true}>Apply</Button>
                <Button className="button" attached="right"  onClick={ResetFields}>Reset</Button>
            </Grid.Column>
           </Grid>   
        </Container>    
    );
}

export default NetworkConfig; 