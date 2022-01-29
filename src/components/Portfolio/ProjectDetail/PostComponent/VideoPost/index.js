import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import {absolutPath} from './../../../../../atoms/absolutePath'
// import './style.scss';

const VideoPost = (props)=>{
    const videoPath = props.imgPath;
    const description = props.description;
    let path = useRecoilValue(absolutPath)
    return(
        <Fragment>
            <video width="1080" height="1080" controls>
                <source src={path+videoPath} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            {/* <img className="post_imgPost" src={path+imgPath}/>
            <div className="post_description">{description}</div> */}
        </Fragment>
    )
}
export default VideoPost;