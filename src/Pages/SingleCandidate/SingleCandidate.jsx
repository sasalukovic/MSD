import React from "react";
import "./singlecandidate.scss";
import { Link } from "react-router-dom"

const SingleCandidate = () => {
    return ( 
        <div className="single">
            <Link to="/dashboard">Back to Dashboard</Link>
        </div>
     );
}
 
export default SingleCandidate;