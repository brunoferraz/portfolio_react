import React, { Fragment } from "react";
import { Entry } from "./Entry";

export class Project extends Entry{
    constructor(props){
        super(props)
        const name = props.name;
        const img_face_proj = props.face;
        const tags = [...props.tags]
        const post = [];
    }
    render(){
        return(
            <Fragment>

            </Fragment>
        )
    }
}