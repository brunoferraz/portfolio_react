import React, { Fragment } from "react";

export class Entry extends React.Component{
    constructor(props){
        super(props)
        const id = props.id;
        const year = props.year;
        const description = props.description;
        const categories = [...props.categories]
    }
    render(){
        return(
            <Fragment>

            </Fragment>
        )
    }
}