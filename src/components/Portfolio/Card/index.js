import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'


const Card = (props)=> {
    // const styles = useSpring({ opacity: props.state===" disable" ? 0 : 1 })
    const styles = useSpring({  
        to:{opacity: props.state===" disable" ? 0 : 1 },
        from: { opacity: 0}
    })
    const renderCard = () =>{
        if(props.states===" disable")return null
        return (
            <Link  to={`/project/${props.id}`} key={props.index} className={"card"+props.state + props.screenQuery}>
                <animated.img style={styles} className="img_box" alt="" key={props.index} src={props.face} />
                <div className="overlay"></div>
                <div className="bar"><p>{props.name}</p></div>
            </Link>
        )
        
    }

    return(
        renderCard()
    )
    // }
}
export default Card;