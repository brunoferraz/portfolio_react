import React, { Fragment } from "react";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import GoBackButton from "../shared/GoBackButton";

const Contact = (props)=>{
    return(
        <Fragment>
            <div className={"contact_container"+props.screenQuery}>
                <div className={"contact"+props.screenQuery}>
                    <div className="contact_title">Contact</div>
                    <ul className="contact_box">
                        <li>
                                <a href="mailto:brunoferraz.pro@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                                <a href="mailto:brunoferraz.pro@gmail.com" target="_blank">brunoferraz.pro@gmail.com</a>
                        </li>
                        <li>
                                <a href="https://www.facebook.com/bruno.ferraz.585/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="https://www.facebook.com/bruno.ferraz.585/">bruno.ferraz.585</a>                                
                        </li>
                        <li>
                                <a href="https://www.behance.net/brunoferrazpro"><FontAwesomeIcon icon={faBehance} /></a>
                                <a href="https://www.behance.net/brunoferrazpro">brunoferrazpro</a>
                        </li>
                        <li>
                                <a href="https://www.instagram.com/zarrefrb/"><FontAwesomeIcon icon={faInstagram}/></a>
                                <a href="https://www.instagram.com/zarrefrb/">zarrefrb</a>
                        </li>
                        <li>
                                <a href="https://github.com/brunoferraz"><FontAwesomeIcon icon={faGithub}/></a>
                                <a href="https://github.com/brunoferraz">brunoferraz</a>
                        </li>
                        <li>
                                <a href="www.linkedin.com/in/bruno-ferraz-pro"><FontAwesomeIcon icon={faLinkedinIn}/></a>                            
                                <a href="www.linkedin.com/in/bruno-ferraz-pro">bruno-ferraz-pro</a>

                        </li>
                        <li>
                            <a href="mailto:brunoferraz.pro@gmail.com" target="_blank"><FontAwesomeIcon icon={faWhatsapp}/></a>                            
                            <a href="mailto:brunoferraz.pro@gmail.com" target="_blank">Ask me by e-mail  ; )</a>

                        </li>
                    </ul>
                </div>
                <GoBackButton/>
            </div>
        </Fragment>
    )
}
export default Contact;