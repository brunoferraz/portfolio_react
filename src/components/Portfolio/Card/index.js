import React from "react";
import './style.scss'

const Card = (props) =>{
    
    return(
        <div key={props.index} className={"card"+props.states[props.id]}>
            <img alt="" key={props.index} src={props.face} />
        </div>
    )
}
export default Card;