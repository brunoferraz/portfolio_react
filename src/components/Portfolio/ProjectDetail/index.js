import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useParams, useHistory, Redirect } from 'react-router-dom';
import {projectList} from '../../../atoms/projectList.js';
import './style.scss'
import {absolutPath} from './../../../atoms/absolutePath.js';
import PostComponent from "./PostComponent/index.js";
import Description from "./shared/Description/index.js";
import GoBackButton from "../../shared/GoBackButton/index.js";
import { currentProjectAtom } from "../../../atoms/currentProject.js";
import { useSpring, animated } from 'react-spring';

async function getProject(projid){
    let response = await fetch(`./../api/projects/${projid}.json`);
    let data = await response.json();
    return data;
}
const ProjectDetail = (props)=>{
    const [portfoliodata, setPortfolioData] = useRecoilState(projectList);
    const [currentProject, setCurrentProject] = useRecoilState(currentProjectAtom);
    const [redirect, setRedirect] = useState(false);
    const [tags, getTags] = useState([]);
    let { id } = useParams();
    let history = useHistory();
    const styles = useSpring({  
        to:{opacity: 1 },
        from: { opacity: 0}
    })
    useEffect(() =>{
        getProject(id).then((data)=>{
            // console.log(data.tags)
            setCurrentProject(data)
            getTags([...data.tags])
        }, err=>{
            setRedirect(true);
        })
    },[id])
    let path = "./../"
    const goBack = ()=>{
        history.push("/")
    }
    
    if(redirect){
        return <Redirect to='/' />
    }

    return(
        <Fragment>
            {
            <animated.div style={styles} className={"project_container"+props.screenQuery}>
                <img src={path+currentProject.face} alt="" className="project_face" />
                <div className="title_project">{currentProject.name} <span> | {currentProject.year}</span></div>
                <div className={"project_tagCloud"+props.screenQuery}>
                    {tags.map((tag, index) =>
                        <div key={index} className="project_tag">{tag}</div>
                        )}
                </div>
                <Description className="project_description" str={currentProject.description} />
                {!currentProject.post?null:<PostComponent id={id} screenQuery={props.screenQuery} />}
                <GoBackButton></GoBackButton>
            </animated.div>
            }
        </Fragment>
    )
}
export default ProjectDetail;