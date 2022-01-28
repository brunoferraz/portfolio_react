import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useParams, useHistory, Redirect } from 'react-router-dom';
import {projectList} from '../../../atoms/projectList.js';
import './style.scss'
import {absolutPath} from './../../../atoms/absolutePath.js';
import PostComponent from "./PostComponent/index.js";


async function getPortfolio(){
    let response = await fetch("http://localhost:3000/api/mock-projects.json");
    let data = await response.json();
    return data;
}

const ProjectDetail = (props)=>{
    const [portfoliodata, setPortfolioData] = useRecoilState(projectList);
    const [currentProject, setCurrentProject] = useState([]);
    const [tags, getTags] = useState([]);
    let { id } = useParams();
    let history = useHistory();

    useEffect(() =>{
        if(portfoliodata[id]===undefined){
            getPortfolio().then((data)=>{
                setPortfolioData(data["projects"])
            })
        }else{
            setCurrentProject(portfoliodata[id])
            getTags([...portfoliodata[id].tags])
        }
    },[id])
    useEffect(() =>{
        if(portfoliodata.length!==0){
            setCurrentProject(portfoliodata[id])
            getTags([...portfoliodata[id].tags])
        }
    },[portfoliodata])
    let path = useRecoilValue(absolutPath);
    return(
        <Fragment>
            {
            <div className={"project_container"+props.screenQuery}>
                <img src={path+currentProject.face} alt="" className="project_face" />
                <div className="title_project">{currentProject.name} <span> | {currentProject.year}</span></div>
                <div className="project_tagCloud">
                    {tags.map((tag, index) =>
                        <div key={index} className="project_tag">{tag}</div>
                        )}
                </div>
                <div className="project_description">{currentProject.description}</div>
                <PostComponent id={id} screenQuery={props.screenQuery} />
            </div>
            }
        </Fragment>
    )
}
export default ProjectDetail;