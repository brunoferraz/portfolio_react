import React, { Fragment, useState } from "react";
import "./style.scss";

const checked = " checked"
const unchecked = " unchecked"

const Tag = (props)=>{
    const [buttonState, setButtonState] = useState([unchecked]);
    const name = props.name;
  
    const onRemoveTag = props.onRemoveTag;
    const onAddTag    = props.onAddTag;
    const toggleState = ()=>{
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
            <a className={"tag"+buttonState} onClick={toggleState}>{props.name}</a>
        </Fragment>
    )
}

export default Tag;