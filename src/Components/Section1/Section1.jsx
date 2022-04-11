import React from "react";
import "./section1.scss";
import { Link } from "react-router-dom"

const Section1 = () => {
    return ( 
        <div className="section1">
            Section 1
            <br />
            <Link to="/dashboard/create-report/section2">
            Next Section #2
            </Link>
            <br />
            <Link to="/dashboard">
            Back to reports
            </Link>
        </div>
     );
}
 
export default Section1;