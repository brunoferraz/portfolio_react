import React, { Fragment, useEffect } from "react";
import Card from "./Card";
import './style.scss';
import TagCloud from "./TagCloud";

import { useRecoilState } from "recoil";
import { projectList } from "./../../atoms/projectList";
import { projectsState } from './../../atoms/projectsStates';


async function getPortfolio(){
    // let response = await fetch("http://localhost:3000/api/mock-projects.json");
    let response = await fetch("./../api/mock-projects.json");
    let data = await response.json();
    return data;
}

const Portfolio = (props) =>{
    // const [portfoliodata, setPortfolioData] = useState([]);
    const [portfoliodata, setPortfolioData] = useRecoilState(projectList);
    const [projectsStatesList, setProjectsStates] = useRecoilState(projectsState);


    useEffect(() =>{
        getPortfolio().then((data)=>{
            setPortfolioData(data["projects"])
        })
    },[])
    useEffect(()=>{
        if(portfoliodata.length!==0){
            let initiate=[];
            for(let i =0 ; i< portfoliodata;i++){
                initiate.push(" enable");
            }
            setProjectsStates([...initiate])
        }
    },[portfoliodata])
    return(
        <Fragment>
            {
                <div className={"portfolio"+props.screenQuery}>
                    <h1 className="title_portfolio">Portfolio</h1>
                    <TagCloud projects= {portfoliodata} ></TagCloud>
                    <div className={"gallery"+props.screenQuery}>
                        {
                            portfoliodata.map((port, index) =>
                                    <Card key={index} face={port.face} name={port.name} id={port.id} state={projectsStatesList[port.id]} screenQuery={props.screenQuery} />
                                )
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}
export default Portfolio;