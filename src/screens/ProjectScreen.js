import React, {Fragment} from "react";
import Navbar from "../components/Navbar";
import ProjectDetail from "../components/Portfolio/ProjectDetail"

const ProjectScreen = (props) =>{
    return(
        <Fragment>
            <Navbar pathAdjustment="./../" screenQuery={props.screenQuery}/>
            <ProjectDetail  screenQuery={props.screenQuery} />
        </Fragment>
    )
}

export default ProjectScreen;