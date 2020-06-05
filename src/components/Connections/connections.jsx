import React, {Component} from 'react';

import "./connections.scss";
import ConnectionPoint from "../ConnectionPoint/connectionPoint";

import LeftLine from '../left_line/leftLine';
import LeftMidLine from '../leftmid_line/leftmid_Line';
import RightMidLine from '../rightmid_line/rightmid_Line';
import RightLine from '../right_line/rightLine';

export default class Connection extends Component{



    render(){
    return(
        <div id = "connections">
        <div id = "connectionContainter">
        <div id = "subflow1_IP" className = {this.props.subflow1Connected}>
           <div id = "IP1" className = "IP" ><p>{this.props.subflowName1}</p></div>
           
           </div>
           <div id = "subflow2_IP" className = {this.props.subflow2Connected}>
           <div id = "IP2" className = "IP" ><p>{this.props.subflowName2}</p></div>
           
           </div>
           <div id = "subflow3_IP" className = {this.props.subflow3Connected}>
           <div id = "IP3" className = "IP" ><p>{this.props.subflowName3}</p></div>
           
           </div>
           <div id = "subflow4_IP" className = {this.props.subflow4Connected}>
           <div id = "IP4" className = "IP" ><p>{this.props.subflowName4}</p></div>
           
           </div>
            <ConnectionPoint subFlow = "subflow_1" connected = {this.props.subflow1Connected}></ConnectionPoint>
            <ConnectionPoint subFlow = "subflow_2" connected = {this.props.subflow2Connected}></ConnectionPoint>
            <ConnectionPoint subFlow = "subflow_3" connected = {this.props.subflow3Connected}></ConnectionPoint>
            <ConnectionPoint subFlow = "subflow_4" connected = {this.props.subflow4Connected}></ConnectionPoint>
            <div className = "OSIRISBOX">
        INTELIO
            </div>
            <LeftLine connected = {this.props.subflow1Connected}></LeftLine>
            <LeftMidLine connected = {this.props.subflow2Connected}></LeftMidLine>
        <RightMidLine connected = {this.props.subflow3Connected}></RightMidLine>
           <RightLine connected = {this.props.subflow4Connected}></RightLine>
           
           
        </div>
        <div className = "inputArea">
            
    <div id = "subflow1" className = {this.props.subflow1Connected}><p className = "titleP">{this.props.subflowName1}</p>
        <div className = 'latencySym'><p>Latency:</p></div>
            
           <div id = "latency1" className = "latency" ><h4>{parseFloat(this.props.subflowLatency1).toFixed(2)}</h4><p>ms</p></div>
           <div className = 'throughputSymUp'><p>THR. Up:</p></div>
           <div className = 'throughputSymDown'><p>THR. Down:</p></div>
           <div id = "throughput1_up" className = "throughput"> <h4>{parseFloat(this.props.subflow1ThroughputUp).toFixed(2)}</h4><p>Mbps</p></div>
           <div id = "throughput1_down" className = "throughput"> <h4>{parseFloat(this.props.subflow1ThroughputDown).toFixed(2)}</h4><p>Mbps</p></div>
           </div>
           <div id = "subflow2" className = {this.props.subflow2Connected}><p className = "titleP">{this.props.subflowName2}</p>
           <div className = 'latencySym'><p>Latency:</p></div>
            
           <div id = "latency2" className = "latency"><h4>{parseFloat(this.props.subflowLatency2).toFixed(2)}</h4><p>ms</p></div>
           <div className = 'throughputSymUp'><p>THR. Up:</p></div>
           <div className = 'throughputSymDown'><p>THR. Down:</p></div>
           <div id = "throughput2_up" className = "throughput"> <h4>{parseFloat(this.props.subflow2ThroughputUp).toFixed(2)}</h4><p>Mbps</p></div>
           <div id = "throughput2_down" className = "throughput"> <h4>{parseFloat(this.props.subflow2ThroughputDown).toFixed(2)}</h4><p>Mbps</p></div>
           </div>
           <div id = "subflow3" className = {this.props.subflow3Connected}><p className = "titleP">{this.props.subflowName3}</p>
           <div className = 'latencySym'><p>Latency:</p></div>
            
           <div id = "latency3" className = "latency"><h4>{parseFloat(this.props.subflowLatency3).toFixed(2)}</h4><p>ms</p></div>
           <div className = 'throughputSymUp'><p>THR. Up:</p></div>
           <div className = 'throughputSymDown'><p>THR. Down:</p></div>
           <div id = "throughput3_up" className = "throughput"> <h4>{parseFloat(this.props.subflow3ThroughputUp).toFixed(2)}</h4><p>Mbps</p></div>
           <div id = "throughput3_down" className = "throughput"> <h4>{parseFloat(this.props.subflow3ThroughputDown).toFixed(2)}</h4><p>Mbps</p></div>
           </div>
           <div id = "subflow4" className = {this.props.subflow4Connected}><p className = "titleP">{this.props.subflowName4}</p>
           <div className = 'latencySym'><p>Latency:</p> </div>
            
           <div id = "latency4" className = "latency"><h4>{parseFloat(this.props.subflowLatency4).toFixed(2)}</h4><p>ms</p></div>
           <div className = 'throughputSymUp'><p>THR. Up:</p></div>
           <div className = 'throughputSymDown'><p>THR. Down:</p></div>
           <div id = "throughput4_up" className = "throughput"> <h4>{parseFloat(this.props.subflow4ThroughputUp).toFixed(2)}</h4><p>Mbps</p></div>
           <div id = "throughput4_down" className = "throughput"> <h4>{parseFloat(this.props.subflow4ThroughputDown).toFixed(2)}</h4><p>Mbps</p></div>
           </div>
           </div>
        </div>
        
        
        
        )


}
    


}