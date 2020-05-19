import React,{useState, useEffect} from "react";
import {Card} from 'semantic-ui-react';
import API from "../../utils/API";

function ModemCard({wanInterface}){

    const [gatewayIP,setGatewayIP]=useState({
        interface:"",
        ip:""
    });

    useEffect(() => {
        API.getIPs(wanInterface)
        .then(res => {
            // arr[i]=res;
            //console.log(res);
            setGatewayIP({...gatewayIP, ip: res.gatewayIP, interface: wanInterface})
            // return res.gatewayIP;
        }).catch(err => console.log(err));
    },[]);

    return(
        <Card
        href={"http://" + gatewayIP.ip}
        header={"Terminal " + gatewayIP.interface}
        meta={"SubFlow "  + gatewayIP.interface}
        description={gatewayIP.ip}
        target="_blank"
        />
    );
}

export default ModemCard;