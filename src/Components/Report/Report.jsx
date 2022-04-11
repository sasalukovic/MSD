import React from "react";
import "./report.scss";
import { Link } from "react-router-dom"
const Report = () => {
    return (
         
        <div className="report">
           <Link to="/dashboard/single">
            this is single candidate
           </Link> 
           <br />
           <Link to="/dashboard/create-report/section1">
               this is create report
           </Link>
        </div>
     );
}
 
export default Report;