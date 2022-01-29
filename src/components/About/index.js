import React, { Fragment } from "react";
import './style.scss'
const About = (props)=>{
    return(
        <Fragment>
            <div className={"about_container"+props.screenQuery}>
                <div className={"about"+props.screenQuery}>
                <div className="about_title">About</div>
                <p>I am currently pursuing my PhD at PUC-RJ in Computer Science in the Computer Graphics research line. I attained a Master's degree in Systems Engineering and Computing / Computer Graphics - PESC/ COPPE/ UFRJ (2017). Graduated in Industrial Design - Visual Programming from the Federal University of Rio de Janeiro (2007). I was substitute professor at ECO/ UFRJ. I have experience in Industrial Design with emphasis on Visual Programming and multimedia. I Works mainly in game development; direction, animation, storyboard creation for animated films; multimedia project management</p>
                <div className="about_timeline">
                    <section>
                        <h1 className="about_section_title">Academic</h1>
                        <div className="about_yearSection">
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
                        <h1 className="about_section_title">Experience</h1>
                        <div className="about_yearSection">
                            <div className="about_yearMarker">2016 | 2018<span>Substitute professor</span></div>
                            <p>UFRJ | ECO</p>
                            <p>I taught the following classes:</p>
                            <ul>
                                <li>- graphic computer</li>
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
                            <div className="about_yearMarker">2006 | 2007<span>Treinee</span></div>
                            <p>Labareda Design</p>
                            <p>Design</p>
                            
                        </div>
                    </section>
                    <section>
                        <h1 className="about_section_title">Awards</h1>
                        <div className="about_yearMarker">2016</div>
                        <p>Best Animarion | Green Nation (Juri Award)</p>
                        <p>Best Animarion | Green Nation (Audience Award)</p>
                        <div className="about_yearMarker">2015</div>
                        <p>Anima Multi | Animamundi (Audience Award)</p>
                        <div className="about_yearMarker">2007</div>
                        <p>Jornada Giulio Massarani de Iniciação Científica - CLA, UFRJ.</p>
                    </section>
                </div>
                </div>
            </div>
        </Fragment>
    )
}
export default About;