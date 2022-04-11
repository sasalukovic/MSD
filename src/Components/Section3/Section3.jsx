import React from "react";
import "./section3.scss";
import { Link } from "react-router-dom";

const Section3 = () => {
    return ( 
        <div className="section3">
            Section3
            <br />
            <Link to="/dashboard/create-report/section2">
            Back to Section #2
            </Link>
            <br />
            <Link>
                Submit 
            </Link>
        </div>
     );
}
 
export default Section3;