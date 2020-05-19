import React from "react"
import './leftLine.scss'


export default function LeftLine(props){

    if(props.connected === "true"){

    return(
        <div className = "leftLineContainer">
            <div className = "dottedLine1 dottedLine1-1"></div>
            
            
            <div className = "lightUpPoint1 point1-1 point1-1_animated">
                <div className = "shadowBox"></div>
            </div>
            <div className = "lightUpPoint1 point1-2 point1-2_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint1 point1-3 point1-3_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint1 point1-4 point1-4_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint1 point1-5 point1-5_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint1 point1-6 point1-6_animated"><div className = "shadowBox"></div></div>
           

            </div>
    )
    }else{

        return(
            <div className = "leftLineContainer">
                <div className = "dottedLine1 dottedLine1-1"></div>
                
                
                <div className = "lightUpPoint1 point1-1">
                    <div className = "shadowBox"></div>
                </div>
                <div className = "lightUpPoint1 point1-2"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint1 point1-3"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint1 point1-4"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint1 point1-5"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint1 point1-6"><div className = "shadowBox"></div></div>
                
    
                </div>
        )
    }
}
