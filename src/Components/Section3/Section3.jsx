import React from "react";
import "./section3.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Section3 = () => {

// GO BACK BUTTON
let history = useHistory()
const Back = () => {
    return history.goBack()
}


    return ( 
        <div className="section3">
            <button onClick={Back}>BACK</button>
            Section3
            <br />
            <Link>
                Submit 
            </Link>
        </div>
     );
}
 
export default Section3;