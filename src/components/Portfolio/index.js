import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import './style.scss';
import TagCloud from "./TagCloud";

import { useRecoilState } from "recoil";
import { projectList } from "./../../atoms/projectList";
import { projectsState } from './../../atoms/projectsStates';
import { currentProjectAtom } from "../../atoms/currentProject";
import { enabledTagsAtom } from "./../../atoms/enabledTagsAtom";
import { projectsMappedbyTag } from "../../atoms/projectsMappedByTag";

async function getfromFile(file){
    let response = await fetch(file);
    let data = await response.json();
    return data;
}
async function getProjectsMappedByTag(){
    return getfromFile("./../api/mappedByTags.json");
}

async function getPortfolio(){
    return getfromFile("./../api/mock-projects.json");
}


const Portfolio = (props) =>{
    const [portfoliodata, setPortfolioData] = useRecoilState(projectList);
    const [projectsStatesList, setProjectsStates] = useRecoilState(projectsState);
    const [listprojects, setListProjects] = useState([]);
    const [currentProject, setCurrentProject] = useRecoilState(currentProjectAtom);
    const [mappedByTag, setMappedByTag] = useRecoilState(projectsMappedbyTag);
    const [enabledTags] = useRecoilState(enabledTagsAtom);

    
    useEffect(()=>{
        //On enabled TAGS changes, gets projects states
        if((enabledTags.length!==0)&&(mappedByTag.length!==0)){
            //list wich project is enabled and wich is disabled
            let projectsEnable = []
            for(let i=0; i< portfoliodata.length; i++){
                projectsEnable.push(" disable");
            }
            enabledTags.forEach(tag=>{
                mappedByTag[tag].forEach(id=>{
                    projectsEnable[Number(id)] = " enable"
                })
            })
            setProjectsStates([...projectsEnable])

        }
    },[enabledTags, mappedByTag.length])

    useEffect(() =>{
        getProjectsMappedByTag().then((data)=>{
            setMappedByTag(data)
        })
        getPortfolio().then((data)=>{
            //onload site
            //load projects info
            setPortfolioData(data["projects"]);

            //zera o current project define all projects as enable
            setCurrentProject([])
            let initiate=[];
            let myList=[];
            for(let i =0 ; i< data["projects"].length;i++){
                initiate.push(" enable");
                myList.push(i);
            }
            setProjectsStates([...initiate])
            myList = [...shuffle(myList)];
            setListProjects(...[myList]);
            console.log(myList);
        })
        
    },[])

    const shuffle = (array_parameter) => {
        //TODO pass to a UTIL class
        let currentIndex = array_parameter.length,  randomIndex;
        let array_temp = [...array_parameter];
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
             // And swap it with the current element.
            [array_temp[currentIndex], array_temp[randomIndex]] = [
            array_temp[randomIndex], array_temp[currentIndex]];
        }
        return array_temp;
    }
    const renderOrder_linear = () =>{
        return(
            portfoliodata.map((proj, index) =>
                    <Card key={index} face={proj.face} name={proj.name} id={proj.id} state={projectsStatesList[Number(proj.id)]} screenQuery={props.screenQuery} />
                )
        )
    }
    const renderOrder_random = () =>{
        return(listprojects.map((id, index)=>
        {
            let proj = portfoliodata[Number(id)];
            return(<Card key={index} face={proj.face} name={proj.name} id={proj.id} state={projectsStatesList[Number(proj.id)]} screenQuery={props.screenQuery} />)
        })
    )
    }

    return(
        <Fragment>
            {
                <div className={"portfolio"+props.screenQuery}>
                    <h1 className="title_portfolio">Portfolio</h1>
                    <TagCloud projects= {portfoliodata} ></TagCloud>
                    <div className={"gallery"+props.screenQuery}>
                        {
                            renderOrder_random()
                            // renderOrder_linear()
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}
export default Portfolio;