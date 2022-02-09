import React, { Fragment, useEffect } from "react";
import './style.scss';
import Tag from "./Tag";
import { alltagsList } from "../../../atoms/alltagsList";
import { useRecoilState, useRecoilValue } from "recoil";
import { projectList } from "./../../../atoms/projectList.js";
import { projectsMappedbyTag } from './../../../atoms/projectsMappedByTag';
import { projectsState } from "../../../atoms/projectsStates";
import { enebledTags } from "../../../atoms/enebledTags";

const TagCloud = (props) => {
    const [portfoliodata, setPortfolioData] = useRecoilState(projectList);
    const [tagsList, setAllTagsList] = useRecoilState(alltagsList);
    const [mappedByTag, setMappedByTag] = useRecoilState(projectsMappedbyTag);
    const [projectsStatesList, setProjectsStates] = useRecoilState(projectsState);
    const [activeTags, setEnabledTags] = useRecoilState(enebledTags);
    // let activeTags = [];


;
    const getAlltags= ()=>{
        let tagsNoRepeat = [];
        portfoliodata.forEach(proj => {
            proj.tags.forEach(tag =>{
                if(tagsNoRepeat.indexOf(tag)===-1){
                    tagsNoRepeat.push(tag);
                };
            })
        });
        setAllTagsList([...tagsNoRepeat]);
        setEnabledTags([...tagsNoRepeat]);
        return tagsNoRepeat;
    }
    const mapProjectsByTag = () => {
        let mapprojects = {}
        tagsList.forEach(tag =>{
            mapprojects[tag] = []
            portfoliodata.forEach(proj => {
                if(proj.tags.indexOf(tag) !== -1){
                    mapprojects[tag].push([Number(proj.id), proj.name])
                }
            })
        })
        setMappedByTag(mapprojects)
    }
    const onAddTag = (name) =>{
        let local = [...activeTags];
        if(local.length === tagsList.length){
            local = []
            local.push(name);
        }else if(local.length > 0){
            local.push(name);
        }
        setEnabledTags([...local])
    }
    const onRemoveTag = (name) =>{
        let local = [...activeTags];
        if(local.length>0){
            let index = local.indexOf(name);
            local.splice(index, 1);
        }
        if(local.length===0){
            local = [...tagsList];
        }
        setEnabledTags([...local])
        // activeTags = [...local]
        // getProjectsOn()
    }

    const getProjectsStates = ()=>{
        let projectsEnable = []
        for(let i=0; i< props.projects.length; i++){
            projectsEnable.push(" disable");
        }
        // console.log(activeTags)
        activeTags.forEach(tag=>{
            mappedByTag[tag].forEach(proj=>{
                let id = proj[0]
                projectsEnable[id] = " enable"
            })
        })
        setProjectsStates([...projectsEnable])
    }

    useEffect(()=>{
        if(portfoliodata.length !== 0){
            getAlltags();
            // taglist     = [...getAlltags()];
            // activeTags  = [...taglist];
        }
    },[portfoliodata])

    useEffect(()=>{
        if(tagsList.length!==0){
            mapProjectsByTag();
        }
    },[tagsList])

    useEffect(()=>{
        if(mappedByTag.length!==0){
            getProjectsStates();
        }
    },[mappedByTag])
    useEffect(()=>{
        if((activeTags.length!==0)&&(mappedByTag.length!==0)){
            getProjectsStates();
        }
    },[activeTags])

    return(
        <Fragment>
            
            <div className="tagcloud_container">
            {tagsList.map((tag, index) =>
                <Tag key={index} onAddTag={onAddTag} onRemoveTag={onRemoveTag} name={tag}/>
            )}
            </div>
        </Fragment>
    );
}

export default TagCloud;