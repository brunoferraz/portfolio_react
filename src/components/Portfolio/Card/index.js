import React from "react";
import './style.scss'
import { Link } from "react-router-dom";

// const Card = (props) =>{ 
//     const myref = React.createRef(this);
//     console.log(myref)
//     if(props.states===" disable")return null
//     return(
//         <div key={props.index} className={"card"+props.state + props.screenQuery} >
//             <div className="overlay"></div>
//             <div className="img_box">
//                 <img alt="" key={props.index} src={props.face} />
//             </div>
//         </div>
//     )
// }

class Card extends React.Component{
    constructor(props){
        super(props);
        this.imgRef = React.createRef()
        this.overLayRef = React.createRef()
        // console.log(this.myRef)
    }
    componentDidMount(){
        // const imgNode = this.imgRef.current;
        // const overlayNode= this.overLayRef.current ;
        // overlayNode.style.width = ""+imgNode.width+"px";
        // overlayNode.style.height = ""+imgNode.height+"px";
    }
    componentDidUpdate(){
        // const imgNode = this.imgRef.current;
        // const overlayNode= this.overLayRef.current ;
        // overlayNode.style.width = ""+imgNode.width+"px";
        // overlayNode.style.height = ""+imgNode.height+"px";
    }
    render(){
        if(this.props.states===" disable")return null
    return(
        <Link to={`/projects/${this.props.id}`} key={this.props.index} className={"card"+this.props.state + this.props.screenQuery}>
            <img className="img_box" alt="" key={this.props.index} src={this.props.face} ref={this.imgRef}/>
            <div className="overlay" ref={this.overLayRef}></div>
            <div className="bar"><p>{this.props.name}</p></div>
        </Link>
    )
    }
}
export default Card;