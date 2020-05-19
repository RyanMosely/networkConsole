import React from "react"
import './rightmid_Line.scss'


export default function RightMidLine(props){

    if(props.connected === "true"){return(
        <div className = "rightmidLineContainer">
            <div className = "dottedLine3 dottedLine3-1"></div>
           
            
            
            <div className = "lightUpPoint3 point3-1 point3-1_animated">
                <div className = "shadowBox"></div>
            </div>
            <div className = "lightUpPoint3 point3-2 point3-2_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint3 point3-3 point3-3_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint3 point3-4 point3-4_animated"><div className = "shadowBox"></div></div>
            
            </div>
    )
}else{
    return(
        <div className = "rightmidLineContainer">
            <div className = "dottedLine3 dottedLine3-1"></div>
            
            
            
            <div className = "lightUpPoint3 point3-1">
                <div className = "shadowBox"></div>
            </div>
            <div className = "lightUpPoint3 point3-2"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint3 point3-3"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint3 point3-4"><div className = "shadowBox"></div></div>
            
            </div>
    )
}
    
}
