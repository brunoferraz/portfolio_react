import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { projectList } from "../../../../atoms/projectList";
import GalleryPost from "./GalleryPost";
import ImgPost from "./ImgPost";
import './style.scss';

const PostComponent = (props)=>{ 
    const [portfoliodata, setPortfolioData] = useRecoilState(projectList);
    const [currentProject, setCurrentProject] = useState([]);
    const [post, setPost] = useState([]);
    useEffect(()=>{
        if(portfoliodata.length!==0){
            setCurrentProject(portfoliodata[props.id])
        }
    },[props.id, portfoliodata])
    useEffect(()=>{
        if(currentProject.length!==0){
            setPost(currentProject.post)
        }
    },[currentProject])
    useEffect(()=>{
        // console.log(post)
    },[post])
    const preparaRender =() =>{
        if(post.length===0) {return null}
        let rows = [];
        let counter = 0;
        post.forEach(chunk => {
            counter++;
            if(chunk.imgPath!==undefined){
                rows.push(<div className="post_component" key={counter}>
                    <ImgPost imgPath={chunk.imgPath} description={chunk.description}/>
                    </div>)
            }else if(chunk.gallery!==undefined){
                rows.push(<div className="post_component" key={counter}>
                        <GalleryPost screenQuery={props.screenQuery} gallery={chunk.gallery} description={chunk.description} columns={chunk.columns}/>
                    </div>)
            }
        });
        // console.log(post[0])
        return rows;
    }
    return(
        <Fragment>
            {
                preparaRender()
            }
        </Fragment>
    )
}
export default PostComponent;