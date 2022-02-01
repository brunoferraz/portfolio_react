import React, { Fragment, useEffect, useState } from "react";
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
    const [listprojects, setListProjects] = useState([]);


    useEffect(() =>{
        getPortfolio().then((data)=>{
            setPortfolioData(data["projects"])
        })
    },[])
    useEffect(()=>{
        if(portfoliodata.length!==0){
            // console.log(portfoliodata.length)
            let initiate=[];
            let myList=[];
            for(let i =0 ; i< portfoliodata.length;i++){
                initiate.push(" enable");
                myList.push(i);
            }
            setProjectsStates([...initiate])
            myList = [...shuffle(myList)];
            setListProjects(...[myList]);
        }
    },[portfoliodata])

    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    const renderOrder_linear = () =>{
        return(
            portfoliodata.map((port, index) =>
                    <Card key={index} face={port.face} name={port.name} id={port.id} state={projectsStatesList[port.id]} screenQuery={props.screenQuery} />
                )
        )
    }
    const renderOrder_random = () =>{
        return(listprojects.map((id, index)=>
        {let proj = portfoliodata[id];
            return(<Card key={index} face={proj.face} name={proj.name} id={proj.id} state={projectsStatesList[proj.id]} screenQuery={props.screenQuery} />)
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