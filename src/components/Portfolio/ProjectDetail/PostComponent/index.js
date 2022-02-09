import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { projectList } from "../../../../atoms/projectList";
import { currentProjectAtom } from "../../../../atoms/currentProject";
import GalleryPost from "./GalleryPost";
import ImgPost from "./ImgPost";
import './style.scss';
import VideoPost from "./VideoPost";

const PostComponent = (props)=>{ 
    const [portfoliodata, setPortfolioData] = useRecoilState(projectList);
    // const [currentProject, setCurrentProject] = useRecoilState([]);
    const [post, setPost] = useState([]);
    const currentProject = useRecoilValue(currentProjectAtom);
    useEffect(()=>{
        setPost(currentProject.post)
    },[currentProject])

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
            }else if(chunk.videoPath!==undefined){
                rows.push(<div className="post_component" key={counter}>
                    <VideoPost videoPath={chunk.videoPath} description={chunk.description}/>
                    </div>)
            }
        });
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