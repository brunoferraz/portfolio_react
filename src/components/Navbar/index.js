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
const barOpened = " barOpened";

const Navbar = ()=>{
    const [barState, setBarFoldState] = useState(barFolded); 
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    // const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})
    // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const controlBar =()=>{
        if(barState === barOpened){
            setBarFoldState(barFolded);
        }else{
            setBarFoldState(barOpened);
        }
    }


    console.log(isTabletOrMobile);
    let screenQuery = "";
    if(isTabletOrMobile) screenQuery = " mobile"
    return(
        <Fragment>
            <header className={"header"} id="navbarToggleExternalContent">
                <img className={"brand"} alt="Meu avatar" src={"./assets/avatar.png"}/>
                <div class={"title"}>Bruno Ferraz</div>
                <nav className={"navBar"}>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className={"socialNetworkBar"}>
                    <a href="https://www.facebook.com/bruno.ferraz.585/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.behance.net/brunoferrazpro"><FontAwesomeIcon icon={faBehance} /></a>
                    <a href="https://www.instagram.com/zarrefrb/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://github.com/brunoferraz"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <div className={"burguermenu"} onClick={controlBar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
 
            </header>
        </Fragment>
    )
}

export default Navbar;