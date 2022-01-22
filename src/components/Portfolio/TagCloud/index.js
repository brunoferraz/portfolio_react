import React, { Fragment } from "react";
import './style.scss';
import Tag from "./Tag";

const TagCloud = (props) => {
    let taglist = [];
    let activeTags = [];
    const projects = props.projects;
    const getProjectsOn = props.getProjectsOn;

    const getAlltags= ()=>{
        let tagsNoRepeat = [];
        projects.forEach(proj => {
            proj.tags.forEach(tag =>{
                if(tagsNoRepeat.indexOf(tag)===-1){
                    tagsNoRepeat.push(tag);
                };
            })
        });
        return tagsNoRepeat;
    }
    const mapProjectsByTag = () => {
        let mapprojects = {}
        taglist.forEach(tag =>{
            mapprojects[tag] = []
            projects.forEach(proj => {
                // console.log(proj)
                if(proj.tags.indexOf(tag) !== -1){
                    mapprojects[tag].push(proj.id)
                }
            })
        })
        return mapprojects;
    }
    const onAddTag = (name) =>{
        if(activeTags.length === taglist.length){
            activeTags = []
            activeTags.push(name);
        }else if(activeTags.length > 0){
            activeTags.push(name);
        }
        getProjectsOn(activeTags);
    }
    const onRemoveTag = (name) =>{
        if(activeTags.length>0){
            let index = activeTags.indexOf(name);
            activeTags.splice(index, 1);
        }
        if(activeTags.length===0){
            activeTags = [...taglist];
        }
        getProjectsOn(activeTags);
    }

    taglist = [...getAlltags()];
    activeTags = [...taglist];
    props.mapProjectsByTag(mapProjectsByTag());
    return(
        <Fragment>
            <div className="tagcloud_container">
            {taglist.map((tag, index) =>
                <Tag key={index} onAddTag={onAddTag} onRemoveTag={onRemoveTag}  name={tag}/>
            )}
            </div>
        </Fragment>
    );
}

export default TagCloud;