import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Callout(props){
return(
    <div className="iconClass">
        
        <i className={props.icon}></i>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>
    
)
}

export default Callout;