import React from 'react';

import "./connectionPoint.scss";
export default function ConnectionPoint(props){
    

    if (props.connected === "true"){
    
    return(
        <div id = {props.subFlow} className = "overallConnection  overallConnection_animate">
            <div className = "imageBuild">
             <span className = "iconPiece icon-signal_tower" ></span>
            <span className = "iconPiece icon-signal_inner   icon-signal_inner_animate" ></span>
            <span className = "iconPiece icon-signal_mid   icon-signal_mid_animate" ></span>
            <span className = "iconPiece icon-signal_outter   icon-signal_outter_animate" ></span>
            </div>
            
        </div>
     ) 


}
if (props.connected === "false"){
    
    return(
        <div id = {props.subFlow} className = "overallConnection">
            <div className = "imageBuild">
             <span className = "iconPiece icon-signal_tower" ></span>
            <span className = "iconPiece icon-signal_inner" ></span>
            <span className = "iconPiece icon-signal_mid" ></span>
            <span className = "iconPiece icon-signal_outter" ></span>
            </div>
            
        </div>
        )


}
    


};