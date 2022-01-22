import React, { Fragment, useEffect, useState } from "react";
import './style.scss';
import TagCloud from "./TagCloud";


async function getPortfolio(){
    let response = await fetch("http://localhost:3000/api/mock-projects.json");
    let data = await response.json();
    return data;
}


const Portfolio = (props) =>{
    const [portfoliodata, setPortfolioData] = useState([]);
    const projectsOn = {};
    const projectsMappedbyTag = {}

    const mapProjectsByTag = (projects_mapped)=>{
        Object.assign(projectsMappedbyTag, projects_mapped);
    }
    const getProjectsOn = (tagsOnList) =>{
        //initiate list as off
        for(let i = 0; i <portfoliodata.length; i++){
            projectsOn[i] = " disable";
        }
        //run through tags 
        tagsOnList.forEach(tag => {
            projectsMappedbyTag[tag].forEach(id =>{
                projectsOn[id] = " enable"
            })
        });
            //set on
    }

    useEffect(() =>{
        getPortfolio().then((data)=>{
            setPortfolioData(data["projects"])
            for(let i = 0; i <portfoliodata.length; i++){
                projectsOn[i] = " enable";
            }
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
                            <div key={index} className={"card"}>
                                <img alt="" key={index} src={proj.face}/>
                            </div>
                        )}
                    </div>
                </div>
            }
        </Fragment>
    )
}


export default Portfolio;