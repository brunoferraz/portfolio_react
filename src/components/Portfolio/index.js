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
    const [projectsOnList, setProjectsOnList] = useState([]);
    const projectsMappedbyTag = {}

    const mapProjectsByTag = (projects_mapped)=>{
        Object.assign(projectsMappedbyTag, projects_mapped);
    }
    const getProjectsOn = (tagsOnList) =>{
        //initiate list as off
        let projOnList = [];
        console.log(tagsOnList);
        // let newlist = [...tagsOnList["tags"]];
        
        // let tagsOn = [...tagsOnList["tags"]];
        for(let i = 0; i <portfoliodata.length; i++){
            projOnList[i] = " disable";
        }
        setProjectsOnList([...projOnList])
        // newlist.forEach(tag => {
            // console.log(tag)
            // projectsMappedbyTag[tag].forEach(proj =>{
            //     // console.log(proj)
            //     // projOnList[id] = " enable";
            // })
        // })
        // setProjectsOnList([...projOnList])
        // console.log(projOnList);
    }

    useEffect(() =>{
        getPortfolio().then((data)=>{
            setPortfolioData(data["projects"])
            let projOnList = []
            for(var i =0; i < data["projects"].length; i++){
                projOnList.push(" enable");
            }
            setProjectsOnList([...projOnList])
        })
    },[])
    // useEffect(()=>{

    // },[projectsOnList])

    return(
        <Fragment>
            {
                <div className={"portfolio"+props.screenQuery}>
                    <h1 className="title_portfolio">Portfolio</h1>
                    <TagCloud projects= {portfoliodata} mapProjectsByTag={mapProjectsByTag} getProjectsOn={getProjectsOn} ></TagCloud>
                    <div className={"gallery"+props.screenQuery}>
                        {portfoliodata.map((proj, index)=>
                            <div key={index} className={"card"+projectsOnList[index]}>
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