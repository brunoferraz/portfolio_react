import React, { Fragment, useEffect, useState } from "react";
import './style.scss';


async function getPortfolio(){
    let response = await fetch("http://localhost:3000/api/mock-projects.json");
    let data = await response.json();
    return data;
}

const Portfolio = (props) =>{
    // console.log(props)
    const [portfoliodata, setPortfolioData] = useState([]);
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
                    <div className={"gallery"+props.screenQuery}>
                        {portfoliodata.map((proj, index)=>
                            <div key={index} className="card">
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