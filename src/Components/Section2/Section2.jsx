import React from "react";
import "./section2.scss";
import { Link } from "react-router-dom"

const Section2 = () => {
    return ( 
        <div className="section2">
            Section2
            <br />
            <Link to="/dashboard/create-report/section1">
            Back to Section #1
            </Link>
            <br />
            <Link to="/dashboard/create-report/section3">
            Next to Section #3
            </Link>

        </div>
     );
}
 
export default Section2;