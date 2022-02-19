import React, { Fragment } from "react";
import GoBackButton from "../shared/GoBackButton";
import ScrollToTop from "../shared/ScrollToTop";
import './style.scss';
import { useSpring, animated } from 'react-spring';

const About = (props)=>{
    const styles = useSpring({  
        to:{opacity: 1 },
        from: { opacity: 0}
    })
    
    return(
        <Fragment>
            <animated.div style={styles} className={"about_container"+props.screenQuery}>
                <div className={"about"+props.screenQuery}>
                <div className="about_title">About</div>
                <p>I am currently pursuing my Ph.D. at PUC-RJ in Computer Science in the Computer Graphics research line. I attained a Master's degree in Systems Engineering and Computing / Computer Graphics - PESC/ COPPE/ UFRJ (2017). Graduated in Industrial Design - Visual Programming from the Federal University of Rio de Janeiro (2007). I was a substitute Professor at ECO/ UFRJ. I have experience in Design with an emphasis on visual programming and multimedia. </p>
                    <p>I mainly work with:</p>
                <ul>
                    <li>
                        -multimedia project management
                    </li>
                    <li>
                        -illustration
                    </li>
                    <li>
                        -storyboard
                    </li>
                    <li>
                        -animated movie direction
                    </li>
                    <li>
                        -animation
                    </li>
                    <li>
                        -game development
                    </li>
                    <li>
                        -game design
                    </li>
                </ul>
                <div className="about_timeline">
                    <section>
                        <h1 className={"about_section_title"+props.screenQuery}>Academic</h1>
                        <div className="about_yearSection first">
                            <div className="about_yearMarker">2019 | . . . .<span>PhD</span> </div>
                            <p>PUC-RJ</p>
                            <p>Computer Graphics</p>
                            <p>I am studying computational narratology and data-driven storytelling</p>
                        </div>
                        <div className="about_yearSection">
                            <div className="about_yearMarker">2014 | 2017<span>MSc</span> </div>
                            <p>UFRJ | COPPE | PESC</p>
                            <p>Computer Graphics</p>
                            <p>I studied real-time rendering and texturing using GPU</p>
                            {/* <p>Real time color projection for 3d models</p> */}
                        </div>
                        <div className="about_yearSection">
                            <div className="about_yearMarker">2002 | 2007<span>College</span></div>
                            <p>UFRJ | EBA</p>
                            <p>Graphic Design</p>
                        </div>
                    </section>
                    <section>
                        <h1 className={"about_section_title"+props.screenQuery}>Work Experience</h1>
                        <div className="about_yearSection first">
                            <div className="about_yearMarker first">2016 | 2018<span>Substitute professor</span></div>
                            <p>UFRJ | ECO</p>
                            <p>I taught the following classes:</p>
                            <ul>
                                <li>- computer graphics</li>
                                <li>- media production technology</li>
                                <li>- webdesign</li>
                                <li>- animation</li>
                            </ul>
                        </div>
                        <div className="about_yearSection">
                            <div className="about_yearMarker">2011 | 2015<span>Multimedia Instructor</span></div>
                            <p>NAVE</p>
                            <p>I taught interactive app prototyping and animation</p>
                        </div>
                        <div className="about_yearSection">
                            <div className="about_yearMarker">2007 | 2011<span>Multimedia project manager</span></div>
                            <p>Labareda Design</p>
                            <p>I worked with the following types of projects:</p>
                            <ul>
                                <li>- animation</li>
                                <li>- educational games</li>
                                <li>- webdesign</li>
                            </ul>
                        </div>
                        <div className="about_yearSection">
                            <div className="about_yearMarker">2006 | 2007<span>Trainee</span></div>
                            <p>Labareda Design</p>
                            <p>Design</p>
                            
                        </div>
                    </section>
                    <section>
                        <h1 className={"about_section_title"+props.screenQuery}>Awards</h1>
                        <div className="about_yearSection first">
                            <div className="about_yearMarker first">2016</div>
                            <p className="not">Best Animarion | Green Nation (Juri Award)</p>
                            <p className="not">Best Animarion | Green Nation (Audience Award)</p>
                        </div>
                        <div className="about_yearSection">
                            <div className="about_yearMarker">2015</div>
                            <p className="not">Anima Multi | Animamundi (Audience Award)</p>
                        </div>
                        <div className="about_yearSection">
                            <div className="about_yearMarker">2007</div>
                            <p className="not">Jornada Giulio Massarani de Iniciação Científica - CLA, UFRJ.</p>
                        </div>
                    </section>
                </div>
                </div>
                <GoBackButton/>
            </animated.div>
            <ScrollToTop/>
        </Fragment>
    )
}
export default About;