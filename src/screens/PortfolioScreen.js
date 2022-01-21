import React, {Fragment} from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

const PortfolioScreen = (props) =>{
    // console.log(props)
    return(
        <Fragment>
            <Navbar/>
            <Portfolio screenQuery={props.screenQuery}/>
        </Fragment>
    )
}

export default PortfolioScreen;