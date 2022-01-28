import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import {absolutPath} from './../../../../../atoms/absolutePath'
import './style.scss';

const GalleryPost = (props)=>{
    const gallery = props.gallery;
    const description = props.description;
    let path = useRecoilValue(absolutPath)

    const hasdescription = (classVar, desc)=>{
        if(desc==='') return null
        return <div className={classVar}>{desc}</div>
    }
    return(
        <Fragment>
            {/* <div className="post_gallery_description">{description}</div> */}
            {hasdescription("post_gallery_description", description)}
            <div className={"post_gallery"+props.screenQuery}>
                {gallery.map((item, index)=>
                    <div key={index} className={"post_gallery_item"+props.screenQuery}>
                        <img src={path+item.imgPath}/>
                        {hasdescription("gallery_item_description"+props.screenQuery ,item.description)}
                    </div>
                    )}
                
            </div>
        </Fragment>
    )
}
export default GalleryPost;