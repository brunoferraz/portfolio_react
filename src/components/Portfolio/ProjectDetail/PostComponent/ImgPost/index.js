import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import {absolutPath} from './../../../../../atoms/absolutePath'
import './style.scss';

const ImgPost = (props)=>{
    const imgPath = props.imgPath;
    const description = props.description;
    let path = useRecoilValue(absolutPath)
    return(
        <Fragment>
            <img className="post_imgPost" src={path+imgPath}/>
            <div className="post_description">{description}</div>
        </Fragment>
    )
}
export default ImgPost;