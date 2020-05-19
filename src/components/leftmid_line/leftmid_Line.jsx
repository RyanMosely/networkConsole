import React from "react";
import './leftmid_Line.scss';


export default function LeftMidLine(props){

    if(props.connected === "true"){
        return(
            <div className = "leftmidLineContainer">
                <div className = "dottedLine2 dottedLine2-1"></div>
                
                
                
                <div className = "lightUpPoint2 point2-1 point2-1_animated">
                    <div className = "shadowBox"></div>
                </div>
                <div className = "lightUpPoint2 point2-2 point2-2_animated"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint2 point2-3 point2-3_animated"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint2 point2-4 point2-4_animated"><div className = "shadowBox"></div></div>
               </div>
        )
    }else{
        return(
            <div className = "leftmidLineContainer">
                <div className = "dottedLine2 dottedLine2-1"></div>
                
                
                
                <div className = "lightUpPoint2 point2-1">
                    <div className = "shadowBox"></div>
                </div>
                <div className = "lightUpPoint2 point2-2"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint2 point2-3"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint2 point2-4"><div className = "shadowBox"></div></div>
               
                </div>
        )
    }

    
}
