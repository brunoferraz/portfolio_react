import React from "react";
import './style.scss'

const Card = (props) =>{
    if(props.states===" disable")return null
    return(
        <div key={props.index} className={"card"+props.states}>
            <img alt="" key={props.index} src={props.face} />
        </div>
    )
}
export default Card;