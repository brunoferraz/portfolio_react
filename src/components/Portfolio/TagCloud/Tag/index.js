import React, { Fragment, useState } from "react";
import "./style.scss";
import './../../../../variables/variables.scss'

const checked = " checked"
const unchecked = " unchecked"

const Tag = (props)=>{
    const [buttonState, setButtonState] = useState([unchecked]);
    const [disable, setDisable] = useState(false);
    const name = props.name;
  
    const onRemoveTag = props.onRemoveTag;
    const onAddTag    = props.onAddTag;
    const toggleState = (e)=>{
        if(buttonState===checked){
            setButtonState(unchecked)
            onRemoveTag(name);
        }else{
            setButtonState(checked);
            onAddTag(name);
        }
  
    }
    

    return(
        <Fragment>
            <a className={"tag"+buttonState} onMouseDown={toggleState}>{props.name}</a>
        </Fragment>
    )
}

export default Tag;