import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";

const barFolded = " barFolded";
const barUnfolded = " barUnfolded";

const Navbar = ()=>{
    const [barState, setBarFoldState] = useState(barFolded); 
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    let screenQuery = "";
    if(isTabletOrMobile) screenQuery = " mobile"

    // const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})
    // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const controlBar =()=>{
        if(barState === barUnfolded){
            setBarFoldState(barFolded);
        }else{
            setBarFoldState(barUnfolded);
        }
    }

    console.log(isTabletOrMobile);

    let burgermenu = ()=>{
        if(!isTabletOrMobile){ return null;}
        return(
            <div className={"burguermenu"} onClick={controlBar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    return(
        <Fragment>
            <header className={"header"+screenQuery+barState} id="navbarToggleExternalContent">
                <img className={"brand"+screenQuery} alt="Meu avatar" src={"./assets/avatar.png"}/>
                <div class={"title"+screenQuery}>Bruno Ferraz</div>
                
                <nav className={"navBar"+screenQuery}>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className={"socialNetworkBar"+screenQuery+barState}>
                    <a href="https://www.facebook.com/bruno.ferraz.585/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.behance.net/brunoferrazpro"><FontAwesomeIcon icon={faBehance} /></a>
                    <a href="https://www.instagram.com/zarrefrb/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://github.com/brunoferraz"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                {burgermenu()}
            </header>
        </Fragment>
    )
}

export default Navbar;