import React from 'react'
import { faCloud, faComputer } from "@fortawesome/free-solid-svg-icons";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Callout(props){
return(
    <>
    <div className="container-fluid">
    <div className="row justify-content-evenly">
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div className="iconClass">
            
            <FontAwesomeIcon icon={faReact} color="skyblue" size="3x"/>
            <h2>Front-end</h2>
            <p>I build beautiful, responsive front-ends with React/Redux, HTML5, and CSS3</p>
        </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="iconClass">

                
            <FontAwesomeIcon icon={faComputer} color="skyblue" size="3x"/>
            <h2>Front-End </h2>
                <p>We build on AWS and GCP</p>
            </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="iconClass">

                
            <FontAwesomeIcon icon={faCloud} color="skyblue" size="3x"/>
            <h2>Building Cloud-Native Solutions</h2>
                <p>We build on AWS and GCP</p>
            </div>
    </div>
</div>
</div>

</>
    
    
)
}

export default Callout;