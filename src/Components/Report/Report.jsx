import React, { useContext, useState } from "react";
import "./report.scss";
import { Link } from "react-router-dom"
import { ctx } from "../Provider/Provider";

const Report = (props) => {

    const value = useContext(ctx)
    const [search, setSearch] = useState("")



    return (
         
        <div className="report">
            <div className="search">
                <input type="text" onChange={((e) => setSearch(e.target.value))} placeholder="Search"/>
                <div className="single-create">
                    <div className="single-card">
                        <Link to="/dashboard/single/:id">
                            single
                        </Link> 
                    </div>
                    <div className="create-card">
                        <Link to="/dashboard/create-report/section1">
                            create report
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="list-of-reports">

            {value.reports.filter((e)=>{
                if(search === ""){
                    return e
                }
                
                else if(e.candidateName.toLowerCase().includes(search.toLowerCase()) || 
                e.companyName.toLowerCase().includes(search.toLowerCase())){
                    return e
                }
                
                
                
            }).map((e)=>
            <div className="interview-list">
                    <div><Link to={`/dashboard/single/${e.candidateId}`}>avatar</Link></div>
                    <div>{e.candidateName}</div>
                    <div>{e.companyName}</div>
                    <div>{(e.interviewDate).slice(4,15)}</div>
                    <div>{e.status}</div>
                    <div><button>X</button></div>
            </div>
            )}

            </div>

          
        </div>
     );
}
 
export default Report;