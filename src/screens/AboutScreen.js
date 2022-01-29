import React, {Fragment} from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";

const AboutScreen = (props) =>{
    return(
        <Fragment>
            <Navbar screenQuery={props.screenQuery}/>
            <About screenQuery={props.screenQuery}/>
        </Fragment>
    )
}

export default AboutScreen;