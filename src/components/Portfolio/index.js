import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import './style.scss';
import TagCloud from "./TagCloud";


async function getPortfolio(){
    let response = await fetch("http://localhost:3000/api/mock-projects.json");
    let data = await response.json();
    return data;
}

let projectsOnList = [];
const projectsMappedbyTag = {};
const Portfolio = (props) =>{
    const [portfoliodata, setPortfolioData] = useState([]);
    // const [projectsOnList, setProjectsOnList] = useState([]);
    // const [selectedProjects, setSelectedProjects] = useState({});
    
    

    const mapProjectsByTag = (projects_mapped)=>{
        Object.assign(projectsMappedbyTag, projects_mapped);
    }
    const getProjectsOn = (tagsOnList) =>{
        let projOnList = []
        for(var i =0; i < portfoliodata.length; i++){
            projOnList.push(" disable");
            portfoliodata[i]["state"]= " disable";
        }
        projectsOnList = [...projOnList];
        let local = [...tagsOnList["tags"]]
        local.forEach(tag =>{
            let tagProjects = projectsMappedbyTag[tag]
            tagProjects.forEach(proj =>{
                projectsOnList[proj[0]] = " enable";
                portfoliodata[proj[0]]["state"]= " enable";
            })
        })
        console.log(portfoliodata)
        // this.forceUpdate();
        // setSelectedProjects({states:[...projectsOnList]})
        // console.log(selectedProjects)
    }

    useEffect(() =>{
        getPortfolio().then((data)=>{
            for(let i =0; i < data["projects"].length; i++){
                data["projects"]["state"]= " enable";   
            }
            setPortfolioData(data["projects"])
            let projOnList = []
            for(let i =0; i < data["projects"].length; i++){
                projOnList.push(" enable");
            }
            projectsOnList = [...projOnList]
            
            // setSelectedProjects({states:[...projectsOnList]})
        })
    },[])
    return(
        <Fragment>
            {
                <div className={"portfolio"+props.screenQuery}>
                    <h1 className="title_portfolio">Portfolio</h1>
                    <TagCloud projects= {portfoliodata} mapProjectsByTag={mapProjectsByTag} getProjectsOn={getProjectsOn} ></TagCloud>
                    <div className={"gallery"+props.screenQuery}>
                        {portfoliodata.map((proj, index)=>
                            <Card key={index} state ={projectsOnList[index]} face={proj.face} />
                        )}
                        <p>{projectsOnList[0]}</p>
                    </div>
                </div>
            }
        </Fragment>
    )
}
export default Portfolio;