import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import './style.scss';
import TagCloud from "./TagCloud";


async function getPortfolio(){
    let response = await fetch("http://localhost:3000/api/mock-projects.json");
    let data = await response.json();
    return data;
}

// let projectsOnList = [];
const projectsMappedbyTag = {};
const Portfolio = (props) =>{
    const [portfoliodata, setPortfolioData] = useState([]);
    const [projectsOnList, setProjectsOnList] = useState([]);
    
    

    const mapProjectsByTag = (projects_mapped)=>{
        Object.assign(projectsMappedbyTag, projects_mapped);
    }
    const getProjectsOn = (projects_on) =>{
        setProjectsOnList(projects_on);
    }

    useEffect(() =>{
        getPortfolio().then((data)=>{
            setPortfolioData(data["projects"])
        })
    },[])
    return(
        <Fragment>
            {
                <div className={"portfolio"+props.screenQuery}>
                    <h1 className="title_portfolio">Portfolio</h1>
                    <TagCloud projects= {portfoliodata} mapProjectsByTag={mapProjectsByTag} getProjectsOn={getProjectsOn} ></TagCloud>
                    <div className={"gallery"+props.screenQuery}>
                        {
                            portfoliodata.map((port, index) =>
                                <div  key={index}>
                                    <Card key={index} face={port.face} id={port.id} states={projectsOnList} />
                                    {/* <p>{projectsOnList}</p> */}
                                </div>
                                )
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}
export default Portfolio;