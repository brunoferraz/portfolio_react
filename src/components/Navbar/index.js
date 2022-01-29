import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";
// import MediaQuery from 'react-responsive';
// import MediaQuery from "react-responsive/dist/Component";


const barFolded = " barFolded";
const barUnfolded = " barUnfolded";

const Navbar = (props)=>{
    const [barState, setBarFoldState] = useState(barFolded); 
    let screenQuery = props.screenQuery;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1060px)' })
    // let screenQuery = "";
    // if(isTabletOrMobile) {
    //     screenQuery = " mobile"
    // }
    // const handleMediaQueryChange = (matches) => {
    //     // matches will be true or false based on the value for the media query
    //     console.log(matches);
    // }
    window.addEventListener('resize', function() {
       if(barState===barUnfolded){
           setBarFoldState(barFolded);
       }
    });   

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
        <div className={"header_Container"+screenQuery+barState}>
            <header className={"header"+screenQuery+barState}>
                <img className={"brand"+screenQuery} alt="Meu avatar" src={"http://localhost:3000/assets/avatar.png"}/>
                <div className={"title"+screenQuery}>Bruno Ferraz</div>
                {burgermenu()}
                <nav className={"navBar"+screenQuery+barState}>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className={"socialNetworkBar"+screenQuery+barState}>
                    <a href="https://www.facebook.com/bruno.ferraz.585/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.behance.net/brunoferrazpro"><FontAwesomeIcon icon={faBehance} /></a>
                    <a href="https://www.instagram.com/zarrefrb/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://github.com/brunoferraz"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/bruno-ferraz-3a0b8081/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                </div>
                
            </header>
        </div>
    )
}

export default Navbar;