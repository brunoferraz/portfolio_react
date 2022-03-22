import React, {Fragment} from "react";
import Navbar from "../components/Navbar";
import NavbarComplete from "../components/NavbarComplete";
import Portfolio from "../components/Portfolio";

const PortfolioScreen = (props) =>{
    // console.log(props)
    return(
        <Fragment>
            <NavbarComplete screenQuery={props.screenQuery}/>
            <Portfolio screenQuery={props.screenQuery}/>
        </Fragment>
    )
}

export default PortfolioScreen;