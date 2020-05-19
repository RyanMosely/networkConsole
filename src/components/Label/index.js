import React from "react";
import {Label} from 'semantic-ui-react';
import "./style.css";

function lbel({message}){
    return (
        <Label basic>
           {message}
        </Label>
    )
}

export default lbel;