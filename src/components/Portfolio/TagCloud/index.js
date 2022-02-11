import React, { Fragment, useEffect } from "react";
import './style.scss';
import Tag from "./Tag";
import { alltagsList } from "../../../atoms/alltagsList";
import { useRecoilState, useRecoilValue } from "recoil";
import { projectList } from "./../../../atoms/projectList.js";
import { projectsMappedbyTag } from './../../../atoms/projectsMappedByTag';
import { projectsState } from "../../../atoms/projectsStates";
import { enebledTags } from "../../../atoms/enebledTags";

async function getfromFile(file){
    let response = await fetch(file);
    let data = await response.json();
    return data;
}
async function getTags(){
    return getfromFile("./../api/tags.json");
}
async function getProjectsMappedByTag(){
    return getfromFile("./../api/mappedByTags.json");
}

const TagCloud = (props) => {
    const [tagsList, setAllTagsList] = useRecoilState(alltagsList);
    const [mappedByTag, setMappedByTag] = useRecoilState(projectsMappedbyTag);
    const [projectsStatesList, setProjectsStates] = useRecoilState(projectsState);
    const [enabledTags, setEnabledTags] = useRecoilState(enebledTags);

    const onAddTag = (name) =>{
        let local = [...enabledTags];
        if(local.length === tagsList.length){
            local = []
            local.push(name);
        }else if(local.length > 0){
            local.push(name);
        }
        setEnabledTags([...local])
    }
    const onRemoveTag = (name) =>{
        let local = [...enabledTags];
        if(local.length>0){
            let index = local.indexOf(name);
            local.splice(index, 1);
        }
        if(local.length===0){
            local = [...tagsList];
        }
        setEnabledTags([...local])
    }

    const getProjectsStates = ()=>{
        let projectsEnable = []
        for(let i=0; i< props.projects.length; i++){
            projectsEnable.push(" disable");
        }
        enabledTags.forEach(tag=>{
            mappedByTag[tag].forEach(id=>{
                projectsEnable[Number(id)] = " enable"
            })
        })
        setProjectsStates([...projectsEnable])
    }

    useEffect(()=>{
            getProjectsStates();
    },[mappedByTag])
    useEffect(()=>{
        if((enabledTags.length!==0)&&(mappedByTag.length!==0)){
            getProjectsStates();
        }
    },[enabledTags])
    useEffect(() =>{
        //on load this component
        //get tags from the preprocessed file
        getTags().then((data)=>{
            setAllTagsList([...data])
            setEnabledTags([...data])
        })
        //get hash by tag from the preprocessed file
        getProjectsMappedByTag().then((data)=>{
            setMappedByTag(data)
            getProjectsStates();
        })
    },[])

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