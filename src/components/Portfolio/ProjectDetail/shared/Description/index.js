import React, { Fragment } from "react";

const Description = (props) =>{
    const containsHTML = (str) => /<[a-z][\s\S]*>/i.test(str);
    const renderDescription = (classe, str)=>{
        if(!containsHTML(str)){
            return(<div className={classe}>{str}</div>)
        }else{
            return(<div className={classe} dangerouslySetInnerHTML={{__html: str}} />)
        }
        return(
            null    
        )
    }
    return(
        <Fragment>
            {renderDescription(props.className, props.str)}
        </Fragment>
    )
}
export default Description;