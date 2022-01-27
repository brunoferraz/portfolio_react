import React, {Fragment} from "react";
import Navbar from "../components/Navbar";
import ProjectComponent from "./../components/Portfolio/ProjectComponent"

const ProjectScreen = (props) =>{
    return(
        <Fragment>
            <Navbar screenQuery={props.screenQuery}/>
            <ProjectComponent></ProjectComponent>
        </Fragment>
    )
}

export default ProjectScreen;