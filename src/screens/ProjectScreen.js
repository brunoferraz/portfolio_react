import React, {Fragment} from "react";
import Navbar from "../components/Navbar";

const ProjectScreen = (props) =>{
    // console.log(props)
    return(
        <Fragment>
            <Navbar screenQuery={props.screenQuery}/>
            
        </Fragment>
    )
}

export default ProjectScreen;