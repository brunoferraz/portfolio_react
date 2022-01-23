import React from "react";
import './style.scss'

const Card = (props) =>{
    
    return(
        <div key={props.index} className={"card"+props.state}>
                {/* <img alt="" key={props.index} src={props.face}/> */}
            {/* <p>{props.state}</p> */}
            {/* <p>{props.face}</p> */}
        </div>
    )
}
export default Card;