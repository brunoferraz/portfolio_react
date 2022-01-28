import React, { Fragment } from "react";

export class TextPost extends React.Component{
    constructor(props){
        super(props)
        this.description = props.description
    }
    render (){
        return(
            <Fragment>
                <p>{this.description}</p>
            </Fragment>
        )
    }
}