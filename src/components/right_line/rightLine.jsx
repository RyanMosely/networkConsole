import React from "react"
import './rightLine.scss'


export default function RightLine(props){

    if (props.connected === "true"){
    return(
        <div className = "leftLineContainer">
            <div className = "dottedLine4 dottedLine4-1"></div>
            
            
            <div className = "lightUpPoint4 point4-1 point4-1_animated">
                <div className = "shadowBox"></div>
            </div>
            <div className = "lightUpPoint4 point4-2 point4-2_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint4 point4-3 point4-3_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint4 point4-4 point4-4_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint4 point4-5 point4-5_animated"><div className = "shadowBox"></div></div>
            <div className = "lightUpPoint4 point4-6 point4-6_animated"><div className = "shadowBox"></div></div>
            
            </div>
    )
    }else{
        return(
            <div className = "leftLineContainer">
                <div className = "dottedLine4 dottedLine4-1"></div>
                
                
                <div className = "lightUpPoint4 point4-1">
                    <div className = "shadowBox"></div>
                </div>
                <div className = "lightUpPoint4 point4-2"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint4 point4-3"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint4 point4-4"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint4 point4-5"><div className = "shadowBox"></div></div>
                <div className = "lightUpPoint4 point4-6"><div className = "shadowBox"></div></div>
                
                </div>
        )  
    }
}
