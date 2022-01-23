import React, { Fragment } from "react";
import './style.scss';
import Tag from "./Tag";

const TagCloud = (props) => {
    let taglist = [];
    let activeTags = [];
    const projects = props.projects;
    let projects_mapped = {};
;
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
                    mapprojects[tag].push([proj.id, proj.name])
                }
            })
        })
        Object.assign(projects_mapped, mapprojects);
        return mapprojects;
    }
    const onAddTag = (name) =>{
        let local = [...activeTags];
        if(local.length === taglist.length){
            local = []
            local.push(name);
        }else if(local.length > 0){
            local.push(name);
        }
        activeTags = [...local]
    }
    const onRemoveTag = (name) =>{
        let local = [...activeTags];
        if(local.length>0){
            let index = local.indexOf(name);
            local.splice(index, 1);
        }
        if(local.length===0){
            local = [...taglist];
        }
        activeTags = [...local]
        props.getProjectsOn({tags:[...local]});
    }
    const getProjectsOn = ()=>{
        let projectsEnable = []
        for(let i=0; i< props.projects.length; i++){
            projectsEnable.push(" disable");
        }
        activeTags.forEach(tag=>{
            projects_mapped[tag].forEach(proj=>{
                let id = proj[0]
                projectsEnable[id] = " enable"
            })
        })
        props.getProjectsOn([...projectsEnable])
    }
    taglist = [...getAlltags()];
    activeTags = [...taglist];
    props.mapProjectsByTag(mapProjectsByTag());
    getProjectsOn();

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