import React from "react";
import {Input} from 'semantic-ui-react'
import "./style.css";

function TextField (props){
    return (
        <div>
            <Input {...props} />
        </div>
    );
   
}
export default TextField;