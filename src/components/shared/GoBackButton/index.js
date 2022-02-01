import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import './style.scss'

const GoBackButton = () =>{
    let history = useHistory();

    const goBack = ()=>{
        history.push("/")
    }
    return(
        <Fragment>
            <div className="shared_backButton">
                <div className="backButton" onClick={goBack}>
                back
                </div>
            </div>
        </Fragment>
    )
}

export default GoBackButton;