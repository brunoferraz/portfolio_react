import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useParams, useHistory, Redirect } from 'react-router-dom';
import {projectList} from '../../../atoms/projectList.js';
import './style.scss'
import {absolutPath} from './../../../atoms/absolutePath.js';
import PostComponent from "./PostComponent/index.js";
import Description from "./shared/Description/index.js";
import GoBackButton from "../../shared/GoBackButton/index.js";


async function getPortfolio(){
    let response = await fetch("./../api/mock-projects.json");
    let data = await response.json();
    return data;
}
async function getProject(projid){
    let response = await fetch(`./../api/${projid}.json`);
    let data = await response.json();
    return data;
}
const ProjectDetail = (props)=>{
    const [portfoliodata, setPortfolioData] = useRecoilState(projectList);
    const [currentProject, setCurrentProject] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [tags, getTags] = useState([]);
    let { id } = useParams();
    let history = useHistory();

    useEffect(() =>{
            // console.log(portfoliodata)
        if(portfoliodata.length===0){
            getPortfolio().then((data)=>{
                setPortfolioData(data["projects"])
                if(id>portfoliodata.length || isNaN(id)){
                    //baixou os dados mas nao tem o projeto solicitado
                    setRedirect(true);
                }
            }, error=>{
                setRedirect(true);
            }
            )
        }else{
            
            setCurrentProject(portfoliodata[id])
            getTags([...portfoliodata[id].tags])
        }
    },[id])
    useEffect(() =>{
        if(portfoliodata.length!==0){
            if(id>portfoliodata.length || isNaN(id)){
                //baixou os dados mas nao tem o projeto solicitado
                setRedirect(true);
            }else{
                setCurrentProject(portfoliodata[id])
                getTags([...portfoliodata[id].tags])
            }
        }
    },[portfoliodata])
    // let path = useRecoilValue(absolutPath);
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
            <div className={"project_container"+props.screenQuery}>
                <img src={path+currentProject.face} alt="" className="project_face" />
                <div className="title_project">{currentProject.name} <span> | {currentProject.year}</span></div>
                <div className={"project_tagCloud"+props.screenQuery}>
                    {tags.map((tag, index) =>
                        <div key={index} className="project_tag">{tag}</div>
                        )}
                </div>
                {/* {console.log(containsHTML(currentProject.description))} */}
                <Description className="project_description" str={currentProject.description} />
                {/* <div className="project_description">{currentProject.description}</div> */}
                {!currentProject.post?null:<PostComponent id={id} screenQuery={props.screenQuery} />}
                {/* <div className="project_backButton">
                    <div onClick={goBack}>
                    back
                    </div>
                </div> */}
                <GoBackButton></GoBackButton>
            </div>
            }
        </Fragment>
    )
}
export default ProjectDetail;