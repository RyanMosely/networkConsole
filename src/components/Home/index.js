import 'react'
import React, { useState, useEffect } from "react";

import "./style.css";
import Connection from "../Connections/connections";
import API from "../../utils/homeAPI";

let testTime = 0;

function Home() {
  
  const[delay, setDelay] = useState({time:2000})
  const [subflow1, setSubflow1] = useState({ IP: "", gatewayIP: "", name: "", proxyIP: "", status: "false", subflow: 1, throughputUp: 0,throughputDown: 0, latency: 0 });
  const [subflow2, setSubflow2] = useState({ IP: "", gatewayIP: "", name: "", proxyIP: "", status: "false", subflow: 2, throughputUp: 0,throughputDown: 0, latency: 0 });
  const [subflow3, setSubflow3] = useState({ IP: "", gatewayIP: "", name: "", proxyIP: "", status: "false", subflow: 3, throughputUp: 0,throughputDown: 0, latency: 0 });
  const [subflow4, setSubflow4] = useState({ IP: "", gatewayIP: "", name: "", proxyIP: "", status: "false", subflow: 4, throughputUp: 0,throughputDown: 0, latency: 0 });
  
  useEffect(() => {
    reloadWAN();
    
  }, [])

  useEffect(() => {
    let interval
    let mounted = true;
    if (testTime != 0){
      if(mounted){
    interval = setInterval(() => {
      
      updateConnectionData();
      
 
    }, delay.time)
  }
    return function cleanup() {
      mounted =false;
      clearInterval(interval);
      testTime = 0
      
    };
  }

  
  
  
  },[delay.time])
 

  function reloadWAN() {
    console.log("test")
    API.getAllWAN()
      .then((res) => {


        testTime = 1;

        if (res.regdata) {
          setSubflow1({ ...subflow1, IP: res.regdata[0].IP, gatewayIP: res.regdata[0].gatewayIP, name: res.regdata[0].name, proxyIP: res.regdata[0].proxyIP, status: res.regdata[0].status.toString(), subflow: res.regdata[0].subflow });
          setSubflow2({ ...subflow2, IP: res.regdata[1].IP, gatewayIP: res.regdata[1].gatewayIP, name: res.regdata[1].name, proxyIP: res.regdata[1].proxyIP, status: res.regdata[1].status.toString(), subflow: res.regdata[1].subflow });
          setSubflow3({ ...subflow3, IP: res.regdata[2].IP, gatewayIP: res.regdata[2].gatewayIP, name: res.regdata[2].name, proxyIP: res.regdata[2].proxyIP, status: res.regdata[2].status.toString(), subflow: res.regdata[2].subflow });
          setSubflow4({ ...subflow4, IP: res.regdata[3].IP, gatewayIP: res.regdata[3].gatewayIP, name: res.regdata[3].name, proxyIP: res.regdata[3].proxyIP, status: res.regdata[3].status.toString(), subflow: res.regdata[3].subflow });
        }
        
         setDelay({time:res.cDelay})
        console.log(delay.time)

      }
      )
  };
  function updateConnectionData() {
    API.getConnectionData()
      .then((res) => {
        console.log(res.connectionData.data);
        
        setSubflow1({...subflow1, throughputUp:res.connectionData.data[0].subFlowThrUp,throughputDown:res.connectionData.data[0].subFlowThrDown, latency:res.connectionData.data[0].subFlowLatency })
        setSubflow2({...subflow2, throughputUp:res.connectionData.data[1].subFlowThrUp,throughputDown:res.connectionData.data[1].subFlowThrDown, latency:res.connectionData.data[1].subFlowLatency })
        setSubflow3({...subflow3, throughputUp:res.connectionData.data[2].subFlowThrUp,throughputDown:res.connectionData.data[2].subFlowThrDown, latency:res.connectionData.data[2].subFlowLatency })
        setSubflow4({...subflow4, throughputUp:res.connectionData.data[3].subFlowThrUp,throughputDown:res.connectionData.data[3].subFlowThrDown, latency:res.connectionData.data[3].subFlowLatency })
        
      })
  }


  return (
    <div className="homeContainer">

      <Connection subflow1Connected={subflow1.status} subflow2Connected={subflow2.status} subflow3Connected={subflow3.status} subflow4Connected={subflow4.status} subflowName1={subflow1.name} subflowName2={subflow2.name} subflowName3={subflow3.name} subflowName4={subflow4.name} subflowLatency1={subflow1.latency} subflow1ThroughputUp={subflow1.throughputUp} subflow1ThroughputDown={subflow1.throughputDown} subflowLatency2={subflow2.latency} subflow2ThroughputUp={subflow2.throughputUp} subflow2ThroughputDown={subflow2.throughputDown} subflowLatency3={subflow3.latency} subflow3ThroughputUp={subflow3.throughputUp} subflow3ThroughputDown={subflow3.throughputDown} subflowLatency4={subflow4.latency} subflow4ThroughputUp={subflow4.throughputUp} subflow4ThroughputDown={subflow4.throughputDown} ></Connection>

    </div>
  );
}

export default Home;