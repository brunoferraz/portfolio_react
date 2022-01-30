import React, {Fragment} from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";


const ContactScreen = (props) =>{
    return(
        <Fragment>
            <Navbar screenQuery={props.screenQuery} />
            <Contact screenQuery={props.screenQuery} />
        </Fragment>
    )
}

export default ContactScreen;