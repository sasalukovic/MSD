import React, { useContext, version } from "react";
import "./report.scss";
import { Link } from "react-router-dom"
import { ctx } from "../Provider/Provider";

const Report = (props) => {

    const value = useContext(ctx)
    console.log(value);



    return (
         
        <div className="report">

            {value.reports.map((e)=>
            <div className="interview-list">
                    <div>avatar</div>
                    <div>{e.candidateName}</div>
                    <div>{e.companyName}</div>
                    <div>{(e.interviewDate).slice(4,15)}</div>
                    <div>{e.status}</div>
                    <div>X</div>
            </div>
            )}


           <Link to="/dashboard/single">
            this is single candidate
           </Link> 
           <br />
           <Link to="/dashboard/create-report/section1">
               this is create report
           </Link>
           <br />
           <Link to="/">
                Log out
           </Link>
        </div>
     );
}
 
export default Report;